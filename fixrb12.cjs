const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');

// Fix flashcard - already wrapped in div, add justify-center
c = c.replace(
  '<div className="text-center"><ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} /></div>',
  '<div className="flex justify-center mt-2"><ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} /></div>'
);

// Fix match - wrap in centered div
c = c.replace(
  '            <ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" />',
  '            <div className="flex justify-center mt-2"><ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" /></div>'
);

fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
