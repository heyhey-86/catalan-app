// New challenge every 24 hours at midnight

export const CHALLENGE_TYPES = {
  TRANSLATE: 'translate',
  MATCH: 'match',
  CONVERSATIONS: 'conversations',
  REVIEW: 'review'
};

// Challenge definitions - cycles through these
// ALL words and sentences use ONLY vocabulary from the 30 lessons
export const CHALLENGES = [
  {
    id: 1,
    type: CHALLENGE_TYPES.TRANSLATE,
    title: "Speed Translator",
    description: "Translate 10 sentences in 3 minutes",
    icon: "⚡",
    timeLimit: 180,
    targetCount: 10,
    points: 100,
    difficulty: "Easy",
    sentences: [
      { en: "Hello", ca: "Hola" },
      { en: "Good morning", ca: "Bon dia" },
      { en: "Good afternoon", ca: "Bona tarda" },
      { en: "Thank you", ca: "Gràcies" },
      { en: "Please", ca: "Si us plau" },
      { en: "Yes", ca: "Sí" },
      { en: "No", ca: "No" },
      { en: "Water", ca: "Aigua" },
      { en: "Goodbye", ca: "Adéu" },
      { en: "See you later", ca: "Fins després" }
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
      { en: "Hello", ca: "Hola" },
      { en: "Thank you", ca: "Gràcies" },
      { en: "Water", ca: "Aigua" },
      { en: "Beer", ca: "Cervesa" },
      { en: "Wine", ca: "Vi" },
      { en: "Store", ca: "Botiga" },
      { en: "Market", ca: "Mercat" },
      { en: "Left", ca: "Esquerra" },
      { en: "Right", ca: "Dreta" },
      { en: "Street", ca: "Carrer" },
      { en: "Bus", ca: "Autobús" },
      { en: "Train", ca: "Tren" },
      { en: "Ticket", ca: "Bitllet" },
      { en: "Friend", ca: "Amic" },
      { en: "Breakfast", ca: "Esmorzar" },
      { en: "Lunch", ca: "Dinar" },
      { en: "Dinner", ca: "Sopar" },
      { en: "Help!", ca: "Ajuda!" },
      { en: "Money", ca: "Diners" },
      { en: "Bread", ca: "Pa" }
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
    id: 5,
    type: CHALLENGE_TYPES.TRANSLATE,
    title: "Quick Fire",
    description: "Translate at least 13 out of 15 sentences in 2 minutes",
    icon: "🔥",
    timeLimit: 120,
    targetCount: 15,
    passingScore: 13,
    points: 150,
    difficulty: "Hard",
    sentences: [
      { en: "Good morning", ca: "Bon dia" },
      { en: "Menu", ca: "Menú" },
      { en: "How much?", ca: "Quan costa?" },
      { en: "Expensive", ca: "Car" },
      { en: "Cheap", ca: "Barat" },
      { en: "Where is?", ca: "On és?" },
      { en: "Near", ca: "A prop" },
      { en: "Far", ca: "Lluny" },
      { en: "Pharmacy", ca: "Farmàcia" },
      { en: "Doctor", ca: "Metge" },
      { en: "Hungry", ca: "Tinc gana" },
      { en: "Cold", ca: "Fred" },
      { en: "Hot", ca: "Calent" },
      { en: "Card", ca: "Targeta" },
      { en: "Station", ca: "Estació" }
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
      { en: "Good", ca: "Bo" },
      { en: "Bad", ca: "Dolent" },
      { en: "Big", ca: "Gran" },
      { en: "Small", ca: "Petit" },
      { en: "New", ca: "Nou" },
      { en: "Old", ca: "Vell" },
      { en: "Beautiful", ca: "Bonic" },
      { en: "Mother", ca: "Mare" },
      { en: "Father", ca: "Pare" },
      { en: "Work", ca: "Feina" },
      { en: "Beach", ca: "Platja" },
      { en: "Mountain", ca: "Muntanya" },
      { en: "Happy", ca: "Feliç" },
      { en: "Now", ca: "Ara" },
      { en: "Tomorrow", ca: "Demà" }
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
