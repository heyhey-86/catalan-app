const fs = require('fs');
const path = require('path');

const lsPath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let lsContent = fs.readFileSync(lsPath, 'utf8');
const lines = lsContent.split('\n');

// Find the orphaned line - "if (!exercises || exercises.length === 0) return null;"
let orphanStart = -1;
let orphanEnd = -1;

for (let i = 1230; i < 1270; i++) {
  if (lines[i] && lines[i].includes('if (!exercises || exercises.length === 0) return null;')) {
    orphanStart = i;
  }
  if (orphanStart !== -1 && lines[i] && lines[i].trim() === '}' && i > orphanStart + 20) {
    orphanEnd = i;
    break;
  }
}

console.log(`Orphan block: lines ${orphanStart + 1} to ${orphanEnd + 1}`);
console.log(`First line: ${lines[orphanStart]}`);
console.log(`Last line: ${lines[orphanEnd]}`);

if (orphanStart === -1 || orphanEnd === -1) {
  console.log('ERROR: Could not find orphan block');
  process.exit(1);
}

lines.splice(orphanStart, orphanEnd - orphanStart + 1);
fs.writeFileSync(lsPath, lines.join('\n'), 'utf8');
console.log('SUCCESS: Orphaned lines removed');
