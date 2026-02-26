const fs = require('fs');
let c = fs.readFileSync('src/conversations.js', 'utf8');

// Fix optioons typo
c = c.split('optioons:').join('options:');

// Fix C26+ titles - extract emoji from title into icon field
c = c.replace(/(\s+)(title: "([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}][^"]*)")/gu, (match, space, titlePart, titleVal) => {
  const emojiMatch = titleVal.match(/^([\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]+)\s*(.*)/u);
  if (emojiMatch) {
    return space + 'icon: "' + emojiMatch[1] + '",\n' + space + 'title: "' + emojiMatch[2] + '"';
  }
  return match;
});

fs.writeFileSync('src/conversations.js', c, 'utf8');
console.log('done');
