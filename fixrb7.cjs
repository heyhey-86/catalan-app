const fs = require('fs');
let c = fs.readFileSync('src/LessonStages.jsx', 'utf8');

// Remove the isCorrect conditional wrapper from all ReportButton instances
c = c.replace(/\s*\{isCorrect !== null && \(\s*(<ReportButton[^\/]*\/>)\s*\)\}/g, '\n      $1');

fs.writeFileSync('src/LessonStages.jsx', c, 'utf8');
console.log('done');
