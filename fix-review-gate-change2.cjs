const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find the line with "const firstWord = shuffled[0];"
let firstWordLine = -1;
let setActiveLineStart = -1;
let closingBraceLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].trim() === 'const firstWord = shuffled[0];' && firstWordLine === -1) {
    firstWordLine = i;
  }
  if (firstWordLine !== -1 && lines[i].trim() === 'setReviewGateActive(true);' && setActiveLineStart === -1) {
    setActiveLineStart = i;
  }
  if (setActiveLineStart !== -1 && lines[i].trim() === "setView('reviewGate');" && closingBraceLine === -1) {
    // Next line should be '};'
    closingBraceLine = i + 1;
    break;
  }
}

console.log(`firstWordLine: ${firstWordLine + 1}, setActiveLine: ${setActiveLineStart + 1}, closingBrace: ${closingBraceLine + 1}`);

if (firstWordLine === -1 || setActiveLineStart === -1 || closingBraceLine === -1) {
  console.log('ERROR: Could not find required lines');
  process.exit(1);
}

// Replace lines from firstWordLine to closingBraceLine (inclusive)
const newLines = [
  '    const firstWord = shuffled[0];',
  '    // Pre-assign question types per question (tiers 35+ get mixed types)',
  '    const questionCount2 = comprehensive ? 20 : 10;',
  '    const types = Array.from({ length: questionCount2 }, () => {',
  "      if (tier >= 35) return Math.random() > 0.5 ? 'en_to_ca' : 'ca_to_en';",
  "      return 'en_to_ca';",
  '    });',
  '    setReviewGateQuestionTypes(types);',
  '    const firstType = types[0];',
  '    setReviewGateQuestionType(firstType);',
  "    if (firstType === 'ca_to_en') {",
  '      const otherWords = words.filter(w => w.en !== firstWord.en);',
  '      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);',
  '      setReviewGateOptions([firstWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));',
  '    } else {',
  '      const otherWords = words.filter(w => w.ca !== firstWord.ca);',
  '      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);',
  '      setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));',
  '    }',
  '    setReviewGateActive(true);',
  "    setView('reviewGate');",
  '  };',
];

lines.splice(firstWordLine, closingBraceLine - firstWordLine + 1, ...newLines);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Change 2 applied via line replacement');
