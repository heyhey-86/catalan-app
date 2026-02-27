const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lessons50.js');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// Q2: move "millorar" from index 1 to index 0
const old2 = `options: ["parlar", "millorar", "aprendre", "estudiar"], correctIndex: 1, translation: "I want to improve my Catalan"`;
const new2 = `options: ["millorar", "parlar", "aprendre", "estudiar"], correctIndex: 0, translation: "I want to improve my Catalan"`;
if (content.includes(old2)) { content = content.replace(old2, new2); changed++; console.log('Q2 fixed'); }
else console.log('WARNING: Q2 not found');

// Q3: move correct answer to index 3
const old3 = `options: ["idea", "compet\u00c3\u00a8ncia", "pregunta", "resposta"], correctIndex: 1, translation: "I have good proficiency in Catalan"`;
const new3 = `options: ["idea", "pregunta", "resposta", "compet\u00c3\u00a8ncia"], correctIndex: 3, translation: "I have good proficiency in Catalan"`;
if (content.includes(old3)) { content = content.replace(old3, new3); changed++; console.log('Q3 fixed'); }
else console.log('WARNING: Q3 not found - trying alternate');

// Q3 alternate - read raw bytes
const old3b = 'options: ["idea", "compet\xc3\xa8ncia", "pregunta", "resposta"], correctIndex: 1, translation: "I have good proficiency in Catalan"';
const new3b = 'options: ["idea", "pregunta", "resposta", "compet\xc3\xa8ncia"], correctIndex: 3, translation: "I have good proficiency in Catalan"';
if (!content.includes(old3) && content.includes(old3b)) { content = content.replace(old3b, new3b); changed++; console.log('Q3 fixed (alternate)'); }

// Q4: move "pràctica" from index 1 to index 2  
const old4 = `options: ["teoria", "pr\u00c3\u00a0ctica", "lectura", "gram\u00c3\u00a0tica"], correctIndex: 1, translation: "Practice makes perfect"`;
const new4 = `options: ["teoria", "lectura", "pr\u00c3\u00a0ctica", "gram\u00c3\u00a0tica"], correctIndex: 2, translation: "Practice makes perfect"`;
if (content.includes(old4)) { content = content.replace(old4, new4); changed++; console.log('Q4 fixed'); }
else {
  // Try matching just the unique part
  const old4b = 'options: ["teoria", "pr\xc3\xa0ctica", "lectura", "gram\xc3\xa0tica"], correctIndex: 1, translation: "Practice makes perfect"';
  const new4b = 'options: ["teoria", "lectura", "pr\xc3\xa0ctica", "gram\xc3\xa0tica"], correctIndex: 2, translation: "Practice makes perfect"';
  if (content.includes(old4b)) { content = content.replace(old4b, new4b); changed++; console.log('Q4 fixed (alternate)'); }
  else console.log('WARNING: Q4 not found');
}

if (changed > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`SUCCESS: ${changed} more questions fixed`);
} else {
  console.log('ERROR: No changes made');
  process.exit(1);
}
