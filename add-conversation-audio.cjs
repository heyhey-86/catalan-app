const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find the NPC bubble text line
let npcTextLineIdx = -1;
for (let i = 2590; i < 2620; i++) {
  if (lines[i] && lines[i].includes('<div>{turn.text}</div>')) {
    npcTextLineIdx = i;
    break;
  }
}

console.log(`NPC text line: ${npcTextLineIdx + 1}`);
console.log(lines[npcTextLineIdx]);

if (npcTextLineIdx === -1) {
  console.log('ERROR: Could not find NPC text line');
  process.exit(1);
}

// Replace <div>{turn.text}</div> with text + speaker button
const oldLine = lines[npcTextLineIdx];
const newLine = oldLine.replace(
  '<div>{turn.text}</div>',
  '<div className="flex items-start gap-2"><span className="flex-1">{turn.text}</span><button onClick={() => speakWord(turn.text)} className="text-gray-400 hover:text-gray-600 flex-shrink-0 mt-0.5" title="Play audio">\uD83D\uDD0A</button></div>'
);

lines[npcTextLineIdx] = newLine;

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Speaker button added to NPC conversation bubbles');
