const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// ─── CHANGE 1: Add reviewGateQuestionType state after isComprehensiveReview ───
const oldState = `  const [isComprehensiveReview, setIsComprehensiveReview] = useState(false);`;
const newState = `  const [isComprehensiveReview, setIsComprehensiveReview] = useState(false);
  const [reviewGateQuestionType, setReviewGateQuestionType] = useState('en_to_ca'); // 'en_to_ca' or 'ca_to_en'
  const [reviewGateQuestionTypes, setReviewGateQuestionTypes] = useState([]); // pre-assigned per question`;

if (content.includes(oldState)) {
  content = content.replace(oldState, newState);
  changed++;
  console.log('Change 1 done: state added');
} else {
  console.log('WARNING: Change 1 - state line not found');
}

// ─── CHANGE 2: Update startReviewGate to pre-assign question types ───
const oldStart = `    setReviewGateActive(true);
    setView('reviewGate');
  };`;

const newStart = `    // Pre-assign question types per question (tiers 35+ get mixed types)
    const questionCount2 = comprehensive ? 20 : 10;
    const types = Array.from({ length: questionCount2 }, (_, i) => {
      if (tier >= 35) return Math.random() > 0.5 ? 'en_to_ca' : 'ca_to_en';
      return 'en_to_ca';
    });
    setReviewGateQuestionTypes(types);
    setReviewGateQuestionType(types[0]);
    setReviewGateActive(true);
    setView('reviewGate');
  };`;

if (content.includes(oldStart)) {
  content = content.replace(oldStart, newStart);
  changed++;
  console.log('Change 2 done: startReviewGate updated');
} else {
  console.log('WARNING: Change 2 - startReviewGate ending not found');
}

// ─── CHANGE 3: Update handleReviewGateAnswer to support both types ───
const oldHandle = `  const handleReviewGateAnswer = (answer) => {
    const currentWord = reviewGateWords[reviewGateIndex];
    const isCorrect = answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);
    
    if (isCorrect) {
      setReviewGateScore(reviewGateScore + 1);
      setReviewGateFeedback('Correcte! âœ"');
    } else {
      setReviewGateFeedback(\`Incorrecte. La resposta Ã©s: "\${currentWord.ca}"\`);
    }`;

const newHandle = `  const handleReviewGateAnswer = (answer) => {
    const currentWord = reviewGateWords[reviewGateIndex];
    const isCorrect = reviewGateQuestionType === 'ca_to_en'
      ? answer === currentWord.en
      : answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);
    
    if (isCorrect) {
      setReviewGateScore(reviewGateScore + 1);
      setReviewGateFeedback('Correcte! ✔');
    } else {
      const correctAnswer = reviewGateQuestionType === 'ca_to_en' ? currentWord.en : currentWord.ca;
      setReviewGateFeedback(\`Incorrecte. La resposta és: "\${correctAnswer}"\`);
    }`;

if (content.includes(oldHandle)) {
  content = content.replace(oldHandle, newHandle);
  changed++;
  console.log('Change 3 done: handleReviewGateAnswer updated');
} else {
  console.log('WARNING: Change 3 - handleReviewGateAnswer not found, trying alternate');
  // Try without the specific feedback text encoding
  const oldHandle2 = `  const handleReviewGateAnswer = (answer) => {
    const currentWord = reviewGateWords[reviewGateIndex];
    const isCorrect = answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);`;
  if (content.includes(oldHandle2)) {
    const newHandle2 = `  const handleReviewGateAnswer = (answer) => {
    const currentWord = reviewGateWords[reviewGateIndex];
    const isCorrect = reviewGateQuestionType === 'ca_to_en'
      ? answer === currentWord.en
      : answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);`;
    content = content.replace(oldHandle2, newHandle2);
    changed++;
    console.log('Change 3 done (alternate): handleReviewGateAnswer updated');
  } else {
    console.log('WARNING: Change 3 alternate also not found');
  }
}

// ─── CHANGE 4: Update next question generation to set question type + generate correct options ───
const oldNext = `      const nextWord = reviewGateWords[nextIndex];
      const allTierWords = getWordsFromTier(reviewGateTier);
      const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
      setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));`;

const newNext = `      const nextWord = reviewGateWords[nextIndex];
      const nextType = reviewGateQuestionTypes[nextIndex] || 'en_to_ca';
      setReviewGateQuestionType(nextType);
      const allTierWords = getWordsFromTier(reviewGateTier);
      if (nextType === 'ca_to_en') {
        const otherWords = allTierWords.filter(w => w.en !== nextWord.en);
        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);
        setReviewGateOptions([nextWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));
      } else {
        const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);
        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
        setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
      }`;

if (content.includes(oldNext)) {
  content = content.replace(oldNext, newNext);
  changed++;
  console.log('Change 4 done: next question generation updated');
} else {
  console.log('WARNING: Change 4 - next question block not found');
}

// ─── CHANGE 5: Update the UI to show different prompt and word based on question type ───
const oldUI = `                <h3 className="text-lg text-gray-600 mb-2">What is this in Catalan?</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center py-6 bg-purple-50 rounded-xl flex items-center justify-center gap-1">
                  {reviewGateWords[reviewGateIndex]?.en}
                  <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors" title="Hear pronunciation">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </button>
                  <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca, true)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors inline-flex items-center justify-center h-10 w-10" title="Hear slowly">
                    <span className="text-2xl leading-none">ðŸ¢</span>
                  </button>
                </div>
                <div className="space-y-3">
                  {reviewGateOptions.map((option, i) => (
                    <button
                      key={\`\${reviewGateIndex}-\${i}\`}
                      onClick={() => !reviewGateFeedback && handleReviewGateAnswer(option)}
                      disabled={!!reviewGateFeedback}
                      className={\`w-full p-4 rounded-xl font-semibold text-left transition-all \${
                        reviewGateFeedback
                          ? option === reviewGateWords[reviewGateIndex]?.ca
                            ? 'bg-green-100 text-green-800 border-2 border-green-500'
                            : selectedReviewGateAnswer === option
                              ? 'bg-red-100 text-red-800 border-2 border-red-500'
                              : 'bg-gray-100 text-gray-400'
                          : selectedReviewGateAnswer === option
                            ? 'bg-purple-200'
                            : 'bg-gray-100 hover:bg-purple-100'
                      }\`}
                    >
                      {option}
                    </button>`;

const newUI = `                <h3 className="text-lg text-gray-600 mb-2">{reviewGateQuestionType === 'ca_to_en' ? 'What does this mean in English?' : 'What is this in Catalan?'}</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center py-6 bg-purple-50 rounded-xl flex items-center justify-center gap-1">
                  {reviewGateQuestionType === 'ca_to_en' ? reviewGateWords[reviewGateIndex]?.ca : reviewGateWords[reviewGateIndex]?.en}
                  <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors" title="Hear pronunciation">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </button>
                  {reviewGateQuestionType !== 'ca_to_en' && <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca, true)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors inline-flex items-center justify-center h-10 w-10" title="Hear slowly">
                    <span className="text-2xl leading-none">🐢</span>
                  </button>}
                </div>
                <div className="space-y-3">
                  {reviewGateOptions.map((option, i) => (
                    <button
                      key={\`\${reviewGateIndex}-\${i}\`}
                      onClick={() => !reviewGateFeedback && handleReviewGateAnswer(option)}
                      disabled={!!reviewGateFeedback}
                      className={\`w-full p-4 rounded-xl font-semibold text-left transition-all \${
                        reviewGateFeedback
                          ? option === (reviewGateQuestionType === 'ca_to_en' ? reviewGateWords[reviewGateIndex]?.en : reviewGateWords[reviewGateIndex]?.ca)
                            ? 'bg-green-100 text-green-800 border-2 border-green-500'
                            : selectedReviewGateAnswer === option
                              ? 'bg-red-100 text-red-800 border-2 border-red-500'
                              : 'bg-gray-100 text-gray-400'
                          : selectedReviewGateAnswer === option
                            ? 'bg-purple-200'
                            : 'bg-gray-100 hover:bg-purple-100'
                      }\`}
                    >
                      {option}
                    </button>`;

if (content.includes(oldUI)) {
  content = content.replace(oldUI, newUI);
  changed++;
  console.log('Change 5 done: UI updated');
} else {
  console.log('WARNING: Change 5 - UI block not found');
}

// Also need to update the first options generation in startReviewGate to also support ca_to_en
const oldFirstOptions = `    const firstWord = shuffled[0];
    const otherWords = words.filter(w => w.ca !== firstWord.ca);
    const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
    setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));`;

const newFirstOptions = `    const firstWord = shuffled[0];
    const firstType = tier >= 35 ? (Math.random() > 0.5 ? 'en_to_ca' : 'ca_to_en') : 'en_to_ca';
    if (firstType === 'ca_to_en') {
      const otherWords = words.filter(w => w.en !== firstWord.en);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);
      setReviewGateOptions([firstWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));
    } else {
      const otherWords = words.filter(w => w.ca !== firstWord.ca);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
      setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
    }`;

if (content.includes(oldFirstOptions)) {
  content = content.replace(oldFirstOptions, newFirstOptions);
  changed++;
  console.log('Change 6 done: first question options generation updated');
} else {
  console.log('WARNING: Change 6 - first options block not found');
}

if (changed === 0) {
  console.log('ERROR: No changes made');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nSUCCESS: ${changed} changes made to review gate system`);
