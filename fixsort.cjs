const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.replace(
  '[...CONVERSATIONS].sort((a, b) => a.unlockAfterLesson - b.unlockAfterLesson)',
  '[...CONVERSATIONS].sort((a, b) => { const aUnlocked = completed.includes(a.unlockAfterLesson) ? 0 : 1; const bUnlocked = completed.includes(b.unlockAfterLesson) ? 0 : 1; if (aUnlocked !== bUnlocked) return aUnlocked - bUnlocked; return a.unlockAfterLesson - b.unlockAfterLesson; })'
);
fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
