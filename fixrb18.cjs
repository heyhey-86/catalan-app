const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.replace(
  '"w-full text-center mt-3"><ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs"',
  '"col-span-2 w-full text-center mt-3"><ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs"'
);
fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
