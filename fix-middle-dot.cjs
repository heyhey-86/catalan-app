const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Add middle dot (U+00B7) removal to normalizeText
// Find the line that removes the corrupted version and add the real one after
const oldLine = "    .replace(/\\s+/g, ' ');";
const newLine = "    .replace(/\u00b7/g, '')\n    .replace(/\\s+/g, ' ');";

if (content.includes(oldLine)) {
  content = content.replace(oldLine, newLine);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('SUCCESS: Middle dot now stripped from normalizeText');
} else {
  console.log('WARNING: Target line not found, trying alternate approach');
  // Just append the replace before .trim()
  const oldTrim = "    .trim()";
  const newTrim = "    .replace(/\u00b7/g, '')\n    .trim()";
  if (content.includes(oldTrim)) {
    content = content.replace(oldTrim, newTrim);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('SUCCESS: Middle dot now stripped (alternate method)');
  } else {
    console.log('ERROR: Could not find target');
    process.exit(1);
  }
}
