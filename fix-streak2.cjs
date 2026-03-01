const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find the line with "Update streak when completing a lesson"
let streakCommentLine = -1;
let newLessonIfLine = -1;
let streakEndLine = -1;
let closingBraceLine = -1;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('if (!completed.includes(currentLesson.id))') && newLessonIfLine === -1) {
    // Make sure this is the right one (in the button onClick, not elsewhere)
    if (i > 3000) {
      newLessonIfLine = i;
    }
  }
  if (newLessonIfLine !== -1 && lines[i].includes('Update streak when completing a lesson')) {
    streakCommentLine = i;
  }
  if (streakCommentLine !== -1 && lines[i].trim() === '}' && streakEndLine === -1) {
    // This should be the closing } of the if (!completed.includes) block
    streakEndLine = i;
    break;
  }
}

console.log(`newLessonIfLine: ${newLessonIfLine + 1}`);
console.log(`streakCommentLine: ${streakCommentLine + 1}`);
console.log(`streakEndLine: ${streakEndLine + 1}`);

if (newLessonIfLine === -1 || streakCommentLine === -1 || streakEndLine === -1) {
  console.log('ERROR: Could not find required lines');
  process.exit(1);
}

// Replace from streakCommentLine to streakEndLine with:
// 1. Close the if (!completed.includes) block before streak
// 2. Streak logic outside, with fixed date format
const newLines = [
  '                  }',
  '                  // Update streak on any lesson completion (new or replayed)',
  '                  const now = new Date();',
  "                  const today = now.getFullYear() + '-' + String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');",
  '                  if (lastReviewDate !== today) {',
  '                    if (lastReviewDate) {',
  '                      const lastDate = new Date(lastReviewDate);',
  '                      const todayDate = new Date(today);',
  '                      const diffDays = Math.round((todayDate - lastDate) / (1000 * 60 * 60 * 24));',
  '                      if (diffDays === 1) {',
  '                        const newStreak = reviewStreak + 1;',
  '                        setReviewStreak(newStreak);',
  '                        setStreakCelebrationData({',
  '                          streak: newStreak,',
  '                          isMilestone: [7, 14, 30, 50, 100].includes(newStreak)',
  '                        });',
  '                        setShowStreakCelebration(true);',
  '                      } else if (diffDays > 1) {',
  '                        setReviewStreak(1);',
  '                      }',
  '                    } else {',
  '                      setReviewStreak(1);',
  '                    }',
  '                    setLastReviewDate(today);',
  '                  }',
];

// Remove from streakCommentLine to streakEndLine and insert new lines
lines.splice(streakCommentLine, streakEndLine - streakCommentLine + 1, ...newLines);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Streak logic fixed');
