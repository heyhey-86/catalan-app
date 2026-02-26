const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.replace(
  "const firstUserTurn = conversation.turns.findIndex(turn => turn.speaker === 'user');",
  "const firstUserTurn = conversation.turns.findIndex(turn => turn.speaker === 'user'); console.log('turns:', JSON.stringify(conversation.turns.slice(0,3))); console.log('firstUserTurn:', firstUserTurn);"
);
fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
