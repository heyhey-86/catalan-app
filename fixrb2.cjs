const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');
c = c.replace(
  "import { FillInTheBlank, SentenceOrdering, ListenAndType, MiniConversation, ErrorCorrection } from './LessonStages.jsx';",
  "import { FillInTheBlank, SentenceOrdering, ListenAndType, MiniConversation, ErrorCorrection, ReportButton } from './LessonStages.jsx';"
);
fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
