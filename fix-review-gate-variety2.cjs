const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// ─── CHANGE 2: Update first options generation + add type assignment before setReviewGateActive ───
const old2 = `    const firstWord = shuffled[0];
    const otherWords = words.filter(w => w.ca !== firstWord.ca);
    const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
    setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
    setReviewGateActive(true);
    setView('reviewGate');
  };`;

const new2 = `    const firstWord = shuffled[0];
    // Pre-assign question types per question (tiers 35+ get mixed types)
    const questionCount2 = comprehensive ? 20 : 10;
    const types = Array.from({ length: questionCount2 }, () => {
      if (tier >= 35) return Math.random() > 0.5 ? 'en_to_ca' : 'ca_to_en';
      return 'en_to_ca';
    });
    setReviewGateQuestionTypes(types);
    const firstType = types[0];
    setReviewGateQuestionType(firstType);
    if (firstType === 'ca_to_en') {
      const otherWords = words.filter(w => w.en !== firstWord.en);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);
      setReviewGateOptions([firstWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));
    } else {
      const otherWords = words.filter(w => w.ca !== firstWord.ca);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
      setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
    }
    setReviewGateActive(true);
    setView('reviewGate');
  };`;

if (content.includes(old2)) {
  content = content.replace(old2, new2);
  changed++;
  console.log('Change 2 done: startReviewGate updated');
} else {
  console.log('WARNING: Change 2 not found');
}

// ─── CHANGE 3: Update handleReviewGateAnswer ───
const old3 = `    const isCorrect = answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);`;

const new3 = `    const isCorrect = reviewGateQuestionType === 'ca_to_en'
      ? answer === currentWord.en
      : answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);`;

if (content.includes(old3)) {
  content = content.replace(old3, new3);
  changed++;
  console.log('Change 3 done: answer check updated');
} else {
  console.log('WARNING: Change 3 not found');
}

// ─── CHANGE 4: Update feedback for wrong answer ───
// Find the feedback lines using unique surrounding text
const old4a = `      setReviewGateFeedback('Correcte! \u00e2\u009c"');`;
if (content.includes(old4a)) {
  content = content.replace(old4a, `      setReviewGateFeedback('Correcte! ✔');`);
  changed++;
  console.log('Change 4a done: correct feedback fixed');
}

// Try to find and update incorrect feedback
const incorrectFeedbackRegex = /setReviewGateFeedback\(`Incorrecte\.[^`]+`\)/;
const incorrectMatch = content.match(incorrectFeedbackRegex);
if (incorrectMatch) {
  content = content.replace(incorrectFeedbackRegex, 
    `setReviewGateFeedback(\`Incorrecte. La resposta és: "\${reviewGateQuestionType === 'ca_to_en' ? currentWord.en : currentWord.ca}"\`)`);
  changed++;
  console.log('Change 4b done: incorrect feedback updated');
} else {
  console.log('WARNING: Change 4b - incorrect feedback not found');
}

// ─── CHANGE 5: Update next question generation ───
const old5 = `      const nextWord = reviewGateWords[nextIndex];
      const allTierWords = getWordsFromTier(reviewGateTier);
      const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);
      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
      setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));`;

const new5 = `      const nextWord = reviewGateWords[nextIndex];
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

if (content.includes(old5)) {
  content = content.replace(old5, new5);
  changed++;
  console.log('Change 5 done: next question generation updated');
} else {
  console.log('WARNING: Change 5 not found');
}

// ─── CHANGE 6: Update UI ───
const old6 = `                <h3 className="text-lg text-gray-600 mb-2">What is this in Catalan?</h3>`;
const new6 = `                <h3 className="text-lg text-gray-600 mb-2">{reviewGateQuestionType === 'ca_to_en' ? 'What does this mean in English?' : 'What is this in Catalan?'}</h3>`;

if (content.includes(old6)) {
  content = content.replace(old6, new6);
  changed++;
  console.log('Change 6 done: UI prompt updated');
} else {
  console.log('WARNING: Change 6 not found');
}

// ─── CHANGE 7: Update which word is shown in the UI ───
const old7 = `                  {reviewGateWords[reviewGateIndex]?.en}`;
const new7 = `                  {reviewGateQuestionType === 'ca_to_en' ? reviewGateWords[reviewGateIndex]?.ca : reviewGateWords[reviewGateIndex]?.en}`;

if (content.includes(old7)) {
  content = content.replace(old7, new7);
  changed++;
  console.log('Change 7 done: displayed word updated');
} else {
  console.log('WARNING: Change 7 not found');
}

// ─── CHANGE 8: Update correct answer highlight in options ───
const old8 = `                          ? option === reviewGateWords[reviewGateIndex]?.ca`;
const new8 = `                          ? option === (reviewGateQuestionType === 'ca_to_en' ? reviewGateWords[reviewGateIndex]?.en : reviewGateWords[reviewGateIndex]?.ca)`;

if (content.includes(old8)) {
  content = content.replace(old8, new8);
  changed++;
  console.log('Change 8 done: correct answer highlight updated');
} else {
  console.log('WARNING: Change 8 not found');
}

if (changed === 0) {
  console.log('ERROR: No changes made');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nSUCCESS: ${changed} changes made to review gate system`);
