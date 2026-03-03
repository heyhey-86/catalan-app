// ============================================================
let _audioMappingCache = null;
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
  if (!text) return;
  const cacheKey = text.toLowerCase().trim();
  if (audioCache.current && audioCache.current[cacheKey]) {
    const audio = new Audio(audioCache.current[cacheKey]);
    audio.playbackRate = playbackRate;
    audio.play().catch(() => {});
    return;
  }
  const getMapping = _audioMappingCache
    ? Promise.resolve(_audioMappingCache)
    : fetch('/audio/mapping.json').then(r => r.json()).then(m => { _audioMappingCache = m; return m; });
  getMapping
    .then(mapping => {
      const staticPath = mapping[cacheKey];
      if (staticPath) {
        if (audioCache.current) audioCache.current[cacheKey] = staticPath;
        const audio = new Audio(staticPath);
        audio.playbackRate = playbackRate;
        audio.play().catch(() => {});
      } else if (ELEVENLABS_API_KEY) {
        fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'xi-api-key': ELEVENLABS_API_KEY },
          body: JSON.stringify({ text, model_id: 'eleven_multilingual_v2', voice_settings: { stability: 1.0, similarity_boost: 1.0 } })
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
      }
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
    .replace(/·/g, '')
    .trim()
    .replace(/·/g, '')
    .replace(/\s+/g, ' ');
};

export const ReportButton = ({ lessonTitle, questionText, stageType }) => {
  const subject = encodeURIComponent('Report: ' + (lessonTitle || 'Unknown'));
  const bodyText = 'Lesson: ' + (lessonTitle || 'Unknown') + '%0AStage: ' + (stageType || 'Unknown') + '%0AQuestion: ' + encodeURIComponent(questionText || '') + '%0A%0AMy issue: ';
  return (
        <a
      href={'mailto:aprencatalaapp@gmail.com?subject=' + subject + '&body=' + bodyText}
      className="flex items-center justify-center w-full text-center text-xs text-gray-400 hover:text-gray-600 mt-3 mx-auto"
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
      <ReportButton lessonTitle={lessonTitle} questionText={current.sentence} stageType="Fill in the Blank" />
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
      <ReportButton lessonTitle={lessonTitle} questionText={current.translation} stageType="Error Correction" />
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
    setTimeout(() => { if (inputRef.current) inputRef.current.focus(); }, 100);
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
          onMouseDown={(e) => e.preventDefault()}
          className="w-24 h-24 rounded-full bg-amber-500 hover:bg-amber-600 active:scale-95 transition-all flex items-center justify-center shadow-lg"
        >
          <Volume2 className="w-10 h-10 text-white" />
        </button>
        <button
          onClick={() => playAudio(current.catalan, audioCache, ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID, 0.5)}
          onMouseDown={(e) => e.preventDefault()}
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
autoCorrect="off"
name="catalan-answer"
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
      <ReportButton lessonTitle={lessonTitle} questionText={current.english} stageType="Listen and Type" />
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
      }, 0);
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
            <div className="mt-3 bg-red-50 border-2 border-red-200 rounded-xl p-4">
              <p className="text-center text-red-600 font-bold mb-1">✗ Not quite!</p>
              <p className="text-center text-sm text-red-500 mb-3">Correct answer: <strong>{(shuffledTurnOptions[currentTurn]?.options || currentTurnData.options)[shuffledTurnOptions[currentTurn]?.correctIndex ?? currentTurnData.correctIndex]}</strong></p>
              <button
                onClick={() => { setSelected(null); setIsCorrect(null); setCurrentTurn(c => c + 1); }}
                className="w-full bg-white text-gray-700 border-2 border-gray-300 py-2 rounded-xl font-semibold hover:bg-gray-50 active:scale-95 transition-all"
              >
                Continue →
              </button>
            </div>
          )}
          {isCorrect === true && (
            <button
              onClick={() => { setSelected(null); setIsCorrect(null); setCurrentTurn(c => c + 1); }}
              className="mt-2 w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 active:scale-95 transition-all"
            >
              Continue →
            </button>
          )}
        </div>
      )}
      <ReportButton lessonTitle={lessonTitle} questionText={currentTurnData?.text || ''} stageType="Conversation" />
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
      <ReportButton lessonTitle={lessonTitle} questionText={current.sentence} />
    </div>
  );
}


// =============================================================
// 6. QUICK FIRE
// Fast-paced 45-second quiz: English flashes, tap correct Catalan
// =============================================================
export function QuickFire({ words, onComplete, onAnswer, lessonTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [answered, setAnswered] = useState(null);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [options, setOptions] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [total, setTotal] = useState(0);

  const getOptions = useCallback((idx, wordList) => {
    if (!wordList || wordList.length === 0) return [];
    const correct = wordList[idx];
    const others = wordList.filter((_, i) => i !== idx);
    const shuffled = others.sort(() => Math.random() - 0.5).slice(0, 3);
    return [...shuffled, correct].sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    if (words && words.length > 0) setOptions(getOptions(0, words));
  }, [words, getOptions]);

  useEffect(() => {
    if (completed) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); setCompleted(true); if (onComplete) onComplete(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [completed, onComplete]);

  const handleAnswer = (optionWord, optionIdx) => {
    if (answered !== null) return;
    const correct = words[currentIndex];
    const isCorrect = optionWord.ca === correct.ca;
    setAnswered(isCorrect ? 'correct' : 'wrong');
    setSelectedIdx(optionIdx);
    setTotal(t => t + 1);
    if (isCorrect) setScore(s => s + 1);
    if (onAnswer) onAnswer(isCorrect);
    setTimeout(() => {
      const next = currentIndex + 1;
      if (next >= words.length) { setCompleted(true); if (onComplete) onComplete(); }
      else { setCurrentIndex(next); setOptions(getOptions(next, words)); setAnswered(null); setSelectedIdx(null); }
    }, 600);
  };

  if (!words || words.length === 0) return null;

  if (completed) {
    return (
      <div className="text-center py-8 px-4">
        <div className="text-5xl mb-4">⚡</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">QuickFire Complete!</h3>
        <p className="text-gray-600 mb-4">You got <span className="font-bold text-green-600">{score}/{total}</span> correct</p>
      </div>
    );
  }

  const current = words[currentIndex];
  const timerPct = (timeLeft / 45) * 100;
  const timerColor = timeLeft > 20 ? 'bg-green-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500';

  return (
    <div className="max-w-md mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-gray-600">⚡ QuickFire</span>
        <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-600' : 'text-gray-800'}`}>{timeLeft}s</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div className={`h-2 rounded-full transition-all ${timerColor}`} style={{ width: `${timerPct}%` }} />
      </div>
      <div className="text-center mb-6">
        <div className="text-xs text-gray-400 mb-1">What is this in Catalan?</div>
        <div className="text-3xl font-bold text-gray-800">{current.en}</div>
        <div className="text-sm text-gray-500 mt-1">{currentIndex + 1} / {words.length}</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {options.map((opt, idx) => {
          let bg = 'bg-white border-2 border-gray-200 hover:border-blue-400';
          if (answered !== null && selectedIdx === idx) {
            bg = answered === 'correct' ? 'bg-green-100 border-2 border-green-500' : 'bg-red-100 border-2 border-red-500';
          } else if (answered !== null && opt.ca === words[currentIndex].ca) {
            bg = 'bg-green-100 border-2 border-green-500';
          }
          return (
            <button key={idx} onClick={() => handleAnswer(opt, idx)} disabled={answered !== null}
              className={`${bg} rounded-xl p-4 text-center font-semibold transition-all active:scale-95`}>
              {opt.ca}
            </button>
          );
        })}
      </div>
      <div className="text-center mt-4 text-sm text-gray-500">Score: {score}</div>
    </div>
  );
}


// =============================================================
// 7. STORY MODE
// Complete a short story by filling blanks in sequence
// =============================================================
export function StoryMode({ story, blanks, translation, onComplete, onAnswer, lessonTitle }) {
  const [currentBlank, setCurrentBlank] = React.useState(0);
  const [answers, setAnswers] = React.useState([]);
  const [feedback, setFeedback] = React.useState(null);
  const [shuffledOptions, setShuffledOptions] = React.useState([]);
  const [isComplete, setIsComplete] = React.useState(false);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (blanks && blanks[0]) setShuffledOptions([...blanks[0].options].sort(() => Math.random() - 0.5));
  }, [blanks]);

  const storyParts = story.split('[BLANK]');

  const handleAnswer = (option) => {
    if (feedback) return;
    const correct = option === blanks[currentBlank].word;
    setFeedback({ correct, option, correctWord: blanks[currentBlank].word });
    if (correct) setScore(s => s + 1);
    if (onAnswer) onAnswer(correct);
    setTimeout(() => {
      const newAnswers = [...answers, correct ? option : `[${blanks[currentBlank].word}]`];
      setAnswers(newAnswers); setFeedback(null);
      const next = currentBlank + 1;
      if (next >= blanks.length) setIsComplete(true);
      else { setCurrentBlank(next); setShuffledOptions([...blanks[next].options].sort(() => Math.random() - 0.5)); }
    }, 1200);
  };

  const renderStory = () => storyParts.map((part, i) => (
    <span key={i}>
      <span>{part}</span>
      {i < blanks.length && (
        <span className={`font-bold px-1 rounded ${
          answers[i] ? (answers[i].startsWith('[') ? 'text-red-600 bg-red-50' : 'text-green-700 bg-green-50')
          : i === currentBlank ? 'text-blue-600 bg-blue-100 animate-pulse' : 'text-gray-400 bg-gray-100'
        }`}>{answers[i] ? answers[i].replace('[','').replace(']','') : '______'}</span>
      )}
    </span>
  ));

  if (isComplete) {
    const pct = Math.round((score / blanks.length) * 100);
    return (
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        <div className="text-4xl text-center mb-3">📖</div>
        <h2 className="text-xl font-bold text-center mb-4">Story Complete!</h2>
        <div className="bg-blue-50 rounded-xl p-4 mb-4 text-base leading-relaxed">{renderStory()}</div>
        <p className="text-sm text-gray-500 italic mb-4">{translation}</p>
        <p className="text-center font-semibold mb-5">Score: {score}/{blanks.length} — {pct}%</p>
        <button onClick={onComplete} className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700">Continue →</button>
      </div>
    );
  }

  if (!blanks || blanks.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-2 text-center">📖 Story Mode</h2>
      <p className="text-xs text-gray-500 text-center mb-4">Blank {currentBlank + 1} of {blanks.length}</p>
      <div className="bg-blue-50 rounded-xl p-4 mb-5 text-base leading-loose">{renderStory()}</div>
      {feedback && (
        <div className={`text-center font-semibold mb-3 py-2 rounded-lg ${feedback.correct ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {feedback.correct ? '✔ Correcte!' : `✘ The answer is: ${feedback.correctWord}`}
        </div>
      )}
      <div className="grid grid-cols-2 gap-3">
        {shuffledOptions.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)} disabled={!!feedback}
            className={`p-3 rounded-xl font-semibold text-sm transition-all active:scale-95 ${
              feedback?.option === opt ? (feedback.correct ? 'bg-green-500 text-white' : 'bg-red-500 text-white')
              : feedback && opt === blanks[currentBlank].word ? 'bg-green-200 text-green-800'
              : 'bg-gray-100 hover:bg-blue-50 border-2 border-transparent hover:border-blue-300'
            }`}>{opt}</button>
        ))}
      </div>
      <ReportButton lessonTitle={lessonTitle} questionText={story} stageType="Story Mode" />
    </div>
  );
}
