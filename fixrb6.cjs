const fs = require('fs');
const lines = fs.readFileSync('src/App.jsx', 'utf8').split('\n');

// Remove the 3 ReportButton lines I added (find them by content)
const filtered = lines.filter(l => 
  !(l.includes('ReportButton') && l.includes('lessonTitle') && !l.includes('import'))
);

fs.writeFileSync('src/App.jsx', filtered.join('\n'), 'utf8');
console.log('Removed', lines.length - filtered.length, 'lines');
