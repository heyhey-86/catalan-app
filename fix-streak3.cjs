const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// We know the streak comment is at line 3041 (index 3040)
// Find the closing } of the if (!completed.includes) block from there
const streakCommentLine = 3040; // 0-indexed

// Find the closing } by scanning forward
let streakEndLine = -1;
for (let i = streakCommentLine; i < lines.length; i++) {
  if (lines[i].trim() === '}' && i > streakCommentLine + 10) {
    streakEndLine = i;
    break;
  }
}

console.log(`Streak comment at line: ${streakCommentLine + 1}`);
console.log(`Streak block ends at line: ${streakEndLine + 1}`);
console.log(`Lines to replace: ${lines[streakCommentLine]}`);
console.log(`Last line to replace: ${lines[streakEndLine]}`);

if (streakEndLine === -1) {
  console.log('ERROR: Could not find end of streak block');
  process.exit(1);
}

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

lines.splice(streakCommentLine, streakEndLine - streakCommentLine + 1, ...newLines);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Streak logic fixed');
