const fs = require('fs');
const path = require('path');

// ─── Fix LessonStages.jsx ───
const lessonStagesPath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let lsContent = fs.readFileSync(lessonStagesPath, 'utf8');
const lsLines = lsContent.split('\r\n');

// Add module-level cache variable after the first line (the comment)
const cacheVar = `let _audioMappingCache = null;`;
if (!lsContent.includes('_audioMappingCache')) {
  lsLines.splice(1, 0, cacheVar);
  console.log('Added _audioMappingCache to LessonStages.jsx');
} else {
  console.log('_audioMappingCache already exists in LessonStages.jsx');
}

lsContent = lsLines.join('\r\n');

// Replace the fetch('/audio/mapping.json') block with cached version
const oldFetch = `  fetch('/audio/mapping.json')
    .then(r => r.json())
    .then(mapping => {
      const staticPath = mapping[cacheKey];`;

const newFetch = `  const getMapping = _audioMappingCache
    ? Promise.resolve(_audioMappingCache)
    : fetch('/audio/mapping.json').then(r => r.json()).then(m => { _audioMappingCache = m; return m; });
  getMapping
    .then(mapping => {
      const staticPath = mapping[cacheKey];`;

if (lsContent.includes(oldFetch)) {
  lsContent = lsContent.replace(oldFetch, newFetch);
  console.log('Fixed playAudio fetch in LessonStages.jsx');
} else {
  console.log('WARNING: Could not find fetch block in LessonStages.jsx');
}

fs.writeFileSync(lessonStagesPath, lsContent, 'utf8');

// ─── Fix App.jsx ───
const appPath = path.join(process.cwd(), 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');
const appLines = appContent.split('\r\n');

// Add module-level cache after imports (find last import line)
if (!appContent.includes('_audioMappingCache')) {
  let lastImportIdx = -1;
  for (let i = 0; i < 30; i++) {
    if (appLines[i] && appLines[i].startsWith('import ')) lastImportIdx = i;
  }
  appLines.splice(lastImportIdx + 1, 0, `let _audioMappingCache = null;`);
  appContent = appLines.join('\r\n');
  console.log(`Added _audioMappingCache to App.jsx after line ${lastImportIdx + 1}`);
} else {
  console.log('_audioMappingCache already exists in App.jsx');
}

// Replace the fetch mapping block in speakWord
const oldAppFetch = `      const mapping = await fetch('/audio/mapping.json').then(r => r.json());
      const staticPath = mapping[cacheKey];`;

const newAppFetch = `      if (!_audioMappingCache) {
        _audioMappingCache = await fetch('/audio/mapping.json').then(r => r.json());
      }
      const staticPath = _audioMappingCache[cacheKey];`;

if (appContent.includes(oldAppFetch)) {
  appContent = appContent.replace(oldAppFetch, newAppFetch);
  console.log('Fixed speakWord fetch in App.jsx');
} else {
  console.log('WARNING: Could not find fetch block in App.jsx');
}

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('\nSUCCESS: mapping.json now cached in memory after first fetch');
