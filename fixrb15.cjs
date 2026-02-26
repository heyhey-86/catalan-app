const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Find and remove ReportButton from inside the grid
const rbLine = lines.findIndex((l, i) => i > 2780 && i < 2795 && l.includes('ReportButton') && l.includes('Match'));
lines.splice(rbLine, 1);

// Find the closing </div> of the grid (2 closing divs after the shuffledCatalan map)
const gridClose = lines.findIndex((l, i) => i > 2782 && i < 2792 && l.trim() === '</div>');
lines.splice(gridClose + 1, 0, '            <div className="flex justify-center mt-3"><ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs" /></div>');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
