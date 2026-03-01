import crypto from 'crypto';

const SUPABASE_URL = 'https://djkdbvcymouywxhwmlrf.supabase.co';

function verifyStripeSignature(rawBody, signature, secret) {
  try {
    const parts = signature.split(',');
    const timestamp = parts.find(p => p.startsWith('t=')).split('=')[1];
    const v1 = parts.find(p => p.startsWith('v1=')).split('=')[1];
    const signed = `${timestamp}.${rawBody}`;
    const expected = crypto.createHmac('sha256', secret).update(signed).digest('hex');
    return crypto.timingSafeEqual(Buffer.from(v1), Buffer.from(expected));
  } catch { return false; }
}

function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', chunk => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function getEmailFromCustomer(customerId, stripeKey) {
  const res = await fetch(`https://api.stripe.com/v1/customers/${customerId}`, {
    headers: { 'Authorization': `Bearer ${stripeKey}` }
  });
  const data = await res.json();
  return data.email;
}

async function getUserByEmail(email, serviceKey) {
  // Query by email directly (efficient, no pagination issue)
  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users?email=${encodeURIComponent(email.toLowerCase())}`, {
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`
    }
  });
  const data = await res.json();
  const users = data.users || [];
  // Case-insensitive match in case email casing differs
  return users.find(u => u.email?.toLowerCase() === email.toLowerCase()) || users[0] || null;
}

async function setUserPremium(userId, isPremium, serviceKey, expiresAt = null) {
  const update = {
    user_id: userId,
    is_premium: isPremium,
    updated_at: new Date().toISOString(),
    premium_expires_at: expiresAt
  };
  // Use UPSERT so row is created if it doesn't exist yet
  const res = await fetch(`${SUPABASE_URL}/rest/v1/user_progress`, {
    method: 'POST',
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates,return=representation'
    },
    body: JSON.stringify(update)
  });
  const text = await res.text();
  console.log('Supabase UPSERT status:', res.status, 'body:', text);
}

async function storePendingPremium(email, serviceKey) {
  await fetch(`${SUPABASE_URL}/rest/v1/pending_premium`, {
    method: 'POST',
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ email: email.toLowerCase(), created_at: new Date().toISOString() })
  });
}

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
  const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const rawBody = await getRawBody(req);
  const signature = req.headers['stripe-signature'];

  if (!verifyStripeSignature(rawBody, signature, WEBHOOK_SECRET)) {
    console.error('Invalid Stripe signature');
    return res.status(400).json({ error: 'Invalid signature' });
  }

  const event = JSON.parse(rawBody);
  console.log('Webhook event:', event.type);

  let email = null;
  let isPremium = null;
  let expiresAt = null;

  if (event.type === 'invoice.payment_succeeded') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    isPremium = true;
    const periodEnd = event.data.object.lines?.data?.[0]?.period?.end;
    expiresAt = periodEnd ? new Date(periodEnd * 1000).toISOString() : null;
  } else if (event.type === 'customer.subscription.deleted') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    const periodEnd = event.data.object.current_period_end;
    expiresAt = periodEnd ? new Date(periodEnd * 1000).toISOString() : null;
    isPremium = expiresAt && new Date(expiresAt) > new Date() ? true : false;
    console.log(`Subscription cancelled - access until: ${expiresAt}`);
  } else if (event.type === 'invoice.payment_failed') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    isPremium = false;
    expiresAt = null;
  }

  if (email && isPremium !== null) {
    const user = await getUserByEmail(email, SERVICE_KEY);
    if (user) {
      await setUserPremium(user.id, isPremium, SERVICE_KEY, expiresAt);
      console.log(`Set is_premium=${isPremium} expires=${expiresAt} for ${email}`);
    } else {
      await storePendingPremium(email, SERVICE_KEY);
      console.log(`No user found - stored pending premium for ${email}`);
    }
  }

  res.json({ received: true });
}
