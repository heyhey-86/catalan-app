const fs = require('fs');
const path = require('path');

// ─── Fix LessonStages.jsx ───
const lessonStagesPath = path.join(process.cwd(), 'src', 'LessonStages.jsx');
let lsContent = fs.readFileSync(lessonStagesPath, 'utf8');
const lsLines = lsContent.split('\r\n');

// Find "fetch('/audio/mapping.json')" line
let fetchLineIdx = -1;
for (let i = 0; i < lsLines.length; i++) {
  if (lsLines[i].trim() === "fetch('/audio/mapping.json')") {
    fetchLineIdx = i;
    break;
  }
}

console.log(`LessonStages fetch line: ${fetchLineIdx + 1}`);

if (fetchLineIdx === -1) {
  console.log('ERROR: fetch line not found in LessonStages.jsx');
} else {
  // Replace lines fetchLineIdx to fetchLineIdx+3 with cached version
  const newLines = [
    `  const getMapping = _audioMappingCache`,
    `    ? Promise.resolve(_audioMappingCache)`,
    `    : fetch('/audio/mapping.json').then(r => r.json()).then(m => { _audioMappingCache = m; return m; });`,
    `  getMapping`,
    `    .then(mapping => {`,
    `      const staticPath = mapping[cacheKey];`,
  ];
  lsLines.splice(fetchLineIdx, 4, ...newLines);
  fs.writeFileSync(lessonStagesPath, lsLines.join('\r\n'), 'utf8');
  console.log('Fixed playAudio fetch in LessonStages.jsx');
}

// ─── Fix App.jsx ───
const appPath = path.join(process.cwd(), 'src', 'App.jsx');
let appContent = fs.readFileSync(appPath, 'utf8');
const appLines = appContent.split('\r\n');

// Find "const mapping = await fetch('/audio/mapping.json')" line
let appFetchLineIdx = -1;
for (let i = 0; i < appLines.length; i++) {
  if (appLines[i].includes("const mapping = await fetch('/audio/mapping.json')")) {
    appFetchLineIdx = i;
    break;
  }
}

console.log(`App.jsx fetch line: ${appFetchLineIdx + 1}`);

if (appFetchLineIdx === -1) {
  console.log('ERROR: fetch line not found in App.jsx');
} else {
  const newLines = [
    `      if (!_audioMappingCache) {`,
    `        _audioMappingCache = await fetch('/audio/mapping.json').then(r => r.json());`,
    `      }`,
    `      const staticPath = _audioMappingCache[cacheKey];`,
  ];
  // Remove lines appFetchLineIdx and appFetchLineIdx+1, replace with new lines
  appLines.splice(appFetchLineIdx, 2, ...newLines);
  fs.writeFileSync(appPath, appLines.join('\r\n'), 'utf8');
  console.log('Fixed speakWord fetch in App.jsx');
}

console.log('\nDone.');
