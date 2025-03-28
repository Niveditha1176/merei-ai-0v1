
import React from 'react';
import { Mic } from 'lucide-react';

interface MicButtonProps {
  isListening: boolean;
  onClick: () => void;
}

const MicButton: React.FC<MicButtonProps> = ({ isListening, onClick }) => {
  return (
    <div className="relative flex justify-center items-center">
      {/* Multiple wave circles for a richer animation effect */}
      <div className={`absolute w-36 h-36 rounded-full border-4 border-primary opacity-0 ${isListening ? 'animate-ping' : ''}`}></div>
      <div className={`absolute w-32 h-32 rounded-full border-2 border-primary opacity-0 ${isListening ? 'animate-pulse' : ''}`}></div>
      
      <button 
        onClick={onClick} 
        className={`relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-105 ${
          isListening 
            ? 'bg-destructive animate-pulse' 
            : 'bg-primary hover:bg-primary/90'
        }`}
        aria-label={isListening ? "Stop listening" : "Start listening"}
      >
        <Mic 
          size={36} 
          className="text-white" 
        />
      </button>
    </div>
  );
};

export default MicButton;
