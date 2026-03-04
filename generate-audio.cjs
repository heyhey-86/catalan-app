// HolaCatalà — Audio Pre-generation Script
// Run from project root: node generate-audio.js
// Generates static MP3s for all Catalan audio into public/audio/
// Requires: VITE_ELEVENLABS_API_KEY in .env file

const fs = require('fs');
const path = require('path');
const https = require('https');
const crypto = require('crypto');

// --- CONFIG ---
const VOICE_ID = 'AxFLn9byyiDbMn5fmyqu';
const MODEL_ID = 'eleven_v3';
const OUTPUT_DIR = path.join(__dirname, 'public', 'audio');
const MAPPING_FILE = path.join(__dirname, 'public', 'audio', 'mapping.json');
const DELAY_MS = 500; // delay between API calls to avoid rate limiting

// Load API key from .env
require('fs').readFileSync('.env', 'utf8').split('\n').forEach(line => {
  const [key, val] = line.split('=');
  if (key && val) process.env[key.trim()] = val.trim();
});
const API_KEY = process.env.VITE_ELEVENLABS_API_KEY;

if (!API_KEY) {
  console.error('❌ No API key found. Make sure VITE_ELEVENLABS_API_KEY is in your .env file');
  process.exit(1);
}

// --- HELPERS ---
function textToFilename(text) {
  // Create a short hash from the text for a clean filename
  return crypto.createHash('md5').update(text.trim().toLowerCase()).digest('hex') + '.mp3';
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function callElevenLabs(text) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      text: text,
      model_id: MODEL_ID,
      language_code: 'es',
      voice_settings: { stability: 1.0, similarity_boost: 1.0 }
    });

    const options = {
      hostname: 'api.elevenlabs.io',
      path: `/v1/text-to-speech/${VOICE_ID}`,
      method: 'POST',
      headers: {
        'Accept': 'audio/mpeg',
        'Content-Type': 'application/json',
        'xi-api-key': API_KEY,
        'Content-Length': Buffer.byteLength(body)
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode !== 200) {
        let errBody = '';
        res.on('data', chunk => errBody += chunk);
        res.on('end', () => reject(new Error(`API error ${res.statusCode}: ${errBody}`)));
        return;
      }
      const chunks = [];
      res.on('data', chunk => chunks.push(chunk));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    });

    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

// --- EXTRACT ALL CATALAN STRINGS FROM LESSONS ---
function extractStrings() {
  const strings = new Set();

  // Read lessons50.js as text and extract Catalan content
  const lessonsContent = fs.readFileSync('src/lessons50.js', 'utf8');
  const lessons100Content = fs.existsSync('src/lessons100.js') ? fs.readFileSync('src/lessons100.js', 'utf8') : '';
  const lessons120Content = fs.existsSync('src/lessons120.js') ? fs.readFileSync('src/lessons120.js', 'utf8') : '';
  const lessons140Content = fs.existsSync('src/lessons140.js') ? fs.readFileSync('src/lessons140.js', 'utf8') : '';
  const allLessonsContent = lessonsContent + '\n' + lessons100Content + '\n' + lessons120Content + '\n' + lessons140Content;
  const conversationsContent = fs.readFileSync('src/conversations.js', 'utf8');
  const challengesContent = fs.existsSync('src/challenges.js') ? fs.readFileSync('src/challenges.js', 'utf8') : '';

  // Extract from flashcard words: ca: "..."
  const caPattern = /\bca:\s*["']([^"']+)["']/g;
  let match;
  while ((match = caPattern.exec(allLessonsContent)) !== null) {
    strings.add(match[1].trim());
  }
  while ((match = caPattern.exec(conversationsContent)) !== null) {
    strings.add(match[1].trim());
  }

  // Extract from listenAndType: catalan: "..."
  const catalanPattern = /\bcatalan:\s*["']([^"']+)["']/g;
  while ((match = catalanPattern.exec(allLessonsContent)) !== null) {
    strings.add(match[1].trim());
  }

  // Extract from sentence ordering: correctOrder: "..."
  const orderPattern = /\bcorrectOrder:\s*["']([^"']+)["']/g;
  while ((match = orderPattern.exec(allLessonsContent)) !== null) {
    strings.add(match[1].trim());
  }

  // Extract error correction sentences: sentence: "..."
  const sentencePattern = /\bsentence:\s*["']([^"']+)["']/g;
  while ((match = sentencePattern.exec(allLessonsContent)) !== null) {
    strings.add(match[1].trim());
  }

  // Extract miniConversation NPC text: fields from lessons
  const miniTextPattern = /\btext:\s*["']([^"']+)["']/g;
  while ((match = miniTextPattern.exec(allLessonsContent)) !== null) {
    const t = match[1].trim();
    if (t.length > 0 && t.length < 200) strings.add(t);
  }

  // Extract miniConversation OPTIONS (user selectable responses - these get played too)
  const optionsPattern = /options:\s*\[([^\]]+)\]/g;
  while ((match = optionsPattern.exec(allLessonsContent)) !== null) {
    const optBlock = match[1];
    const strPattern = /["']([^"']{2,150})["']/g;
    let strMatch;
    while ((strMatch = strPattern.exec(optBlock)) !== null) {
      const t = strMatch[1].trim();
      if (!t.match(/^[A-Z][a-z]+ [A-Z]/) && t.length < 200) strings.add(t);
    }
  }
  // Extract storyMode story strings
  const storyPattern = /\bstory:\s*["']([^"']+)["']/g;
  while ((match = storyPattern.exec(allLessonsContent)) !== null) {
    strings.add(match[1].replace(/\[BLANK\]/g, '______').trim());
  }

  // Extract from conversations NPC lines: text: "..."
  const textPattern = /\btext:\s*["']([^"']+)["']/g;
  while ((match = textPattern.exec(conversationsContent)) !== null) {
    const t = match[1].trim();
    // Only include Catalan-looking text (skip English options)
    if (!t.match(/^[A-Z][a-z]+ [A-Z]/) && t.length < 200) {
      strings.add(t);
    }
  }

  // Extract challenge sentences
  const challengeCaPattern = /\bca:\s*["']([^"']+)["']/g;
  while ((match = challengeCaPattern.exec(challengesContent)) !== null) {
    strings.add(match[1].trim());
  }

  // Extract conversation wordBank items (plain string arrays)
  const wordBankPattern = /wordBank:\s*\[([^\]]+)\]/g;
  while ((match = wordBankPattern.exec(conversationsContent)) !== null) {
    const block = match[1];
    const itemPattern = /["']([^"']{2,150})["']/g;
    let item;
    while ((item = itemPattern.exec(block)) !== null) {
      strings.add(item[1].trim());
    }
  }

  // Extract fillInTheBlank completed sentences (sentence with blank filled in)
  const fibPattern = /sentence:\s*["']([^"']+)["'],\s*blank:\s*["']([^"']+)["']/g;
  while ((match = fibPattern.exec(allLessonsContent)) !== null) {
    const completed = match[1].replace('___', match[2]);
    strings.add(completed.trim());
  }

  // Extract errorCorrection corrected sentences (sentence with error word replaced by correct option)
  const ecPattern = /sentence:\s*["']([^"']+)["'][^}]*errorWordIndex:\s*(\d+)[^}]*options:\s*\[([^\]]+)\][^}]*correctIndex:\s*(\d+)/g;
  while ((match = ecPattern.exec(allLessonsContent)) !== null) {
    const words = match[1].trim().split(' ');
    const errorIdx = parseInt(match[2]);
    const options = match[3].match(/["']([^"']+)["']/g)?.map(s => s.replace(/["']/g, '')) || [];
    const correctIdx = parseInt(match[4]);
    if (options[correctIdx] && words[errorIdx] !== undefined) {
      words[errorIdx] = options[correctIdx];
      strings.add(words.join(' ').trim());
    }
  }
  
  return [...strings].filter(s => s.length > 0 && s.length < 300);
}

// --- MAIN ---
async function main() {
  console.log('🎵 HolaCatalà Audio Pre-generator\n');

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log('📁 Created public/audio/\n');
  }

  // Load existing mapping if any
  let mapping = {};
  if (fs.existsSync(MAPPING_FILE)) {
    mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
    console.log(`📋 Loaded existing mapping with ${Object.keys(mapping).length} entries\n`);
  }

  // Extract all strings
  const allStrings = extractStrings();
  console.log(`📝 Found ${allStrings.length} unique Catalan strings to generate\n`);

  // Filter out already generated
  const toGenerate = allStrings.filter(s => {
    const filename = textToFilename(s);
    const filepath = path.join(OUTPUT_DIR, filename);
    return !fs.existsSync(filepath);
  });

  console.log(`⚡ ${allStrings.length - toGenerate.length} already exist, generating ${toGenerate.length} new files\n`);

  if (toGenerate.length === 0) {
    console.log('✅ All audio files already exist!');
    return;
  }

  // Estimate character count
  const totalChars = toGenerate.reduce((sum, s) => sum + s.length, 0);
  console.log(`📊 Estimated characters: ${totalChars.toLocaleString()}\n`);
  console.log('Starting generation... (press Ctrl+C to stop safely at any time)\n');

  let generated = 0;
  let failed = 0;

  for (const text of toGenerate) {
    const filename = textToFilename(text);
    const filepath = path.join(OUTPUT_DIR, filename);

    try {
      process.stdout.write(`[${generated + 1}/${toGenerate.length}] Generating: "${text.substring(0, 50)}"... `);
      const audioBuffer = await callElevenLabs(text);
      fs.writeFileSync(filepath, audioBuffer);
      mapping[text.trim().toLowerCase()] = `/audio/${filename}`;
      generated++;
      console.log('✅');
    } catch (err) {
      console.log(`❌ Failed: ${err.message}`);
      failed++;
    }

    // Save mapping after every 10 files in case of interruption
    if (generated % 10 === 0) {
      fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
    }

    await delay(DELAY_MS);
  }

  // Final save of mapping
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));

  console.log(`\n✅ Done! Generated: ${generated}, Failed: ${failed}`);
  console.log(`📁 Files saved to: public/audio/`);
  console.log(`🗺️  Mapping saved to: public/audio/mapping.json`);
  console.log(`\nNext step: update speakWord in App.jsx to check static files first.`);
}

main().catch(console.error);

