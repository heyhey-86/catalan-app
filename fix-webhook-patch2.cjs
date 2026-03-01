const fs = require('fs');
const path = require('path');

const webhookPath = path.join(process.cwd(), 'api', 'stripe-webhook.js');
const content = fs.readFileSync(webhookPath, 'utf8');
const lines = content.split('\n');

// Lines 47-67 (0-indexed: 46-66) are the setUserPremium function
// We'll replace them with the new PATCH-then-INSERT version

const newLines = [
  'async function setUserPremium(userId, isPremium, serviceKey, expiresAt = null) {',
  '  const update = {',
  '    is_premium: isPremium,',
  '    updated_at: new Date().toISOString(),',
  '    premium_expires_at: expiresAt',
  '  };',
  '  // Try PATCH first (update existing row)',
  '  const patchRes = await fetch(`${SUPABASE_URL}/rest/v1/user_progress?user_id=eq.${userId}`, {',
  '    method: \'PATCH\',',
  '    headers: {',
  '      \'apikey\': serviceKey,',
  '      \'Authorization\': `Bearer ${serviceKey}`,',
  '      \'Content-Type\': \'application/json\',',
  '      \'Prefer\': \'return=representation\'',
  '    },',
  '    body: JSON.stringify(update)',
  '  });',
  '  const patchText = await patchRes.text();',
  '  const patchData = JSON.parse(patchText || \'[]\');',
  '  console.log(\'Supabase PATCH status:\', patchRes.status, \'rows updated:\', Array.isArray(patchData) ? patchData.length : 0);',
  '  // If no row existed, INSERT a new one',
  '  if (Array.isArray(patchData) && patchData.length === 0) {',
  '    const insertRes = await fetch(`${SUPABASE_URL}/rest/v1/user_progress`, {',
  '      method: \'POST\',',
  '      headers: {',
  '        \'apikey\': serviceKey,',
  '        \'Authorization\': `Bearer ${serviceKey}`,',
  '        \'Content-Type\': \'application/json\',',
  '        \'Prefer\': \'return=representation\'',
  '      },',
  '      body: JSON.stringify({ user_id: userId, ...update })',
  '    });',
  '    const insertText = await insertRes.text();',
  '    console.log(\'Supabase INSERT status:\', insertRes.status, \'body:\', insertText);',
  '  }',
  '}'
];

// Verify we're replacing the right lines
console.log('Line 47 currently reads:', lines[46]);
console.log('Line 67 currently reads:', lines[66]);

if (!lines[46].includes('setUserPremium')) {
  console.log('ERROR: Line 47 does not contain setUserPremium - aborting');
  process.exit(1);
}
if (!lines[66].includes('}')) {
  console.log('ERROR: Line 67 does not look like closing brace - aborting');
  process.exit(1);
}

// Replace lines 47-67 (0-indexed 46-66) with new lines
const eol = content.includes('\r\n') ? '\r\n' : '\n';
const before = lines.slice(0, 46);
const after = lines.slice(67);
const result = [...before, ...newLines, ...after].join(eol);

fs.writeFileSync(webhookPath, result, 'utf8');
console.log('SUCCESS: setUserPremium replaced with PATCH-then-INSERT');
console.log('New line count:', result.split('\n').length);
