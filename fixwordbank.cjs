const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Rebuild word banks using full option phrases instead of split words
// Pattern matches user turns with wordBank arrays
const regex = /\{ speaker: "user", prompt: "([^"]*)", wordBank: \[([^\]]*)\], correctSentence: "([^"]*)" \}/g;

c = c.replace(regex, (match, prompt, wordBankStr, correctSentence) => {
  // Get the options from the original data - we need to find them
  // Instead, rebuild from correctSentence words only, properly
  const words = correctSentence.split(' ');
  const wordBank = JSON.stringify(words.sort(() => Math.random() - 0.5));
  return `{ speaker: "user", prompt: "${prompt}", wordBank: ${wordBank}, correctSentence: "${correctSentence}" }`;
});

fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
