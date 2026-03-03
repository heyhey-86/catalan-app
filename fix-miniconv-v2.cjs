const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');

// ── 1. Add showContinue state ─────────────────────────────────────────────────
const old1 = `  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);`;
const new1 = `  const [isCorrect, setIsCorrect] = useState(null);
  const [showContinue, setShowContinue] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);`;

if (!content.includes(old1)) {
  const lines = content.split('\n');
  for (let i = 700; i < 730; i++) {
    console.log(i+1, JSON.stringify(lines[i]));
  }
  console.error('PATCH 1 not found - see lines above');
  process.exit(1);
}

// ── 2. Replace handleSelect ───────────────────────────────────────────────────
const old2 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);

    if (correct) {
      setTimeout(() => {
        setSelected(null);
        setIsCorrect(null);
        setCurrentTurn(c => c + 1);
      }, 1500);
    }
  };`;

const new2 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
    setShowContinue(true);
  };

  const handleContinue = () => {
    setSelected(null);
    setIsCorrect(null);
    setShowContinue(false);
    setCurrentTurn(c => c + 1);
  };`;

if (!content.includes(old2)) { console.error('PATCH 2 not found'); process.exit(1); }

// ── 3. Add Continue button before Report incorrect ────────────────────────────
const old3 = `        {/* Report incorrect button */}`;
const new3 = `        {/* Continue button */}
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

if (!content.includes(old3)) { console.error('PATCH 3 not found'); process.exit(1); }

const result = content
  .replace(old1, new1)
  .replace(old2, new2)
  .replace(old3, new3);

fs.writeFileSync(filePath, result, 'utf8');
console.log('SUCCESS - all 3 patches applied');
