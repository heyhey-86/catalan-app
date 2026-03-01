const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(process.cwd(), 'src', 'lessons100.js');
let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');

const targetLessons = [101, 105, 109, 113, 117];

for (const lessonId of targetLessons) {
  // Find the stages line for this lesson using regex
  const regex = new RegExp(`(id: ${lessonId},[\\s\\S]{1,200}?stages: \\[)([^\\]]+)(\\])`, '');
  const match = lessonsContent.match(regex);
  if (match) {
    const stagesContent = match[2];
    if (stagesContent.includes('quickFire')) {
      console.log(`Lesson ${lessonId}: already has quickFire`);
      continue;
    }
    // Insert quickFire before quiz, or before closing bracket if no quiz
    let newStages;
    if (stagesContent.includes("'quiz'")) {
      newStages = stagesContent.replace("'quiz'", "'quickFire', 'quiz'");
    } else {
      newStages = stagesContent.trimEnd() + ", 'quickFire'";
    }
    lessonsContent = lessonsContent.replace(match[0], match[1] + newStages + match[3]);
    console.log(`Lesson ${lessonId}: updated stages`);
  } else {
    console.log(`ERROR: Could not find lesson ${lessonId}`);
  }
}

fs.writeFileSync(lessonsPath, lessonsContent, 'utf8');
console.log('Done.');
