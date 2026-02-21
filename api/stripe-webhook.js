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
  const res = await fetch(`${SUPABASE_URL}/auth/v1/admin/users`, {
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`
    }
  });
  const data = await res.json();
  return (data.users || []).find(u => u.email?.toLowerCase() === email.toLowerCase());
}

async function setUserPremium(userId, isPremium, serviceKey) {
  await fetch(`${SUPABASE_URL}/rest/v1/user_progress?user_id=eq.${userId}`, {
    method: 'PATCH',
    headers: {
      'apikey': serviceKey,
      'Authorization': `Bearer ${serviceKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    },
    body: JSON.stringify({ is_premium: isPremium, updated_at: new Date().toISOString() })
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

  if (event.type === 'checkout.session.completed') {
    email = event.data.object.customer_email || event.data.object.customer_details?.email;
    isPremium = true;
  } else if (event.type === 'invoice.payment_succeeded') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    isPremium = true;
  } else if (event.type === 'customer.subscription.deleted') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    isPremium = false;
  } else if (event.type === 'invoice.payment_failed') {
    email = await getEmailFromCustomer(event.data.object.customer, STRIPE_KEY);
    isPremium = false;
  }

  if (email && isPremium !== null) {
    const user = await getUserByEmail(email, SERVICE_KEY);
    if (user) {
      await setUserPremium(user.id, isPremium, SERVICE_KEY);
      console.log(`Set is_premium=${isPremium} for ${email}`);
    } else {
      console.log(`No user found for email: ${email}`);
    }
  }

  res.json({ received: true });
}