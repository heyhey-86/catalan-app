const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');

// Normalize to LF, patch, then restore CRLF
const normalized = content.replace(/\r\n/g, '\n');

// ── 1. Add showContinue state ─────────────────────────────────────────────────
const old1 = `  const [isCorrect, setIsCorrect] = useState(null);\n  const [score, setScore] = useState(0);\n  const [completed, setCompleted] = useState(false);`;
const new1 = `  const [isCorrect, setIsCorrect] = useState(null);\n  const [showContinue, setShowContinue] = useState(false);\n  const [score, setScore] = useState(0);\n  const [completed, setCompleted] = useState(false);`;

if (!normalized.includes(old1)) { console.error('PATCH 1 not found'); process.exit(1); }

// ── 2. Remove auto-advance setTimeout ────────────────────────────────────────
const old2 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);\n\n    if (correct) {\n      setTimeout(() => {\n        setSelected(null);\n        setIsCorrect(null);\n        setCurrentTurn(c => c + 1);\n      }, 1500);\n    }\n  };`;
const new2 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);\n    setShowContinue(true);\n  };\n\n  const handleContinue = () => {\n    setSelected(null);\n    setIsCorrect(null);\n    setShowContinue(false);\n    setCurrentTurn(c => c + 1);\n  };`;

if (!normalized.includes(old2)) { console.error('PATCH 2 not found'); process.exit(1); }

// ── 3. Add Continue button before Report incorrect ────────────────────────────
const old3 = `        {/* Report incorrect button */}`;
const new3 = `        {/* Continue button */}\n        {showContinue && (\n          <div className="px-4 pb-2">\n            <button\n              onClick={handleContinue}\n              className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-base hover:bg-green-600 active:scale-95 transition-all"\n            >\n              Continue \u2192\n            </button>\n          </div>\n        )}\n        {/* Report incorrect button */}`;

if (!normalized.includes(old3)) { console.error('PATCH 3 not found'); process.exit(1); }

const result = normalized
  .replace(old1, new1)
  .replace(old2, new2)
  .replace(old3, new3)
  .replace(/\n/g, '\r\n'); // restore CRLF

fs.writeFileSync(filePath, result, 'utf8');
console.log('SUCCESS - all 3 patches applied');
