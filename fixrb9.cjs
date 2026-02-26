const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Find the ReportButton inside match section and remove it
const rbLine = lines.findIndex((l, i) => i > 2780 && i < 2800 && l.includes('ReportButton') && l.includes('Match the pairs'));
lines.splice(rbLine, 1);

// Find the closing </div> of the match section (after the matchedPairs conditional) and insert before it
const matchClose = lines.findIndex((l, i) => i > 2780 && i < 2800 && l.trim() === '</div>');
lines.splice(matchClose, 0, '            <ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" />');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
