export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text, source } = req.body;
    console.log(`MISSING_AUDIO [${source}]: ${text}`);
    res.status(200).json({ ok: true });
  } else {
    res.status(405).end();
  }
}