const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Replace each user turn in C26+ format with C1-25 format
// Pattern: speaker: "user", text: "", translation: "...", options: ["correct", "wrong1", "wrong2"]
const regex = /\{ speaker: "user", text: "", translation: "([^"]*)", options: \[("(?:[^"]*)"(?:, "(?:[^"]*)")*)\] \}/g;

c = c.replace(regex, (match, prompt, optionsStr) => {
  const options = optionsStr.match(/"([^"]*)"/g).map(s => s.replace(/"/g, ''));
  const correctSentence = options[0];
  // Build word bank from all words across all options, deduplicated
  const allWords = options.join(' ').split(' ');
  const wordBank = [...new Set(allWords)].sort(() => Math.random() - 0.5);
  return `{ speaker: "user", prompt: "${prompt}", wordBank: ${JSON.stringify(wordBank)}, correctSentence: "${correctSentence}" }`;
});

// Also fix optionss typo and remaining field issues
c = c.split('optionss:').join('options:');

fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
