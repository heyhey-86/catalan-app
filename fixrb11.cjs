const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Remove line 2794 (0-indexed 2793) - the duplicate
lines.splice(2793, 1);

// Fix flashcard ReportButton alignment - find it and fix className
const fbLine = lines.findIndex((l, i) => i > 2755 && i < 2775 && l.includes('ReportButton') && l.includes('currentCardIndex'));
lines[fbLine] = '              <div className="text-center"><ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} /></div>';

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
