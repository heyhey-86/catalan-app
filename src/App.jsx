import { useState, useEffect, useRef } from 'react';
import { supabase } from './supabase.js';
import Auth from './Auth.jsx';
import { CheckCircle, Lock, Award, Home, User, ArrowRight, RotateCw, BookOpen, Calendar, TrendingUp, MessageCircle, Clock, X, Trophy, Star, Volume2 } from 'lucide-react';
import { getWordsToReview, updateWordReview, initializeWordForReview } from './reviewSystem.js';
import { CONVERSATIONS } from './conversations.js';
import { FillInTheBlank, SentenceOrdering, ListenAndType, MiniConversation, ErrorCorrection } from './LessonStages.jsx';
import { lessons as lessons50 } from './lessons50.js';
import { getTodayChallenge, wasChallengeCompletedToday, getChallengeStreak, getTimeUntilNextChallenge, CHALLENGE_TYPES } from './challenges.js';
import { ACHIEVEMENTS, getUnlockedAchievements, getNewlyUnlocked, getAchievementProgress, getAchievementsByCategory } from './achievements.js';
import { Analytics } from '@vercel/analytics/react';
const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;
const ELEVENLABS_VOICE_ID = import.meta.env.VITE_ELEVENLABS_VOICE_ID;

const LESSONS = lessons50;

// REVIEW GATE: Define lesson tiers (groups of 3 lessons)
const LESSON_TIERS = [
  { tier: 1, lessons: [1, 2, 3] },
  { tier: 2, lessons: [4, 5, 6] },
  { tier: 3, lessons: [7, 8, 9] },
  { tier: 4, lessons: [10, 51, 52] },  // L10 + Bridge lessons
  { tier: 5, lessons: [53, 11, 12] },  // Numbers 11-20 + L11-12
  { tier: 6, lessons: [13, 14, 15] },
  { tier: 7, lessons: [16, 17, 18] },
  { tier: 8, lessons: [19, 20, 54] },  // L19-20 + Numbers 21-100
  { tier: 9, lessons: [21, 22, 23] },
  { tier: 10, lessons: [24, 25, 26] },
  { tier: 11, lessons: [27, 28, 29] },
  { tier: 12, lessons: [30, 31, 32] },
  { tier: 13, lessons: [33, 34, 35] },
  { tier: 14, lessons: [36, 37, 38] },
  { tier: 15, lessons: [39, 40, 41] },
  { tier: 16, lessons: [42, 43, 44] },
  { tier: 17, lessons: [45, 46, 47] },
  { tier: 18, lessons: [48, 49, 50] },
  { tier: 19, lessons: [55, 56, 57] },
  { tier: 20, lessons: [58, 59, 60] },
  { tier: 21, lessons: [61, 62, 63] },
  { tier: 22, lessons: [64, 65] },
];

// Helper: Get tier for a lesson ID
const getTierForLesson = (lessonId) => {
  const tierObj = LESSON_TIERS.find(t => t.lessons.includes(lessonId));
  return tierObj ? tierObj.tier : 1;
};

// Helper: Check if all lessons in a tier are completed
const isTierComplete = (tier, completedLessons) => {
  const tierObj = LESSON_TIERS.find(t => t.tier === tier);
  if (!tierObj) return false;
  return tierObj.lessons.every(lessonId => completedLessons.includes(lessonId));
};

// Helper: Get words from a tier's lessons
const getWordsFromTier = (tier) => {
  const tierObj = LESSON_TIERS.find(t => t.tier === tier);
  if (!tierObj) return [];
  const words = [];
  tierObj.lessons.forEach(lessonId => {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (lesson) {
      words.push(...lesson.words);
    }
  });
  return words;
};

// Helper: Get all words from tiers 1 through specified tier
const getAllWordsUpToTier = (tier) => {
  const words = [];
  for (let t = 1; t <= tier; t++) {
    words.push(...getWordsFromTier(t));
  }
  return words;
};

// Check if this is a comprehensive review point (every 9 lessons: 9, 18, 27, 36, 45...)
const isComprehensiveReviewPoint = (lessonId) => {
  return lessonId % 9 === 0;
};

// Premium activation tokens
const PREMIUM_TOKENS = {
  dev: 'HC_DEV_2026',           // Your personal testing token
  paid: 'HC_PAID_2026',         // Stripe redirects here after payment
  beta: 'HC_BETA_LIFE',         // 15 free-for-life beta testers
  betaDiscount: 'HC_BETA_50',   // Other beta testers (paid via Stripe with 50% off)
  betaExtended: 'HC_BETA_EXT_2026'  // Top 15 beta testers - extended access until Feb 14
};

// Obfuscated localStorage key for premium status
const PREMIUM_KEY = 'hc_sub_status';
const PREMIUM_VALUE = 'active_subscriber';

const isPremiumStored = () => {
  try {
    const stored = JSON.parse(localStorage.getItem('catalan_progress') || '{}');
    return stored[PREMIUM_KEY] === PREMIUM_VALUE;
  } catch { return false; }
};

const storePremium = () => {
  const existing = JSON.parse(localStorage.getItem('catalan_progress') || '{}');
  existing[PREMIUM_KEY] = PREMIUM_VALUE;
  existing.premium = true; // Keep for backward compatibility
  localStorage.setItem('catalan_progress', JSON.stringify(existing));
};

const getInitialState = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  // Handle reset (your testing only)
  if (urlParams.get('reset') === 'true') {
    localStorage.removeItem('catalan_progress');
    window.history.replaceState({}, '', window.location.pathname);
    return { premium: false, reset: true };
  }
  
  // Handle premium activation tokens
  const activateToken = urlParams.get('activate');
  const devToken = urlParams.get('dev');
  
  const validTokens = Object.values(PREMIUM_TOKENS);
  const providedToken = activateToken || devToken;
  
  if (providedToken && validTokens.includes(providedToken)) {
    storePremium();
    window.history.replaceState({}, '', window.location.pathname);
    return { premium: true, reset: false };
  }
  
  // OLD ?premium=true NO LONGER WORKS - remove the backdoor
  // (If someone tries it, nothing happens)
  
  // Check stored premium status
  if (isPremiumStored()) {
    return { premium: true, reset: false };
  }
  
  // Check legacy premium flag (for existing beta users who already have it)
  const stored = JSON.parse(localStorage.getItem('catalan_progress') || '{}');
  if (stored.premium === true) {
    // Migrate them to new system
    storePremium();
    return { premium: true, reset: false };
  }
  
  return { premium: false, reset: false };
};

// BETA EXPIRY - App stops working after this date
const BETA_EXPIRY_DATE = new Date('2026-02-28');
const isBetaExpired = () => {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') return false;
  return new Date() > BETA_EXPIRY_DATE;
};

const INITIAL_STATE = getInitialState();

function App() {
  const [view, setView] = useState('home');
  const [dashboardTab, setDashboardTab] = useState('lessons');
  const [user, setUser] = useState(null);
  const [premium, setPremium] = useState(INITIAL_STATE.premium);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [lessonStage, setLessonStage] = useState('intro');
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [completed, setCompleted] = useState([]);
  const [score, setScore] = useState(0);
  const [wordHistory, setWordHistory] = useState([]);
  const [reviewQueue, setReviewQueue] = useState([]);
  const [reviewStreak, setReviewStreak] = useState(0);
  const [lastReviewDate, setLastReviewDate] = useState(null);
  const [reviewSessionActive, setReviewSessionActive] = useState(false);
  const [lastStreakCelebrated, setLastStreakCelebrated] = useState(0);
const [showStreakCelebration, setShowStreakCelebration] = useState(false);
const [streakCelebrationData, setStreakCelebrationData] = useState(null);
const [showStreakLost, setShowStreakLost] = useState(false);
const [previousStreak, setPreviousStreak] = useState(0);
  const [reviewSessionWords, setReviewSessionWords] = useState([]);
  const [reviewSessionIndex, setReviewSessionIndex] = useState(0);
  const [reviewSessionScore, setReviewSessionScore] = useState(0);
  const [reviewSessionFeedback, setReviewSessionFeedback] = useState('');
  const [reviewSessionOptions, setReviewSessionOptions] = useState([]);
  const [selectedReviewAnswer, setSelectedReviewAnswer] = useState(null);
  const [dailyReviewsCompleted, setDailyReviewsCompleted] = useState(0);
  const [lastDailyReviewDate, setLastDailyReviewDate] = useState(null);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [conversationTurnIndex, setConversationTurnIndex] = useState(0);
  const [userSentence, setUserSentence] = useState([]);
  const [conversationFeedback, setConversationFeedback] = useState('');
  const [showTranslation, setShowTranslation] = useState({});
  const [showChallengeTranslation, setShowChallengeTranslation] = useState({});
  const [shuffledWordBank, setShuffledWordBank] = useState([]);
  const [completedConversations, setCompletedConversations] = useState([]);
  const [challengeHistory, setChallengeHistory] = useState([]);
  const [challengeStreak, setChallengeStreak] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [challengeProgress, setChallengeProgress] = useState(0);
  const [challengeTimeRemaining, setChallengeTimeRemaining] = useState(null);
  const [challengeStartTime, setChallengeStartTime] = useState(null);
  const [challengeItems, setChallengeItems] = useState([]);
  const [challengeCurrentIndex, setChallengeCurrentIndex] = useState(0);
  const [challengeFeedback, setChallengeFeedback] = useState('');
  const [challengeCompleted, setChallengeCompleted] = useState(false);
  const [challengeFailed, setChallengeFailed] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [challengeSelectedPairs, setChallengeSelectedPairs] = useState([]);
  const [challengeMatchedPairs, setChallengeMatchedPairs] = useState([]);
  const [challengeShuffledCatalan, setChallengeShuffledCatalan] = useState([]);
  // Challenge conversation state
  const [challengeConversations, setChallengeConversations] = useState([]);
  const [challengeConvIndex, setChallengeConvIndex] = useState(0);
  const [challengeConvTurnIndex, setChallengeConvTurnIndex] = useState(0);
  const [challengeConvUserSentence, setChallengeConvUserSentence] = useState([]);
  const [challengeConvWordBank, setChallengeConvWordBank] = useState([]);
  const [challengeConvFeedback, setChallengeConvFeedback] = useState('');
  const [savedChallengeState, setSavedChallengeState] = useState(null);
  const [selectedPairs, setSelectedPairs] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState([]);
  const [shuffledCatalan, setShuffledCatalan] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizFeedback, setQuizFeedback] = useState('');
  const [quizOptions, setQuizOptions] = useState([]);
  const [quizWords, setQuizWords] = useState([]);
  const [quizCorrectCount, setQuizCorrectCount] = useState(0);
  const [lessonCorrectAnswers, setLessonCorrectAnswers] = useState(0);
const [lessonTotalQuestions, setLessonTotalQuestions] = useState(0);
  const [selectedQuizAnswer, setSelectedQuizAnswer] = useState(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState(null);
  const [showAchievements, setShowAchievements] = useState(false);
  // REVIEW GATE STATE
  const [unlockedTier, setUnlockedTier] = useState(1);
  const [reviewGateActive, setReviewGateActive] = useState(false);
  const [reviewGateTier, setReviewGateTier] = useState(null);
  const [reviewGateWords, setReviewGateWords] = useState([]);
  const [reviewGateIndex, setReviewGateIndex] = useState(0);
  const [reviewGateScore, setReviewGateScore] = useState(0);
  const [reviewGateFeedback, setReviewGateFeedback] = useState('');
  const [reviewGateOptions, setReviewGateOptions] = useState([]);
const [selectedReviewGateAnswer, setSelectedReviewGateAnswer] = useState(null);
  const [reviewGateComplete, setReviewGateComplete] = useState(false);
  const [reviewGatePassed, setReviewGatePassed] = useState(false);
  const [isComprehensiveReview, setIsComprehensiveReview] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const [syncStatus, setSyncStatus] = useState('');
  const timerRef = useRef(null);
  const secretTapsRef = useRef(0);
  const secretTapTimerRef = useRef(null);
  const nextLessonRef = useRef(null);

  useEffect(() => {
    if (nextLessonRef.current) {
      setTimeout(() => {
        nextLessonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 500);
    }
  }, [completed]);

 useEffect(() => {
    if (user) {
      const userData = { completed, score, premium, user, wordHistory, reviewStreak, lastReviewDate, completedConversations, challengeHistory, unlockedTier, dailyReviewsCompleted, lastDailyReviewDate, ...(premium ? { [PREMIUM_KEY]: PREMIUM_VALUE } : {}) };

      localStorage.setItem('catalan_progress', JSON.stringify(userData));
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
      setReviewQueue(getWordsToReview(wordHistory));
      
      // Check for new achievements
      const currentUnlocked = getUnlockedAchievements(userData);
      const newlyUnlocked = currentUnlocked.filter(a => !unlockedAchievements.map(u => u.id).includes(a.id));
      
      if (newlyUnlocked.length > 0 && unlockedAchievements.length > 0) {
        setNewAchievement(newlyUnlocked[0]);
        setTimeout(() => setNewAchievement(null), 4000);
      }
      
      setUnlockedAchievements(currentUnlocked);
    }
  }, [completed, score, premium, user, wordHistory, reviewStreak, lastReviewDate, completedConversations, challengeHistory]);

  // Load saved progress on app startup
useEffect(() => {
  const saved = localStorage.getItem('catalan_progress');
  if (saved) {
    const data = JSON.parse(saved);
    if (data.user) setUser(data.user);
    if (data.completed) setCompleted(data.completed);
    if (data.score) setScore(data.score);
    if (data.premium) setPremium(data.premium);
    if (data.wordHistory) setWordHistory(data.wordHistory);
    if (data.completedConversations) setCompletedConversations(data.completedConversations);
    if (data.challengeHistory) setChallengeHistory(data.challengeHistory);
    if (data.unlockedTier) setUnlockedTier(data.unlockedTier);
    if (data.dailyReviewsCompleted !== undefined) setDailyReviewsCompleted(data.dailyReviewsCompleted);
    if (data.lastDailyReviewDate) setLastDailyReviewDate(data.lastDailyReviewDate);

    // Check if streak should be reset (missed a day)
    if (data.lastReviewDate) {
      const lastDate = new Date(data.lastReviewDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      lastDate.setHours(0, 0, 0, 0);
      const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 1) {
        // Same day or yesterday - keep streak
        setReviewStreak(data.reviewStreak || 0);
      } else {
        // Missed more than one day - reset streak to 0
        setReviewStreak(0);
      }
      setLastReviewDate(data.lastReviewDate);
    } else {
      setReviewStreak(data.reviewStreak || 0);
    }
  }
}, []);

// ===== SUPABASE AUTH & SYNC FUNCTIONS =====
  
  // Check auth state on mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session?.user) {
        setAuthUser(session.user);
        setEmailVerified(!!session.user.email_confirmed_at);
        await loadProgressFromCloud(session.user.id);
      }
      setAuthLoading(false);
    };
    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        setAuthUser(session.user);
        setEmailVerified(!!session.user.email_confirmed_at);
      } else if (event === 'SIGNED_OUT') {
        setAuthUser(null);
        setEmailVerified(false);
      } else if (event === 'USER_UPDATED' && session?.user) {
        // This fires when email is verified
        setAuthUser(session.user);
        setEmailVerified(!!session.user.email_confirmed_at);
        if (session.user.email_confirmed_at) {
          setShowVerifyPrompt(false); // Close the prompt if open
        }
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Save progress to Supabase
  const saveProgressToCloud = async (userId) => {
    if (!userId) return;
    
    const progressData = {
      completed,
      score,
      premium,
      user,
      wordHistory,
      reviewStreak,
      lastReviewDate,
      completedConversations,
      challengeHistory,
      unlockedTier,
      unlockedAchievements: unlockedAchievements.map(a => a.id)
    };

    const { error } = await supabase
      .from('user_progress')
      .upsert({
        user_id: userId,
        progress_data: progressData
      }, {
        onConflict: 'user_id'
      });

    if (error) {
      console.error('Error saving to cloud:', error);
    } else {
      setSyncStatus('saved');
      setTimeout(() => setSyncStatus(''), 2000);
    }
  };

  // Load progress from Supabase
  const loadProgressFromCloud = async (userId) => {
    if (!userId) return;

    const { data, error } = await supabase
      .from('user_progress')
      .select('progress_data')
      .eq('user_id', userId)
      .single();

    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows found (new user)
      console.error('Error loading from cloud:', error);
      return;
    }

    if (data?.progress_data) {
      const p = data.progress_data;
      if (p.user) setUser(p.user);
      if (p.completed) setCompleted(p.completed);
      if (p.score) setScore(p.score);
      if (p.premium) setPremium(p.premium);
      if (p.wordHistory) setWordHistory(p.wordHistory);
      if (p.completedConversations) setCompletedConversations(p.completedConversations);
      if (p.challengeHistory) setChallengeHistory(p.challengeHistory);
      if (p.unlockedTier) setUnlockedTier(p.unlockedTier);
      if (p.reviewStreak !== undefined) setReviewStreak(p.reviewStreak);
      if (p.lastReviewDate) setLastReviewDate(p.lastReviewDate);
      setSyncStatus('loaded');
      setTimeout(() => setSyncStatus(''), 2000);
    }
  };

  // Handle successful auth
  const handleAuthSuccess = async (authUserData, existingLocalData) => {
    setShowAuth(false);
    
    if (!authUserData) {
      // User chose to continue without account
      return;
    }

    setAuthUser(authUserData);

    // Check if user has cloud data
    const { data: cloudData } = await supabase
      .from('user_progress')
      .select('progress_data')
      .eq('user_id', authUserData.id)
      .single();

    if (cloudData?.progress_data && cloudData.progress_data.completed?.length > 0) {
      // User has existing cloud progress - load it
      await loadProgressFromCloud(authUserData.id);
    } else if (existingLocalData && existingLocalData.completed?.length > 0) {
      // User has local progress but no cloud data - migrate it
      setUser(existingLocalData.user || { name: authUserData.user_metadata?.name || 'Learner' });
      if (existingLocalData.completed) setCompleted(existingLocalData.completed);
      if (existingLocalData.score) setScore(existingLocalData.score);
      if (existingLocalData.premium) setPremium(existingLocalData.premium);
      if (existingLocalData.wordHistory) setWordHistory(existingLocalData.wordHistory);
      if (existingLocalData.completedConversations) setCompletedConversations(existingLocalData.completedConversations);
      if (existingLocalData.challengeHistory) setChallengeHistory(existingLocalData.challengeHistory);
      if (existingLocalData.unlockedTier) setUnlockedTier(existingLocalData.unlockedTier);
      // Save migrated data to cloud
      setTimeout(() => saveProgressToCloud(authUserData.id), 1000);
    } else {
      // New user with no progress anywhere
      setUser({ name: authUserData.user_metadata?.name || 'Learner' });
    }
  };

  // Sign out function
  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setAuthUser(null);
    // Don't clear local data - let them keep it for offline use
  };

  // Auto-save to cloud when progress changes (if logged in)
  useEffect(() => {
    if (authUser && user) {
      const timeoutId = setTimeout(() => {
        saveProgressToCloud(authUser.id);
      }, 2000); // Debounce: wait 2 seconds after last change
      return () => clearTimeout(timeoutId);
    }
  }, [completed, score, premium, wordHistory, completedConversations, challengeHistory, unlockedTier, authUser]);

  useEffect(() => {
    if (view === 'challenge' && currentChallenge && currentChallenge.timeLimit && challengeStartTime && !challengeCompleted && !challengeFailed) {
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - challengeStartTime) / 1000);
        const remaining = currentChallenge.timeLimit - elapsed;
        if (remaining <= 0) {
          clearInterval(timerRef.current);
          setChallengeTimeRemaining(0);
          // Guard: don't fail if target already met
          const passingThreshold = currentChallenge?.passingScore || currentChallenge?.targetCount;
          if (challengeProgress >= passingThreshold) {
            completeChallenge();
            return;
          }
          // Record the failed attempt
          const newHistory = [...challengeHistory, {
            challengeId: currentChallenge.id,
            date: new Date().toDateString(),
            points: 0,
            completed: false
          }];
          setChallengeHistory(newHistory);
          setChallengeFailed(true);
          setSavedChallengeState(null);
        } else {
          setChallengeTimeRemaining(remaining);
        }
      }, 1000);
      return () => clearInterval(timerRef.current);
    }
  }, [view, currentChallenge, challengeStartTime, challengeCompleted, challengeFailed]);

  const startLesson = (lesson) => {
    setCurrentLesson(lesson);
    setLessonStage('intro');
    setCurrentCardIndex(0);
    setFlipped(false);
    setMatchedPairs([]);
    setSelectedPairs([]);
    setShuffledCatalan([...lesson.words].sort(() => Math.random() - 0.5));
    setLessonCorrectAnswers(0); // RESET lesson tracking
    setLessonTotalQuestions(0); // RESET lesson tracking
    setView('lesson');
  };

  const handleLessonAnswer = (isCorrect) => {
    console.log('Answer tracked:', isCorrect);
    setLessonTotalQuestions(prev => prev + 1);
    if (isCorrect) {
      setLessonCorrectAnswers(prev => prev + 1);
    }
  };

 const startConversation = (conversation) => {
  setCurrentConversation(conversation);
  const firstUserTurn = conversation.turns.findIndex(turn => turn.speaker === 'user');
  setConversationTurnIndex(firstUserTurn);
  setUserSentence([]);
  setConversationFeedback('');
  // Shuffle word bank once at start
  const turn = conversation.turns[firstUserTurn];
  if (turn && turn.wordBank) {
    setShuffledWordBank([...turn.wordBank].sort(() => Math.random() - 0.5));
  }
  setView('conversation');
};

// REVIEW GATE: Start the review gate quiz
  const startReviewGate = (tier, comprehensive = false) => {
    const words = comprehensive ? getAllWordsUpToTier(tier) : getWordsFromTier(tier);
    const questionCount = comprehensive ? 20 : 10;
    const shuffled = [...words].sort(() => Math.random() - 0.5).slice(0, questionCount);
    setReviewGateWords(shuffled);
    setReviewGateTier(tier);
    setReviewGateIndex(0);
    setReviewGateScore(0);
    setReviewGateFeedback('');
    setSelectedReviewGateAnswer(null);
    setReviewGateComplete(false);
    setReviewGatePassed(false);
    setIsComprehensiveReview(comprehensive);
    
    const firstWord = shuffled[0];
    const otherWords = words.filter(w => w.ca !== firstWord.ca);
    const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
    setReviewGateOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
    
    setReviewGateActive(true);
    setView('reviewGate');
  };

  const handleReviewGateAnswer = (answer) => {
    const currentWord = reviewGateWords[reviewGateIndex];
    const isCorrect = answer === currentWord.ca;
    setSelectedReviewGateAnswer(answer);
    
    if (isCorrect) {
      setReviewGateScore(reviewGateScore + 1);
      setReviewGateFeedback('Correcte! ✓');
    } else {
      setReviewGateFeedback(`Incorrecte. La resposta és: "${currentWord.ca}"`);
    }
    
    setTimeout(() => {
      if (reviewGateIndex < reviewGateWords.length - 1) {
        const nextIndex = reviewGateIndex + 1;
        setReviewGateIndex(nextIndex);
        setReviewGateFeedback('');
        setSelectedReviewGateAnswer(null);
        
        const nextWord = reviewGateWords[nextIndex];
        const allTierWords = getWordsFromTier(reviewGateTier);
        const otherWords = allTierWords.filter(w => w.ca !== nextWord.ca);
        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
        setReviewGateOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
      } else {
        const finalScore = isCorrect ? reviewGateScore + 1 : reviewGateScore;
        const passThreshold = isComprehensiveReview ? 16 : 8;
        const passed = finalScore >= passThreshold;
        setReviewGateComplete(true);
        setReviewGatePassed(passed);
        
        if (passed) {
          setUnlockedTier(reviewGateTier + 1);
          const pointsAwarded = isComprehensiveReview ? 200 : 100;
          setScore(score + pointsAwarded);
        }
      }
    }, 1500);
  };

  const exitReviewGate = () => {
    setReviewGateActive(false);
    setView('home');
  };

  const retryReviewGate = () => {
    startReviewGate(reviewGateTier, isComprehensiveReview);
  };

  const checkForReviewGate = (lessonId) => {
    const lessonTier = getTierForLesson(lessonId);
    const tierObj = LESSON_TIERS.find(t => t.tier === lessonTier);
    
    if (tierObj) {
      const otherLessonsInTier = tierObj.lessons.filter(id => id !== lessonId);
      const otherLessonsComplete = otherLessonsInTier.every(id => completed.includes(id));
      
      if (otherLessonsComplete && lessonTier >= unlockedTier && lessonTier < 18) {
        return lessonTier;
      }
    }
    return null;
  };

  const isLessonLocked = (lesson) => {
    // Premium users bypass all payment locks
    if (premium) {
      const lessonTier = getTierForLesson(lesson.id);
      if (lessonTier > unlockedTier) return { locked: true, reason: 'tier', tier: lessonTier };
      return { locked: false };
    }
    
    // Free user: day-gated drip system
    // Day 1: lessons 1-3, Day 2: lessons 4-6, Day 3: lessons 7-9, Day 4+: paywall
    const lessonTier = getTierForLesson(lesson.id);
    
    // Calculate days since signup
    let daysSinceSignup = 0;
    if (user && user.startedAt) {
      const startDate = new Date(user.startedAt);
      const now = new Date();
      startDate.setHours(0, 0, 0, 0);
      now.setHours(0, 0, 0, 0);
      daysSinceSignup = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));
    }
    
    // Free tiers available based on days since signup
    // Day 0 (signup day): Tier 1 (lessons 1-3)
    // Day 1 (next day): Tier 2 (lessons 4-6)
    // Day 2 (day after): Tier 3 (lessons 7-9)
    const maxFreeTier = Math.min(daysSinceSignup + 1, 3);
    
    // Beyond tier 3 is always premium
    if (lessonTier > 3) return { locked: true, reason: 'premium' };
    
    // Within free range but not yet unlocked by day
    if (lessonTier > maxFreeTier) return { locked: true, reason: 'daygate', tier: lessonTier, daysUntil: lessonTier - maxFreeTier };
    
    // Review gate check (still applies to free users)
    if (lessonTier > unlockedTier) return { locked: true, reason: 'tier', tier: lessonTier };
    
    return { locked: false };
  };

  const shouldShowReviewGateButton = (tier) => {
    return isTierComplete(tier, completed) && unlockedTier === tier && tier < 17;
  };

 const startReviewSession = () => {
    // Reset daily counter if new day
    const today = new Date().toDateString();
    let currentDailyCount = dailyReviewsCompleted;
    
    if (lastDailyReviewDate !== today) {
      currentDailyCount = 0;
      setDailyReviewsCompleted(0);
      setLastDailyReviewDate(today);
    }
    
    // Check if daily limit reached - ONE SESSION = LOCKED
    if (currentDailyCount >= 1) {
      alert('You\'ve completed your daily review! Come back tomorrow for more.');
      return;
    }

    // Get 15 random words from learned words
    const wordsToReview = [...wordHistory].sort(() => Math.random() - 0.5).slice(0, 10);
    setReviewSessionWords(wordsToReview);
    setReviewSessionIndex(0);
    setReviewSessionScore(0);
    setReviewSessionFeedback('');
    setSelectedReviewAnswer(null);
    
    // Generate options for first word
    const firstWord = wordsToReview[0];
    const otherWords = wordHistory.filter(w => w.ca !== firstWord.ca);
    const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
    setReviewSessionOptions([firstWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
    
    
    
    setReviewSessionActive(true);
    setView('reviewSession');
};

  const handleReviewAnswer = (answer) => {
    const currentWord = reviewSessionWords[reviewSessionIndex];
    const isCorrect = answer === currentWord.ca;
    setSelectedReviewAnswer(answer);
    
    if (isCorrect) {
      setReviewSessionScore(reviewSessionScore + 1);
      setReviewSessionFeedback('Correcte! ✓');
    } else {
      setReviewSessionFeedback(`Incorrecte. La resposta és: "${currentWord.ca}"`);
    }
    
    setTimeout(() => {
      if (reviewSessionIndex < reviewSessionWords.length - 1) {
        const nextIndex = reviewSessionIndex + 1;
        setReviewSessionIndex(nextIndex);
        setReviewSessionFeedback('');
        setSelectedReviewAnswer(null);
        
        const nextWord = reviewSessionWords[nextIndex];
        const otherWords = wordHistory.filter(w => w.ca !== nextWord.ca);
        const wrongAnswers = [...otherWords].sort(() => Math.random() - 0.5).slice(0, 3).map(w => w.ca);
        setReviewSessionOptions([nextWord.ca, ...wrongAnswers].sort(() => Math.random() - 0.5));
      } else {
        // Session complete!
        const finalScore = isCorrect ? reviewSessionScore + 1 : reviewSessionScore;
        
        setScore(score + finalScore * 5); // 5 points per correct answer
        
        // Increment daily counter using functional update (ensures correct value)
        setDailyReviewsCompleted(prev => prev + 1);
        
        // Advance index to trigger congratulations screen
        setReviewSessionIndex(reviewSessionWords.length);
        setReviewSessionFeedback('');
        setSelectedReviewAnswer(null);
      
        // Close session after 3 seconds
        setTimeout(() => {
          setReviewSessionActive(false);
          setView('home');
        }, 3000);
      }
    }, 3000);
  };

  const exitReviewSession = () => {
    setReviewSessionActive(false);
    setView('home');
  };

  const startChallenge = () => {
    // Check if we have saved state from earlier today
    if (savedChallengeState && savedChallengeState.challenge.id === getTodayChallenge().id) {
      // Restore saved state
      setCurrentChallenge(savedChallengeState.challenge);
      setChallengeProgress(savedChallengeState.progress);
      setChallengeTimeRemaining(savedChallengeState.timeRemaining);
      setChallengeStartTime(savedChallengeState.startTime);
      setChallengeItems(savedChallengeState.items);
      setChallengeCurrentIndex(savedChallengeState.currentIndex);
      setChallengeSelectedPairs(savedChallengeState.selectedPairs);
      setChallengeMatchedPairs(savedChallengeState.matchedPairs);
      setChallengeShuffledCatalan(savedChallengeState.shuffledCatalan);
      setChallengeConversations(savedChallengeState.conversations);
      setChallengeConvIndex(savedChallengeState.convIndex);
      setChallengeConvTurnIndex(savedChallengeState.convTurnIndex);
      setChallengeConvUserSentence(savedChallengeState.convUserSentence);
      setChallengeConvWordBank(savedChallengeState.convWordBank);
      setChallengeConvFeedback(savedChallengeState.convFeedback);
      
      // Restart timer from where we left off (if it was a timed challenge)
      if (savedChallengeState.timeRemaining !== null) {
        setChallengeStartTime(Date.now());
      }
      
      setView('challenge');
      return;
    }
    
    // Otherwise start fresh
    const challenge = getTodayChallenge();
    setCurrentChallenge(challenge);
    setChallengeProgress(0);
    setChallengeCurrentIndex(0);
    setChallengeFeedback('');
    setChallengeCompleted(false);
    setChallengeFailed(false);
    setUserInput('');
    setChallengeSelectedPairs([]);
    setChallengeMatchedPairs([]);
    
    // Use user's learned words if they have enough, otherwise use challenge defaults
    const userWords = wordHistory.map(w => ({ en: w.en, ca: w.ca }));
    const hasEnoughWords = userWords.length >= challenge.targetCount;
    
    if (challenge.type === CHALLENGE_TYPES.TRANSLATE) {
      if (hasEnoughWords) {
        const shuffledUserWords = [...userWords].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount + 5);
        setChallengeItems(shuffledUserWords);
      } else {
        // Pull words from completed lessons only
        const completedWords = LESSONS.filter(l => completed.includes(l.id)).flatMap(l => l.words.map(w => ({ en: w.en, ca: w.ca })));
        if (completedWords.length >= 5) {
          setChallengeItems([...completedWords].sort(() => Math.random() - 0.5));
        } else {
          setChallengeItems([...challenge.sentences].sort(() => Math.random() - 0.5));
        }
      }
    } else if (challenge.type === CHALLENGE_TYPES.MATCH) {
      if (hasEnoughWords) {
        const words = [...userWords].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
        setChallengeItems(words);
        setChallengeShuffledCatalan([...words].sort(() => Math.random() - 0.5));
      } else {
        // Pull words from completed lessons only
        const completedWords = LESSONS.filter(l => completed.includes(l.id)).flatMap(l => l.words.map(w => ({ en: w.en, ca: w.ca })));
        if (completedWords.length >= 5) {
          const words = [...completedWords].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
          setChallengeItems(words);
          setChallengeShuffledCatalan([...words].sort(() => Math.random() - 0.5));
        } else {
          const words = [...challenge.words].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
          setChallengeItems(words);
          setChallengeShuffledCatalan([...words].sort(() => Math.random() - 0.5));
        }
      }
    } else if (challenge.type === CHALLENGE_TYPES.CONVERSATIONS) {
      // Pick random conversations for the challenge
      const availableConvs = CONVERSATIONS.filter(c => completed.includes(c.unlockAfterLesson));
      const shuffled = [...availableConvs].sort(() => Math.random() - 0.5).slice(0, challenge.targetCount);
      setChallengeConversations(shuffled);
      setChallengeConvIndex(0);
      // Set up first conversation
      if (shuffled.length > 0) {
        const firstConv = shuffled[0];
        const firstUserTurn = firstConv.turns.findIndex(turn => turn.speaker === 'user');
        setChallengeConvTurnIndex(firstUserTurn);
        setChallengeConvUserSentence([]);
        setChallengeConvFeedback('');
        const turn = firstConv.turns[firstUserTurn];
        if (turn && turn.wordBank) {
          setChallengeConvWordBank([...turn.wordBank].sort(() => Math.random() - 0.5));
        }
      }
    }
    if (challenge.timeLimit) {
      setChallengeStartTime(Date.now());
      setChallengeTimeRemaining(challenge.timeLimit);
    } else {
      setChallengeTimeRemaining(null);
    }
    setView('challenge');
  };

  // Challenge conversation handlers
  const addChallengeConvWord = (word) => {
    setChallengeConvUserSentence([...challengeConvUserSentence, word]);
  };

  const removeChallengeConvWord = () => {
    setChallengeConvUserSentence(challengeConvUserSentence.slice(0, -1));
  };

  const checkChallengeConvAnswer = () => {
    const currentConv = challengeConversations[challengeConvIndex];
    const currentTurn = currentConv.turns[challengeConvTurnIndex];
    const userAnswer = challengeConvUserSentence.join(' ');
    const correctAnswer = currentTurn.correctSentence;

    if (normalizeText(userAnswer) === normalizeText(correctAnswer)) {
      setChallengeConvFeedback('Correcte! ✓');
      
      // Mark this turn as answered
      const updatedConvs = [...challengeConversations];
      updatedConvs[challengeConvIndex] = {
        ...updatedConvs[challengeConvIndex],
        turns: updatedConvs[challengeConvIndex].turns.map((t, i) => 
          i === challengeConvTurnIndex ? { ...t, userAnswer } : t
        )
      };
      setChallengeConversations(updatedConvs);

      setTimeout(() => {
        setChallengeConvFeedback('');
        setChallengeConvUserSentence([]);
        
        // Find next user turn in current conversation
        let nextIndex = challengeConvTurnIndex + 1;
        while (nextIndex < currentConv.turns.length && currentConv.turns[nextIndex].speaker !== 'user') {
          nextIndex++;
        }
        
        if (nextIndex < currentConv.turns.length) {
          // More turns in this conversation
          setChallengeConvTurnIndex(nextIndex);
          const nextTurn = currentConv.turns[nextIndex];
          if (nextTurn && nextTurn.wordBank) {
            setChallengeConvWordBank([...nextTurn.wordBank].sort(() => Math.random() - 0.5));
          }
        } else {
          // Conversation complete - move to next conversation
          const newProgress = challengeProgress + 1;
          setChallengeProgress(newProgress);
          
          const passingThreshold = currentChallenge.passingScore || currentChallenge.targetCount;
          if (newProgress >= passingThreshold || challengeConvIndex >= challengeConversations.length - 1) {
            // Challenge complete!
            completeChallenge();
          } else {
            // Start next conversation
            const nextConvIndex = challengeConvIndex + 1;
            setChallengeConvIndex(nextConvIndex);
            const nextConv = challengeConversations[nextConvIndex];
            const firstUserTurn = nextConv.turns.findIndex(turn => turn.speaker === 'user');
            setChallengeConvTurnIndex(firstUserTurn);
            const turn = nextConv.turns[firstUserTurn];
            if (turn && turn.wordBank) {
              setChallengeConvWordBank([...turn.wordBank].sort(() => Math.random() - 0.5));
            }
          }
        }
      }, 1500);
    } else {
      setChallengeConvFeedback(`Try again! The correct answer is: "${correctAnswer}"`);
      setTimeout(() => {
        setChallengeConvFeedback('');
        setChallengeConvUserSentence([]);
      }, 3000);
    }
  };

  // Helper function to normalize text (remove accents and punctuation for comparison)
  const normalizeText = (text) => {
    return text
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')  // Remove accents
      .replace(/[?!.,;:'"¿¡]/g, '')      // Remove punctuation
      .toLowerCase()
      .trim();
  };

  const handleTranslateAnswer = () => {
    const currentItem = challengeItems[challengeCurrentIndex];
    const userAnswer = userInput.trim();
    const correctAnswer = currentItem.ca;
    
    // Normalize both for comparison (removes accents)
    const normalizedUser = normalizeText(userAnswer);
    const normalizedCorrect = normalizeText(correctAnswer);
    
    // Check if answers match (ignoring accents)
    const isMatch = normalizedUser === normalizedCorrect;
    // Check if it was an exact match (with accents)
    const isExactMatch = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
    
    if (isMatch) {
      // Correct answer!
      const newProgress = challengeProgress + 1;
      setChallengeProgress(newProgress);
      
      if (isExactMatch) {
        setChallengeFeedback('Correcte! ✓');
      } else {
        // Correct but missing/wrong accents
        setChallengeFeedback(`Correcte! ✓ Amb accents: "${correctAnswer}"`);
      }
      
      setTimeout(() => {
        const passingThreshold = currentChallenge.passingScore || currentChallenge.targetCount;
        if (newProgress >= passingThreshold) {
          completeChallenge();
        } else {
          setChallengeCurrentIndex(challengeCurrentIndex + 1);
          setUserInput('');
          setChallengeFeedback('');
        }
      }, 2000); // 2 seconds to read feedback
    } else {
      setChallengeFeedback(`Incorrecte. La resposta és: "${correctAnswer}"`);
      setTimeout(() => {
        // Move to next question if there are more
        if (challengeCurrentIndex + 1 < challengeItems.length) {
          setChallengeCurrentIndex(challengeCurrentIndex + 1);
          setUserInput('');
          setChallengeFeedback('');
        } else {
          // No more questions - check if we met the target
          if (challengeProgress < currentChallenge.targetCount) {
            // Record the failed attempt
            const newHistory = [...challengeHistory, {
              challengeId: currentChallenge.id,
              date: new Date().toDateString(),
              points: 0,
              completed: false
            }];
            setChallengeHistory(newHistory);
            setChallengeFailed(true);
            setSavedChallengeState(null);
          }
        }
      }, 3000); // 3 seconds for incorrect to read the answer
    }
  };

  const handleChallengeMatchClick = (word, type) => {
    const newSelection = { word, type };
    if (challengeSelectedPairs.length === 0) {
      setChallengeSelectedPairs([newSelection]);
    } else if (challengeSelectedPairs.length === 1) {
      const first = challengeSelectedPairs[0];
      if (first.type === type) {
        setChallengeSelectedPairs([newSelection]);
      } else {
        const isMatch = (first.type === 'en' && first.word.ca === newSelection.word.ca) ||
                       (first.type === 'ca' && newSelection.word.ca === first.word.ca);
        if (isMatch) {
          const newMatched = [...challengeMatchedPairs, first.word.ca];
          setChallengeMatchedPairs(newMatched);
          setChallengeSelectedPairs([]);
          const newProgress = challengeProgress + 1;
          setChallengeProgress(newProgress);
          const passingThreshold = currentChallenge.passingScore || currentChallenge.targetCount;
          if (newProgress >= passingThreshold) {
            if (timerRef.current) clearInterval(timerRef.current);
            setTimeout(() => completeChallenge(), 500);
          }
        } else {
          setTimeout(() => setChallengeSelectedPairs([]), 500);
        }
      }
    }
  };

  const completeChallenge = () => {
    setChallengeCompleted(true);
    setSavedChallengeState(null);
    if (timerRef.current) clearInterval(timerRef.current);
    const newHistory = [...challengeHistory, {
      challengeId: currentChallenge.id,
      date: new Date().toDateString(),
      points: currentChallenge.points,
      completed: true
    }];
    setChallengeHistory(newHistory);
    setChallengeStreak(getChallengeStreak(newHistory));
    setScore(score + currentChallenge.points);
  };

  // Record failed challenge attempt (locks for the day)
  const failChallenge = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const newHistory = [...challengeHistory, {
      challengeId: currentChallenge.id,
      date: new Date().toDateString(),
      points: 0,
      completed: false
    }];
    setChallengeHistory(newHistory);
    setChallengeFailed(true);
    setSavedChallengeState(null);
  };

  // Dev helper: Ctrl+Shift+D to reset daily challenge
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'D') {
        e.preventDefault();
        const newHistory = challengeHistory.filter(h => h.date !== new Date().toDateString());
        setChallengeHistory(newHistory);
        console.log('🔄 Daily challenge reset for testing');
        alert('Daily challenge reset!');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [challengeHistory]);

  // Check if challenge was attempted today (completed OR failed)
  const wasChallengeAttemptedToday = () => {
    if (!challengeHistory || challengeHistory.length === 0) return false;
    const today = new Date().toDateString();
    return challengeHistory.some(h => h.date === today);
  };

  const wasChallengeCompletedSuccessfully = () => {
    if (!challengeHistory || challengeHistory.length === 0) return false;
    const today = new Date().toDateString();
    return challengeHistory.some(h => h.date === today && h.completed === true);
  };

  const exitChallenge = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    
    // Save challenge state before exiting
    if (currentChallenge) {
      setSavedChallengeState({
        challenge: currentChallenge,
        progress: challengeProgress,
        timeRemaining: challengeTimeRemaining,
        startTime: challengeStartTime,
        items: challengeItems,
        currentIndex: challengeCurrentIndex,
        selectedPairs: challengeSelectedPairs,
        matchedPairs: challengeMatchedPairs,
        shuffledCatalan: challengeShuffledCatalan,
        conversations: challengeConversations,
        convIndex: challengeConvIndex,
        convTurnIndex: challengeConvTurnIndex,
        convUserSentence: challengeConvUserSentence,
        convWordBank: challengeConvWordBank,
        convFeedback: challengeConvFeedback
      });
    }
    
    setView('home');
    setCurrentChallenge(null);
  };

  const addWordToSentence = (word) => setUserSentence([...userSentence, word]);
  const removeLastWord = () => setUserSentence(userSentence.slice(0, -1));

  const checkConversationAnswer = () => {
    const currentTurn = currentConversation.turns[conversationTurnIndex];
    const userAnswer = userSentence.join(' ');
    const correctAnswer = currentTurn.correctSentence;
    if (userAnswer === correctAnswer) {
      setConversationFeedback('Correcte! ✓');
      setScore(score + 15);
      const updatedTurns = [...currentConversation.turns];
      updatedTurns[conversationTurnIndex] = { ...currentTurn, userAnswer };
      setCurrentConversation({ ...currentConversation, turns: updatedTurns });
      setTimeout(() => {
        let nextIndex = conversationTurnIndex + 1;
        while (nextIndex < currentConversation.turns.length && currentConversation.turns[nextIndex].speaker !== 'user') {
          nextIndex++;
        }
        if (nextIndex < currentConversation.turns.length) {
          setConversationTurnIndex(nextIndex);
          setUserSentence([]);
          setConversationFeedback('');
          // Update word bank for next turn
          const nextTurn = currentConversation.turns[nextIndex];
          if (nextTurn && nextTurn.wordBank) {
            setShuffledWordBank([...nextTurn.wordBank].sort(() => Math.random() - 0.5));
          }
        } else {
          if (!completedConversations.includes(currentConversation.id)) {
            setCompletedConversations([...completedConversations, currentConversation.id]);
            setScore(s => s + 50);
          }
          setView('conversationComplete');
          setTimeout(() => {
            setView('home');
            setCurrentConversation(null);
            setConversationTurnIndex(0);
          }, 3000);
        }
      }, 1500);
    } else {
      setConversationFeedback(`Try again! The correct answer is: "${correctAnswer}"`);
      setTimeout(() => { setConversationFeedback(''); setUserSentence([]); }, 3000);
    }
  };

  const nextStage = () => {
    const stages = currentLesson.stages || ['intro', 'flashcards', 'match', 'quiz'];
    const currentIndex = stages.indexOf(lessonStage);
    const nextStageName = currentIndex < stages.length - 1 ? stages[currentIndex + 1] : 'complete';
    
    // CHECK 70% BEFORE SHOWING COMPLETION SCREEN
    if (nextStageName === 'complete') {
      const percentage = lessonTotalQuestions > 0 
        ? (lessonCorrectAnswers / lessonTotalQuestions) * 100 
        : 100;
      
      if (percentage < 70) {
        setLessonStage('failed');
        return;
      }
    }
    
    if (nextStageName === 'quiz') {
      setQuizIndex(0);
      setQuizFeedback('');
      setQuizCorrectCount(0);
      const shuffledWords = [...currentLesson.words].sort(() => Math.random() - 0.5);
      setQuizWords(shuffledWords);
      const correctAnswer = shuffledWords[0].ca;
      const wrongAnswers = shuffledWords.filter((_, i) => i !== 0).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
      setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
    }
    
    setLessonStage(nextStageName);
  };

  const handleMatchClick = (word, type) => {
    const newSelection = { word, type };
    if (selectedPairs.length === 0) {
      setSelectedPairs([newSelection]);
    } else if (selectedPairs.length === 1) {
      const first = selectedPairs[0];
      if (first.type === type) {
        setSelectedPairs([newSelection]);
      } else {
        const isMatch = (first.type === 'en' && first.word.ca === newSelection.word.ca) || (first.type === 'ca' && newSelection.word.ca === first.word.ca);
        if (isMatch) {
  setMatchedPairs([...matchedPairs, first.word.ca]);
  setSelectedPairs([]);
  handleLessonAnswer(true); // TRACK CORRECT MATCH
  if (!completed.includes(currentLesson.id)) {
    setScore(score + 10);
  }
} else {
  setSelectedPairs([]); // Wrong match - clear selection
  handleLessonAnswer(false); // TRACK WRONG MATCH
}
      }
    }
  };

const handleQuizAnswer = (answer) => {
  console.log('handleQuizAnswer called!', { answer, quizIndex });
  const correct = quizWords[quizIndex];
  const isCorrect = answer === correct.ca;
  
  if (isCorrect) {
    setQuizFeedback('Correcte! ✓');
    setQuizCorrectCount(prev => prev + 1); // INCREMENT COUNTER
    handleLessonAnswer(true); // TRACK CORRECT ANSWER
    if (!completed.includes(currentLesson.id)) {
      setScore(score + 5);
    }
    setTimeout(() => {
      if (quizIndex < quizWords.length - 1) {
        const nextIndex = quizIndex + 1;
        const correctAnswer = quizWords[nextIndex].ca;
        const wrongAnswers = quizWords.filter((_, i) => i !== nextIndex).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
        setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
        setQuizIndex(nextIndex);
        setQuizFeedback('');
      } else {
        // FINAL CHECK - need 70% minimum
        const finalCorrect = quizCorrectCount + 1; // +1 for THIS correct answer
        const totalQuestions = quizWords.length;
        const percentage = (finalCorrect / totalQuestions) * 100;
        console.log('QUIZ CHECK:', { finalCorrect, totalQuestions, percentage, quizCorrectCount });
        
        if (percentage >= 70) {
          setQuizCorrectCount(0); // RESET for next lesson
          nextStage();
        } else {
          alert(`You got ${finalCorrect}/${totalQuestions} (${Math.round(percentage)}%). You need 70% to pass. Try again!`);
          // RESET QUIZ
          setQuizIndex(0);
          setQuizCorrectCount(0);
          setQuizFeedback('');
          const shuffledWords = [...currentLesson.words].sort(() => Math.random() - 0.5);
          setQuizWords(shuffledWords);
          const correctAnswer = shuffledWords[0].ca;
          const wrongAnswers = shuffledWords.filter((_, i) => i !== 0).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
          setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
        }
      }
    }, 1000);
  } else {
    setQuizFeedback(`Incorrecte. La resposta és: "${quizWords[quizIndex].ca}"`);
    handleLessonAnswer(false); // TRACK WRONG ANSWER
  }
};

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ONBOARDING FLOW
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [onboardingName, setOnboardingName] = useState('');
  const [onboardingGoal, setOnboardingGoal] = useState('');
  const [onboardingTime, setOnboardingTime] = useState('');
  const [onboardingEmail, setOnboardingEmail] = useState('');
  const [onboardingPassword, setOnboardingPassword] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [showVerifyPrompt, setShowVerifyPrompt] = useState(false);

  const goals = [
    { id: 'living', label: 'Already living in Catalonia/Andorra', icon: '📍' },
    { id: 'moving', label: 'Moving to Barcelona/Catalonia', icon: '🏠' },
    { id: 'andorra', label: 'Moving to Andorra', icon: '🏔️' },
    { id: 'family', label: 'Family or relationship', icon: '❤️' },
    { id: 'travel', label: 'Travel and holidays', icon: '✈️' },
    { id: 'curious', label: 'Just curious!', icon: '🤔' }
  ];

  const timeOptions = [
    { id: '5', label: '5 min/day', desc: 'Casual learner', icon: '🌱' },
    { id: '10', label: '10 min/day', desc: 'Regular practice', icon: '🌿' },
    { id: '15', label: '15+ min/day', desc: 'Serious student', icon: '🌳' }
  ];

  // Shuffle array helper
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Audio cache to ensure consistent pronunciation
  const audioCache = useRef({});

  // Text-to-speech for Catalan words using ElevenLabs
  const speakWord = async (text, slow = false) => {
    try {
      // Check cache first
      if (audioCache.current[text]) {
        const audio = new Audio(audioCache.current[text]);
        audio.playbackRate = slow ? 0.5 : 1.0;
        audio.play();
        return;
      }

      const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/AxFLn9byyiDbMn5fmyqu', {
        method: 'POST',
        headers: {
          'Accept': 'audio/mpeg',
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY
        },
        body: JSON.stringify({
          text: text,
          model_id: 'eleven_v3',
          language_code: 'es',
          voice_settings: {
            stability: 1.0,
            similarity_boost: 1.0
          }
        })
      });

      if (response.ok) {
        const audioBlob = await response.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        // Cache the audio URL
        audioCache.current[text] = audioUrl;
        const audio = new Audio(audioUrl);
        audio.playbackRate = slow ? 0.5 : 1.0;
        audio.play();
      }
    } catch (error) {
      console.error('Audio error:', error);
    }
  };

 const completeOnboarding = () => {
    const newUser = { 
      name: onboardingName || 'Learner', 
      goal: onboardingGoal, 
      dailyMinutes: parseInt(onboardingTime) || 10,
      startedAt: new Date().toISOString()
    };
    setUser(newUser);
    
    // Silent beta tracking - sends email notification when someone starts
    const trackingData = `New beta user started!\n\nName: ${onboardingName || 'Anonymous'}\nGoal: ${onboardingGoal}\nTime: ${new Date().toLocaleString()}`;
    
    // This opens nothing visible - just logs for now
    console.log('Beta user started:', trackingData);
    
    // Start them on lesson 1
    const firstLesson = LESSONS[0];
    startLesson(firstLesson);
  };

  // Auth loading state
  if (authLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Show Auth screen if requested
  if (showAuth) {
    const existingData = JSON.parse(localStorage.getItem('catalan_progress') || '{}');
    return <Auth onAuthSuccess={handleAuthSuccess} existingLocalData={existingData} />;
  }
  // Beta expiry check - VIP testers bypass this
  if (isBetaExpired() && !premium) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
          <img src="./logo.png" alt="HolaCatalà" className="h-32 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-2">We're Launching Soon! 🚀</h1>
          <p className="text-gray-600 mb-6">Thank you for being a beta tester! We're putting the finishing touches on HolaCatalà and launching very soon!</p>
          <p className="text-gray-600 mb-6">Check your email on launch day for your special beta tester discount!</p>
          <a href="mailto:aprencatalaapp@gmail.com" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold">
            Questions? Contact Us →
          </a>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full mx-3">
          
          {/* Step 0: Welcome */}
          {onboardingStep === 0 && (
            <div className="text-center">
              <img src="./logo.png" alt="HolaCatalà" className="h-36 sm:h-44 w-auto mx-auto mb-3" />
              <p className="text-gray-600 mb-8">Learn Catalan the easy way. Perfect for expats in Barcelona, Catalonia & Andorra.</p>
              <button onClick={() => setOnboardingStep(1)} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all">
                Let's Get Started →
              </button>
              <p className="text-sm text-gray-500 mt-6">
                Already have an account?{' '}
                <button 
                  onClick={() => setShowAuth(true)} 
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}

          {/* Step 1: Name */}
          {onboardingStep === 1 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">👋</div>
                <h2 className="text-2xl font-bold">What's your name?</h2>
                <p className="text-gray-600 text-sm">We'll use this to personalize your experience</p>
              </div>
              <input
              autoComplete="off"
                type="text"
                value={onboardingName}
                onChange={(e) => setOnboardingName(e.target.value)}
                placeholder="Enter your name..."
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl mb-4 focus:border-blue-500 focus:outline-none"
                autoFocus
              />
              <button onClick={() => setOnboardingStep(2)} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(0)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 2: Goal */}
          {onboardingStep === 2 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🎯</div>
                <h2 className="text-2xl font-bold">Why learn Catalan?</h2>
                <p className="text-gray-600 text-sm">This helps us tailor your learning</p>
              </div>
              <div className="space-y-3 mb-4">
                {goals.map((goal) => (
                  <button
                    key={goal.id}
                    onClick={() => setOnboardingGoal(goal.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${onboardingGoal === goal.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}
                  >
                    <span className="text-2xl">{goal.icon}</span>
                    <span className="font-semibold">{goal.label}</span>
                  </button>
                ))}
              </div>
              <button onClick={() => onboardingGoal && setOnboardingStep(3)} disabled={!onboardingGoal} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(1)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 3: Daily Time */}
          {onboardingStep === 3 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">⏰</div>
                <h2 className="text-2xl font-bold">Daily goal?</h2>
                <p className="text-gray-600 text-sm">How much time can you practice?</p>
              </div>
              <div className="space-y-3 mb-4">
                {timeOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setOnboardingTime(option.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${onboardingTime === option.id ? 'bg-blue-100 border-2 border-blue-500' : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'}`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <div className="font-semibold">{option.label}</div>
                      <div className="text-xs text-gray-500">{option.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
              <button onClick={() => onboardingTime && setOnboardingStep(4)} disabled={!onboardingTime} className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed">
                Continue →
              </button>
              <button onClick={() => setOnboardingStep(2)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Step 4: Create Account */}
          {onboardingStep === 4 && (
            <div>
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🔐</div>
                <h2 className="text-2xl font-bold">Save Your Progress</h2>
                <p className="text-gray-600 text-sm">Create an account so you never lose your learning progress</p>
              </div>
              
              <form onSubmit={async (e) => {
                e.preventDefault();
                setAuthLoading(true);
                const { data, error } = await supabase.auth.signUp({
                  email: onboardingEmail,
                  password: onboardingPassword,
                  options: { data: { name: onboardingName } }
                });
                if (error) {
                  alert(error.message);
                  setAuthLoading(false);
                  return;
                }
                if (data.user) {
                  setAuthUser(data.user);
                  setEmailVerified(false); // New signup, not verified yet
                  completeOnboarding();
                }
                setAuthLoading(false);
              }}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    value={onboardingEmail}
                    onChange={(e) => setOnboardingEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    value={onboardingPassword}
                    onChange={(e) => setOnboardingPassword(e.target.value)}
                    placeholder="At least 6 characters"
                    className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
                    required
                    minLength={6}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={authLoading}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 px-6 rounded-xl font-semibold text-base hover:from-green-600 hover:to-emerald-600 transition-all disabled:opacity-50"
                >
                  {authLoading ? 'Creating Account...' : 'Create Account & Start Learning 🎉'}
                </button>
              </form>
              
              <div className="mt-4 text-center">
                <button 
                  onClick={completeOnboarding} 
                  className="text-gray-500 text-sm hover:underline"
                >
                  Skip for now (progress won't be saved)
                </button>
              </div>
              
              <button onClick={() => setOnboardingStep(3)} className="w-full text-gray-500 py-2 mt-2 text-sm">← Back</button>
            </div>
          )}

          {/* Progress dots */}
          {onboardingStep > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className={`w-2 h-2 rounded-full transition-all ${onboardingStep >= step ? 'bg-blue-600' : 'bg-gray-300'}`} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // DAILY WORD REVIEW SESSION
  if (view === 'reviewSession' && reviewSessionActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-cyan-700">
        <nav className="bg-white/10 backdrop-blur p-3 sm:p-4 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button onClick={exitReviewSession} className="flex items-center gap-1 sm:gap-2 text-white/80 text-sm sm:text-base">
              <X className="w-5 h-5" /> <span className="hidden sm:inline">Exit Review</span>
            </button>
            <div className="text-white font-semibold">Daily Word Review</div>
          </div>
        </nav>
        
        <div className="max-w-2xl mx-auto p-4 sm:p-6">
          {reviewSessionIndex < reviewSessionWords.length ? (
            <>
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">📚</span>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold">Word Review</h2>
                      <p className="text-gray-600 text-sm">Daily practice session</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">{reviewSessionScore}/{reviewSessionWords.length}</div>
                    <div className="text-xs text-gray-500">correct</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300" style={{ width: `${((reviewSessionIndex + 1) / reviewSessionWords.length) * 100}%` }} />
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">Question {reviewSessionIndex + 1} of {reviewSessionWords.length}</div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-lg text-gray-600 mb-2">What is this in Catalan?</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center py-6 bg-blue-50 rounded-xl flex items-center justify-center gap-1">
                  {reviewSessionWords[reviewSessionIndex]?.en}
                  <button onClick={() => speakWord(reviewSessionWords[reviewSessionIndex]?.ca)} className="p-1 rounded-full hover:bg-blue-200 active:bg-blue-300 transition-colors" title="Hear pronunciation">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <button onClick={() => speakWord(reviewSessionWords[reviewSessionIndex]?.ca, true)} className="rounded-full hover:bg-blue-200 active:bg-blue-300 transition-colors inline-flex items-center justify-center h-8 w-8" title="Hear slowly">
                    <span className="block -mt-1" style={{fontSize: '24px', lineHeight: '24px'}}>🐢</span>
                  </button>
                </div>
                
                <div className="space-y-3">
                  {reviewSessionOptions.map((option, i) => (
                    <button
                      key={`${reviewSessionIndex}-${i}`}
                      onClick={() => !reviewSessionFeedback && handleReviewAnswer(option)}
                      disabled={!!reviewSessionFeedback}
                      className={`w-full p-4 rounded-xl font-semibold text-left transition-all ${
                        reviewSessionFeedback
                          ? option === reviewSessionWords[reviewSessionIndex]?.ca
                            ? 'bg-green-100 text-green-800 border-2 border-green-500'
                            : selectedReviewAnswer === option
                              ? 'bg-red-100 text-red-800 border-2 border-red-500'
                              : 'bg-gray-100 text-gray-400'
                          : selectedReviewAnswer === option
                            ? 'bg-blue-200'
                            : 'bg-gray-100 hover:bg-blue-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {reviewSessionFeedback && (
                  <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${reviewSessionFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {reviewSessionFeedback}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Review Complete!</h2>
              <p className="text-gray-600 mb-6">You scored {reviewSessionScore}/{reviewSessionWords.length}</p>
              <div className="bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl p-4 mb-6">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl">⭐</span>
                  <span className="text-xl font-bold text-blue-700">+{reviewSessionScore * 5} Points!</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-4">Come back tomorrow for more practice!</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // REVIEW GATE VIEW
  if (view === 'reviewGate' && reviewGateActive) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
        <nav className="bg-white/10 backdrop-blur p-3 sm:p-4 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button onClick={exitReviewGate} className="flex items-center gap-1 sm:gap-2 text-white/80 text-sm sm:text-base">
              <X className="w-5 h-5" /> <span className="hidden sm:inline">Exit Review</span>
            </button>
            <div className="text-white font-semibold">Tier {reviewGateTier} Review</div>
          </div>
        </nav>
        
        <div className="max-w-2xl mx-auto p-4 sm:p-6">
          {!reviewGateComplete ? (
            <>
              <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{isComprehensiveReview ? '🏆' : '🔓'}</span>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold">{isComprehensiveReview ? 'Comprehensive Review' : 'Unlock Next Lessons'}</h2>
                      <p className="text-gray-600 text-sm">Score {isComprehensiveReview ? '16/20' : '8/10'} to continue</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">{reviewGateScore}/{isComprehensiveReview ? 20 : 10}</div>
                    <div className="text-xs text-gray-500">correct</div>
                  </div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-300" style={{ width: `${((reviewGateIndex + 1) / (isComprehensiveReview ? 20 : 10)) * 100}%` }} />
                </div>
                <div className="text-xs text-gray-500 mt-1 text-right">Question {reviewGateIndex + 1} of {isComprehensiveReview ? 20 : 10}</div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
                <h3 className="text-lg text-gray-600 mb-2">What is this in Catalan?</h3>
                <div className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center py-6 bg-purple-50 rounded-xl flex items-center justify-center gap-1">
                  {reviewGateWords[reviewGateIndex]?.en}
                  <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors" title="Hear pronunciation">
                    <Volume2 className="w-6 h-6 text-purple-600" />
                  </button>
                  <button onClick={() => speakWord(reviewGateWords[reviewGateIndex]?.ca, true)} className="p-2 rounded-full hover:bg-purple-200 active:bg-purple-300 transition-colors inline-flex items-center justify-center h-10 w-10" title="Hear slowly">
                    <span className="text-2xl leading-none">🐢</span>
                  </button>
                </div>
                
                <div className="space-y-3">
                  {reviewGateOptions.map((option, i) => (
                    <button
                      key={`${reviewGateIndex}-${i}`}
                      onClick={() => !reviewGateFeedback && handleReviewGateAnswer(option)}
                      disabled={!!reviewGateFeedback}
                      className={`w-full p-4 rounded-xl font-semibold text-left transition-all ${
                        reviewGateFeedback
                          ? option === reviewGateWords[reviewGateIndex]?.ca
                            ? 'bg-green-100 text-green-800 border-2 border-green-500'
                            : selectedReviewGateAnswer === option
                              ? 'bg-red-100 text-red-800 border-2 border-red-500'
                              : 'bg-gray-100 text-gray-400'
                          : selectedReviewGateAnswer === option
                            ? 'bg-purple-200'
                            : 'bg-gray-100 hover:bg-purple-100'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
                
                {reviewGateFeedback && (
                  <div className={`mt-4 p-4 rounded-xl text-center font-semibold ${reviewGateFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {reviewGateFeedback}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              {reviewGatePassed ? (
                <div className="flex justify-center mb-4">
                  <img src="./bubblesolo.png" alt="Celebration" className="h-24 sm:h-32 w-auto animate-bounce" />
                </div>
              ) : (
                <div className="text-6xl mb-4">😔</div>
              )}
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">{reviewGatePassed ? 'Review Passed!' : 'Not Quite...'}</h2>
              <p className="text-gray-600 mb-6">
                You scored {reviewGateScore}/{isComprehensiveReview ? 20 : 10}
                {reviewGatePassed 
                  ? `. Lessons ${reviewGateTier * 3 + 1}-${reviewGateTier * 3 + 3} are now unlocked!` 
                  : `. You need ${isComprehensiveReview ? '16/20' : '8/10'} to unlock the next lessons.`}
              </p>
              
              {reviewGatePassed ? (
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-center gap-3">
                    <Trophy className="w-8 h-8 text-purple-600" />
                    <span className="text-xl font-bold text-purple-700">+{isComprehensiveReview ? 200 : 100} Bonus Points!</span>
                  </div>
                </div>
              ) : (
                <div className="bg-gray-100 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600">Tip: Review the words from lessons {(reviewGateTier - 1) * 3 + 1}-{reviewGateTier * 3} and try again!</p>
                </div>
              )}
              
              <div className="space-y-3">
                {reviewGatePassed ? (
                  <button onClick={exitReviewGate} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg">Continue Learning →</button>
                ) : (
                  <>
                    <button onClick={retryReviewGate} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg">Try Again</button>
                    <button onClick={exitReviewGate} className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold">Practice More First</button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // CHALLENGE VIEW
  if (view === 'challenge' && currentChallenge) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50">
        <nav className="bg-white shadow-sm p-3 sm:p-4 sticky top-0 z-40">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <button onClick={exitChallenge} className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base"><X className="w-5 h-5" /> <span className="hidden sm:inline">Exit Challenge</span></button>
            {challengeTimeRemaining !== null && (
              <div className={`flex items-center gap-1 sm:gap-2 font-bold text-lg sm:text-xl ${challengeTimeRemaining <= 30 ? 'text-red-600' : 'text-gray-800'}`}>
                <Clock className="w-5 h-5 sm:w-6 sm:h-6" />{formatTime(challengeTimeRemaining)}
              </div>
            )}
          </div>
        </nav>
        {/* Email Verification Banner */}
        {/* DISABLED: Email confirmation is off. Enable when SMTP is set up.
        {authUser && !emailVerified && (
          <div className="bg-amber-50 border-b border-amber-200 px-4 py-3">
            <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-amber-800">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Verify your email to save your progress permanently</span>
              </div>
              <button
                onClick={async () => {
                  const { error } = await supabase.auth.resend({
                    type: 'signup',
                    email: authUser.email,
                  });
                  if (error) {
                    alert('Error sending email: ' + error.message);
                  } else {
                    alert('Verification email sent! Check your inbox.');
                  }
                }}
                className="text-sm bg-amber-600 text-white px-3 py-1 rounded-lg hover:bg-amber-700 flex-shrink-0"
              >
                Resend
              </button>
            </div>
          </div>
        )}
        */}
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex items-center gap-3 sm:gap-4 mb-4">
              <span className="text-4xl sm:text-5xl">{currentChallenge.icon}</span>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">{currentChallenge.title}</h2>
                <p className="text-gray-600 text-sm sm:text-base">{currentChallenge.description}</p>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1"><span>Progress</span><span>{challengeProgress} / {currentChallenge.targetCount}</span></div>
              <div className="h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-500 transition-all duration-300" style={{ width: `${(challengeProgress / currentChallenge.targetCount) * 100}%` }} />
              </div>
            </div>
          </div>
          {!challengeCompleted && !challengeFailed && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              {currentChallenge.type === CHALLENGE_TYPES.TRANSLATE && (
                <>
                  {challengeItems[challengeCurrentIndex] ? (
                    <div>
                      <h3 className="text-base sm:text-lg text-gray-600 mb-2">Translate to Catalan:</h3>
                      <div className="text-xl sm:text-3xl font-bold mb-4 sm:mb-8 text-center py-4 sm:py-6 bg-blue-50 rounded-xl">{challengeItems[challengeCurrentIndex].en}</div>
                      <input type="text" autoComplete="off" value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleTranslateAnswer()} placeholder="Type your answer..." className="w-full p-3 sm:p-4 text-base sm:text-xl border-2 border-gray-200 rounded-xl mb-3 sm:mb-4 focus:border-orange-500 focus:outline-none" autoFocus />
                      <button onClick={handleTranslateAnswer} disabled={!userInput.trim()} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform disabled:opacity-50">Check Answer</button>
                      {challengeFeedback && <div className={`mt-3 sm:mt-4 p-3 sm:p-4 rounded-xl text-center font-semibold text-sm sm:text-base ${challengeFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{challengeFeedback}</div>}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="text-5xl mb-4">📚</div>
                      <h3 className="text-xl font-bold mb-2">Not Enough Words Yet!</h3>
                      <p className="text-gray-600 mb-4">You've completed all your learned words. Finish more lessons to unlock the full challenge!</p>
                      <button onClick={exitChallenge} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold">Back to Dashboard</button>
                    </div>
                  )}
                </>
              )}
              {currentChallenge.type === CHALLENGE_TYPES.MATCH && (
                <div className="grid grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">English</h3>
                    {challengeItems.map((word, i) => (
                      <button key={i} onClick={() => handleChallengeMatchClick(word, 'en')} disabled={challengeMatchedPairs.includes(word.ca)} className={`w-full p-4 rounded-lg font-semibold transition-all ${challengeMatchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : challengeSelectedPairs.some(p => p.word === word && p.type === 'en') ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>{word.en}</button>
                    ))}
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">Català</h3>
                    {challengeShuffledCatalan.map((word, i) => (
                      <button key={i} onClick={() => handleChallengeMatchClick(word, 'ca')} disabled={challengeMatchedPairs.includes(word.ca)} className={`w-full p-4 rounded-lg font-semibold transition-all ${challengeMatchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : challengeSelectedPairs.some(p => p.word === word && p.type === 'ca') ? 'bg-orange-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}>{word.ca}</button>
                    ))}
                  </div>
                </div>
              )}
              {currentChallenge.type === CHALLENGE_TYPES.REVIEW && (
                <div className="text-center py-8 sm:py-12">
                  <p className="text-base sm:text-xl text-gray-600 mb-4">
                    Score perfectly on {currentChallenge.targetCount} word reviews to finish this challenge.
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base">
                    Complete lessons and review your vocabulary to build your streak!
                  </p>
                  <button onClick={exitChallenge} className="mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 bg-gray-200 rounded-lg font-semibold active:bg-gray-300">Back to Dashboard</button>
                </div>
              )}
              {currentChallenge.type === CHALLENGE_TYPES.CONVERSATIONS && challengeConversations.length > 0 && (
                <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
                  {(() => {
                    const currentConv = challengeConversations[challengeConvIndex];
                    const displayedTurns = currentConv.turns.slice(0, challengeConvTurnIndex + 1);
                    const currentTurn = currentConv.turns[challengeConvTurnIndex];
                    const isUserTurn = currentTurn && currentTurn.speaker === 'user';
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-3xl">{currentConv.icon}</span>
                          <div>
                            <h3 className="text-lg font-bold">{currentConv.title}</h3>
                            <span className="text-sm text-gray-500">Conversation {challengeConvIndex + 1} of {currentChallenge.targetCount}</span>
                          </div>
                        </div>
                        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto" ref={(el) => { if (el) el.scrollTop = el.scrollHeight; }}>
                          {displayedTurns.map((turn, i) => (
                            <div key={i} className={`flex ${turn.speaker === 'user' ? 'justify-end' : 'justify-start'}`}>
                              <div className={`max-w-xs sm:max-w-md p-3 rounded-2xl ${turn.speaker === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                                <div>
                                  {turn.speaker === 'user' ? (turn.userAnswer || turn.text) : (
                                    <>
                                      <div>{turn.text}</div>
                                      {turn.english && (
                                        <div className="mt-2 pt-2 border-t border-gray-300">
                                          <button 
                                            onClick={() => setShowChallengeTranslation({...showChallengeTranslation, [i]: !showChallengeTranslation[i]})}
                                            className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                          >
                                            🇬🇧 {showChallengeTranslation[i] ? 'Hide' : 'Show'} translation
                                          </button>
                                          {showChallengeTranslation[i] && (
                                            <div className="text-sm italic text-gray-600 mt-1">{turn.english}</div>
                                          )}
                                        </div>
                                      )}
                                    </>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {isUserTurn && (
                          <>
                            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-3 mb-3">
                              <div className="font-semibold text-blue-900 text-sm sm:text-base">{currentTurn.prompt}</div>
                            </div>
                            <div className="bg-white border-2 border-gray-200 rounded-lg p-3 mb-3 min-h-[50px] flex flex-wrap gap-2 items-center">
                              {challengeConvUserSentence.length === 0 
                                ? <span className="text-gray-400 text-sm">Tap words below...</span> 
                                : challengeConvUserSentence.map((word, i) => <span key={i} onClick={() => setChallengeConvUserSentence(prev => prev.filter((_, idx) => idx !== i))} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-red-100 hover:text-red-700 active:scale-95 transition-all">{word} <span className="text-xs opacity-50">x</span></span>)}
                            </div>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {challengeConvWordBank.map((word, i) => {
                                const selectedCount = challengeConvUserSentence.filter(w => w === word).length;
                                const totalCount = challengeConvWordBank.filter(w => w === word).length;
                                const isUsed = selectedCount >= totalCount;
                                return (
                                  <button 
                                    key={i} 
                                    onClick={() => !isUsed && addChallengeConvWord(word)} 
                                    disabled={isUsed}
                                    className={`px-3 py-2 rounded-lg font-semibold text-sm transition-all ${isUsed ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
                                  >{word}</button>
                                );
                              })}
                            </div>
                            <div className="flex gap-0.5 items-center">
                              <button onClick={removeChallengeConvWord} disabled={challengeConvUserSentence.length === 0} className="px-4 py-2 bg-gray-200 rounded-lg font-semibold text-sm disabled:opacity-50">← Remove</button>
                              <button onClick={checkChallengeConvAnswer} disabled={challengeConvUserSentence.length === 0} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50">Check Answer</button>
                            </div>
                            {challengeConvFeedback && (
                              <div className={`mt-3 p-3 rounded-lg text-center font-semibold text-sm ${challengeConvFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                {challengeConvFeedback}
                              </div>
                            )}
                          </>
                        )}
                      </>
                    );
                  })()}
                </div>
              )}
            </div>
          )}
          {challengeCompleted && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              {/* Confetti */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-confetti"
                    style={{
                      width: '10px',
                      height: '10px',
                      left: `${Math.random() * 100}%`,
                      top: '-20px',
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                      backgroundColor: ['#FFD700', '#FF6B9D', '#4169E1', '#32CD32', '#FF69B4', '#00CED1'][Math.floor(Math.random() * 6)]
                    }}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-4">
                <img src="./bubblesolo.png" alt="Celebration" className="h-20 sm:h-28 w-auto animate-bounce" />
              </div>
              <div className="text-2xl mb-2">🎉✨🎊</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Challenge Complete!</h2>
              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">You earned {currentChallenge.points} points!</p>
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex items-center justify-center gap-2 sm:gap-3"><Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" /><span className="text-xl sm:text-2xl font-bold text-orange-600">+{currentChallenge.points} Points</span></div>
              </div>
              <button onClick={exitChallenge} className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg active:scale-95 transition-transform">Back to Dashboard</button>
            </div>
          )}
          {challengeFailed && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center">
              <div className="text-5xl sm:text-6xl mb-4">😔</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                {challengeProgress < (currentChallenge.passingScore || currentChallenge.targetCount) ? "Not Quite!" : "Time's Up!"}
              </h2>
              <p className="text-gray-600 mb-6">
                You got {challengeProgress} out of {currentChallenge.targetCount}. 
                {currentChallenge.passingScore && challengeProgress < currentChallenge.passingScore && ` You need ${currentChallenge.passingScore} to pass.`}
                {challengeProgress < 10 && " Learn more lessons to unlock more words!"}
                {" "}Try again tomorrow!
              </p>
              <button onClick={exitChallenge} className="w-full bg-gray-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-700">Back to Dashboard</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // CONVERSATION VIEW
  if (view === 'conversation' && currentConversation) {
    const displayedTurns = currentConversation.turns.slice(0, conversationTurnIndex + 1);
    const currentTurn = currentConversation.turns[conversationTurnIndex];
    const isUserTurn = currentTurn && currentTurn.speaker === 'user';
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
        <nav className="bg-white shadow-sm p-4">
          <button onClick={() => setView('home')} className="flex items-center gap-2 text-gray-600"><Home className="w-5 h-5" /> Exit Conversation</button>
        </nav>
        <div className="max-w-4xl mx-auto p-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{currentConversation.icon}</span>
              <div><h2 className="text-2xl font-bold">{currentConversation.title}</h2><span className="text-sm text-gray-500">{currentConversation.difficulty}</span></div>
            </div>
            <div className="space-y-4 mb-8 max-h-96 overflow-y-auto" ref={(el) => { if (el) el.scrollTop = el.scrollHeight; }}>
              {displayedTurns.map((turn, i) => (
                <div key={i} className={`flex ${turn.speaker === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-md p-4 rounded-2xl ${turn.speaker === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'}`}>
                    <div>
                      {turn.speaker === 'user' ? (turn.userAnswer || turn.text) : (
                        <>
                          <div>{turn.text}</div>
                          {turn.english && (
                            <div className="mt-2 pt-2 border-t border-gray-300">
                              <button 
                                onClick={() => setShowTranslation({...showTranslation, [i]: !showTranslation[i]})}
                                className="text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                              >
                                🇬🇧 {showTranslation[i] ? 'Hide' : 'Show'} translation
                              </button>
                              {showTranslation[i] && (
                                <div className="text-sm italic text-gray-600 mt-1">{turn.english}</div>
                              )}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isUserTurn && (
              <>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 mb-4"><div className="font-semibold text-blue-900">{currentTurn.prompt}</div></div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 mb-4 min-h-[60px] flex flex-wrap gap-2 items-center">
                  {userSentence.length === 0 ? <span className="text-gray-400">Tap words below to build your sentence...</span> : userSentence.map((word, i) => <span key={i} onClick={() => setUserSentence(prev => prev.filter((_, idx) => idx !== i))} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold cursor-pointer hover:bg-red-100 hover:text-red-700 active:scale-95 transition-all">{word} <span className="text-xs opacity-50">x</span></span>)}
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
{shuffledWordBank.map((word, i) => {
  const selectedCount = userSentence.filter(w => w === word).length;
  const totalCount = shuffledWordBank.filter(w => w === word).length;
  const isUsed = selectedCount >= totalCount;
  return (
    <button
      key={i}
      onClick={() => !isUsed && addWordToSentence(word)}
      disabled={isUsed}
      className={`px-4 py-2 rounded-lg font-semibold transition-all ${isUsed ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'}`}
    >{word}</button>
  );
      
})}
</div>
                <div className="flex gap-3">
                  <button onClick={removeLastWord} disabled={userSentence.length === 0} className="px-6 py-2 bg-gray-200 rounded-lg font-semibold disabled:opacity-50">← Remove</button>
                  <button onClick={checkConversationAnswer} disabled={userSentence.length === 0} className="flex-1 bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-50">Check Answer</button>
                </div>
                {conversationFeedback && <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${conversationFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{conversationFeedback}</div>}
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // CONVERSATION COMPLETE CELEBRATION
  if (view === 'conversationComplete') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-50 flex items-center justify-center p-4">
        <div className="relative">
          {/* Confetti */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-confetti"
                style={{
                  width: '10px',
                  height: '10px',
                  left: `${Math.random() * 100}%`,
                  top: '-20px',
                  animationDelay: `${Math.random() * 0.5}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  backgroundColor: ['#FFD700', '#FF6B9D', '#4169E1', '#32CD32', '#FF69B4', '#00CED1'][Math.floor(Math.random() * 6)]
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center relative z-10 max-w-md">
            <div className="flex justify-center mb-6">
              <img 
                src="./bubblesolo.png" 
                alt="Celebration" 
                className="h-32 w-auto animate-bounce"
              />
            </div>
            <div className="text-5xl mb-4">🎉✨🎊</div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Conversation Complete!</h2>
            <p className="text-gray-600 text-lg">Great job practicing! 🗣️</p>
            
            <div className="mt-6 bg-gradient-to-r from-green-100 to-teal-100 rounded-xl p-4">
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">💬</span>
                <span className="text-xl font-bold text-green-700">+65 Points!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // LESSON VIEW
  if (view === 'lesson' && currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <nav className="bg-white shadow-sm p-3 sm:p-4 sticky top-0 z-40">
          <button onClick={() => setView('home')} className="flex items-center gap-1 sm:gap-2 text-gray-600 text-sm sm:text-base"><Home className="w-5 h-5" /> <span className="hidden sm:inline">Exit Lesson</span></button>
        </nav>
        <div className="max-w-4xl mx-auto p-3 sm:p-4">
          <div className="bg-white rounded-lg p-3 sm:p-4 mb-4">
            <div className="flex justify-between text-xs sm:text-sm mb-2"><span className="font-semibold truncate mr-2">{currentLesson.title}</span><span className="text-gray-600 flex-shrink-0">{(() => { const s = currentLesson.stages || ['intro','flashcards','match','quiz']; return `${s.indexOf(lessonStage)+1}/${s.length}`; })()}</span></div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${((( currentLesson.stages || ['intro','flashcards','match','quiz']).indexOf(lessonStage)+1) / (currentLesson.stages || ['intro','flashcards','match','quiz']).length) * 100}%` }} /></div>
          </div>

          {lessonStage === 'intro' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Learn These Words</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {currentLesson.words.map((word, i) => (
                  <div key={i} className="border-2 border-blue-200 rounded-lg p-3 sm:p-4 bg-blue-50">
                    <div className="text-base sm:text-lg font-semibold text-gray-800">{word.en}</div>
                    <div className="flex items-center gap-1">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">{word.ca}</div>
                      <button onClick={() => speakWord(word.ca)} className="p-1 rounded-full hover:bg-blue-200 active:bg-blue-300 transition-colors" title="Hear pronunciation">
                        <Volume2 className="w-5 h-5 text-blue-600" />
                      </button>
                      <button onClick={() => speakWord(word.ca, true)} className="rounded-full hover:bg-blue-200 active:bg-blue-300 transition-colors inline-flex items-center justify-center h-7 w-7" title="Hear slowly">
                        <span className="block -mt-1.5" style={{fontSize: '20px', lineHeight: '20px'}}>🐢</span>
                      </button>
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 italic">{word.pronunciation}</div>
                  </div>
                ))}
              </div>
              <button onClick={nextStage} className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center gap-2">Continue to Practice <ArrowRight className="w-5 h-5" /></button>
            </div>
          )}

          {lessonStage === 'flashcards' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Practice with Flashcards</h2>
              <div className="max-w-md mx-auto">
                <div onClick={() => setFlipped(!flipped)} className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-8 sm:p-12 cursor-pointer shadow-lg active:scale-95 transition-all min-h-[220px] sm:min-h-[300px] flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-2xl sm:text-4xl font-bold mb-4">{flipped ? currentLesson.words[currentCardIndex].ca : currentLesson.words[currentCardIndex].en}</div>
                    {flipped && (
                      <>
                        <div className="text-base sm:text-lg italic opacity-90 mb-3">{currentLesson.words[currentCardIndex].pronunciation}</div>
                        <div className="flex gap-1 items-center">
                          <button onClick={(e) => { e.stopPropagation(); speakWord(currentLesson.words[currentCardIndex].ca); }} className="p-2 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-colors" title="Hear pronunciation">
                            <Volume2 className="w-6 h-6" />
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); speakWord(currentLesson.words[currentCardIndex].ca, true); }} className="p-2 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 transition-colors inline-flex items-center justify-center h-10 w-10" title="Hear slowly">
                            <span className="text-xl leading-none block -mt-1">🐢</span>
                          </button>
                        </div>
                      </>
                    )}
                    <div className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-sm opacity-75"><RotateCw className="w-4 h-4" /> Tap to flip</div>
                  </div>
                </div>
                <div className="mt-4 sm:mt-6 flex justify-between items-center gap-2">
                  <button onClick={() => { setCurrentCardIndex(Math.max(0, currentCardIndex - 1)); setFlipped(false); }} disabled={currentCardIndex === 0} className="px-3 sm:px-6 py-2 bg-gray-200 rounded-lg font-semibold disabled:opacity-50 text-sm sm:text-base">Prev</button>
                  <span className="text-gray-600 text-sm sm:text-base">{currentCardIndex + 1} / {currentLesson.words.length}</span>
                  {currentCardIndex < currentLesson.words.length - 1 ? (
                    <button onClick={() => { setCurrentCardIndex(currentCardIndex + 1); setFlipped(false); }} className="px-3 sm:px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 text-sm sm:text-base">Next</button>
                  ) : (
                    <button onClick={nextStage} className="px-3 sm:px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 text-sm sm:text-base">Done</button>
                  )}
                </div>
              </div>
            </div>
          )}

          {lessonStage === 'match' && (
            <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Match the Pairs</h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-4 max-w-2xl mx-auto">
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">English</h3>
                  {currentLesson.words.map((word, i) => (
                    <button key={i} onClick={() => handleMatchClick(word, 'en')} disabled={matchedPairs.includes(word.ca)} className={`w-full p-2 sm:p-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${matchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : selectedPairs.some(p => p.word === word && p.type === 'en') ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'}`}>{word.en}</button>
                  ))}
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="font-semibold text-gray-600 mb-2 text-sm sm:text-base">Català</h3>
                  {shuffledCatalan.map((word, i) => (
                    <button key={i} onClick={() => handleMatchClick(word, 'ca')} disabled={matchedPairs.includes(word.ca)} className={`w-full p-2 sm:p-4 rounded-lg font-semibold transition-all text-sm sm:text-base ${matchedPairs.includes(word.ca) ? 'bg-green-100 text-green-800 opacity-50' : selectedPairs.some(p => p.word === word && p.type === 'ca') ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200 active:bg-gray-300'}`}>{word.ca}</button>
                  ))}
                </div>
              </div>
              {matchedPairs.length === currentLesson.words.length && (
                <div className="mt-6 sm:mt-8 text-center">
                  <div className="mb-4 text-green-600 font-bold text-lg sm:text-xl">Perfect! All matched! 🎉</div>
                  <button onClick={nextStage} className="w-full max-w-md mx-auto block bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue to Quiz</button>
                </div>
              )}
            </div>
          )}

          {lessonStage === 'quiz' && (
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Final Quiz</h2>
              <div className="max-w-2xl mx-auto">
                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-2">Question {quizIndex + 1} / {currentLesson.words.length}</div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-0.5">
                  What is "{quizWords[quizIndex].en}" in Catalan?
                  <button onClick={() => speakWord(quizWords[quizIndex].ca)} className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition-colors" title="Hear pronunciation">
                    <Volume2 className="w-5 h-5 text-blue-600" />
                  </button>
                  <button onClick={() => speakWord(quizWords[quizIndex].ca, true)} className="p-1 rounded-full hover:bg-blue-100 active:bg-blue-200 transition-colors inline-flex items-center justify-center h-7 w-7" title="Hear slowly">
                    <span className="text-lg leading-none block -mt-1">🐢</span>
                  </button>
                </h3>
                </div>
                <div className="space-y-3">
                  {quizOptions.map((option, i) => (
                    <button key={i} onClick={() => handleQuizAnswer(option)} disabled={quizFeedback !== ''} className={`w-full p-4 rounded-lg font-semibold transition-all text-left disabled:opacity-75 focus:outline-none focus:bg-gray-100 active:bg-blue-200 ${quizFeedback && option === quizWords[quizIndex]?.ca ? 'bg-green-200' : quizFeedback ? 'bg-gray-100' : 'bg-gray-100'}`}>{option}</button>
                  ))}
                </div>
                {quizFeedback && (
                  <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${quizFeedback.includes('Correcte') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {quizFeedback}
                    <button
                      onClick={() => {
                        if (quizIndex < quizWords.length - 1) {
                          const nextIndex = quizIndex + 1;
                          const correctAnswer = quizWords[nextIndex].ca;
                          const wrongAnswers = quizWords.filter((_, i) => i !== nextIndex).map(w => w.ca).sort(() => Math.random() - 0.5).slice(0, 2);
                          setQuizOptions([correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5));
                          setQuizIndex(nextIndex);
                          setQuizFeedback('');
                        } else {
                          nextStage();
                        }
                      }}
                      className="mt-3 block w-full bg-white text-gray-700 border-2 border-gray-300 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
                    >
                      Next →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
          {lessonStage === 'fillInTheBlank' && currentLesson.stageData?.fillInTheBlank && (
            <FillInTheBlank
              exercises={currentLesson.stageData.fillInTheBlank}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}
          {lessonStage === 'sentenceOrdering' && currentLesson.stageData?.sentenceOrdering && (
            <SentenceOrdering
              exercises={currentLesson.stageData.sentenceOrdering}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}
          {lessonStage === 'listenAndType' && currentLesson.stageData?.listenAndType && (
            <ListenAndType
              exercises={currentLesson.stageData.listenAndType}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}
          {lessonStage === 'miniConversation' && currentLesson.stageData?.miniConversation && (
            <MiniConversation
              dialogue={currentLesson.stageData.miniConversation}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}
          {lessonStage === 'errorCorrection' && currentLesson.stageData?.errorCorrection && (
            <ErrorCorrection
              exercises={currentLesson.stageData.errorCorrection}
              onComplete={() => nextStage()}
              onAnswer={handleLessonAnswer}
              audioCache={audioCache}
              ELEVENLABS_API_KEY={ELEVENLABS_API_KEY}
              ELEVENLABS_VOICE_ID={ELEVENLABS_VOICE_ID}
            />
          )}

{lessonStage === 'failed' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              <div className="text-6xl mb-4">😔</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">Not Quite There Yet</h2>
              <p className="text-gray-600 mb-6">
                You got <span className="font-bold text-red-600">{lessonCorrectAnswers}/{lessonTotalQuestions}</span> correct 
                (<span className="font-bold">{Math.round((lessonCorrectAnswers / lessonTotalQuestions) * 100)}%</span>)
              </p>
              <p className="text-gray-700 mb-8">You need 70% to pass this lesson. Let's review and try again!</p>
              
              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-blue-900 mb-3">💡 Study Tip</h3>
                <p className="text-blue-800 text-sm">
                  Take your time with each question. Listen carefully to the pronunciations and read the translations.
                </p>
              </div>

              <button
                onClick={() => {
                  // RESTART LESSON
                  setLessonStage('intro');
                  setCurrentCardIndex(0);
                  setFlipped(false);
                  setMatchedPairs([]);
                  setSelectedPairs([]);
                  setQuizIndex(0);
                  setQuizCorrectCount(0);
                  setLessonCorrectAnswers(0);
                  setLessonTotalQuestions(0);
                }}
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-bold text-lg mb-3"
              >
                Try Again
              </button>

              <button
                onClick={() => {
                  setView('home');
                  setCurrentLesson(null);
                  setLessonStage('intro');
                  setLessonCorrectAnswers(0);
                  setLessonTotalQuestions(0);
                }}
                className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold"
              >
                Back to Home
              </button>
            </div>
          )}

      
          {lessonStage === 'complete' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
              {/* Confetti */}
              <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
                {[...Array(50)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full animate-confetti"
                    style={{
                      width: '10px',
                      height: '10px',
                      left: `${Math.random() * 100}%`,
                      top: '-20px',
                      animationDelay: `${Math.random() * 0.5}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                      backgroundColor: ['#FFD700', '#FF6B9D', '#4169E1', '#32CD32', '#FF69B4', '#00CED1'][Math.floor(Math.random() * 6)]
                    }}
                  />
                ))}
              </div>

              <div className="flex justify-center mb-4">
                <img src="./bubblesolo.png" alt="Celebration" className="h-24 sm:h-32 w-auto animate-bounce" />
              </div>
              <div className="text-2xl mb-2">🎉✨🎊</div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Lesson Complete!</h2>
              <p className="text-gray-600 mb-6">You've learned {currentLesson.words.length} new words!</p>
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center gap-3">
                  <Trophy className="w-8 h-8 text-green-600" />
                  <span className="text-xl font-bold text-green-700">+50 Points!</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (!completed.includes(currentLesson.id)) {
                    setCompleted([...completed, currentLesson.id]);
                    setScore(score + 50);
                    const newWords = currentLesson.words.map(word => initializeWordForReview(word, currentLesson.id));
                    setWordHistory([...wordHistory, ...newWords]);
                    
                    // Update streak when completing a lesson
                    const today = new Date().toDateString();
                    
                    if (lastReviewDate !== today) {
                      if (lastReviewDate) {
                        const lastDate = new Date(lastReviewDate);
                        const todayDate = new Date(today);
                        const diffDays = Math.ceil((todayDate - lastDate) / (1000 * 60 * 60 * 24));
                        
                        
                        if (diffDays === 1) {
                          const newStreak = reviewStreak + 1;
                          
                          setReviewStreak(newStreak);
                          
                          
                          setStreakCelebrationData({
                            streak: newStreak,
                            isMilestone: [7, 14, 30, 50, 100].includes(newStreak)
                          });
                          setShowStreakCelebration(true);
                          
                          
                        } else if (diffDays > 1) {
                          setPreviousStreak(reviewStreak);
                          setReviewStreak(1);
                          setShowStreakLost(true);
                        }
                      } else {
                        setReviewStreak(1);
                      }
                      setLastReviewDate(today);
                    }
                  }
                  
                  setView('home');
                  setCurrentLesson(null);
                  setQuizIndex(0);
                  setLessonStage('intro');
                }} 
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-bold text-lg"
              >
                Continue →
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // DASHBOARD
  // Secret tap for premium toggle (mobile testing) - tap title 5 times
  const handleSecretTap = () => {
    secretTapsRef.current += 1;
    if (secretTapTimerRef.current) clearTimeout(secretTapTimerRef.current);
    secretTapTimerRef.current = setTimeout(() => {
      if (secretTapsRef.current >= 5) {
        const newPremium = !premium;
        setPremium(newPremium);
        window.alert(newPremium ? '🔓 Premium ENABLED!' : '🔒 Premium DISABLED!');
      }
      secretTapsRef.current = 0;
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 py-3 flex justify-between items-center">
          <div onClick={handleSecretTap} onTouchEnd={handleSecretTap} className="flex items-center gap-2 cursor-pointer select-none">
            <img src="./bubble.png" alt="HolaCatalà" className="h-9 sm:h-11 w-auto" />
            <span className="text-xl sm:text-2xl font-bold text-blue-600">HolaCatalà</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="mailto:aprencatalaapp@gmail.com?subject=HolaCatalà Beta Feedback" className="text-xs sm:text-sm bg-purple-100 text-purple-700 px-2 sm:px-3 py-1 rounded-full hover:bg-purple-200 transition-colors">Feedback</a>
            {authUser ? (
              <button 
                onClick={handleSignOut}
                className="flex items-center gap-1 bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 px-2 py-1.5 rounded-lg transition-colors active:bg-red-200"
              >
                <User className="w-5 h-5" />
                <span className="text-xs font-medium">Sign Out</span>
              </button>
            ) : (
              <button 
                onClick={() => setShowAuth(true)}
                className="flex items-center gap-1 bg-blue-100 hover:bg-blue-200 text-blue-700 px-2 py-1.5 rounded-lg transition-colors active:bg-blue-300"
              >
                <User className="w-5 h-5" />
                <span className="text-xs font-medium">Sign In</span>
              </button>
            )}
          </div>
        </div>
      </nav>
      <div className="max-w-4xl mx-auto p-3 sm:p-4">
        {/* Continue Learning CTA */}
        {completed.length > 0 && completed.length < 30 && (() => {
          const nextLesson = LESSONS.find(l => !completed.includes(l.id) && !isLessonLocked(l).locked);
          if (!nextLesson) return null;
          return (
            <div onClick={() => startLesson(nextLesson)} className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-4 mb-4 sm:mb-6 cursor-pointer active:scale-95 transition-all">
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 rounded-full p-2"><BookOpen className="w-5 h-5" /></div>
                  <div>
                    <div className="text-sm opacity-90">Continue Learning</div>
                    <div className="font-bold">{nextLesson.title}</div>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          );
        })()}
        {/* Stats Cards - horizontal scroll on mobile */}
        <div className="flex sm:grid sm:grid-cols-3 gap-3 mb-4 sm:mb-6 overflow-x-auto pb-2 sm:pb-0 -mx-3 px-3 sm:mx-0 sm:px-0">
          {(() => {
  const todayChallenge = getTodayChallenge();
  const canDoChallenge = !(
    (todayChallenge.type === 'conversations' && completedConversations.length < 3) ||
    (todayChallenge.type === 'review' && wordHistory.length < 15)
  );
  const attemptedToday = wasChallengeAttemptedToday();
  
  return (
    <div 
      onClick={() => attemptedToday ? null : canDoChallenge ? startChallenge() : null}
      className={`bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[200px] sm:min-w-0 flex-shrink-0 sm:flex-shrink ${attemptedToday ? 'opacity-75' : 'cursor-pointer active:scale-95 transition-all'}`}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl sm:text-4xl">{todayChallenge.icon}</span>
        {attemptedToday ? <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" /> : <Award className="w-6 h-6 sm:w-8 sm:h-8" />}
      </div>
      <div className="text-xs sm:text-sm opacity-90">Daily Challenge</div>
      <div className="text-base sm:text-lg font-bold mt-1">{todayChallenge.title}</div>
      {attemptedToday ? (
        wasChallengeCompletedSuccessfully() ? 
          <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">✓ Done!</div> :
          <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">✗ Try tomorrow</div>
      ) : !canDoChallenge ? (
        <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">Complete 3 conversations first →</div>
      ) : (
        <div className="mt-2 sm:mt-3 text-xs bg-white/20 rounded-full px-2 sm:px-3 py-1 inline-block">+{todayChallenge.points} pts →</div>
      )}
    </div>
  );
})()}
          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[140px] sm:min-w-0 flex-shrink-0 sm:flex-shrink">
            <div className="flex items-center justify-between mb-2"><Calendar className="w-6 h-6 sm:w-8 sm:h-8" /><span className="text-2xl sm:text-3xl font-bold">{reviewStreak}</span></div>
            <div className="text-xs sm:text-sm opacity-90">Day Streak</div>
            <div className="mt-2 sm:mt-3 text-xs opacity-75">Keep it up! 🔥</div>
          </div>
          <div 
            onClick={() => {
              // Check if user has words to review
              if (wordHistory.length < 10) {
                return; // Don't do anything, message is in the card
              }
              // Check daily limit
              const today = new Date().toDateString();
              if (lastDailyReviewDate === today && dailyReviewsCompleted >= 1) {
                return; // Don't do anything, message is in the card
              }
              // Start review session
              startReviewSession();
            }}
            className={`bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl shadow-lg p-4 sm:p-6 text-white min-w-[140px] sm:min-w-0 flex-shrink-0 sm:flex-shrink ${
              wordHistory.length >= 10 && !(lastDailyReviewDate === new Date().toDateString() && dailyReviewsCompleted >= 1) 
                ? 'cursor-pointer active:scale-95' 
                : 'cursor-default'
            } transition-all`}
          >
            <div className="flex items-center justify-between mb-2"><TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" /><span className="text-2xl sm:text-3xl font-bold">{wordHistory.length}</span></div>
            <div className="text-xs sm:text-sm opacity-90">Words Learned</div>
            <div className="mt-2 sm:mt-3 text-xs opacity-75">
              {lastDailyReviewDate === new Date().toDateString() && dailyReviewsCompleted >= 1
                ? '✓ Done today! Come back tomorrow' 
                : wordHistory.length >= 10 
                  ? 'Click here to daily review →' 
                  : 'Complete lessons to unlock →'}
            </div>
          </div>
        </div>
        {/* Tab Navigation - icon only on mobile */}
        <div className="bg-white rounded-xl shadow-sm mb-4 sm:mb-6 sticky top-12 z-30">
          <div className="flex border-b">
            <button onClick={() => setDashboardTab('lessons')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'lessons' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <BookOpen className="w-5 h-5" />
              <span className="hidden sm:inline">Lessons</span>
            </button>
            <button onClick={() => setDashboardTab('practice')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'practice' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Practice</span>
            </button>
            
            <button onClick={() => setDashboardTab('achievements')} className={`flex-1 py-3 font-semibold text-xs sm:text-base flex flex-col sm:flex-row items-center justify-center gap-1 ${dashboardTab === 'achievements' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}>
              <Trophy className="w-5 h-5" />
              <span className="hidden sm:inline">Badges</span>
            </button>
          </div>
        </div>
        {dashboardTab === 'lessons' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Your Lessons</h2>
            <div className="space-y-2 sm:space-y-3">
              {(() => { let foundNext = false; return LESSONS.map((lesson) => {
  const lockStatus = isLessonLocked(lesson);
  const isComplete = completed.includes(lesson.id);
  const lessonTier = getTierForLesson(lesson.id);
  const showReviewButton = shouldShowReviewGateButton(lessonTier) && LESSON_TIERS.find(t => t.tier === lessonTier)?.lessons[2] === lesson.id;
  const isNextLesson = !isComplete && !lockStatus.locked && !foundNext;
  if (isNextLesson) foundNext = true;

  return (
    <div key={lesson.id} ref={isNextLesson ? nextLessonRef : null}>
      <div 
        onClick={() => { if (lockStatus.locked && lockStatus.reason === 'premium') { setShowPaywall(true); } else if (lockStatus.locked && lockStatus.reason === 'daygate') { setShowPaywall(true); } else if (!lockStatus.locked) { startLesson(lesson); } }}
        className={`border-2 rounded-lg p-4 transition-all ${lockStatus.locked ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60' : isComplete ? 'border-green-500 bg-green-50 cursor-pointer hover:bg-green-100' : 'border-gray-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500 uppercase mb-1">{lesson.module}</div>
            <div className="font-semibold">{lesson.title}</div>
            {lockStatus.locked && lockStatus.reason === 'tier' && (
              <div className="text-xs text-purple-600 mt-1">Complete review to unlock</div>
            )}
            {lockStatus.locked && lockStatus.reason === 'daygate' && (
              <div className="text-xs text-blue-600 mt-1">🕐 Unlocks tomorrow — come back!</div>
            )}
          </div>
          {lockStatus.locked ? <Lock className="w-6 h-6 text-gray-400" /> : isComplete ? <CheckCircle className="w-6 h-6 text-green-600" /> : null}
        </div>
      </div>
      
      {showReviewButton && (
        <div onClick={() => startReviewGate(lessonTier, isComprehensiveReviewPoint(lesson.id))} className="mt-2 mb-4 border-2 border-purple-400 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 cursor-pointer hover:from-purple-100 hover:to-indigo-100 transition-all">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{isComprehensiveReviewPoint(lesson.id) ? '🏆' : '🔓'}</span>
              <div>
                <div className="font-semibold text-purple-800">{isComprehensiveReviewPoint(lesson.id) ? 'Comprehensive Review' : 'Unlock Next Lessons'}</div>
                <div className="text-xs text-purple-600">{isComprehensiveReviewPoint(lesson.id) ? 'Pass a big review (16/20) to continue' : 'Pass a quick review (8/10) to continue'}</div>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-purple-600" />
          </div>
        </div>
      )}
    </div>
  );
})})()}
            </div>
          </div>
        )}
        
        {dashboardTab === 'practice' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">Conversation Practice</h2>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Practice real conversations in Catalan. Unlock scenarios by completing lessons!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[...CONVERSATIONS].sort((a, b) => a.unlockAfterLesson - b.unlockAfterLesson).map((conv) => {
                const unlocked = completed.includes(conv.unlockAfterLesson);
                const isComplete = completedConversations.includes(conv.id);
                return (
                  <div key={conv.id} onClick={() => { if (unlocked) { startConversation(conv); } else if (!premium) { setShowPaywall(true); } }} className={`border-2 rounded-lg p-3 sm:p-4 transition-all active:scale-98 ${!unlocked ? 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60' : isComplete ? 'border-green-500 bg-green-50 cursor-pointer hover:bg-green-100' : 'border-gray-200 hover:border-green-400 hover:bg-green-50 cursor-pointer'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl">{conv.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm sm:text-base truncate">{conv.title}</div>
                        {!unlocked && <div className="text-xs text-gray-500 mt-1">Complete lesson {conv.unlockAfterLesson} to unlock</div>}
                      </div>
                      {!unlocked ? <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 flex-shrink-0" /> : isComplete ? <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" /> : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {dashboardTab === 'achievements' && (
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold">Achievements</h2>
              <div className="text-xs sm:text-sm text-gray-600">{unlockedAchievements.length} / {ACHIEVEMENTS.length} unlocked</div>
            </div>
            {Object.entries(getAchievementsByCategory()).map(([category, achievements]) => (
              <div key={category} className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-gray-700 mb-3 sm:mb-4">{category}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {achievements.map((achievement) => {
                    const isUnlocked = unlockedAchievements.some(a => a.id === achievement.id);
                    const progress = getAchievementProgress(achievement, { completed, score, wordHistory, reviewStreak, challengeHistory, completedConversations });
                    return (
                      <div key={achievement.id} className={`border-2 rounded-lg p-3 sm:p-4 transition-all ${isUnlocked ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50 opacity-70'}`}>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className={`text-2xl sm:text-3xl ${isUnlocked ? '' : 'grayscale opacity-50'}`}>{achievement.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-sm sm:text-base flex items-center gap-1 sm:gap-2">
                              <span className="truncate">{achievement.title}</span>
                              {isUnlocked && <CheckCircle className="w-4 h-4 text-yellow-600 flex-shrink-0" />}
                            </div>
                            <div className="text-xs text-gray-500 truncate">{achievement.description}</div>
                            {!isUnlocked && (
                              <div className="mt-2">
                                <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full overflow-hidden">
                                  <div className="h-full bg-yellow-500 transition-all" style={{ width: `${progress.percentage}%` }} />
                                </div>
                                <div className="text-xs text-gray-500 mt-1">{progress.current} / {progress.target}</div>
                              </div>
                            )}
                          </div>
                          <div className={`text-xs sm:text-sm font-bold flex-shrink-0 ${isUnlocked ? 'text-yellow-600' : 'text-gray-400'}`}>+{achievement.points}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {showPaywall && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowPaywall(false)}>
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
      <div className="text-center">
        <div className="text-5xl mb-4">{completed.length >= 3 ? '🎓' : '🚀'}</div>
        <h2 className="text-2xl font-bold mb-2">{completed.length >= 3 ? `You've learned ${wordHistory.length} words!` : 'Unlock Full Access'}</h2>
        <p className="text-gray-600 mb-6">{completed.length >= 3 ? "You're making great progress! Subscribe now to unlock everything instantly, or come back tomorrow for more free lessons." : 'Start your Catalan learning journey with full access to all content.'}</p>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-left">
              <span className="text-xl">📚</span>
              <span className="text-sm font-medium">Full access to all lessons & vocabulary</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <span className="text-xl">🗣️</span>
              <span className="text-sm font-medium">Real conversation practice scenarios</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <span className="text-xl">🔊</span>
              <span className="text-sm font-medium">Audio pronunciation for every word</span>
            </div>
            <div className="flex items-center gap-3 text-left">
              <span className="text-xl">🏆</span>
              <span className="text-sm font-medium">Daily challenges & achievements</span>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-3xl font-bold text-blue-600">€3.99<span className="text-base font-normal text-gray-500">/month</span></div>
          <div className="text-xs text-gray-500 mt-1">Cancel anytime</div>
        </div>
        
        <a href="https://buy.stripe.com/4gM28s044cIP7o8f5VefC00" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all text-center">
          Subscribe Now →
        </a>
        
        <button onClick={() => setShowPaywall(false)} className="w-full text-gray-500 py-3 mt-2 text-sm">Maybe later</button>
      </div>
    </div>
  </div>
)}

{/* Streak Celebration Modal */}
{showStreakCelebration && streakCelebrationData && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    {streakCelebrationData.isMilestone && (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-confetti"
            style={{
              width: '10px',
              height: '10px',
              left: `${Math.random() * 100}%`,
              top: '-20px',
              animationDelay: `${Math.random() * 0.5}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              backgroundColor: ['#FFD700', '#FF6B9D', '#4169E1', '#32CD32', '#FF69B4', '#00CED1'][Math.floor(Math.random() * 6)]
            }}
          />
        ))}
      </div>
    )}
    
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center relative z-10">
      <div className="text-6xl mb-4">🔥</div>
      <h2 className="text-3xl font-bold mb-2">
        {streakCelebrationData.isMilestone ? `${streakCelebrationData.streak} Day Streak!` : `${streakCelebrationData.streak} Day Streak!`}
      </h2>
      <p className="text-gray-600 mb-6">
        {streakCelebrationData.isMilestone 
          ? "Incredible dedication! You're unstoppable! 🎉" 
          : "Keep it up! Come back tomorrow!"}
      </p>
      
      {streakCelebrationData.isMilestone && (
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-4 mb-6">
          <div className="flex items-center justify-center gap-3">
            <span className="text-3xl">🏆</span>
            <span className="text-xl font-bold text-orange-700">Milestone Achievement!</span>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setShowStreakCelebration(false)}
        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-xl font-bold text-lg"
      >
        Continue Learning →
      </button>
    </div>
  </div>
)}

{/* Streak Lost Modal */}
{showStreakLost && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center">
      <div className="text-6xl mb-4">😔</div>
      <h2 className="text-3xl font-bold mb-2">Streak Ended</h2>
      <p className="text-gray-600 mb-6">
        Your {previousStreak} day streak has ended, but that's okay!
      </p>
      
      <div className="bg-blue-50 rounded-xl p-4 mb-6">
        <p className="text-blue-800 font-medium">
          Starting fresh today. Let's build an even longer streak! 💪
        </p>
      </div>
      
      <button 
        onClick={() => setShowStreakLost(false)}
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl font-bold text-lg"
      >
        Start New Streak →
      </button>
    </div>
  </div>
)}

{/* Email Verification Prompt Modal */}
      {showVerifyPrompt && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowVerifyPrompt(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h2 className="text-2xl font-bold mb-2">Great job on your first lesson!</h2>
              <p className="text-gray-600 mb-6">Check your email to verify your account and make sure your progress is saved forever.</p>
              
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-blue-800">
                  We sent a verification link to:<br/>
                  <strong>{authUser?.email}</strong>
                </p>
              </div>

              

              <button
                onClick={async () => {
                  const { error } = await supabase.auth.resend({
                    type: 'signup',
                    email: authUser.email,
                  });
                  if (error) {
                    alert('Error: ' + error.message);
                  } else {
                    alert('Verification email sent! Check your inbox.');
                  }
                }}
                className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold mb-3 hover:bg-blue-700"
              >
                Resend Verification Email
              </button>
              
              <button 
                onClick={() => setShowVerifyPrompt(false)} 
                className="w-full text-gray-500 py-2 text-sm hover:underline"
              >
                I'll do it later
              </button>
            </div>
          </div>
        </div>
      )}
      {showSaved && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-full shadow-lg z-50 text-sm font-medium opacity-90">
          ✓ Progress saved
        </div>
      )}
      {newAchievement && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white p-4 rounded-xl shadow-2xl animate-bounce z-50">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{newAchievement.icon}</span>
            <div>
              <div className="text-sm font-semibold opacity-90">Achievement Unlocked!</div>
              <div className="text-lg font-bold">{newAchievement.title}</div>
              <div className="text-xs opacity-90">+{newAchievement.points} points</div>
            </div>
          </div>
        </div>
      )}
      <Analytics />
    </div>
  );
}

export default App;
