const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Find the ReportButton in flashcards and move it after the closing </div> of the nav row
const rbLine = lines.findIndex((l, i) => i > 2755 && i < 2775 && l.includes('ReportButton') && l.includes('currentCardIndex'));
// Remove it
lines.splice(rbLine, 1);
// Find the closing </div> of nav row (now one less line)
const navClose = lines.findIndex((l, i) => i > 2762 && i < 2772 && l.trim() === '</div>');
lines.splice(navClose + 1, 0, '              <div className="flex justify-center mt-3"><ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} /></div>');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
