const fs = require('fs');

const filePath = 'src/App.jsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Verify line 3305 (0-indexed 3304) is the closing )} of the daygate block
console.log('Line 3304:', lines[3302]);
console.log('Line 3305:', lines[3303]);
console.log('Line 3306:', lines[3304]);

if (!lines[3303].includes('come back') && !lines[3304].includes(')}') && !lines[3302].includes('daygate')) {
  // Try to find it
  for (let i = 3290; i < 3320; i++) {
    if (lines[i] && lines[i].includes('come back')) {
      console.log('Found "come back" at line', i + 1);
    }
    if (lines[i] && lines[i].includes('daygate')) {
      console.log('Found "daygate" at line', i + 1);
    }
  }
  console.log('ERROR: Could not confirm target lines - aborting');
  process.exit(1);
}

// Find the exact line with 'come back' in the daygate block
let daygateLineIdx = -1;
for (let i = 3290; i < 3320; i++) {
  if (lines[i] && lines[i].includes('come back')) {
    daygateLineIdx = i;
    break;
  }
}

if (daygateLineIdx === -1) {
  console.log('ERROR: Could not find come back line');
  process.exit(1);
}

// The closing )} should be the next line
const closingIdx = daygateLineIdx + 1;
console.log('Daygate line:', daygateLineIdx + 1, lines[daygateLineIdx]);
console.log('Closing line:', closingIdx + 1, lines[closingIdx]);

// Insert the premium message after the closing )}
const eol = content.includes('\r\n') ? '\r\n' : '\n';
const newLine = '            {lockStatus.locked && lockStatus.reason === \'premium\' && (' + eol +
               '              <div className="text-xs text-red-500 mt-1">Subscribe to unlock all 120+ lessons \u2192 holacatala.com</div>' + eol +
               '            )}';

const before = lines.slice(0, closingIdx + 1);
const after = lines.slice(closingIdx + 1);
const result = [...before, newLine, ...after].join(eol);

fs.writeFileSync(filePath, result, 'utf8');
console.log('SUCCESS: Premium lock text added after line', closingIdx + 1);
