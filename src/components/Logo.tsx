
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8">
        {/* Stem */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-primary rounded"></div>
        
        {/* Left leaf */}
        <div className="absolute bottom-2 left-1.5 w-3 h-4 bg-primary rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full transform -rotate-45 animate-pulse"></div>
        
        {/* Right leaf */}
        <div className="absolute bottom-2 right-1.5 w-3 h-4 bg-primary rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-none transform rotate-45 animate-pulse"></div>
      </div>
      <span className="font-bold text-lg text-primary">MEREI</span>
    </div>
  );
};

export default Logo;
