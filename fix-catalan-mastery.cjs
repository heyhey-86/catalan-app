const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'lessons50.js');
let content = fs.readFileSync(filePath, 'utf8');

// Question 1: correct answer "amb fluïdesa" moved to index 2
const old1 = `{ sentence: "Ja parlo catal\u00e0 ___", blank: "amb flu\u00efdesa", options: ["b\u00e9", "amb flu\u00efdesa", "una mica", "malament"], correctIndex: 1`;
const new1 = `{ sentence: "Ja parlo catal\u00e0 ___", blank: "amb flu\u00efdesa", options: ["b\u00e9", "una mica", "amb flu\u00efdesa", "malament"], correctIndex: 2`;

// Question 2: correct answer "millorar" moved to index 0
const old2 = `{ sentence: "Vull ___ el meu catal\u00e0 ", blank: "millorar", options: ["parlar", "millorar", "aprendre", "estudiar"], correctIndex: 1`;
const new2 = `{ sentence: "Vull ___ el meu catal\u00e0 ", blank: "millorar", options: ["millorar", "parlar", "aprendre", "estudiar"], correctIndex: 0`;

// Question 3: correct answer "competència" moved to index 3
const old3 = `{ sentence: "Tinc una bona ___ en catal\u00e0 ", blank: "compet\u00e8ncia", options: ["idea", "compet\u00e8ncia", "pregunta", "resposta"], correctIndex: 1`;
const new3 = `{ sentence: "Tinc una bona ___ en catal\u00e0 ", blank: "compet\u00e8ncia", options: ["idea", "pregunta", "resposta", "compet\u00e8ncia"], correctIndex: 3`;

let changed = 0;

if (content.includes(old1)) { content = content.replace(old1, new1); changed++; console.log('Q1 fixed'); }
else console.log('WARNING: Q1 not found');

if (content.includes(old2)) { content = content.replace(old2, new2); changed++; console.log('Q2 fixed'); }
else console.log('WARNING: Q2 not found');

if (content.includes(old3)) { content = content.replace(old3, new3); changed++; console.log('Q3 fixed'); }
else console.log('WARNING: Q3 not found');

if (changed === 0) {
  console.log('ERROR: No changes made. The file may use different encoding.');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`SUCCESS: ${changed}/3 questions fixed in Catalan Mastery fill-in-blank`);
