import React from 'react';
import Swimmer from './Swimmer';
import { SwimmerId } from './types';

interface SwimmingPoolProps {
  gorProgress: number;
  gayaneProgress: number;
}

export default function SwimmingPool({ gorProgress, gayaneProgress }: SwimmingPoolProps) {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] bg-sky-500 rounded-[40px] overflow-hidden shadow-inner border-8 border-yellow-400">
      {/* Water Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[2px] bg-white rounded-full animate-pulse"
            style={{ 
              width: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Lanes */}
      <div className="absolute inset-0 flex flex-col">
        {/* Lane 1 - Gor */}
        <div className="flex-1 relative border-b-4 border-white/30 px-12">
          <div className="absolute top-2 left-4 text-white/50 font-black text-4xl opacity-20 italic select-none">1</div>
          <Swimmer 
            id="gor" 
            progress={gorProgress} 
            isPlayer={true} 
          />
        </div>
        
        {/* Lane 2 - Gayane */}
        <div className="flex-1 relative px-12">
          <div className="absolute top-2 left-4 text-white/50 font-black text-4xl opacity-20 italic select-none">2</div>
          <Swimmer 
            id="gayane" 
            progress={gayaneProgress} 
            isPlayer={true} 
          />
        </div>
      </div>

      {/* Finish Line */}
      <div className="absolute top-0 bottom-0 right-12 w-4 flex flex-col">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`flex-1 ${i % 2 === 0 ? 'bg-white' : 'bg-red-600'}`} />
        ))}
      </div>

      {/* Starting Block area */}
      <div className="absolute top-0 bottom-0 left-0 w-8 bg-yellow-500" />
    </div>
  );
}
