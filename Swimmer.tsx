import React from 'react';
import { motion } from 'motion/react';

interface SwimmerProps {
  id: 'gor' | 'gayane';
  progress: number; // 0 to 100
  isPlayer: boolean;
}

export default function Swimmer({ id, progress, isPlayer }: SwimmerProps) {
  const isGor = id === 'gor';
  
  return (
    <motion.div 
      className="absolute flex items-center gap-4 transition-all duration-1000 ease-out"
      style={{ left: `${progress}%`, top: '50%', transform: 'translateY(-50%)' }}
    >
      <div className="relative">
        {/* Swimmer Body (Head and Shoulders above water) */}
        <div className="w-16 h-16 sm:w-24 sm:h-24 relative">
          {/* Swimming Cap */}
          <div 
            className={`w-full h-1/2 rounded-t-[50px] absolute top-0 ${isGor ? 'bg-blue-600' : 'bg-pink-500'}`} 
          />
          
          {/* Face */}
          <div className="w-full h-1/2 bg-[#FFD8A8] absolute bottom-0 rounded-b-lg overflow-hidden">
            {/* Goggles */}
            <div className="flex justify-center gap-1 mt-1">
              <div className="w-5 h-3 bg-slate-800 rounded-full border border-slate-400" />
              <div className="w-5 h-3 bg-slate-800 rounded-full border border-slate-400" />
            </div>
            {/* Mouth (breathing) */}
            <div className="w-2 h-2 bg-rose-200 rounded-full mx-auto mt-1" />
          </div>

          {/* Label */}
          <div className={`absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap shadow-sm ${isPlayer ? 'bg-yellow-400' : 'bg-slate-400'}`}>
            {isGor ? 'Գոռ' : 'Գայանե'} {isPlayer && '(ԴՈՒ)'}
          </div>
        </div>

        {/* Splashing Waves under swimmer */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="absolute -bottom-2 -left-4 -right-4 h-4 bg-white/40 blur-sm rounded-full"
        />
      </div>

      {/* Arms Motion (simplified) */}
      <motion.div 
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="absolute top-1/2 -left-4 w-12 h-2 bg-[#FFD8A8] rounded-full origin-right hidden sm:block"
      />
    </motion.div>
  );
}
