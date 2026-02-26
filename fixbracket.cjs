const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');
const before = (c.match(/options: \[\]\]/g) || []).length;
c = c.split('options: []]').join('options: []');
const after = (c.match(/options: \[\]\]/g) || []).length;
fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('Fixed', before - after, 'instances, remaining:', after);
