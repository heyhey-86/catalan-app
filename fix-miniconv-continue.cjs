const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');

// ── 1. Add showContinue state after isCorrect state ──────────────────────────
const old1 = `  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);`;
const new1 = `  const [isCorrect, setIsCorrect] = useState(null);
  const [showContinue, setShowContinue] = useState(false);
  const [score, setScore] = useState(0);`;

if (!content.includes(old1)) { console.error('PATCH 1 not found'); process.exit(1); }

// ── 2. Replace handleSelect to remove auto-advance, add continue logic ────────
const old2 = `  const handleSelect = (optionIndex) => {
    if (isCorrect !== null) return;
    const turn = dialogue[currentTurn];
    setSelected(optionIndex);
    const correctIdx = shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex;
    const correct = optionIndex === correctIdx;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 15);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    const shuffledOpts = shuffledTurnOptions[currentTurn]?.options || turn.options;
    const responseText = shuffledOpts[correct ? optionIndex : (shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex)];

    // Add user message to chat
    setVisibleMessages(prev => [...prev, {
      speaker: 'You',
      text: (shuffledTurnOptions[currentTurn]?.options || turn.options)[optionIndex],
      isUserTurn: true,
      turnIndex: currentTurn,
      wasCorrect: correct
    }]);

    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);

    if (correct) {
      setTimeout(() => {
        setSelected(null);
        setIsCorrect(null);
        setCurrentTurn(c => c + 1);
      }, 1500);
    }
  };`;

const new2 = `  const handleSelect = (optionIndex) => {
    if (isCorrect !== null) return;
    const turn = dialogue[currentTurn];
    setSelected(optionIndex);
    const correctIdx = shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex;
    const correct = optionIndex === correctIdx;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 15);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    const shuffledOpts = shuffledTurnOptions[currentTurn]?.options || turn.options;
    const responseText = shuffledOpts[correct ? optionIndex : (shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex)];

    // Add user message to chat
    setVisibleMessages(prev => [...prev, {
      speaker: 'You',
      text: (shuffledTurnOptions[currentTurn]?.options || turn.options)[optionIndex],
      isUserTurn: true,
      turnIndex: currentTurn,
      wasCorrect: correct
    }]);

    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
    setShowContinue(true);
  };

  const handleContinue = () => {
    setSelected(null);
    setIsCorrect(null);
    setShowContinue(false);
    setCurrentTurn(c => c + 1);
  };`;

if (!content.includes(old2)) { console.error('PATCH 2 not found'); process.exit(1); }

// ── 3. Find the options rendering block and add Continue button after it ──────
// We need to find where options are rendered and add the continue button
// The options block ends with the closing of the options map, then Report incorrect
// We'll add the continue button right before the closing of the user turn section

const old3 = `      {currentTurnData && currentTurnData.isUserTurn && (`;
// We need to see more context - let's find the options section closing and insert continue button
// Let's search for the Report incorrect button area near options

if (!content.includes(old3)) { console.error('PATCH 3 marker not found - searching...'); }

let result = content
  .replace(old1, new1)
  .replace(old2, new2);

// ── 3. Add continue button - find the answer options div and add after it ─────
// The options are rendered in a section that ends before "Report incorrect"
// Let's find the specific pattern around the options buttons

const old3b = `          className={\`w-full text-left px-4 py-3 rounded-xl border-2 font-medium transition-all \${
                    isCorrect !== null
                      ? idx === selected
                        ? isCorrect ? 'bg-green-100 border-green-500 text-green-800' : 'bg-red-100 border-red-500 text-red-800'
                        : idx === (shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex)
                          ? 'bg-green-50 border-green-300 text-green-700'
                          : 'bg-gray-50 border-gray-200 text-gray-400'
                      : 'bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 active:scale-98'
                  }\`}`;

// If that exact string isn't there, let's use a different anchor
// Find "Report incorrect" which appears after options
const reportIncorrectPattern = `        {/* Report incorrect button */}`;

if (result.includes(reportIncorrectPattern)) {
  const old3c = `        {/* Report incorrect button */}`;
  const new3c = `        {/* Continue button */}
        {showContinue && (
          <div className="px-4 pb-2">
            <button
              onClick={handleContinue}
              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-base hover:bg-green-600 active:scale-95 transition-all"
            >
              Continue →
            </button>
          </div>
        )}
        {/* Report incorrect button */}`;
  result = result.replace(old3c, new3c);
  console.log('PATCH 3 applied via Report incorrect anchor');
} else {
  console.error('PATCH 3 anchor not found - please add continue button manually');
}

fs.writeFileSync(filePath, result, 'utf8');
console.log('Done. Verify with: Get-Content src/LessonStages.jsx | Select-Object -Skip 755 -First 15');
