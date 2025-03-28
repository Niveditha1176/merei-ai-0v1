
import React from 'react';
import { Mic } from 'lucide-react';

interface MicButtonProps {
  isListening: boolean;
  onClick: () => void;
}

const MicButton: React.FC<MicButtonProps> = ({ isListening, onClick }) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className={`waveform ${isListening ? 'waveform-active' : ''}`}></div>
      <button 
        onClick={onClick} 
        className={`mic-button ${isListening ? 'mic-button-active' : ''}`}
      >
        <Mic size={32} />
      </button>
    </div>
  );
};

export default MicButton;
