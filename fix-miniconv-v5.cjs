const fs = require('fs');

const filePath = 'src/LessonStages.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// ── PATCH 1: Remove auto-advance setTimeout (find by unique content) ──────────
let p1Start = -1, p1End = -1;
for (let i = 750; i < 820; i++) {
  if (lines[i] && lines[i].includes('if (correct) {') && lines[i+1] && lines[i+1].includes('setTimeout')) {
    p1Start = i;
  }
  if (p1Start > -1 && lines[i] && lines[i].trim() === '}' && i > p1Start + 3) {
    // Check if next line closes the function
    if (lines[i+1] && lines[i+1].trim() === '};') {
      p1End = i + 1;
      break;
    }
  }
}

if (p1Start === -1) {
  // Search more broadly
  for (let i = 700; i < 900; i++) {
    if (lines[i] && lines[i].includes('setTimeout') && lines[i-1] && lines[i-1].includes('if (correct)')) {
      console.log('Found at line', i+1, lines[i]);
    }
  }
  console.error('PATCH 1: could not find auto-advance block');
  process.exit(1);
}

console.log('PATCH 1: removing lines', p1Start+1, 'to', p1End+1);
console.log('  ', lines[p1Start]);

// Remove lines p1Start through p1End (the if(correct){setTimeout...}} block)
lines.splice(p1Start, p1End - p1Start + 1);
console.log('PATCH 1 applied');

// ── PATCH 2: Add correct answer continue button after wrong answer block ───────
// Re-find after splice
let p2Line = -1;
for (let i = 850; i < lines.length; i++) {
  if (lines[i] && lines[i].includes('border-gray-300 py-2 rounded-xl')) {
    // This is the wrong-answer continue button - we want to insert after closing <>
    // Find the closing </> and )}
    for (let j = i; j < i + 10; j++) {
      if (lines[j] && lines[j].trim() === '</>') {
        if (lines[j+1] && lines[j+1].trim() === ')}') {
          p2Line = j + 1; // insert after this )}
          break;
        }
      }
    }
    break;
  }
}

if (p2Line === -1) {
  console.error('PATCH 2: could not find insertion point');
  process.exit(1);
}

console.log('PATCH 2: inserting correct continue button after line', p2Line+1);

const correctContinue = [
  '          {isCorrect === true && (',
  '            <button',
  '              onClick={() => { setSelected(null); setIsCorrect(null); setCurrentTurn(c => c + 1); }}',
  '              className="mt-2 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 active:scale-95 transition-all"',
  '            >',
  '              Continue \u2192',
  '            </button>',
  '          )}',
];

lines.splice(p2Line + 1, 0, ...correctContinue);
console.log('PATCH 2 applied');

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('SUCCESS');
