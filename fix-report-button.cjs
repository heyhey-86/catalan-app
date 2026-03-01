const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

let startIdx = -1;
let endIdx = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('export const ReportButton = (')) {
    startIdx = i;
  }
  if (startIdx !== -1 && lines[i].trim() === '};' && i > startIdx) {
    endIdx = i;
    break;
  }
}

console.log(`ReportButton: lines ${startIdx + 1} to ${endIdx + 1}`);

if (startIdx === -1 || endIdx === -1) {
  console.log('ERROR: Could not find ReportButton');
  process.exit(1);
}

const newButton = [
  `export const ReportButton = ({ lessonTitle, questionText, stageType }) => {`,
  `  const subject = encodeURIComponent('Report: ' + (lessonTitle || 'Unknown'));`,
  `  const bodyText = 'Lesson: ' + (lessonTitle || 'Unknown') + '%0AStage: ' + (stageType || 'Unknown') + '%0AQuestion: ' + encodeURIComponent(questionText || '') + '%0A%0AMy issue: ';`,
  `  return (`,
  `        <a`,
  `      href={'mailto:aprencatalaapp@gmail.com?subject=' + subject + '&body=' + bodyText}`,
  `      className="flex items-center justify-center w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 mx-auto"`,
  `    >`,
  `      \u{1F6A9} Report incorrect`,
  `    </a>`,
  `  );`,
  `};`,
];

lines.splice(startIdx, endIdx - startIdx + 1, ...newButton);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: ReportButton fixed');
