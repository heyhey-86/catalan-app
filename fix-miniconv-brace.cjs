const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find the line with playAudio that's missing its closing };
for (let i = 775; i < 795; i++) {
  console.log(i+1, JSON.stringify(lines[i]));
}

// Find the exact line
let targetLine = -1;
for (let i = 775; i < 795; i++) {
  if (lines[i] && lines[i].includes('playAudio(responseText') && 
      lines[i+1] && lines[i+1].trim() === 'if (completed)') {
    targetLine = i;
    break;
  }
}

if (targetLine === -1) {
  console.error('Target line not found');
  process.exit(1);
}

console.log('Inserting }; after line', targetLine + 1);
lines.splice(targetLine + 1, 0, '  };');

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('SUCCESS');
