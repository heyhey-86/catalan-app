const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(process.cwd(), 'src', 'lessons100.js');
let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');

// Detect line ending
const le = lessonsContent.includes('\r\n') ? '\r\n' : '\n';
console.log('Line ending:', le === '\r\n' ? 'CRLF' : 'LF');

const lessonsLines = lessonsContent.split(le);

const targetLessons = [101, 105, 109, 113, 117];

for (const lessonId of targetLessons) {
  let idLineIdx = -1;
  let stagesLineIdx = -1;

  for (let i = 0; i < lessonsLines.length; i++) {
    if (lessonsLines[i].trim() === `id: ${lessonId},`) {
      idLineIdx = i;
      console.log(`Found lesson ${lessonId} at line ${i + 1}: "${lessonsLines[i]}"`);
    }
    if (idLineIdx !== -1 && lessonsLines[i].trim().startsWith('stages:') && i > idLineIdx && i < idLineIdx + 6) {
      stagesLineIdx = i;
      break;
    }
  }

  if (stagesLineIdx !== -1) {
    const stageLine = lessonsLines[stagesLineIdx];
    if (!stageLine.includes('quickFire')) {
      lessonsLines[stagesLineIdx] = stageLine.replace(']', ", 'quickFire']");
      console.log(`Updated lesson ${lessonId}: ${lessonsLines[stagesLineIdx].trim()}`);
    } else {
      console.log(`Lesson ${lessonId} already has quickFire`);
    }
  } else {
    console.log(`ERROR: Could not find stages for lesson ${lessonId}`);
  }
}

fs.writeFileSync(lessonsPath, lessonsLines.join(le), 'utf8');
console.log('\nDone.');
