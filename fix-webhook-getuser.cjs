const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'api', 'stripe-webhook.js');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

// Find both getUserByEmail functions
let firstFuncStart = -1;
let firstFuncEnd = -1;
let secondFuncStart = -1;
let secondFuncEnd = -1;
let count = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('async function getUserByEmail')) {
    count++;
    if (count === 1) firstFuncStart = i;
    if (count === 2) secondFuncStart = i;
  }
  if (count === 1 && firstFuncStart !== -1 && firstFuncEnd === -1 && i > firstFuncStart && lines[i].trim() === '}') {
    firstFuncEnd = i;
  }
  if (count === 2 && secondFuncStart !== -1 && secondFuncEnd === -1 && i > secondFuncStart && lines[i].trim() === '}') {
    secondFuncEnd = i;
  }
}

console.log(`First function: lines ${firstFuncStart + 1} to ${firstFuncEnd + 1}`);
console.log(`Second function: lines ${secondFuncStart + 1} to ${secondFuncEnd + 1}`);

if (firstFuncStart === -1 || secondFuncStart === -1) {
  console.log('ERROR: Could not find both functions');
  process.exit(1);
}

// New merged function - queries by email (no pagination issue) with case-insensitive fallback
const newFunc = [
  'async function getUserByEmail(email, serviceKey) {',
  '  // First try direct email query (efficient)',
  '  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?email=${encodeURIComponent(email.toLowerCase())}`, {',
  '    headers: {',
  '      \'apikey\': serviceKey,',
  '      \'Authorization\': `Bearer ${serviceKey}`',
  '    }',
  '  });',
  '  const data = await res.json();',
  '  const users = data.users || [];',
  '  // Case-insensitive match in case email casing differs',
  '  return users.find(u => u.email?.toLowerCase() === email.toLowerCase()) || users[0] || null;',
  '}',
];

// Remove second function first (higher line number, so remove it first to not shift indices)
lines.splice(secondFuncStart, secondFuncEnd - secondFuncStart + 1);

// Now replace first function with merged version
lines.splice(firstFuncStart, firstFuncEnd - firstFuncStart + 1, ...newFunc);

fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
console.log('SUCCESS: getUserByEmail merged into single reliable function');
