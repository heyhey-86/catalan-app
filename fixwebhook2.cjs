const fs = require('fs');
const lines = fs.readFileSync('api/stripe-webhook.js', 'utf8').split('\n');

const start = lines.findIndex(l => l.includes('async function getUserByEmail'));
const end = lines.findIndex((l, i) => i > start && l === '}');

console.log('Replacing lines', start+1, 'to', end+1);

const newFn = [
'async function getUserByEmail(email, serviceKey) {',
'  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?email=${encodeURIComponent(email)}`, {',
'    headers: {',
"      'apikey': serviceKey,",
"      'Authorization': `Bearer ${serviceKey}`",
'    }',
'  });',
'  const data = await res.json();',
'  return (data.users || [])[0] || null;',
'}'
];

lines.splice(start, end - start + 1, ...newFn);
fs.writeFileSync('api/stripe-webhook.js', lines.join('\n'), 'utf8');
console.log('done');
