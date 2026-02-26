const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Fix 1: Rename C27 Job Interview to avoid duplicate
c = c.replace('title: " Job Interview"', 'title: " Job Interview (Advanced)"');

// Fix 2: Strip trailing punctuation from wordBank tiles AND correctSentence
// So tiles match what user builds and comparison works
c = c.replace(/wordBank: (\[[^\]]+\]), correctSentence: "([^"]*)"/g, (match, wb, cs) => {
  // Strip trailing punctuation from each word in wordBank
  const cleanWb = wb.replace(/"([^"]+)"/g, (m, word) => {
    return '"' + word.replace(/[.,!?;:]$/, '') + '"';
  });
  // Strip trailing punctuation from correctSentence too
  const cleanCs = cs.split(' ').map(w => w.replace(/[.,!?;:]$/, '')).join(' ');
  return 'wordBank: ' + cleanWb + ', correctSentence: "' + cleanCs + '"';
});

fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
