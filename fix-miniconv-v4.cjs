const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const normalized = content.replace(/\r\n/g, '\n');

// ── 1. Remove auto-advance setTimeout for correct answers ─────────────────────
const old1 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);\n\n    if (correct) {\n      setTimeout(() => {\n        setSelected(null);\n        setIsCorrect(null);\n        setCurrentTurn(c => c + 1);\n      }, 1500);\n    }\n  };`;

const new1 = `    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);\n  };`;

if (!normalized.includes(old1)) { console.error('PATCH 1 not found'); process.exit(1); }

// ── 2. Add continue button for correct answers (after the wrong answer block) ──
// Find the closing of the wrong answer block and add correct answer continue after it
const old2 = `          {isCorrect === false && (\n            <>\n              <p className="text-center text-sm text-red-500 mt-2">\n                Correct: <strong>{(shuffledTurnOptions[currentTurn]?.options || currentTurnData.options)[shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex]}</strong>       \n              </p>\n              <button\n                onClick={() => {\n                  setSelected(null);\n                  setIsCorrect(null);\n                  setCurrentTurn(c => c + 1);\n                }}\n                className="mt-2 w-full bg-white text-gray-700 border-2 border-gray-300 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"\n              >\n                Continue \u2192\n              </button>\n            </>\n          )}`;

const new2 = `          {isCorrect === false && (\n            <>\n              <p className="text-center text-sm text-red-500 mt-2">\n                Correct: <strong>{(shuffledTurnOptions[currentTurn]?.options || currentTurnData.options)[shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex]}</strong>\n              </p>\n              <button\n                onClick={() => { setSelected(null); setIsCorrect(null); setCurrentTurn(c => c + 1); }}\n                className="mt-2 w-full bg-white text-gray-700 border-2 border-gray-300 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"\n              >\n                Continue \u2192\n              </button>\n            </>\n          )}\n          {isCorrect === true && (\n            <button\n              onClick={() => { setSelected(null); setIsCorrect(null); setCurrentTurn(c => c + 1); }}\n              className="mt-2 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 active:scale-95 transition-all"\n            >\n              Continue \u2192\n            </button>\n          )}`;

if (!normalized.includes(old2)) {
  // Show the area around isCorrect === false to help debug
  const idx = normalized.indexOf('isCorrect === false');
  console.log('Found isCorrect === false at char', idx);
  console.log(JSON.stringify(normalized.substring(idx, idx + 400)));
  console.error('PATCH 2 not found');
  process.exit(1);
}

const result = normalized
  .replace(old1, new1)
  .replace(old2, new2)
  .replace(/\n/g, '\r\n');

fs.writeFileSync(filePath, result, 'utf8');
console.log('SUCCESS - both patches applied');
