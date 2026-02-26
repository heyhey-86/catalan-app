const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Flashcards: insert ReportButton after line 2764 (0-indexed 2763) - after closing </div> of nav buttons
lines.splice(2764, 0, '              <ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} />');

// Match: insert ReportButton after line 2792 (now shifted by 1, so 2793, 0-indexed 2792) - after Continue to Quiz button closing div
lines.splice(2793, 0, '              <ReportButton lessonTitle={currentLesson.title} questionText="Match the pairs exercise" />');

fs.writeFileSync('src/App.jsx', lines.join('\n'), 'utf8');
console.log('done');
