const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find the closing of the conversation view - look for the pattern just before conversationComplete
let insertIdx = -1;
for (let i = 2640; i < 2660; i++) {
  if (lines[i] && lines[i].trim() === '</div>' &&
      lines[i+1] && lines[i+1].trim() === '</div>' &&
      lines[i+2] && lines[i+2].trim() === '</div>' &&
      lines[i+3] && lines[i+3].trim() === ');') {
    insertIdx = i;
    break;
  }
}

console.log(`Found closing divs at line: ${insertIdx + 1}`);

if (insertIdx === -1) {
  console.log('ERROR: Could not find insertion point');
  process.exit(1);
}

const reportFlag = [
  `        <div className="text-center mt-4 pb-4">`,
  `          <a`,
  `            href={\`mailto:aprencatalaapp@gmail.com?subject=\${encodeURIComponent('Report: ' + currentConversation.title)}&body=\${encodeURIComponent('Conversation: ' + currentConversation.title + ' (ID: ' + currentConversation.id + ')\\nTurn: ' + (conversationTurnIndex + 1) + ' of ' + currentConversation.turns.length + '\\nSpeaker: ' + (currentConversation.turns[conversationTurnIndex]?.speaker || '') + '\\nPrompt: ' + (currentConversation.turns[conversationTurnIndex]?.prompt || '') + '\\nCorrect answer: ' + (currentConversation.turns[conversationTurnIndex]?.correctSentence || '') + '\\n\\nMy issue: ')}\`}`,
  `            className="text-xs text-gray-400 hover:text-gray-600"`,
  `          >`,
  `            🚩 Report incorrect`,
  `          </a>`,
  `        </div>`,
];

lines.splice(insertIdx, 0, ...reportFlag);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Report flag added to conversation view');
