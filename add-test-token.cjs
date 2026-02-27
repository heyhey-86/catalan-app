const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Add test token to PREMIUM_TOKENS - works with both CRLF and LF
const oldTokens = "  beta: 'HC_BETA_LIFE',\r\n};";
const newTokens = "  beta: 'HC_BETA_LIFE',\r\n  test: 'HC_TEST_ALL',\r\n};";

const oldTokensLF = "  beta: 'HC_BETA_LIFE',\n};";
const newTokensLF = "  beta: 'HC_BETA_LIFE',\n  test: 'HC_TEST_ALL',\n};";

if (content.includes(oldTokens)) {
  content = content.replace(oldTokens, newTokens);
  console.log('Token added with CRLF');
} else if (content.includes(oldTokensLF)) {
  content = content.replace(oldTokensLF, newTokensLF);
  console.log('Token added with LF');
} else {
  console.log('ERROR: Could not find PREMIUM_TOKENS closing. No changes made.');
  process.exit(1);
}

// 2. When test token is used, set unlockedTier: 99 in localStorage
const oldCRLF = "    storePremium();\r\n    window.history.replaceState({}, '', window.location.pathname);";
const newCRLF = "    storePremium();\r\n    if (providedToken === PREMIUM_TOKENS.test) { const p = JSON.parse(localStorage.getItem('catalan_progress') || '{}'); p.unlockedTier = 99; localStorage.setItem('catalan_progress', JSON.stringify(p)); }\r\n    window.history.replaceState({}, '', window.location.pathname);";

const oldLF = "    storePremium();\n    window.history.replaceState({}, '', window.location.pathname);";
const newLF = "    storePremium();\n    if (providedToken === PREMIUM_TOKENS.test) { const p = JSON.parse(localStorage.getItem('catalan_progress') || '{}'); p.unlockedTier = 99; localStorage.setItem('catalan_progress', JSON.stringify(p)); }\n    window.history.replaceState({}, '', window.location.pathname);";

if (content.includes(oldCRLF)) {
  content = content.replace(oldCRLF, newCRLF);
  console.log('Activation code replaced with CRLF');
} else if (content.includes(oldLF)) {
  content = content.replace(oldLF, newLF);
  console.log('Activation code replaced with LF');
} else {
  console.log('ERROR: Could not find token activation code. No changes made.');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('SUCCESS: HC_TEST_ALL token added to App.jsx');
