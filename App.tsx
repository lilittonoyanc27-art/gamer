import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Trophy,
  Zap,
  Waves,
  User,
  ArrowRight
} from 'lucide-react';
import { AppScreen, SwimmerId } from './types';

// Components
import GameView from './GameView';

function NavButton({ active, icon, label, onClick }: { active: boolean, icon: React.ReactNode, label: string, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] sm:text-xs transition-all ${
        active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
          : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
      }`}
    >
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-4 h-4 shrink-0' })}
      <span className={active ? 'block' : 'hidden sm:block'}>{label}</span>
    </button>
  );
}

function MainMenu({ setScreen }: { setScreen: (s: AppScreen) => void }) {
  return (
    <div className="flex flex-col items-center gap-12 sm:gap-20 py-12 sm:py-20 text-center">
      <div className="text-center space-y-6 max-w-3xl px-4 relative">
        <div className="flex justify-center gap-4">
           {[...Array(3)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ y: [0, -20, 0] }}
               transition={{ repeat: Infinity, duration: 2, delay: i * 0.3 }}
             >
               <Waves className="w-12 h-12 text-blue-400 opacity-50" />
             </motion.div>
           ))}
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-8xl md:text-9xl font-black text-slate-950 tracking-tighter uppercase italic leading-none">
            ԳՈՌ և <span className="text-blue-600">ԳԱՅԱՆԵ</span>
          </h1>
          <p className="text-sm sm:text-2xl md:text-3xl font-bold text-yellow-500 uppercase tracking-[0.1em] sm:tracking-[0.3em]">
            ԼՈՂՈՒՐԴ ՄԱՐԱԹՈՆ
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 w-full max-w-2xl px-4">
        <motion.button
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('game')}
          className="group relative overflow-hidden bg-blue-600 p-6 sm:p-12 rounded-[32px] sm:rounded-[64px] shadow-2xl text-left border-b-[8px] sm:border-b-[12px] border-blue-900/50"
        >
          <div className="relative z-10 flex items-center gap-4 sm:gap-8 text-white">
            <div className="p-4 sm:p-6 bg-white/20 rounded-[20px] sm:rounded-[32px] backdrop-blur-md shadow-inner shrink-0">
              <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="space-y-1 sm:space-y-2 flex-1">
              <h3 className="text-2xl sm:text-5xl font-black italic uppercase tracking-tighter leading-tight">Սկսել Մրցույթը</h3>
              <p className="text-white/70 text-sm sm:text-lg font-medium">Գոռն ընդդեմ Գայանեի: Ո՞վ ավելի արագ կլողա:</p>
            </div>
            <ArrowRight className="w-8 h-8 opacity-40 group-hover:opacity-100 transition-opacity hidden sm:block" />
          </div>
        </motion.button>
      </div>

      <div className="flex gap-4">
        {[Zap, Trophy, Zap].map((Icon, i) => (
          <div key={i} className="w-12 h-12 bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100 odd:rotate-6 even:-rotate-6">
             <Icon className="w-6 h-6 text-blue-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [screen, setScreen] = useState<AppScreen>('menu');

  return (
    <div className="min-h-screen bg-[#F0F9FF] font-sans selection:bg-blue-100 selection:text-blue-600 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-yellow-50 rounded-full blur-[120px] opacity-40" />
      </div>

      <header className="sticky top-0 z-50 px-4 sm:px-8 py-6">
        <nav className="max-w-4xl mx-auto flex items-center justify-between bg-white/80 backdrop-blur-xl border-2 border-white p-3 rounded-[32px] shadow-2xl shadow-slate-200/50">
          <button 
            onClick={() => setScreen('menu')}
            className="flex items-center gap-4 px-4 h-full"
          >
            <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200 rotate-3">
              <Waves className="text-white w-6 h-6" />
            </div>
            <span className="text-xl font-black text-slate-900 tracking-tighter uppercase italic hidden md:block">Լողի Մրցույթ</span>
          </button>
          
          <div className="flex items-center gap-2">
            <NavButton 
              active={screen === 'menu'} 
              icon={<Trophy />} 
              label="Մենյու" 
              onClick={() => setScreen('menu')} 
            />
            <NavButton 
              active={screen === 'game'} 
              icon={<Gamepad2 />} 
              label="Մրցույթ" 
              onClick={() => setScreen('game')} 
            />
          </div>
        </nav>
      </header>

      <main className="px-4 py-8 max-w-7xl mx-auto relative z-10 min-h-[70vh]">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
          >
            {screen === 'menu' && <MainMenu setScreen={setScreen} />}
            {screen === 'game' && (
              <GameView 
                onBack={() => setScreen('menu')} 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="px-4 py-12 text-center">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">
           &copy; 2026 ԳՈՌ և ԳԱՅԱՆԵ: ԻՍՊԱՆԵՐԵՆԻ ԼՈՂՈՒՐԴ
        </p>
      </footer>
    </div>
  );
}

