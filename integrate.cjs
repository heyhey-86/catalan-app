const fs = require('fs');

// ── Step 1: Update App.jsx ────────────────────────────────────
let app = fs.readFileSync('src/App.jsx', 'utf8');

// Add lessons100 import
app = app.replace(
  "import { lessons as lessons50 } from './lessons50.js';",
  "import { lessons as lessons50 } from './lessons50.js';\nimport { lessons100 } from './lessons100.js';"
);

// Add QuickFire + StoryMode to component import
app = app.replace(
  "import { FillInTheBlank, SentenceOrdering, ListenAndType, MiniConversation, ErrorCorrection, ReportButton } from './LessonStages.jsx';",
  "import { FillInTheBlank, SentenceOrdering, ListenAndType, MiniConversation, ErrorCorrection, ReportButton, QuickFire, StoryMode } from './LessonStages.jsx';"
);

// Merge lessons arrays
app = app.replace('const LESSONS = lessons50;', 'const LESSONS = [...lessons50, ...lessons100];');

// Add new LESSON_TIERS
app = app.replace(
  '  { tier: 34, lessons: [99, 100] }\n];',
  `  { tier: 34, lessons: [99, 100] },
  { tier: 35, lessons: [101, 102, 103] },
  { tier: 36, lessons: [104, 105, 106] },
  { tier: 37, lessons: [107, 108, 109] },
  { tier: 38, lessons: [110, 111, 112] },
  { tier: 39, lessons: [113, 114, 115] },
  { tier: 40, lessons: [116, 117, 118] },
  { tier: 41, lessons: [119, 120] }
];`
);

// Add QuickFire + StoryMode rendering blocks
const newBlocks = `          {lessonStage === 'quickFire' && currentLesson.stageData?.quickFire && (
            <QuickFire
              exercises={currentLesson.stageData.quickFire}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              lessonTitle={currentLesson.title}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}
          {lessonStage === 'storyMode' && currentLesson.stageData?.storyMode && (
            <StoryMode
              story={currentLesson.stageData.storyMode.story}
              blanks={currentLesson.stageData.storyMode.blanks}
              translation={currentLesson.stageData.storyMode.translation}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              lessonTitle={currentLesson.title}
            />
          )}`;

app = app.replace(
  "          {lessonStage === 'errorCorrection' && currentLesson.stageData?.errorCorrection",
  newBlocks + "\n          {lessonStage === 'errorCorrection' && currentLesson.stageData?.errorCorrection"
);

fs.writeFileSync('src/App.jsx', app, 'utf8');
console.log('✓ App.jsx updated');

// ── Step 2: Append QuickFire + StoryMode to LessonStages.jsx ──
let ls = fs.readFileSync('src/LessonStages.jsx', 'utf8');

const newComponents = `
// =============================================================
// 6. QUICK FIRE
// Fast-paced 45-second quiz: English flashes, tap correct Catalan
// =============================================================
export function QuickFire({ exercises, onComplete, onAnswer, lessonTitle, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID }) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [timeLeft, setTimeLeft] = React.useState(45);
  const [score, setScore] = React.useState(0);
  const [selected, setSelected] = React.useState(null);
  const [isCorrect, setIsCorrect] = React.useState(null);
  const [isComplete, setIsComplete] = React.useState(false);
  const [shuffledOptions, setShuffledOptions] = React.useState([]);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (exercises && exercises[0]) {
      setShuffledOptions([...exercises[0].options].sort(() => Math.random() - 0.5));
    }
  }, [exercises]);

  React.useEffect(() => {
    if (isComplete) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); setIsComplete(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isComplete]);

  const handleAnswer = (option) => {
    if (selected !== null) return;
    const correct = option === exercises[currentIndex].ca;
    setSelected(option); setIsCorrect(correct);
    if (correct) setScore(s => s + 1);
    if (onAnswer) onAnswer(correct);
    setTimeout(() => {
      const next = currentIndex + 1;
      if (next >= exercises.length) { clearInterval(timerRef.current); setIsComplete(true); }
      else {
        setCurrentIndex(next);
        setShuffledOptions([...exercises[next].options].sort(() => Math.random() - 0.5));
        setSelected(null); setIsCorrect(null);
      }
    }, 500);
  };

  const timerPct = (timeLeft / 45) * 100;
  const timerColor = timeLeft > 15 ? 'bg-green-500' : timeLeft > 7 ? 'bg-yellow-500' : 'bg-red-500';

  if (isComplete) {
    const pct = Math.round((score / exercises.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
        <div className="text-5xl mb-4">{pct >= 80 ? '\uD83D\uDD25' : pct >= 50 ? '\u26A1' : '\uD83D\uDCAA'}</div>
        <h2 className="text-2xl font-bold mb-2">Quick Fire Complete!</h2>
        <p className="text-gray-600 mb-6">You scored {score} out of {exercises.length} — {pct}%</p>
        <div className="bg-gray-100 rounded-full h-4 mb-6 overflow-hidden">
          <div className="h-full bg-green-500 transition-all duration-1000" style={{ width: pct + '%' }} />
        </div>
        <button onClick={onComplete} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue \u2192</button>
      </div>
    );
  }

  if (!exercises || exercises.length === 0) return null;
  const current = exercises[currentIndex];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-600">{currentIndex + 1} / {exercises.length}</span>
        <span className={\`text-lg font-bold \${timeLeft <= 7 ? 'text-red-600 animate-pulse' : 'text-gray-700'}\`}>\u23F1 {timeLeft}s</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full mb-5 overflow-hidden">
        <div className={\`h-full \${timerColor} transition-all duration-1000\`} style={{ width: timerPct + '%' }} />
      </div>
      <div className="bg-blue-50 rounded-xl p-5 mb-5 text-center">
        <p className="text-xs text-blue-400 uppercase font-semibold mb-1">English</p>
        <p className="text-2xl font-bold text-blue-800">{current.en}</p>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {shuffledOptions.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} disabled={selected !== null}
            className={\`p-3 rounded-xl font-semibold text-sm transition-all active:scale-95 \${
              selected === opt ? (isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
              : selected !== null && opt === current.ca ? 'bg-green-200 text-green-800'
              : 'bg-gray-100 hover:bg-blue-50 border-2 border-transparent hover:border-blue-300'
            }\`}>{opt}</button>
        ))}
      </div>
      <ReportButton lessonTitle={lessonTitle} questionText={current.en} />
    </div>
  );
}

// =============================================================
// 7. STORY MODE
// Complete a short story by filling blanks in sequence
// =============================================================
export function StoryMode({ story, blanks, translation, onComplete, onAnswer, lessonTitle }) {
  const [currentBlank, setCurrentBlank] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [feedback, setFeedback] = React.useState(null);
  const [shuffledOptions, setShuffledOptions] = React.useState([]);
  const [isComplete, setIsComplete] = React.useState(false);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (blanks && blanks[0]) setShuffledOptions([...blanks[0].options].sort(() => Math.random() - 0.5));
  }, [blanks]);

  const storyParts = story.split('[BLANK]');

  const handleAnswer = (option) => {
    if (feedback) return;
    const correct = option === blanks[currentBlank].word;
    setFeedback({ correct, option, correctWord: blanks[currentBlank].word });
    if (correct) setScore(s => s + 1);
    if (onAnswer) onAnswer(correct);
    setTimeout(() => {
      const newAnswers = [...answers, correct ? option : \`[\${blanks[currentBlank].word}]\`];
      setAnswers(newAnswers); setFeedback(null);
      const next = currentBlank + 1;
      if (next >= blanks.length) setIsComplete(true);
      else { setCurrentBlank(next); setShuffledOptions([...blanks[next].options].sort(() => Math.random() - 0.5)); }
    }, 1200);
  };

  const renderStory = () => storyParts.map((part, i) => (
    <span key={i}>
      <span>{part}</span>
      {i < blanks.length && (
        <span className={\`font-bold px-1 rounded \${
          answers[i] ? (answers[i].startsWith('[') ? 'text-red-600 bg-red-50' : 'text-green-700 bg-green-50')
          : i === currentBlank ? 'text-blue-600 bg-blue-100 animate-pulse' : 'text-gray-400 bg-gray-100'
        }\`}>{answers[i] ? answers[i].replace('[','').replace(']','') : '______'}</span>
      )}
    </span>
  ));

  if (isComplete) {
    const pct = Math.round((score / blanks.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-4xl text-center mb-3">\uD83D\uDCD6</div>
        <h2 className="text-xl font-bold text-center mb-4">Story Complete!</h2>
        <div className="bg-blue-50 rounded-xl p-4 mb-4 text-base leading-relaxed">{renderStory()}</div>
        <p className="text-sm text-gray-500 italic mb-4">{translation}</p>
        <p className="text-center font-semibold mb-5">Score: {score}/{blanks.length} — {pct}%</p>
        <button onClick={onComplete} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue \u2192</button>
      </div>
    );
  }

  if (!blanks || blanks.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-2 text-center">\uD83D\uDCD6 Story Mode</h2>
      <p className="text-xs text-gray-500 text-center mb-4">Blank {currentBlank + 1} of {blanks.length}</p>
      <div className="bg-blue-50 rounded-xl p-4 mb-5 text-base leading-loose">{renderStory()}</div>
      {feedback && (
        <div className={\`text-center font-semibold mb-3 py-2 rounded-lg \${feedback.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}\`}>
          {feedback.correct ? '\u2714 Correcte!' : \`\u2718 The answer is: \${feedback.correctWord}\`}
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {shuffledOptions.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} disabled={!!feedback}
            className={\`p-3 rounded-xl font-semibold text-sm transition-all active:scale-95 \${
              feedback?.option === opt ? (feedback.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
              : feedback && opt === blanks[currentBlank].word ? 'bg-green-200 text-green-800'
              : 'bg-gray-100 hover:bg-blue-50 border-2 border-transparent hover:border-blue-300'
            }\`}>{opt}</button>
        ))}
      </div>
      <ReportButton lessonTitle={lessonTitle} questionText={story} />
    </div>
  );
}
`;

ls = ls + newComponents;
fs.writeFileSync('src/LessonStages.jsx', ls, 'utf8');
console.log('✓ LessonStages.jsx updated with QuickFire + StoryMode');

// ── Step 3: Verify ────────────────────────────────────────────
const appCheck = fs.readFileSync('src/App.jsx', 'utf8');
console.log('LESSONS merged:', appCheck.includes('lessons100'));
console.log('Tiers added:', appCheck.includes('tier: 35'));
console.log('QuickFire render:', appCheck.includes("lessonStage === 'quickFire'"));
console.log('StoryMode render:', appCheck.includes("lessonStage === 'storyMode'"));

const lsCheck = fs.readFileSync('src/LessonStages.jsx', 'utf8');
console.log('QuickFire component:', lsCheck.includes('export function QuickFire'));
console.log('StoryMode component:', lsCheck.includes('export function StoryMode'));

console.log('\nAll done! Run: npm run build');
