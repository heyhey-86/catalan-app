const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lessons50.js');
let content = fs.readFileSync(filePath, 'utf8');

let changed = 0;

// Q3: options contains "idea", special-char-word, "pregunta", "resposta" — move special word to end
// Match the whole options array using regex, capture the special word
const q3regex = /options: \["idea", "([^"]+)", "pregunta", "resposta"\], correctIndex: 1, translation: "I have good proficiency in Catalan"/;
const q3match = content.match(q3regex);
if (q3match) {
  const specialWord = q3match[1]; // capture "compet??ncia" whatever it looks like
  const old3 = q3match[0];
  const new3 = `options: ["idea", "pregunta", "resposta", "${specialWord}"], correctIndex: 3, translation: "I have good proficiency in Catalan"`;
  content = content.replace(old3, new3);
  changed++;
  console.log(`Q3 fixed (captured word: ${specialWord})`);
} else {
  console.log('WARNING: Q3 not found');
}

// Q4: options contains "teoria", special-word, "lectura", special-word2 — move first special word to index 2
const q4regex = /options: \["teoria", "([^"]+)", "lectura", "([^"]+)"\], correctIndex: 1, translation: "Practice makes perfect"/;
const q4match = content.match(q4regex);
if (q4match) {
  const practica = q4match[1]; // "pr??ctica"
  const gramatica = q4match[2]; // "gram??tica"
  const old4 = q4match[0];
  const new4 = `options: ["teoria", "lectura", "${practica}", "${gramatica}"], correctIndex: 2, translation: "Practice makes perfect"`;
  content = content.replace(old4, new4);
  changed++;
  console.log(`Q4 fixed (captured words: ${practica}, ${gramatica})`);
} else {
  console.log('WARNING: Q4 not found');
}

if (changed > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`SUCCESS: ${changed} questions fixed`);
} else {
  console.log('ERROR: No changes made');
  process.exit(1);
}
