const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'generate-audio.cjs');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the extractStrings function to also include lessons100.js
const oldLine = "  const lessonsContent = fs.readFileSync('src/lessons50.js', 'utf8');";
const newLine = "  const lessonsContent = fs.readFileSync('src/lessons50.js', 'utf8');\n  const lessons100Content = fs.existsSync('src/lessons100.js') ? fs.readFileSync('src/lessons100.js', 'utf8') : '';\n  const allLessonsContent = lessonsContent + '\\n' + lessons100Content;";

if (!content.includes(oldLine)) {
  console.log('ERROR: Could not find target line. No changes made.');
  process.exit(1);
}

content = content.replace(oldLine, newLine);

// Now replace all references to lessonsContent in the extraction patterns to use allLessonsContent
content = content.replace(/caPattern\.exec\(lessonsContent\)/g, 'caPattern.exec(allLessonsContent)');
content = content.replace(/catalanPattern\.exec\(lessonsContent\)/g, 'catalanPattern.exec(allLessonsContent)');
content = content.replace(/orderPattern\.exec\(lessonsContent\)/g, 'orderPattern.exec(allLessonsContent)');
content = content.replace(/sentencePattern\.exec\(lessonsContent\)/g, 'sentencePattern.exec(allLessonsContent)');

// Also extract text: fields from lessons (for miniConversation NPC lines)
const oldConvExtract = "  // Extract from conversations NPC lines: text: \"...\"";
const newMiniConvExtract = "  // Extract miniConversation NPC text: fields from lessons\n  const miniTextPattern = /\\btext:\\s*[\"']([^\"']+)[\"']/g;\n  while ((match = miniTextPattern.exec(allLessonsContent)) !== null) {\n    const t = match[1].trim();\n    if (t.length > 0 && t.length < 200) strings.add(t);\n  }\n\n  // Extract from conversations NPC lines: text: \"...\"";

content = content.replace(oldConvExtract, newMiniConvExtract);

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: generate-audio.cjs updated to include lessons100.js');
