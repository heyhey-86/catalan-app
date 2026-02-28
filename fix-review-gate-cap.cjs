const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// Fix 1: Remove tier < 17 cap so ALL tiers get review gates
const oldCap = 'return isTierComplete(tier, completed) && unlockedTier === tier && tier < 17;';
const newCap = 'return isTierComplete(tier, completed) && unlockedTier === tier;';

if (content.includes(oldCap)) {
  content = content.replace(oldCap, newCap);
  changed++;
  console.log('Fix 1 done: tier cap removed');
} else {
  console.log('WARNING: tier cap line not found');
}

if (changed === 0) {
  console.log('ERROR: No changes made');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: Review gate tier cap fixed');
