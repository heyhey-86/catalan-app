const fs = require('fs');
const path = require('path');

const lsPath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let lsContent = fs.readFileSync(lsPath, 'utf8');
const lines = lsContent.split('\n');

// Find QuickFire start (line 1134, index 1133)
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export function QuickFire(')) {
    startIdx = i;
  }
  if (startIdx !== -1 && lines[i].trim() === '}' && i > startIdx + 50) {
    endIdx = i;
    break;
  }
}

console.log(`QuickFire: lines ${startIdx + 1} to ${endIdx + 1}`);
console.log(`Line after: ${lines[endIdx + 1]}`);

if (startIdx === -1 || endIdx === -1) {
  console.log('ERROR: Could not find QuickFire bounds');
  process.exit(1);
}

const newComponent = [
  `export function QuickFire({ words, onComplete, onAnswer, lessonTitle }) {`,
  `  const [currentIndex, setCurrentIndex] = useState(0);`,
  `  const [score, setScore] = useState(0);`,
  `  const [timeLeft, setTimeLeft] = useState(45);`,
  `  const [answered, setAnswered] = useState(null);`,
  `  const [selectedIdx, setSelectedIdx] = useState(null);`,
  `  const [options, setOptions] = useState([]);`,
  `  const [completed, setCompleted] = useState(false);`,
  `  const [total, setTotal] = useState(0);`,
  ``,
  `  const getOptions = useCallback((idx, wordList) => {`,
  `    if (!wordList || wordList.length === 0) return [];`,
  `    const correct = wordList[idx];`,
  `    const others = wordList.filter((_, i) => i !== idx);`,
  `    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);`,
  `    return [...shuffled, correct].sort(() => Math.random() - 0.5);`,
  `  }, []);`,
  ``,
  `  useEffect(() => {`,
  `    if (words && words.length > 0) setOptions(getOptions(0, words));`,
  `  }, [words, getOptions]);`,
  ``,
  `  useEffect(() => {`,
  `    if (completed) return;`,
  `    const timer = setInterval(() => {`,
  `      setTimeLeft(t => {`,
  `        if (t <= 1) { clearInterval(timer); setCompleted(true); if (onComplete) onComplete(); return 0; }`,
  `        return t - 1;`,
  `      });`,
  `    }, 1000);`,
  `    return () => clearInterval(timer);`,
  `  }, [completed, onComplete]);`,
  ``,
  `  const handleAnswer = (optionWord, optionIdx) => {`,
  `    if (answered !== null) return;`,
  `    const correct = words[currentIndex];`,
  `    const isCorrect = optionWord.ca === correct.ca;`,
  `    setAnswered(isCorrect ? 'correct' : 'wrong');`,
  `    setSelectedIdx(optionIdx);`,
  `    setTotal(t => t + 1);`,
  `    if (isCorrect) setScore(s => s + 1);`,
  `    if (onAnswer) onAnswer(isCorrect);`,
  `    setTimeout(() => {`,
  `      const next = currentIndex + 1;`,
  `      if (next >= words.length) { setCompleted(true); if (onComplete) onComplete(); }`,
  `      else { setCurrentIndex(next); setOptions(getOptions(next, words)); setAnswered(null); setSelectedIdx(null); }`,
  `    }, 600);`,
  `  };`,
  ``,
  `  if (!words || words.length === 0) return null;`,
  ``,
  `  if (completed) {`,
  `    return (`,
  `      <div className="text-center py-8 px-4">`,
  `        <div className="text-5xl mb-4">⚡</div>`,
  `        <h3 className="text-2xl font-bold text-gray-800 mb-2">QuickFire Complete!</h3>`,
  `        <p className="text-gray-600 mb-4">You got <span className="font-bold text-green-600">{score}/{total}</span> correct</p>`,
  `      </div>`,
  `    );`,
  `  }`,
  ``,
  `  const current = words[currentIndex];`,
  `  const timerPct = (timeLeft / 45) * 100;`,
  `  const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500';`,
  ``,
  `  return (`,
  `    <div className="max-w-md mx-auto px-4 py-6">`,
  `      <div className="flex items-center justify-between mb-4">`,
  `        <span className="text-sm font-semibold text-gray-600">⚡ QuickFire</span>`,
  `        <span className={\`text-lg font-bold \${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}\`}>{timeLeft}s</span>`,
  `      </div>`,
  `      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">`,
  `        <div className={\`h-2 rounded-full transition-all \${timerColor}\`} style={{ width: \`\${timerPct}%\` }} />`,
  `      </div>`,
  `      <div className="text-center mb-6">`,
  `        <div className="text-xs text-gray-400 mb-1">What is this in Catalan?</div>`,
  `        <div className="text-3xl font-bold text-gray-800">{current.en}</div>`,
  `        <div className="text-sm text-gray-500 mt-1">{currentIndex + 1} / {words.length}</div>`,
  `      </div>`,
  `      <div className="grid grid-cols-2 gap-3">`,
  `        {options.map((opt, idx) => {`,
  `          let bg = 'bg-white border-2 border-gray-200 hover:border-blue-400';`,
  `          if (answered !== null && selectedIdx === idx) {`,
  `            bg = answered === 'correct' ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500';`,
  `          } else if (answered !== null && opt.ca === words[currentIndex].ca) {`,
  `            bg = 'bg-green-100 border-2 border-green-500';`,
  `          }`,
  `          return (`,
  `            <button key={idx} onClick={() => handleAnswer(opt, idx)} disabled={answered !== null}`,
  `              className={\`\${bg} rounded-xl p-4 text-center font-semibold transition-all active:scale-95\`}>`,
  `              {opt.ca}`,
  `            </button>`,
  `          );`,
  `        })}`,
  `      </div>`,
  `      <div className="text-center mt-4 text-sm text-gray-500">Score: {score}</div>`,
  `    </div>`,
  `  );`,
  `}`,
];

lines.splice(startIdx, endIdx - startIdx + 1, ...newComponent);
fs.writeFileSync(lsPath, lines.join('\n'), 'utf8');
console.log('SUCCESS: QuickFire replaced with correct version');
