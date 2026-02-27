const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lessons50.js');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// Q3: move "compet??ncia" from index 1 to index 3
const old3 = `options: ["idea", "compet??ncia", "pregunta", "resposta"], correctIndex: 1, translation: "I have good proficiency in Catalan"`;
const new3 = `options: ["idea", "pregunta", "resposta", "compet??ncia"], correctIndex: 3, translation: "I have good proficiency in Catalan"`;
if (content.includes(old3)) { content = content.replace(old3, new3); changed++; console.log('Q3 fixed'); }
else console.log('WARNING: Q3 not found');

// Q4: move "pr??ctica" from index 1 to index 2
const old4 = `options: ["teoria", "pr??ctica", "lectura", "gram??tica"], correctIndex: 1, translation: "Practice makes perfect"`;
const new4 = `options: ["teoria", "lectura", "pr??ctica", "gram??tica"], correctIndex: 2, translation: "Practice makes perfect"`;
if (content.includes(old4)) { content = content.replace(old4, new4); changed++; console.log('Q4 fixed'); }
else console.log('WARNING: Q4 not found');

if (changed > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`SUCCESS: ${changed} questions fixed`);
} else {
  console.log('ERROR: No changes made');
  process.exit(1);
}
