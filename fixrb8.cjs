const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Find the 4 closing divs for each stage and insert ReportButton before them
// Intro: find "Continue to Practice" button line and insert after it
const introBtn = lines.findIndex(l => l.includes('Continue to Practice'));
lines.splice(introBtn + 1, 0, '              <ReportButton lessonTitle={currentLesson.title} questionText="Word list" />');

// Flashcards: find "Done" button and insert after closing div
const flashDone = lines.findIndex(l => l.includes('>Done</button>'));
lines.splice(flashDone + 2, 0, '              <ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} />');

// Match: find "Continue to Quiz" button and insert after it
const matchBtn = lines.findIndex(l => l.includes('Continue to Quiz'));
lines.splice(matchBtn + 1, 0, '              <ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" />');

// Quiz: find quizFeedback block and insert before it
const quizFeedback = lines.findIndex(l => l.includes('{quizFeedback && ('));
lines.splice(quizFeedback, 0, '                <ReportButton lessonTitle={currentLesson.title} questionText={quizWords[quizIndex]?.en} />');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
