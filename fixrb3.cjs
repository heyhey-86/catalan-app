const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');

// Add ReportButton to quiz feedback section
c = c.replace(
  "    {!quizFeedback.includes('Correcte') && (",
  "    <ReportButton lessonTitle={currentLesson.title} questionText={quizWords[quizIndex]?.en} />\n    {!quizFeedback.includes('Correcte') && ("
);

fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
