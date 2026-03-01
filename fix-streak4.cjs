const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\r\n');

// Find exact lines
let streakCommentIdx = -1;
let closingBraceIdx = -1; // The } that closes if (!completed.includes)

for (let i = 3030; i < 3080; i++) {
  if (lines[i] && lines[i].includes('// Update streak when completing a lesson')) {
    streakCommentIdx = i;
    console.log(`Found streak comment at line ${i + 1}: ${lines[i]}`);
  }
}

if (streakCommentIdx === -1) {
  console.log('ERROR: streak comment not found');
  process.exit(1);
}

// From streak comment, scan forward to find the closing } of if (!completed.includes)
// This will be a line with just spaces and }
for (let i = streakCommentIdx + 15; i < streakCommentIdx + 35; i++) {
  if (lines[i] && lines[i].match(/^\s{18}}$/)) {
    closingBraceIdx = i;
    console.log(`Found closing brace at line ${i + 1}: "${lines[i]}"`);
    break;
  }
}

if (closingBraceIdx === -1) {
  console.log('ERROR: closing brace not found');
  // Print lines around streak for debugging
  for (let i = streakCommentIdx; i < streakCommentIdx + 35; i++) {
    console.log(`${i+1}: "${lines[i]}"`);
  }
  process.exit(1);
}

// Replace from streakCommentIdx to closingBraceIdx with:
// 1. Close the if (!completed.includes) block
// 2. Streak logic outside with fixed date
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

lines.splice(streakCommentIdx, closingBraceIdx - streakCommentIdx + 1, ...newLines);

fs.writeFileSync(filePath, lines.join('\r\n'), 'utf8');
console.log('SUCCESS: Streak logic fixed');
