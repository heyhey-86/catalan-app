const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Fix syntax error: options: []] -> options: []
c = c.split('options: []]').join('options: []');

// Fix pre-filled user turns: speaker "user" with text already filled
// These should display as NPC turns, change speaker to "narrator"
c = c.replace(/\{ speaker: "user", text: "([^"]+)", english: "([^"]*)", options: \[\] \}/g, 
  '{ speaker: "narrator", text: "$1", english: "$2" }');

fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
