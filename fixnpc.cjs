const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Find C26 start position
const c26pos = c.indexOf('id: 26');

const before = c.substring(0, c26pos);
const after = c.substring(c26pos);

// In C26+ NPC turns: replace translation: "..." with english: "..."
// Only on turns that have speaker (not user turns, which already have prompt/wordBank)
const fixed = after.replace(/translation: "([^"]*)"/g, 'english: "$1"');

fs.writeFileSync('src/conversations.js', before + fixed, 'utf8');
console.log('done');
