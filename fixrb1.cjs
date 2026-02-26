const fs = require('fs');
let c = fs.readFileSync('src/LessonStages.jsx', 'utf8');
c = c.replace('const ReportButton = ', 'export const ReportButton = ');
fs.writeFileSync('src/LessonStages.jsx', c, 'utf8');
console.log('done');
