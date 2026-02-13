// ============================================================
// LessonStages.jsx — New Interactive Stage Types for HolaCatalà
// ============================================================
// This file contains 5 new stage components:
//   1. FillInTheBlank   (lessons 11-20)
//   2. SentenceOrdering  (lessons 11-20)
//   3. ListenAndType     (lessons 21-30+)
//   4. MiniConversation  (lessons 21-30+)
//   5. ErrorCorrection   (lessons 21-30+)
//
// INTEGRATION: Import these into App.jsx and render them
// based on the lesson's `stages` array (see lessons50.js).
// ============================================================

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, Check, X, ArrowRight, RotateCcw, HelpCircle } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// SHARED: Audio playback helper (reuses your existing ElevenLabs setup)
// ─────────────────────────────────────────────────────────────
const playAudio = (text, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID, playbackRate = 1.0) => {
  if (!text || !ELEVENLABS_API_KEY) return;
  
  const cacheKey = text.toLowerCase().trim();
  
  if (audioCache.current && audioCache.current[cacheKey]) {
    const audio = new Audio(audioCache.current[cacheKey]);
    audio.playbackRate = playbackRate;
    audio.play().catch(() => {});
    return;
  }
  
  fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'xi-api-key': ELEVENLABS_API_KEY
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_v3',
      language_code: 'es',
      voice_settings: { stability: 1.0, similarity_boost: 1.0 }
    })
  })
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    if (audioCache.current) audioCache.current[cacheKey] = url;
    const audio = new Audio(url);
    audio.playbackRate = playbackRate;
    audio.play().catch(() => {});
  })
  .catch(() => {});
};

// ─────────────────────────────────────────────────────────────
// Normalize text for comparison (accent-forgiving)
// ─────────────────────────────────────────────────────────────
const normalizeText = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,!?¿¡;:'"()]/g, '')
    .trim()
    .replace(/\s+/g, ' ');
};

const ReportButton = ({ lessonTitle, questionText }) => {
  const subject = encodeURIComponent('Report: ' + (lessonTitle || 'Unknown'));
  const body = encodeURIComponent('Question: ' + (questionText || '') + '\n\nMy issue: ');
  return (
        <a
      href={'mailto:aprencatalaapp@gmail.com?subject=' + subject + '&body=' + body}
      className="flex items-center justify-center text-xs text-gray-400 hover:text-gray-600 mt-3"
    >
      🚩 Report incorrect
    </a>
  );
};

// =============================================================
// 1. FILL IN THE BLANK
// =============================================================
// Shows a sentence with a blank. User picks the correct word
// from multiple choices. Great for context-based learning.
// =============================================================

export function FillInTheBlank({ 
  exercises, // Array of { sentence, blank, options, correctIndex, translation }
  onComplete,
  onAnswer,
  audioCache, 
  ELEVENLABS_API_KEY, 
  ELEVENLABS_VOICE_ID,
  lessonTitle 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showTranslation, setShowTranslation] = useState(true);
  const [completed, setCompleted] = useState(false);

  const total = exercises.length;
  const current = exercises[currentIndex] || exercises[total - 1];

 const handleSelect = (optionIndex) => {
    if (isCorrect !== null) return; // Already answered
    setSelected(optionIndex);
    const correct = optionIndex === current.correctIndex;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 10);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    // Play the full sentence with the correct word
    const fullSentence = current.sentence.replace('___', current.options[current.correctIndex]);
    playAudio(fullSentence, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);

    };

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">🎯</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Fill in the Blank Complete!</h3>
        <p className="text-gray-600 mb-4">You scored {score} / {total * 10} points</p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(score / (total * 10)) * 100}%` }}
          />
        </div>
        <button
          onClick={() => onComplete(score)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          Continue <ArrowRight className="inline ml-2 w-5 h-5" />
        </button>
      </div>
    );
  }

  // Split sentence around the blank
  const parts = current.sentence.split('___');

  return (
    <div className="px-4 py-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">Fill in the Blank</span>
        <span className="text-sm text-gray-500">{currentIndex + 1} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / total) * 100}%` }}
        />
      </div>

      {/* Sentence with blank */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <p className="text-xl text-gray-800 leading-relaxed text-center">
          {parts[0]}
          <span key={currentIndex} className={`inline-block min-w-[80px] mx-1 px-3 py-1 rounded-lg font-bold text-lg border-2 border-dashed ${
            isCorrect === true ? 'bg-green-100 border-green-400 text-green-700' :
            isCorrect === false ? 'bg-red-100 border-red-400 text-red-700' :
            'bg-blue-50 border-blue-300 text-blue-600'
          }`}>
            {selected !== null ? current.options[selected] : '___'}
          </span>
          {parts[1]}
        </p>
        
        {/* Translation hint */}
        <button
          onClick={() => setShowTranslation(!showTranslation)}
          className="mt-4 mx-auto flex items-center text-sm text-gray-400 hover:text-gray-600"
        >
          <HelpCircle className="w-4 h-4 mr-1" />
          {showTranslation ? 'Hide' : 'Show'} translation
        </button>
        {showTranslation && (
          <p className="text-center text-sm text-gray-400 mt-2 italic">{current.translation}</p>
        )}
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {current.options.map((option, idx) => {
          let btnClass = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-blue-400 hover:bg-blue-50';
          
          if (isCorrect !== null) {
            if (idx === current.correctIndex) {
              btnClass = 'bg-green-100 border-2 border-green-400 text-green-700';
            } else if (idx === selected && !isCorrect) {
              btnClass = 'bg-red-100 border-2 border-red-400 text-red-700';
            } else {
              btnClass = 'bg-gray-50 border-2 border-gray-100 text-gray-400';
            }
          }

          return (
            <button
              key={`${currentIndex}-${idx}`}
              onClick={() => handleSelect(idx)}
              disabled={isCorrect !== null}
              className={`${btnClass} rounded-xl py-3 px-4 text-center font-medium text-lg transition-all active:scale-95`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {isCorrect !== null && (
        <div className={`mt-4 p-3 rounded-xl text-center font-medium ${
          isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {isCorrect ? (
            <span><Check className="inline w-5 h-5 mr-1" /> Correct! +10 points</span>
          ) : (
            <>
              <span><X className="inline w-5 h-5 mr-1" /> The answer is: <strong>{current.options[current.correctIndex]}</strong></span>
              {current.explanation && (
                <p className="text-sm mt-2 font-normal opacity-75">{current.explanation}</p>
              )}
            </>
          )}
          <button
            onClick={() => {
              if (currentIndex < total - 1) {
                setCurrentIndex(i => i + 1);
                setSelected(null);
                setIsCorrect(null);
                setShowTranslation(true);
              } else {
                setCompleted(true);
              }
            }}
            className="mt-3 block w-full bg-white text-gray-700 border-2 border-gray-300 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
          >
            Next →
          </button>
        </div>
      )}
      {isCorrect !== null && (
        <ReportButton lessonTitle={lessonTitle} questionText={current.sentence} />
      )}
    </div>
  );
}


// =============================================================
// 2. SENTENCE ORDERING
// =============================================================
// Shows a jumbled sentence. User taps words in correct order.
// Reuses the word-bank mechanic from conversations.
// =============================================================

export function SentenceOrdering({ 
  exercises, // Array of { words: string[], correctOrder: string, translation, hint? }
  onComplete,
  onAnswer, 
  audioCache, 
  ELEVENLABS_API_KEY, 
  ELEVENLABS_VOICE_ID,
  lessonTitle 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWords, setSelectedWords] = useState([]);
  const [availableWords, setAvailableWords] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);

  const current = exercises[currentIndex];
  const total = exercises.length;

  // Shuffle words once per exercise
  useEffect(() => {
    if (current) {
      const shuffled = [...current.words].sort(() => Math.random() - 0.5);
      setAvailableWords(shuffled.map((w, i) => ({ word: w, id: i, used: false })));
      setSelectedWords([]);
      setIsCorrect(null);
      setShowHint(false);
    }
  }, [currentIndex]);

  const handleSelectWord = (wordObj) => {
    if (isCorrect !== null || wordObj.used) return;
    
    // Mark word as used (stays in place, greyed out)
    setAvailableWords(prev => 
      prev.map(w => w.id === wordObj.id ? { ...w, used: true } : w)
    );
    setSelectedWords(prev => [...prev, wordObj]);
  };

  const handleRemoveWord = (wordObj, removeIndex) => {
    if (isCorrect !== null) return;
    
    // Un-grey the word in the bank
    setAvailableWords(prev =>
      prev.map(w => w.id === wordObj.id ? { ...w, used: false } : w)
    );
    setSelectedWords(prev => prev.filter((_, i) => i !== removeIndex));
  };

  const handleCheck = () => {
    const userSentence = selectedWords.map(w => w.word).join(' ');
    const correct = normalizeText(userSentence) === normalizeText(current.correctOrder);
    setIsCorrect(correct);
    if (correct) setScore(s => s + 15);

    // Play correct sentence
    playAudio(current.correctOrder, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
  };

  const handleClear = () => {
    if (isCorrect !== null) return;
    setAvailableWords(prev => prev.map(w => ({ ...w, used: false })));
    setSelectedWords([]);
  };

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">📝</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Sentence Ordering Complete!</h3>
        <p className="text-gray-600 mb-4">You scored {score} / {total * 15} points</p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(score / (total * 15)) * 100}%` }}
          />
        </div>
        <button
          onClick={() => onComplete(score)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          Continue <ArrowRight className="inline ml-2 w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">Build the Sentence</span>
        <span className="text-sm text-gray-500">{currentIndex + 1} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / total) * 100}%` }}
        />
      </div>

      {/* Translation prompt */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center">
        <p className="text-sm text-gray-500 mb-1">Translate this sentence:</p>
        <p className="text-lg font-medium text-gray-800">{current.translation}</p>
      </div>

      {/* Grammar note */}
      {current.grammarNote && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-4 text-center">
          <p className="text-sm text-yellow-800">{current.grammarNote}</p>
        </div>
      )}

      {/* Answer area - where selected words appear */}
      <div className="bg-white rounded-2xl shadow-sm border-2 border-dashed border-gray-200 p-4 mb-4 min-h-[60px]">
        <div className="flex flex-wrap gap-2">
          {selectedWords.length === 0 && (
            <p className="text-gray-300 text-sm italic">Tap words below to build the sentence...</p>
          )}
          {selectedWords.map((wordObj, idx) => (
            <button
              key={`selected-${idx}`}
              onClick={() => handleRemoveWord(wordObj, idx)}
              className={`px-3 py-2 rounded-lg font-medium text-base transition-all active:scale-95 ${
                isCorrect === true ? 'bg-green-100 text-green-700 border border-green-300' :
                isCorrect === false ? 'bg-red-100 text-red-700 border border-red-300' :
                'bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200'
              }`}
            >
              {wordObj.word}
              {isCorrect === null && <X className="inline w-3 h-3 ml-1 opacity-50" />}
            </button>
          ))}
        </div>
      </div>

      {/* Word bank - STATIC LAYOUT (words grey out in place, don't reflow) */}
      <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {availableWords.map((wordObj) => (
          <button
            key={`avail-${wordObj.id}`}
            onClick={() => handleSelectWord(wordObj)}
            disabled={wordObj.used || isCorrect !== null}
            className={`px-3 py-2 rounded-lg font-medium text-base transition-all ${
              wordObj.used
                ? 'bg-gray-100 text-gray-300 border border-gray-100 cursor-default'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 active:scale-95'
            }`}
          >
            {wordObj.word}
          </button>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        {isCorrect === null && (
          <>
            <button
              onClick={handleClear}
              className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-gray-500 font-medium active:scale-95 transition-all"
            >
              <RotateCcw className="inline w-4 h-4 mr-1" /> Clear
            </button>
            <button
              onClick={handleCheck}
              disabled={selectedWords.length === 0}
              className={`flex-1 py-3 rounded-xl font-semibold active:scale-95 transition-all ${
                selectedWords.length > 0
                  ? 'bg-purple-500 text-white hover:bg-purple-600'
                  : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              Check <Check className="inline w-5 h-5 ml-1" />
            </button>
          </>
        )}
      </div>

      {/* Hint */}
      {current.hint && isCorrect === null && (
        <button
          onClick={() => setShowHint(!showHint)}
          className="mt-3 mx-auto flex items-center text-sm text-gray-400 hover:text-gray-600"
        >
          <HelpCircle className="w-4 h-4 mr-1" />
          {showHint ? current.hint : 'Need a hint?'}
        </button>
      )}

      {/* Feedback */}
      {isCorrect !== null && (
        <div className={`mt-4 p-3 rounded-xl text-center font-medium ${
          isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {isCorrect ? (
            <span><Check className="inline w-5 h-5 mr-1" /> Perfect! +15 points</span>
          ) : (
            <span><X className="inline w-5 h-5 mr-1" /> Correct: <strong>{current.correctOrder}</strong></span>
          )}
          <button
            onClick={() => {
              if (currentIndex < total - 1) {
                setCurrentIndex(i => i + 1);
              } else {
                setCompleted(true);
              }
            }}
            className="mt-3 block w-full bg-white text-gray-700 border-2 border-gray-300 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
          >
            Next →
          </button>
        </div>
      )}
      {isCorrect !== null && (
        <ReportButton lessonTitle={lessonTitle} questionText={current.translation} />
      )}
    </div>
  );
}


// =============================================================
// 3. LISTEN AND TYPE
// =============================================================
// Plays audio, user types what they hear. Tests listening
// comprehension. Uses existing ElevenLabs.
// =============================================================

export function ListenAndType({ 
  exercises, // Array of { catalan, english, pronunciation }
  onComplete,
  onAnswer, 
  audioCache, 
  ELEVENLABS_API_KEY, 
  ELEVENLABS_VOICE_ID,
  lessonTitle 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [completed, setCompleted] = useState(false);
  const inputRef = useRef(null);

  const current = exercises[currentIndex];
  const total = exercises.length;

  useEffect(() => {
    // Auto-focus input on each new question
    if (inputRef.current) inputRef.current.focus();
  }, [currentIndex]);

  const handlePlay = () => {
    playAudio(current.catalan, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
    setHasPlayed(true);
  };

  const handleCheck = () => {
    if (!userInput.trim()) return;
    const correct = normalizeText(userInput) === normalizeText(current.catalan);
    setIsCorrect(correct);
    setShowAnswer(true);
    if (correct) setScore(s => s + 15);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    // Play it again so they hear the correct version
    playAudio(current.catalan, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);


  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleCheck();
  };

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">👂</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Listening Complete!</h3>
        <p className="text-gray-600 mb-4">You scored {score} / {total * 15} points</p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(score / (total * 15)) * 100}%` }}
          />
        </div>
        <button
          onClick={() => onComplete(score)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          Continue <ArrowRight className="inline ml-2 w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">Listen & Type</span>
        <span className="text-sm text-gray-500">{currentIndex + 1} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-amber-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / total) * 100}%` }}
        />
      </div>

      {/* English hint */}
      <div className="bg-gray-50 rounded-xl p-4 mb-6 text-center">
        <p className="text-sm text-gray-500 mb-1">You'll hear:</p>
        <p className="text-lg font-medium text-gray-800">{current.english}</p>
      </div>

      {/* Big play button */}
      <div className="flex flex-col items-center mb-6">
        <button
          onClick={handlePlay}
          className="w-24 h-24 rounded-full bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all flex items-center justify-center shadow-lg"
        >
          <Volume2 className="w-10 h-10 text-white" />
        </button>
        <button
          onClick={() => playAudio(current.catalan, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID, 0.5)}
          className="w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-500 active:scale-95 transition-all flex items-center justify-center shadow-md mt-3"
          title="Play slowly"
        >
          <span className="text-3xl leading-none">🐢</span>
        </button>
      </div>
      <p className="text-center text-sm text-gray-400 mb-6">
        {hasPlayed ? 'Tap to hear again' : 'Tap to listen'}
      </p>

      {/* Text input */}
      <div className="relative mb-4">
        <input
          ref={inputRef}
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type what you hear in Catalan..."
          disabled={isCorrect !== null}
          className={`w-full p-4 rounded-xl border-2 text-lg font-medium text-center transition-all ${
            isCorrect === true ? 'border-green-400 bg-green-50 text-green-700' :
            isCorrect === false ? 'border-red-400 bg-red-50 text-red-700' :
            'border-gray-200 bg-white text-gray-800 focus:border-amber-400 focus:ring-2 focus:ring-amber-100'
          }`}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>

      {/* Check button */}
      {isCorrect === null && (
        <button
          onClick={handleCheck}
          disabled={!userInput.trim()}
          className={`w-full py-3 rounded-xl font-semibold text-lg active:scale-95 transition-all ${
            userInput.trim()
              ? 'bg-amber-500 text-white hover:bg-amber-600'
              : 'bg-gray-100 text-gray-300 cursor-not-allowed'
          }`}
        >
          Check <Check className="inline w-5 h-5 ml-1" />
        </button>
      )}

      {/* Feedback */}
      {isCorrect !== null && (
        <div className={`mt-4 p-4 rounded-xl text-center ${
          isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {isCorrect ? (
            <p className="font-medium"><Check className="inline w-5 h-5 mr-1" /> Perfect! +15 points</p>
          ) : (
            <>
              <p className="font-medium"><X className="inline w-5 h-5 mr-1" /> Not quite!</p>
              <p className="mt-1">Correct answer: <strong>{current.catalan}</strong></p>
              <p className="text-sm mt-1 opacity-75">({current.pronunciation})</p>
            </>
          )}
          <button
            onClick={() => {
              if (currentIndex < total - 1) {
                setCurrentIndex(i => i + 1);
                setUserInput('');
                setIsCorrect(null);
                setHasPlayed(false);
                setShowAnswer(false);
              } else {
                setCompleted(true);
              }
            }}
            className="mt-3 block w-full bg-white text-gray-700 border-2 border-gray-300 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
          >
            Next →
          </button>
        </div>
      )}
      {isCorrect !== null && (
        <ReportButton lessonTitle={lessonTitle} questionText={current.english} />
      )}
    </div>
  );
}


// =============================================================
// 4. MINI CONVERSATION
// =============================================================
// A short 2-4 turn dialogue embedded in a lesson. User picks
// the correct response from options. Teaches words in context.
// =============================================================

export function MiniConversation({ 
  dialogue, // Array of { speaker, text, isUserTurn, options?, correctIndex?, translation? }
  onComplete,
  onAnswer,
  audioCache, 
  ELEVENLABS_API_KEY, 
  ELEVENLABS_VOICE_ID,
  lessonTitle 
}) {
  const [currentTurn, setCurrentTurn] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showTranslation, setShowTranslation] = useState(null);
  const [shuffledTurnOptions, setShuffledTurnOptions] = useState({});
  const chatRef = useRef(null);

  const total = dialogue.length;

  // Shuffle options for all user turns on mount
  useEffect(() => {
    const shuffled = {};
    dialogue.forEach((turn, idx) => {
      if (turn.isUserTurn && turn.options) {
        const correctAnswer = turn.options[turn.correctIndex];
        const newOptions = [...turn.options].sort(() => Math.random() - 0.5);
        shuffled[idx] = {
          options: newOptions,
          correctIndex: newOptions.indexOf(correctAnswer)
        };
      }
    });
    setShuffledTurnOptions(shuffled);
  }, []);

  // Auto-scroll chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [visibleMessages]);

 // Show NPC messages automatically
  const audioPlayedRef = useRef({});
  useEffect(() => {
    if (currentTurn >= total) {
      setTimeout(() => setCompleted(true), 1000);
      return;
    }

    const turn = dialogue[currentTurn];
    if (!turn.isUserTurn && !audioPlayedRef.current[currentTurn]) {
      audioPlayedRef.current[currentTurn] = true;
      // NPC message — show it after a short delay
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, { ...turn, turnIndex: currentTurn }]);
        if (!turn.noAudio) playAudio(turn.text, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
        setCurrentTurn(c => c + 1);
      }, 800);
    }
  }, [currentTurn, total]);

  const handleSelect = (optionIndex) => {
    if (isCorrect !== null) return;
    const turn = dialogue[currentTurn];
    setSelected(optionIndex);
    const correctIdx = shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex;
    const correct = optionIndex === correctIdx;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 15);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    const shuffledOpts = shuffledTurnOptions[currentTurn]?.options || turn.options;
    const responseText = shuffledOpts[correct ? optionIndex : (shuffledTurnOptions[currentTurn]?.correctIndex ?? turn.correctIndex)];
    
    // Add user message to chat
    setVisibleMessages(prev => [...prev, {
      speaker: 'You',
      text: (shuffledTurnOptions[currentTurn]?.options || turn.options)[optionIndex],
      isUserTurn: true,
      turnIndex: currentTurn,
      wasCorrect: correct
    }]);

    playAudio(responseText, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);

    if (correct) {
      setTimeout(() => {
        setSelected(null);
        setIsCorrect(null);
        setCurrentTurn(c => c + 1);
      }, 1500);
    }
  };

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">💬</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Conversation Complete!</h3>
        <p className="text-gray-600 mb-4">You scored {score} points</p>
        <button
          onClick={() => onComplete(score)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          Continue <ArrowRight className="inline ml-2 w-5 h-5" />
        </button>
      </div>
    );
  }

  const currentTurnData = currentTurn < total ? dialogue[currentTurn] : null;

  return (
    <div className="flex flex-col h-full">
      {/* Progress */}
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 font-medium">Mini Conversation</span>
          <span className="text-sm text-gray-500">{Math.min(currentTurn + 1, total)} / {total}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-teal-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentTurn / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Chat messages */}
      <div ref={chatRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ maxHeight: '350px' }}>
        {visibleMessages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.isUserTurn ? 'justify-end' : 'justify-start'}`}>
            <div
              onClick={() => msg.translation && setShowTranslation(showTranslation === idx ? null : idx)}
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                msg.isUserTurn
                  ? msg.wasCorrect === false
                    ? 'bg-red-100 text-red-700 rounded-br-sm'
                    : 'bg-blue-500 text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-800 rounded-bl-sm'
              }`}
            >
              <p className="text-xs font-medium mb-1 opacity-70">{msg.speaker}</p>
              <p className="text-base">{msg.text}</p>
              {showTranslation === idx && msg.translation ? (
                <p className="text-xs mt-1 opacity-70 italic">{msg.translation}</p>
              ) : !msg.isUserTurn && msg.translation ? (
                <p className="text-xs mt-1 opacity-50 italic">🌐 Tap for translation</p>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      {/* User options (when it's user's turn) */}
      {currentTurnData && currentTurnData.isUserTurn && (
        <div className="px-4 pb-4 pt-2 bg-gray-50 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2 text-center">Choose your response:</p>
          <div className="space-y-2">
            {(shuffledTurnOptions[currentTurn]?.options || currentTurnData.options).map((option, idx) => {
              let btnClass = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-teal-400';
              
              if (isCorrect !== null) {
                const correctIdx = shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex;
if (idx === correctIdx) {
                  btnClass = 'bg-green-100 border-2 border-green-400 text-green-700';
                } else if (idx === selected && !isCorrect) {
                  btnClass = 'bg-red-100 border-2 border-red-400 text-red-700';
                } else {
                  btnClass = 'bg-gray-50 border-2 border-gray-100 text-gray-400';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelect(idx)}
                  disabled={isCorrect !== null}
                  className={`${btnClass} w-full rounded-xl py-3 px-4 text-left font-medium transition-all active:scale-98`}
                >
                  {option}
                </button>
              );
            })}
          </div>
          
          {isCorrect === false && (
            <>
              <p className="text-center text-sm text-red-500 mt-2">
                Correct: <strong>{(shuffledTurnOptions[currentTurn]?.options || currentTurnData.options)[shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex]}</strong>
              </p>
              <button
                onClick={() => {
                  setSelected(null);
                  setIsCorrect(null);
                  setCurrentTurn(c => c + 1);
                }}
                className="mt-2 w-full bg-white text-gray-700 border-2 border-gray-300 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
              >
                Continue →
              </button>
            </>
          )}
        </div>
      )}
      {isCorrect !== null && (
        <ReportButton lessonTitle={lessonTitle} questionText={currentTurnData?.text || ''} />
      )}
    </div>
  );
}


// =============================================================
// 5. ERROR CORRECTION
// =============================================================
// Shows a sentence with an error. User must find and tap the
// wrong word, then select the correction from options.
// =============================================================

export function ErrorCorrection({ 
  exercises, // Array of { sentence, errorWordIndex, options, correctIndex, translation, explanation }
  onComplete,
  onAnswer, 
  audioCache, 
  ELEVENLABS_API_KEY, 
  ELEVENLABS_VOICE_ID,
  lessonTitle 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedWordIndex, setSelectedWordIndex] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [step, setStep] = useState('find'); // 'find' or 'fix'
  const [isCorrect, setIsCorrect] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [shuffledCorrectIndex, setShuffledCorrectIndex] = useState(0);

  const total = exercises.length;
  const current = exercises[currentIndex] || exercises[total - 1];
  const words = current.sentence.split(' ');

  // Shuffle options when question changes
  useEffect(() => {
    const correctAnswer = current.options[current.correctIndex];
    const newOptions = [...current.options].sort(() => Math.random() - 0.5);
    setShuffledOptions(newOptions);
    setShuffledCorrectIndex(newOptions.indexOf(correctAnswer));
  }, [currentIndex]);

  const handleWordTap = (wordIndex) => {
    if (step !== 'find' || isCorrect !== null) return;
    setSelectedWordIndex(wordIndex);
    
    if (wordIndex === current.errorWordIndex) {
      // Correct word found! Move to fix step
      setStep('fix');
    } else {
      // Wrong word — briefly highlight red, then reset
      setTimeout(() => setSelectedWordIndex(null), 800);
    }
  };

  const handleOptionSelect = (optionIndex) => {
    if (isCorrect !== null) return;
    setSelectedOption(optionIndex);
    const correct = optionIndex === shuffledCorrectIndex;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 15);
    if (onAnswer) onAnswer(correct); // REPORT TO PARENT

    // Play corrected sentence
    const correctedWords = [...words];
    correctedWords[current.errorWordIndex] = shuffledOptions[shuffledCorrectIndex];
    const correctedSentence = correctedWords.join(' ');
    playAudio(correctedSentence, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID);
  };

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">🔍</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Error Correction Complete!</h3>
        <p className="text-gray-600 mb-4">You scored {score} / {total * 15} points</p>
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div 
            className="bg-green-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${(score / (total * 15)) * 100}%` }}
          />
        </div>
        <button
          onClick={() => onComplete(score)}
          className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 active:scale-95 transition-all"
        >
          Continue <ArrowRight className="inline ml-2 w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 py-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm text-gray-500 font-medium">Find the Error</span>
        <span className="text-sm text-gray-500">{currentIndex + 1} / {total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div 
          className="bg-rose-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex) / total) * 100}%` }}
        />
      </div>

      {/* Translation */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4 text-center">
        <p className="text-sm text-gray-500 mb-1">This should say:</p>
        <p className="text-lg font-medium text-gray-800">{current.translation}</p>
      </div>

      {/* Instruction */}
      <p className="text-center text-sm text-gray-500 mb-4">
        {step === 'find' 
          ? '👆 Tap the word that\'s wrong' 
          : '✏️ Choose the correct replacement'}
      </p>

      {/* Sentence with tappable words */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        <div className="flex flex-wrap justify-center gap-2">
          {words.map((word, idx) => {
            let wordClass = 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-blue-50 hover:border-blue-300';
            
            if (selectedWordIndex === idx && step === 'find' && idx !== current.errorWordIndex) {
              wordClass = 'bg-red-100 text-red-500 border-red-300 animate-pulse';
            } else if (step === 'fix' && idx === current.errorWordIndex) {
              if (isCorrect === true) {
                wordClass = 'bg-green-100 text-green-700 border-green-400 line-through';
              } else if (isCorrect === false) {
                wordClass = 'bg-red-100 text-red-700 border-red-400 line-through';
              } else {
                wordClass = 'bg-amber-100 text-amber-700 border-amber-400';
              }
            } else if (step === 'fix') {
              wordClass = 'bg-gray-50 text-gray-500 border-gray-100 cursor-default';
            }
            
            return (
              <button
                key={idx}
                onClick={() => handleWordTap(idx)}
                disabled={step === 'fix'}
                className={`px-3 py-2 rounded-lg border-2 font-medium text-lg transition-all active:scale-95 ${wordClass}`}
              >
                {word}
              </button>
            );
          })}
        </div>
      </div>

      {/* Replacement options (only after finding the error) */}
      {step === 'fix' && (
        <div className="space-y-2">
          <p className="text-sm text-gray-500 text-center mb-2">Replace with:</p>
          {shuffledOptions.map((option, idx) => {
            let optClass = 'bg-white border-2 border-gray-200 text-gray-700 hover:border-rose-400';
            
            if (isCorrect !== null) {
              if (idx === shuffledCorrectIndex) {
                optClass = 'bg-green-100 border-2 border-green-400 text-green-700';
              } else if (idx === selectedOption && !isCorrect) {
                optClass = 'bg-red-100 border-2 border-red-400 text-red-700';
              } else {
                optClass = 'bg-gray-50 border-2 border-gray-100 text-gray-400';
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isCorrect !== null}
                className={`${optClass} w-full rounded-xl py-3 px-4 text-center font-medium text-lg transition-all active:scale-95`}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}

      {/* Feedback */}
      {isCorrect !== null && (
        <div className={`mt-4 p-4 rounded-xl text-center ${
          isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {isCorrect ? (
            <p className="font-medium"><Check className="inline w-5 h-5 mr-1" /> Correct! +15 points</p>
          ) : (
            <>
              <p className="font-medium"><X className="inline w-5 h-5 mr-1" /> The correct word is: <strong>{shuffledOptions[shuffledCorrectIndex]}</strong></p>
            </>
          )}
          {current.explanation && (
            <p className="text-sm mt-2 opacity-75">{current.explanation}</p>
          )}
          <button
            onClick={() => {
              if (currentIndex < total - 1) {
                setCurrentIndex(i => i + 1);
                setSelectedWordIndex(null);
                setSelectedOption(null);
                setStep('find');
                setIsCorrect(null);
              } else {
                setCompleted(true);
              }
            }}
            className="mt-3 bg-white text-gray-700 border-2 border-gray-300 px-6 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
          >
            Next →
          </button>
        </div>
      )}
      {isCorrect !== null && (
        <ReportButton lessonTitle={lessonTitle} questionText={current.sentence} />
      )}
    </div>
  );
}
