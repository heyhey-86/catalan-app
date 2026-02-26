const fs = require('fs');
let c = fs.readFileSync('src/LessonStages.jsx', 'utf8');
c = c.replace(
  'className="flex items-center justify-center text-xs text-gray-400 hover:text-gray-600 mt-3"',
  'className="flex items-center justify-center w-full text-xs text-gray-400 hover:text-gray-600 mt-3"'
);
fs.writeFileSync('src/LessonStages.jsx', c, 'utf8');
console.log('done');
