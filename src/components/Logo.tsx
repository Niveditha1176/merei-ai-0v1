
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center">
        {/* Stem */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-primary rounded"></div>
        
        {/* Left leaf */}
        <div className="absolute bottom-3 left-3 w-3 h-4 bg-primary rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full transform -rotate-45 opacity-90"></div>
        
        {/* Right leaf */}
        <div className="absolute bottom-3 right-3 w-3 h-4 bg-primary rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-none transform rotate-45 opacity-90"></div>
        
        {/* Subtle pulsing circle */}
        <div className="absolute inset-0 rounded-full border border-primary opacity-30 animate-pulse"></div>
      </div>
      <span className="font-bold text-xl text-primary">MEREI</span>
    </div>
  );
};

export default Logo;
