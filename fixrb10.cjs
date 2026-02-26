const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Find the closing )} of matchedPairs conditional
const matchEnd = lines.findIndex((l, i) => i > 2786 && i < 2800 && l.trim() === ')}');
lines.splice(matchEnd + 1, 0, '            <ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" />');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done at line', matchEnd + 1);
