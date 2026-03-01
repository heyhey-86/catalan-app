const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find the ReportButton function
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
  `  const body = encodeURIComponent(`,
  `    'Lesson: ' + (lessonTitle || 'Unknown') + '\\n' +`,
  `    'Stage: ' + (stageType || 'Unknown') + '\\n' +`,
  `    'Question/Text: ' + (questionText || '') + '\\n\\n' +`,
  `    'My issue: '`,
  `  );`,
  `  return (`,
  `    <a`,
  `      href={'mailto:aprencatalaapp@gmail.com?subject=' + subject + '&body=' + body}`,
  `      className="flex items-center justify-center w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 mx-auto"`,
  `    >`,
  `      🚩 Report incorrect`,
  `    </a>`,
  `  );`,
  `};`,
];

lines.splice(startIdx, endIdx - startIdx + 1, ...newButton);
content = lines.join('\r\n');

// Update each call site to include stageType
const replacements = [
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={current.sentence} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={current.sentence} stageType="Fill in the Blank" />',
    0 // first occurrence
  ],
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={current.translation} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={current.translation} stageType="Error Correction" />',
    0
  ],
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={current.english} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={current.english} stageType="Listen and Type" />',
    0
  ],
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={currentTurnData?.text || \'\'} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={currentTurnData?.text || \'\'} stageType="Conversation" />',
    0
  ],
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={current.en} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={current.en} stageType="Flashcard" />',
    0
  ],
  [
    '<ReportButton lessonTitle={lessonTitle} questionText={story} />',
    '<ReportButton lessonTitle={lessonTitle} questionText={story} stageType="Story Mode" />',
    0
  ],
];

let changed = 0;
for (const [oldStr, newStr] of replacements) {
  if (content.includes(oldStr)) {
    content = content.replace(oldStr, newStr);
    changed++;
    console.log(`Updated: ${newStr.substring(0, 60)}...`);
  } else {
    console.log(`WARNING: Not found: ${oldStr.substring(0, 60)}...`);
  }
}

// Handle the second Fill in the Blank occurrence (sentence ordering uses same pattern)
const oldSentenceOrdering = '<ReportButton lessonTitle={lessonTitle} questionText={current.sentence} stageType="Fill in the Blank" />';
const allOccurrences = content.split(oldSentenceOrdering);
if (allOccurrences.length > 2) {
  // Replace second occurrence with Sentence Ordering
  content = allOccurrences[0] + oldSentenceOrdering + 
    allOccurrences.slice(1).join(oldSentenceOrdering).replace(
      oldSentenceOrdering,
      '<ReportButton lessonTitle={lessonTitle} questionText={current.sentence} stageType="Sentence Ordering" />'
    );
  changed++;
  console.log('Updated second sentence occurrence to Sentence Ordering');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nSUCCESS: ReportButton improved, ${changed} call sites updated`);
