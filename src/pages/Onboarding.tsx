
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '@/contexts/AppContext';
import Logo from '@/components/Logo';
import LanguageSelector from '@/components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

const Onboarding: React.FC = () => {
  const { language, setLanguage, completeOnboarding } = useApp();
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      completeOnboarding();
      navigate('/home');
    }
  };
  
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {step === 1 ? (
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="mb-12">
            <Logo />
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to MEREI!
          </h1>
          <p className="text-center mb-8">
            Speak naturally in your language
          </p>
          
          <div className="w-full max-w-xs mb-8">
            <LanguageSelector 
              value={language} 
              onChange={setLanguage} 
            />
          </div>
          
          <Button 
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90"
          >
            Continue
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center flex-1 p-6">
          <div className="mb-8">
            <Mic size={64} className="text-primary" />
          </div>
          
          <h1 className="text-2xl font-bold mb-6 text-center">
            Tap and speak like this:
          </h1>
          
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8 w-full max-w-sm">
            {language === 'hi' ? (
              <p className="text-center py-2 font-medium">"मेरी मिट्टी की जांच करो"</p>
            ) : (
              <p className="text-center py-2 font-medium">"Check for pests in my cotton field"</p>
            )}
          </div>
          
          <Button 
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90"
          >
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
};

export default Onboarding;
