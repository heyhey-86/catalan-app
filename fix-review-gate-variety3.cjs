const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Detect line ending
const crlf = content.includes('\r\n');
const le = crlf ? '\r\n' : '\n';
console.log('Line ending:', crlf ? 'CRLF' : 'LF');

let changed = 0;

// ─── CHANGE 3: Update handleReviewGateAnswer isCorrect check ───
const old3 = `    const isCorrect = answer === currentWord.ca;${le}    setSelectedReviewGateAnswer(answer);`;
const new3 = `    const isCorrect = reviewGateQuestionType === 'ca_to_en'${le}      ? answer === currentWord.en${le}      : answer === currentWord.ca;${le}    setSelectedReviewGateAnswer(answer);`;

if (content.includes(old3)) {
  content = content.replace(old3, new3);
  changed++;
  console.log('Change 3 done: answer check updated');
} else {
  console.log('WARNING: Change 3 not found');
}

// ─── CHANGE 2: Update startReviewGate first options + add type assignment ───
const old2 = `    const firstWord = shuffled[0];${le}    const otherWords = words.filter(w => w.ca !== firstWord.ca);${le}    const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);${le}    setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));${le}    setReviewGateActive(true);${le}    setView('reviewGate');${le}  };`;

const new2 = `    const firstWord = shuffled[0];${le}    // Pre-assign question types per question (tiers 35+ get mixed types)${le}    const questionCount2 = comprehensive ? 20 : 10;${le}    const types = Array.from({ length: questionCount2 }, () => {${le}      if (tier >= 35) return Math.random() > 0.5 ? 'en_to_ca' : 'ca_to_en';${le}      return 'en_to_ca';${le}    });${le}    setReviewGateQuestionTypes(types);${le}    const firstType = types[0];${le}    setReviewGateQuestionType(firstType);${le}    if (firstType === 'ca_to_en') {${le}      const otherWords = words.filter(w => w.en !== firstWord.en);${le}      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);${le}      setReviewGateOptions([firstWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));${le}    } else {${le}      const otherWords = words.filter(w => w.ca !== firstWord.ca);${le}      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);${le}      setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));${le}    }${le}    setReviewGateActive(true);${le}    setView('reviewGate');${le}  };`;

if (content.includes(old2)) {
  content = content.replace(old2, new2);
  changed++;
  console.log('Change 2 done: startReviewGate updated');
} else {
  console.log('WARNING: Change 2 not found');
}

// ─── CHANGE 5: Update next question generation ───
const old5 = `      const nextWord = reviewGateWords[nextIndex];${le}      const allTierWords = getWordsFromTier(reviewGateTier);${le}      const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);${le}      const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);${le}      setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));`;

const new5 = `      const nextWord = reviewGateWords[nextIndex];${le}      const nextType = reviewGateQuestionTypes[nextIndex] || 'en_to_ca';${le}      setReviewGateQuestionType(nextType);${le}      const allTierWords = getWordsFromTier(reviewGateTier);${le}      if (nextType === 'ca_to_en') {${le}        const otherWords = allTierWords.filter(w => w.en !== nextWord.en);${le}        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.en);${le}        setReviewGateOptions([nextWord.en, ...wrongAnswers].sort(() => Math.random() - 0.5));${le}      } else {${le}        const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);${le}        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);${le}        setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));${le}      }`;

if (content.includes(old5)) {
  content = content.replace(old5, new5);
  changed++;
  console.log('Change 5 done: next question generation updated');
} else {
  console.log('WARNING: Change 5 not found');
}

if (changed === 0) {
  console.log('ERROR: No changes made');
  process.exit(1);
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\nSUCCESS: ${changed} changes made`);
