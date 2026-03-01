const fs = require('fs');
const path = require('path');

const webhookPath = path.join(process.cwd(), 'api', 'stripe-webhook.js');
let content = fs.readFileSync(webhookPath, 'utf8');

const oldFunction = `async function setUserPremium(userId, isPremium, serviceKey, expiresAt = null) {
  const update = {
    user_id: userId,
    is_premium: isPremium,
    updated_at: new Date().toISOString(),
    premium_expires_at: expiresAt
  };
  // Use UPSERT so row is created if it doesn't exist yet
  const res = await fetch(\`\${SUPABASE_URL}/rest/v1/user_progress\`, {
    method: 'POST',
    headers: {
      'apikey': serviceKey,
      'Authorization': \`Bearer \${serviceKey}\`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify(update)
  });
  const text = await res.text();
  console.log('Supabase UPSERT status:', res.status, 'body:', text);
}`;

const newFunction = `async function setUserPremium(userId, isPremium, serviceKey, expiresAt = null) {
  const update = {
    is_premium: isPremium,
    updated_at: new Date().toISOString(),
    premium_expires_at: expiresAt
  };
  // Try PATCH first (update existing row)
  const patchRes = await fetch(\`\${SUPABASE_URL}/rest/v1/user_progress?user_id=eq.\${userId}\`, {
    method: 'PATCH',
    headers: {
      'apikey': serviceKey,
      'Authorization': \`Bearer \${serviceKey}\`,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    },
    body: JSON.stringify(update)
  });
  const patchText = await patchRes.text();
  const patchData = JSON.parse(patchText || '[]');
  console.log('Supabase PATCH status:', patchRes.status, 'rows updated:', Array.isArray(patchData) ? patchData.length : 0);
  // If no row existed, INSERT a new one
  if (Array.isArray(patchData) && patchData.length === 0) {
    const insertRes = await fetch(\`\${SUPABASE_URL}/rest/v1/user_progress\`, {
      method: 'POST',
      headers: {
        'apikey': serviceKey,
        'Authorization': \`Bearer \${serviceKey}\`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({ user_id: userId, ...update })
    });
    const insertText = await insertRes.text();
    console.log('Supabase INSERT status:', insertRes.status, 'body:', insertText);
  }
}`;

if (content.includes(oldFunction)) {
  content = content.replace(oldFunction, newFunction);
  fs.writeFileSync(webhookPath, content, 'utf8');
  console.log('SUCCESS: setUserPremium fixed - now uses PATCH then INSERT');
} else {
  console.log('ERROR: Could not find old function - checking for partial match...');
  if (content.includes('async function setUserPremium')) {
    console.log('Function exists but text differs - manual fix needed');
  }
}
