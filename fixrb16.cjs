const fs = require('fs');
let c = fs.readFileSync('src/LessonStages.jsx', 'utf8');
c = c.replace(
  'className="flex items-center justify-center w-full text-xs text-gray-400 hover:text-gray-600 mt-3"',
  'className="flex items-center justify-center w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 mx-auto"'
);
fs.writeFileSync('src/LessonStages.jsx', c, 'utf8');
console.log('done');
