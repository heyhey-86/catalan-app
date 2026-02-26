const fs = require('fs');
let c = fs.readFileSync('src/App.jsx', 'utf8');

// Add to flashcards - before the closing </div> of flashcards section
c = c.replace(
  "              </div>\n            </div>\n          )}\n\n          {lessonStage === 'match'",
  "              </div>\n              <ReportButton lessonTitle={currentLesson.title} questionText={currentLesson.words[currentCardIndex]?.en} />\n            </div>\n          )}\n\n          {lessonStage === 'match'"
);

// Add to match - before closing of match section
c = c.replace(
  "\"Perfect! All matched! ???\"",
  "\"Perfect! All matched! \""
);

// Add to quiz - always visible, before feedback block
c = c.replace(
  "                {quizFeedback && (\n  <div",
  "                <ReportButton lessonTitle={currentLesson.title} questionText={quizWords[quizIndex]?.en} />\n                {quizFeedback && (\n  <div"
);

fs.writeFileSync('src/App.jsx', c, 'utf8');
console.log('done');
