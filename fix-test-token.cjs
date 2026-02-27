const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

const oldLine = "if (providedToken === PREMIUM_TOKENS.test) { const p = JSON.parse(localStorage.getItem('catalan_progress') || '{}'); p.unlockedTier = 99; localStorage.setItem('catalan_progress', JSON.stringify(p)); }";
const newLine = "if (providedToken === PREMIUM_TOKENS.test) { const p = JSON.parse(localStorage.getItem('catalan_progress') || '{}'); p.unlockedTier = 99; p.completed = Array.from({length: 120}, (_, i) => i + 1); localStorage.setItem('catalan_progress', JSON.stringify(p)); }";

if (!content.includes(oldLine)) {
  console.log('ERROR: Could not find test token line. No changes made.');
  process.exit(1);
}

content = content.replace(oldLine, newLine);
fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: HC_TEST_ALL token now also marks all lessons complete');
