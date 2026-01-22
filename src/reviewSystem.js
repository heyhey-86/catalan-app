export const calculateReviewDate = (learnedDate, reviewLevel) => {
  const intervals = [1, 3, 7, 14, 30];
  const date = new Date(learnedDate);
  date.setDate(date.getDate() + intervals[reviewLevel]);
  return date;
};

export const getWordsToReview = (wordHistory) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return wordHistory.filter(item => {
    const reviewDate = new Date(item.nextReview);
    reviewDate.setHours(0, 0, 0, 0);
    return reviewDate <= today;
  });
};

export const updateWordReview = (word, wasCorrect) => {
  const newLevel = wasCorrect ? Math.min(word.reviewLevel + 1, 4) : Math.max(word.reviewLevel - 1, 0);
  return {
    ...word,
    reviewLevel: newLevel,
    lastReviewed: new Date().toISOString(),
    nextReview: calculateReviewDate(new Date(), newLevel).toISOString(),
    timesReviewed: (word.timesReviewed || 0) + 1,
    timesCorrect: (word.timesCorrect || 0) + (wasCorrect ? 1 : 0)
  };
};

export const initializeWordForReview = (word, lessonId) => {
  return {
    en: word.en,
    ca: word.ca,
    pronunciation: word.pronunciation,
    lessonId,
    learnedDate: new Date().toISOString(),
    reviewLevel: 0,
    nextReview: calculateReviewDate(new Date(), 0).toISOString(),
    timesReviewed: 0,
    timesCorrect: 0
  };
};