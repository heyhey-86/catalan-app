const fs = require('fs');
const lines = fs.readFileSync('src/conversations.js', 'utf8').split('\n');
// Line 1766 (0-indexed: 1765) - change C27 title
lines[1765] = '  title: "Job Interview: Advanced",';
fs.writeFileSync('src/conversations.js', lines.join('\n'), 'utf8');
console.log('done');
