// Achievement/Badge System for Catalan Learning App

export const ACHIEVEMENTS = [
  // LEARNING MILESTONES
  {
    id: 'first_lesson',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: '🎯',
    category: 'Learning',
    condition: (data) => data.completed.length >= 1,
    points: 50
  },
  {
    id: 'five_lessons',
    title: 'Getting Started',
    description: 'Complete 5 lessons',
    icon: '📚',
    category: 'Learning',
    condition: (data) => data.completed.length >= 5,
    points: 100
  },
  {
    id: 'ten_lessons',
    title: 'Dedicated Learner',
    description: 'Complete 10 lessons',
    icon: '🌟',
    category: 'Learning',
    condition: (data) => data.completed.length >= 10,
    points: 200
  },
  {
    id: 'twenty_lessons',
    title: 'Committed Student',
    description: 'Complete 20 lessons',
    icon: '🏆',
    category: 'Learning',
    condition: (data) => data.completed.length >= 20,
    points: 300
  },
  {
    id: 'all_lessons',
    title: 'Course Complete!',
    description: 'Complete all 30 lessons',
    icon: '👑',
    category: 'Learning',
    condition: (data) => data.completed.length >= 30,
    points: 500
  },

  // STREAK BADGES
  {
    id: 'streak_3',
    title: 'On a Roll',
    description: 'Maintain a 3-day streak',
    icon: '🔥',
    category: 'Streaks',
    condition: (data) => data.reviewStreak >= 3,
    points: 75
  },
  {
    id: 'streak_7',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: '💪',
    category: 'Streaks',
    condition: (data) => data.reviewStreak >= 7,
    points: 150
  },
  {
    id: 'streak_14',
    title: 'Fortnight Fighter',
    description: 'Maintain a 14-day streak',
    icon: '⚡',
    category: 'Streaks',
    condition: (data) => data.reviewStreak >= 14,
    points: 300
  },
  {
    id: 'streak_30',
    title: 'Monthly Master',
    description: 'Maintain a 30-day streak',
    icon: '🌙',
    category: 'Streaks',
    condition: (data) => data.reviewStreak >= 30,
    points: 500
  },

  // VOCABULARY BADGES
  {
    id: 'words_25',
    title: 'Vocabulary Builder',
    description: 'Learn 25 words',
    icon: '📝',
    category: 'Vocabulary',
    condition: (data) => data.wordHistory.length >= 25,
    points: 50
  },
  {
    id: 'words_50',
    title: 'Word Collector',
    description: 'Learn 50 words',
    icon: '📖',
    category: 'Vocabulary',
    condition: (data) => data.wordHistory.length >= 50,
    points: 100
  },
  {
    id: 'words_100',
    title: 'Centurion',
    description: 'Learn 100 words',
    icon: '💯',
    category: 'Vocabulary',
    condition: (data) => data.wordHistory.length >= 100,
    points: 200
  },
  {
    id: 'words_200',
    title: 'Lexicon Legend',
    description: 'Learn 200 words',
    icon: '🧠',
    category: 'Vocabulary',
    condition: (data) => data.wordHistory.length >= 200,
    points: 400
  },

  // CHALLENGE BADGES
  {
    id: 'first_challenge',
    title: 'Challenge Accepted',
    description: 'Complete your first daily challenge',
    icon: '🎮',
    category: 'Challenges',
    condition: (data) => (data.challengeHistory || []).filter(h => h.completed === true).length >= 1,
    points: 50
  },
  {
    id: 'seven_challenges',
    title: 'Challenge Champion',
    description: 'Complete 7 daily challenges',
    icon: '🏅',
    category: 'Challenges',
    condition: (data) => (data.challengeHistory || []).filter(h => h.completed === true).length >= 7,
    points: 200
  },
  {
    id: 'thirty_challenges',
    title: 'Challenge Master',
    description: 'Complete 30 daily challenges',
    icon: '🎖️',
    category: 'Challenges',
    condition: (data) => (data.challengeHistory || []).filter(h => h.completed === true).length >= 30,
    points: 500
  },

  // CONVERSATION BADGES
  {
    id: 'first_conversation',
    title: 'Conversation Starter',
    description: 'Complete your first conversation',
    icon: '💬',
    category: 'Social',
    condition: (data) => data.completedConversations.length >= 1,
    points: 50
  },
  {
    id: 'five_conversations',
    title: 'Chatterbox',
    description: 'Complete 5 conversations',
    icon: '🗣️',
    category: 'Social',
    condition: (data) => data.completedConversations.length >= 5,
    points: 150
  },
  {
    id: 'all_conversations',
    title: 'Social Butterfly',
    description: 'Complete all 10 conversations',
    icon: '🦋',
    category: 'Social',
    condition: (data) => data.completedConversations.length >= 10,
    points: 300
  },

  // SPECIAL BADGES
  {
    id: 'high_scorer',
    title: 'High Scorer',
    description: 'Earn 1000 total points',
    icon: '⭐',
    category: 'Special',
    condition: (data) => data.score >= 1000,
    points: 100
  }
];

// Get all unlocked achievements for a user
export const getUnlockedAchievements = (userData) => {
  if (!userData) return [];
  
  return ACHIEVEMENTS.filter(achievement => {
    try {
      return achievement.condition(userData);
    } catch (e) {
      return false;
    }
  });
};

// Get newly unlocked achievements (compare before/after)
export const getNewlyUnlocked = (previousData, currentData) => {
  const previousUnlocked = getUnlockedAchievements(previousData).map(a => a.id);
  const currentUnlocked = getUnlockedAchievements(currentData);
  
  return currentUnlocked.filter(a => !previousUnlocked.includes(a.id));
};

// Get achievement progress for display
export const getAchievementProgress = (achievement, userData) => {
  if (!userData) return { current: 0, target: 0, percentage: 0 };
  
  const progressMap = {
    'first_lesson': { current: userData.completed?.length || 0, target: 1 },
    'five_lessons': { current: userData.completed?.length || 0, target: 5 },
    'ten_lessons': { current: userData.completed?.length || 0, target: 10 },
    'twenty_lessons': { current: userData.completed?.length || 0, target: 20 },
    'all_lessons': { current: userData.completed?.length || 0, target: 30 },
    'streak_3': { current: userData.reviewStreak || 0, target: 3 },
    'streak_7': { current: userData.reviewStreak || 0, target: 7 },
    'streak_14': { current: userData.reviewStreak || 0, target: 14 },
    'streak_30': { current: userData.reviewStreak || 0, target: 30 },
    'words_25': { current: userData.wordHistory?.length || 0, target: 25 },
    'words_50': { current: userData.wordHistory?.length || 0, target: 50 },
    'words_100': { current: userData.wordHistory?.length || 0, target: 100 },
    'words_200': { current: userData.wordHistory?.length || 0, target: 200 },
    'first_challenge': { current: userData.challengeHistory?.filter(h => h.completed).length || 0, target: 1 },
    'seven_challenges': { current: userData.challengeHistory?.filter(h => h.completed).length || 0, target: 7 },
    'thirty_challenges': { current: userData.challengeHistory?.filter(h => h.completed).length || 0, target: 30 },
    'first_conversation': { current: userData.completedConversations?.length || 0, target: 1 },
    'five_conversations': { current: userData.completedConversations?.length || 0, target: 5 },
    'all_conversations': { current: userData.completedConversations?.length || 0, target: 10 },
    'high_scorer': { current: userData.score || 0, target: 1000 }
  };
  
  const progress = progressMap[achievement.id] || { current: 0, target: 1 };
  progress.percentage = Math.min(100, Math.round((progress.current / progress.target) * 100));
  
  return progress;
};

// Group achievements by category
export const getAchievementsByCategory = () => {
  const categories = {};
  ACHIEVEMENTS.forEach(a => {
    if (!categories[a.category]) {
      categories[a.category] = [];
    }
    categories[a.category].push(a);
  });
  return categories;
};