const fs = require('fs');
let c = fs.readFileSync('api/stripe-webhook.js', 'utf8');

c = c.replace(
`async function getUserByEmail(email, serviceKey) {
  const res = await fetch(\`\${SUPABASE_URL}/auth/v1/admin/users\`, {
    headers: {
      'apikey': serviceKey,
      'Authorization': \`Bearer \${serviceKey}\`
    }
  });
  const data = await res.json();
  return (data.users || []).find(u => u.email?.toLowerCase() === email.toLowerCase());
}`,
`async function getUserByEmail(email, serviceKey) {
  const res = await fetch(\`\${SUPABASE_URL}/auth/v1/admin/users?email=\${encodeURIComponent(email)}\`, {
    headers: {
      'apikey': serviceKey,
      'Authorization': \`Bearer \${serviceKey}\`
    }
  });
  const data = await res.json();
  return (data.users || [])[0] || null;
}`
);

fs.writeFileSync('api/stripe-webhook.js', c, 'utf8');
console.log('done');
