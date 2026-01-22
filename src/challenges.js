// New challenge every 24 hours at midnight

export const CHALLENGE_TYPES = {
  TRANSLATE: 'translate',
  MATCH: 'match',
  CONVERSATIONS: 'conversations',
  REVIEW: 'review'
};

// Challenge definitions - cycles through these
export const CHALLENGES = [
  {
    id: 1,
    type: CHALLENGE_TYPES.TRANSLATE,
    title: "Speed Translator",
    description: "Translate 10 sentences in 3 minutes",
    icon: "⚡",
    timeLimit: 180, // seconds
    targetCount: 10,
    points: 100,
    difficulty: "Easy",
    sentences: [
      { en: "Hello, how are you?", ca: "Hola, com estàs?" },
      { en: "Good morning", ca: "Bon dia" },
      { en: "Thank you very much", ca: "Moltes gràcies" },
      { en: "Where is the bathroom?", ca: "On és el bany?" },
      { en: "I would like water", ca: "Voldria aigua" },
      { en: "How much does it cost?", ca: "Quan costa?" },
      { en: "See you later", ca: "Fins després" },
      { en: "I don't understand", ca: "No entenc" },
      { en: "Can you help me?", ca: "Pots ajudar-me?" },
      { en: "I'm sorry", ca: "Ho sento" }
    ]
  },
  {
    id: 2,
    type: CHALLENGE_TYPES.MATCH,
    title: "Memory Master",
    description: "Match 20 word pairs in 2 minutes",
    icon: "🧠",
    timeLimit: 120,
    targetCount: 20,
    points: 100,
    difficulty: "Medium",
    words: [
      { en: "Cat", ca: "Gat" },
      { en: "Dog", ca: "Gos" },
      { en: "House", ca: "Casa" },
      { en: "Car", ca: "Cotxe" },
      { en: "Book", ca: "Llibre" },
      { en: "Table", ca: "Taula" },
      { en: "Chair", ca: "Cadira" },
      { en: "Window", ca: "Finestra" },
      { en: "Door", ca: "Porta" },
      { en: "Street", ca: "Carrer" },
      { en: "City", ca: "Ciutat" },
      { en: "Country", ca: "País" },
      { en: "Friend", ca: "Amic" },
      { en: "Family", ca: "Família" },
      { en: "Work", ca: "Feina" },
      { en: "School", ca: "Escola" },
      { en: "Food", ca: "Menjar" },
      { en: "Water", ca: "Aigua" },
      { en: "Coffee", ca: "Cafè" },
      { en: "Tea", ca: "Te" }
    ]
  },
  {
    id: 3,
    type: CHALLENGE_TYPES.CONVERSATIONS,
    title: "Conversation Champion",
    description: "Complete 3 full conversations",
    icon: "💬",
    timeLimit: null,
    targetCount: 3,
    points: 150,
    difficulty: "Medium"
  },
  {
    id: 4,
    type: CHALLENGE_TYPES.REVIEW,
    title: "Perfect Review",
    description: "Review 15 words with 100% accuracy",
    icon: "🎯",
    timeLimit: null,
    targetCount: 15,
    points: 120,
    difficulty: "Hard"
  },
  {
    id: 5,
    type: CHALLENGE_TYPES.TRANSLATE,
    title: "Quick Fire",
    description: "Translate 15 sentences in 2 minutes",
    icon: "🔥",
    timeLimit: 120,
    targetCount: 15,
    points: 150,
    difficulty: "Hard",
    sentences: [
      { en: "Good afternoon", ca: "Bona tarda" },
      { en: "Good night", ca: "Bona nit" },
      { en: "Please", ca: "Si us plau" },
      { en: "Excuse me", ca: "Perdoni" },
      { en: "I'm hungry", ca: "Tinc gana" },
      { en: "I'm thirsty", ca: "Tinc set" },
      { en: "What time is it?", ca: "Quina hora és?" },
      { en: "I'm lost", ca: "Estic perdut" },
      { en: "Call the police", ca: "Truqui a la policia" },
      { en: "Where do you live?", ca: "On vius?" },
      { en: "I love you", ca: "T'estimo" },
      { en: "Happy birthday", ca: "Feliç aniversari" },
      { en: "Congratulations", ca: "Felicitats" },
      { en: "Have a good day", ca: "Que tinguis un bon dia" },
      { en: "Nice to meet you", ca: "Encantat de conèixer-te" }
    ]
  },
  {
    id: 6,
    type: CHALLENGE_TYPES.MATCH,
    title: "Speed Matcher",
    description: "Match 15 pairs in 90 seconds",
    icon: "⏱️",
    timeLimit: 90,
    targetCount: 15,
    points: 120,
    difficulty: "Hard",
    words: [
      { en: "Big", ca: "Gran" },
      { en: "Small", ca: "Petit" },
      { en: "Hot", ca: "Calent" },
      { en: "Cold", ca: "Fred" },
      { en: "New", ca: "Nou" },
      { en: "Old", ca: "Vell" },
      { en: "Good", ca: "Bo" },
      { en: "Bad", ca: "Dolent" },
      { en: "Beautiful", ca: "Bonic" },
      { en: "Ugly", ca: "Lleig" },
      { en: "Fast", ca: "Ràpid" },
      { en: "Slow", ca: "Lent" },
      { en: "Happy", ca: "Feliç" },
      { en: "Sad", ca: "Trist" },
      { en: "Easy", ca: "Fàcil" }
    ]
  },
  {
    id: 7,
    type: CHALLENGE_TYPES.CONVERSATIONS,
    title: "Social Butterfly",
    description: "Complete 5 conversations perfectly",
    icon: "🦋",
    timeLimit: null,
    targetCount: 5,
    points: 200,
    difficulty: "Hard"
  }
];

// Get today's challenge based on date
export const getTodayChallenge = () => {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const challengeIndex = dayOfYear % CHALLENGES.length;
  return CHALLENGES[challengeIndex];
};

// Check if challenge was completed today
export const wasChallengeCompletedToday = (challengeHistory) => {
  if (!challengeHistory || challengeHistory.length === 0) return false;
  
  const today = new Date().toDateString();
  const lastCompletion = challengeHistory[challengeHistory.length - 1];
  return lastCompletion.date === today;
};

// Calculate challenge streak
export const getChallengeStreak = (challengeHistory) => {
  if (!challengeHistory || challengeHistory.length === 0) return 0;
  
  let streak = 0;
  const today = new Date();
  
  for (let i = challengeHistory.length - 1; i >= 0; i--) {
    const completionDate = new Date(challengeHistory[i].date);
    const expectedDate = new Date(today);
    expectedDate.setDate(expectedDate.getDate() - streak);
    
    if (completionDate.toDateString() === expectedDate.toDateString()) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
};

// Get time until next challenge (midnight)
export const getTimeUntilNextChallenge = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);
  
  const diff = tomorrow - now;
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  
  return { hours, minutes, total: diff };
};
