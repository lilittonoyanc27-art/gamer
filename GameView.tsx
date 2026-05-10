import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GRAMMAR_QUESTIONS as questions } from './data';
import { SwimmerId, GameState } from './types';
import SwimmingPool from './SwimmingPool';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Home } from 'lucide-react';

export default function GameView({ onBack }: { onBack: () => void }) {
  const [state, setState] = useState<GameState>({
    gorProgress: 0,
    gayaneProgress: 0,
    currentTurn: 'gor',
    currentQuestionIndex: 0,
    scoreGor: 0,
    scoreGayane: 0,
    isFinished: false,
    winner: null
  });

  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const currentQuestion = questions[state.currentQuestionIndex];

  const handleAnswer = (option: string) => {
    if (feedback || state.isFinished) return;

    const isCorrect = option === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setFeedback('correct');
      setTimeout(() => {
        setState(prev => {
          const isGor = prev.currentTurn === 'gor';
          const nextProgress = isGor 
            ? prev.gorProgress + (100 / (questions.length / 2)) 
            : prev.gayaneProgress + (100 / (questions.length / 2));
          
          const nextGorProgress = isGor ? Math.min(nextProgress, 100) : prev.gorProgress;
          const nextGayaneProgress = !isGor ? Math.min(nextProgress, 100) : prev.gayaneProgress;
          
          let winner: SwimmerId | null = null;
          if (nextGorProgress >= 100) winner = 'gor';
          else if (nextGayaneProgress >= 100) winner = 'gayane';

          const nextQuestionIndex = prev.currentQuestionIndex + 1;
          const isFinished = winner !== null || nextQuestionIndex >= questions.length;

          return {
            ...prev,
            gorProgress: nextGorProgress,
            gayaneProgress: nextGayaneProgress,
            scoreGor: isGor ? prev.scoreGor + 10 : prev.scoreGor,
            scoreGayane: !isGor ? prev.scoreGayane + 10 : prev.scoreGayane,
            currentQuestionIndex: nextQuestionIndex % questions.length,
            currentTurn: isGor ? 'gayane' : 'gor',
            isFinished,
            winner
          };
        });
        setFeedback(null);
      }, 1000);
    } else {
      setFeedback('wrong');
      setTimeout(() => {
        setState(prev => ({
          ...prev,
          currentTurn: prev.currentTurn === 'gor' ? 'gayane' : 'gor',
          currentQuestionIndex: (prev.currentQuestionIndex + 1) % questions.length,
        }));
        setFeedback(null);
      }, 1500);
    }
  };

  if (state.isFinished) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto bg-white p-12 rounded-[64px] shadow-2xl text-center space-y-8 border-4 border-yellow-400"
      >
        <div className="flex justify-center">
          <div className="p-8 bg-yellow-100 rounded-full">
            <Trophy className="w-20 h-20 text-yellow-500" />
          </div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-5xl font-black text-slate-900 italic tracking-tighter uppercase">
            {state.winner === 'gor' ? 'Գոռը Հաղթեց!' : state.winner === 'gayane' ? 'Գայանեն Հաղթեց!' : 'Ոչ-Ոքի!'}
          </h2>
          <div className="flex justify-center gap-8 py-4">
            <div className="text-center">
              <p className="text-blue-600 font-black text-xl">ԳՈՌ</p>
              <p className="text-4xl font-black">{state.scoreGor}</p>
            </div>
            <div className="text-center border-l-2 border-slate-100 pl-8">
              <p className="text-pink-500 font-black text-xl">ԳԱՅԱՆԵ</p>
              <p className="text-4xl font-black">{state.scoreGayane}</p>
            </div>
          </div>
        </div>

        <div className="grid gap-4 pt-4">
          <button 
            onClick={() => {
              setState({
                gorProgress: 0,
                gayaneProgress: 0,
                currentTurn: 'gor',
                currentQuestionIndex: 0,
                scoreGor: 0,
                scoreGayane: 0,
                isFinished: false,
                winner: null
              });
            }}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white p-6 rounded-[32px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-xl"
          >
            <RotateCcw className="w-6 h-6" />
            Նորից փորձել
          </button>
          <button 
            onClick={onBack}
            className="flex items-center justify-center gap-3 bg-slate-100 text-slate-600 p-6 rounded-[32px] font-black uppercase tracking-widest hover:bg-slate-200 transition-colors"
          >
            <Home className="w-6 h-6" />
            Գլխավոր Մենյու
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-20 px-4">
      {/* Race Visual */}
      <div className="space-y-2">
        <div className="flex justify-between px-8 text-sm font-black uppercase tracking-widest">
          <span className={state.currentTurn === 'gor' ? 'text-blue-600 animate-bounce' : 'text-slate-400'}>
            Գոռի հերթն է {state.currentTurn === 'gor' && '⚡'}
          </span>
          <span className={state.currentTurn === 'gayane' ? 'text-pink-500 animate-bounce' : 'text-slate-400'}>
             {state.currentTurn === 'gayane' && '⚡'} Գայանեի հերթն է
          </span>
        </div>
        <SwimmingPool 
          gorProgress={state.gorProgress}
          gayaneProgress={state.gayaneProgress}
        />
      </div>

      {/* Quiz Area */}
      <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div 
          key={state.currentQuestionIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`bg-white p-8 sm:p-12 rounded-[48px] shadow-xl border-t-8 ${state.currentTurn === 'gor' ? 'border-blue-500' : 'border-pink-500'} text-center space-y-8`}
        >
          <div className="space-y-4">
            <div className={`inline-block px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border ${state.currentTurn === 'gor' ? 'bg-blue-50 text-blue-600 border-blue-200' : 'bg-pink-50 text-pink-500 border-pink-200'}`}>
              Հարց {state.currentQuestionIndex + 1} / {questions.length}
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {currentQuestion.sentence.split('___').map((part, i) => (
                <span key={i}>
                  {part}
                  {i === 0 && (
                    <span className={`mx-2 px-4 py-1 bg-slate-100 rounded-xl ${state.currentTurn === 'gor' ? 'text-blue-600 border-blue-200' : 'text-pink-500 border-pink-200'} border-2 border-dashed min-w-[100px] inline-block`}>
                      {feedback === 'correct' ? currentQuestion.correctAnswer : '...'}
                    </span>
                  )}
                </span>
              ))}
            </h3>
            <p className="text-slate-400 font-bold italic">{currentQuestion.translation}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {currentQuestion.options.map((option) => {
              const isCorrect = option === currentQuestion.correctAnswer;
              const isWrong = feedback === 'wrong' && option !== currentQuestion.correctAnswer;
              
              return (
                <motion.button
                  key={option}
                  whileHover={!feedback ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!feedback ? { scale: 0.98 } : {}}
                  onClick={() => handleAnswer(option)}
                  disabled={!!feedback}
                  className={`
                    p-6 rounded-[24px] text-xl sm:text-2xl font-black uppercase tracking-widest transition-all border-b-4
                    ${!feedback ? 'bg-slate-50 text-slate-900 border-slate-200 hover:border-blue-500 hover:bg-white' : ''}
                    ${feedback === 'correct' && isCorrect ? 'bg-green-500 text-white border-green-700' : ''}
                    ${feedback === 'wrong' && option === currentQuestion.correctAnswer ? 'bg-green-100 text-green-700 border-green-300' : ''}
                    ${isWrong ? 'bg-rose-500 text-white border-rose-700 opacity-50' : ''}
                    ${feedback && !isCorrect && !isWrong ? 'opacity-20' : ''}
                  `}
                >
                  {option}
                </motion.button>
              );
            })}
          </div>

          {feedback === 'wrong' && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-rose-600 font-black italic uppercase tracking-tighter"
            >
              Upps! Ճիշտ պատասխանն էր: {currentQuestion.correctAnswer}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>
      </div>
    </div>
  );
}
