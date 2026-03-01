const fs = require('fs');
const path = require('path');

// ─── 1. Update App.jsx render to use words instead of stageData.quickFire ───
const appPath = path.join(process.cwd(), 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');
const appLines = appContent.split('\r\n');

let quickFireRenderLine = -1;
for (let i = 0; i < appLines.length; i++) {
  if (appLines[i].includes("lessonStage === 'quickFire' && currentLesson.stageData?.quickFire")) {
    quickFireRenderLine = i;
    break;
  }
}

console.log(`QuickFire render at line: ${quickFireRenderLine + 1}`);

if (quickFireRenderLine !== -1) {
  // Find the end of this block (closing parenthesis)
  let endLine = -1;
  for (let i = quickFireRenderLine + 1; i < quickFireRenderLine + 15; i++) {
    if (appLines[i] && appLines[i].trim() === ')}') {
      endLine = i;
      break;
    }
  }
  console.log(`QuickFire render ends at line: ${endLine + 1}`);

  const newRender = [
    `          {lessonStage === 'quickFire' && (`,
    `            <QuickFire`,
    `              words={currentLesson.words}`,
    `              onComplete={() => nextStage()}`,
    `              onAnswer={handleLessonAnswer}`,
    `              lessonTitle={currentLesson.title}`,
    `            />`,
    `          )}`,
  ];

  appLines.splice(quickFireRenderLine, endLine - quickFireRenderLine + 1, ...newRender);
  fs.writeFileSync(appPath, appLines.join('\r\n'), 'utf8');
  console.log('Updated App.jsx QuickFire render');
} else {
  console.log('WARNING: QuickFire render not found in App.jsx');
}

// ─── 2. Add 'quickFire' to stages in lessons 101, 105, 109, 113, 117 ───
const lessonsPath = path.join(process.cwd(), 'src', 'lessons100.js');
let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');
const lessonsLines = lessonsContent.split('\r\n');

// Find stages lines for each lesson by searching for id: 101, 105, etc
const targetLessons = [101, 105, 109, 113, 117];

for (const lessonId of targetLessons) {
  let idLineIdx = -1;
  let stagesLineIdx = -1;

  for (let i = 0; i < lessonsLines.length; i++) {
    if (lessonsLines[i].includes(`id: ${lessonId},`) || lessonsLines[i].includes(`id:${lessonId},`)) {
      idLineIdx = i;
    }
    if (idLineIdx !== -1 && lessonsLines[i].includes('stages:') && i > idLineIdx && i < idLineIdx + 5) {
      stagesLineIdx = i;
      break;
    }
  }

  console.log(`Lesson ${lessonId}: id at line ${idLineIdx + 1}, stages at line ${stagesLineIdx + 1}`);

  if (stagesLineIdx !== -1) {
    const stageLine = lessonsLines[stagesLineIdx];
    // Add 'quickFire' before the closing bracket
    if (!stageLine.includes('quickFire')) {
      lessonsLines[stagesLineIdx] = stageLine.replace(']', ", 'quickFire']");
      console.log(`Added quickFire to lesson ${lessonId}`);
    } else {
      console.log(`Lesson ${lessonId} already has quickFire`);
    }
  }
}

fs.writeFileSync(lessonsPath, lessonsLines.join('\r\n'), 'utf8');
console.log('Updated lessons100.js stages');

// ─── 3. Add QuickFire component to LessonStages.jsx ───
const lsPath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let lsContent = fs.readFileSync(lsPath, 'utf8');

const quickFireComponent = `
// =============================================================
// QUICKFIRE
// =============================================================
// Fast-paced timed quiz. Shows English word, user picks Catalan.
// 45 second timer. Auto-advances after each answer.
// =============================================================
export function QuickFire({ words, onComplete, onAnswer, lessonTitle }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [score, setScore] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(45);
  const [answered, setAnswered] = React.useState(null); // null | 'correct' | 'wrong'
  const [selectedIdx, setSelectedIdx] = React.useState(null);
  const [options, setOptions] = React.useState([]);
  const [completed, setCompleted] = React.useState(false);
  const [total, setTotal] = React.useState(0);

  const getOptions = React.useCallback((idx, wordList) => {
    if (!wordList || wordList.length === 0) return [];
    const correct = wordList[idx];
    const others = wordList.filter((_, i) => i !== idx);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);
    const all = [...shuffled, correct].sort(() => Math.random() - 0.5);
    return all;
  }, []);

  React.useEffect(() => {
    if (words && words.length > 0) {
      setOptions(getOptions(0, words));
    }
  }, [words, getOptions]);

  React.useEffect(() => {
    if (completed) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          setCompleted(true);
          if (onComplete) onComplete();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [completed, onComplete]);

  const handleAnswer = (optionWord, optionIdx) => {
    if (answered !== null) return;
    const correct = words[currentIndex];
    const isCorrect = optionWord.ca === correct.ca;
    setAnswered(isCorrect ? 'correct' : 'wrong');
    setSelectedIdx(optionIdx);
    setTotal(t => t + 1);
    if (isCorrect) setScore(s => s + 1);
    if (onAnswer) onAnswer(isCorrect);

    setTimeout(() => {
      const next = currentIndex + 1;
      if (next >= words.length) {
        setCompleted(true);
        if (onComplete) onComplete();
      } else {
        setCurrentIndex(next);
        setOptions(getOptions(next, words));
        setAnswered(null);
        setSelectedIdx(null);
      }
    }, 600);
  };

  if (!words || words.length === 0) return null;

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">QuickFire Complete!</h3>
        <p className="text-gray-600 mb-4">You got <span className="font-bold text-green-600">{score}/{total}</span> correct</p>
      </div>
    );
  }

  const current = words[currentIndex];
  const timerPct = (timeLeft / 45) * 100;
  const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-600">⚡ QuickFire</span>
        <span className={\`text-lg font-bold \${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}\`}>{timeLeft}s</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className={\`h-2 rounded-full transition-all \${timerColor}\`} style={{ width: \`\${timerPct}%\` }} />
      </div>
      <div className="text-center mb-6">
        <div className="text-xs text-gray-400 mb-1">What is this in Catalan?</div>
        <div className="text-3xl font-bold text-gray-800">{current.en}</div>
        <div className="text-sm text-gray-500 mt-1">{currentIndex + 1} / {words.length}</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, idx) => {
          let bg = 'bg-white border-2 border-gray-200 hover:border-blue-400';
          if (answered !== null && selectedIdx === idx) {
            bg = answered === 'correct' ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500';
          } else if (answered !== null && opt.ca === words[currentIndex].ca) {
            bg = 'bg-green-100 border-2 border-green-500';
          }
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt, idx)}
              disabled={answered !== null}
              className={\`\${bg} rounded-xl p-4 text-center font-semibold transition-all active:scale-95\`}
            >
              {opt.ca}
            </button>
          );
        })}
      </div>
      <div className="text-center mt-4 text-sm text-gray-500">Score: {score}</div>
    </div>
  );
}
`;

// Check if QuickFire already exists
if (lsContent.includes('export function QuickFire')) {
  console.log('QuickFire already exists in LessonStages.jsx - skipping');
} else {
  // Append to end of file
  lsContent = lsContent + quickFireComponent;
  fs.writeFileSync(lsPath, lsContent, 'utf8');
  console.log('Added QuickFire component to LessonStages.jsx');
}

console.log('\nDone. Run npm run build to verify.');
