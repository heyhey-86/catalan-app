const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');
c = c.split('optioons:').join('options:');
fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
