
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const Listening: React.FC = () => {
  const { setIsListening, setCurrentQuery } = useApp();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Simulated listening with animation
  useEffect(() => {
    setIsListening(true);
    
    const timer = setTimeout(() => {
      setCurrentQuery('Check for pests in my cotton field');
      setIsListening(false);
      navigate('/');
    }, 5000);
    
    return () => {
      clearTimeout(timer);
      setIsListening(false);
    };
  }, [navigate, setCurrentQuery, setIsListening]);
  
  const handleCancel = () => {
    setIsListening(false);
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex flex-col items-center justify-center p-6">
      <div className="relative mb-10">
        {/* Multiple animated rings */}
        <div className="absolute inset-0 scale-150 rounded-full border border-primary animate-ping opacity-10"></div>
        <div className="absolute inset-0 scale-125 rounded-full border-2 border-primary animate-pulse opacity-20"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse opacity-30"></div>
        
        <div className="relative z-10 w-28 h-28 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/20">
          <Mic size={42} className="text-white animate-pulse" />
        </div>
      </div>
      
      <div className="text-center mb-10">
        <h1 className="text-2xl font-medium mb-2">
          {t('common.listening')}...
        </h1>
        <p className="text-gray-600">
          {t('common.speakNow')}
        </p>
      </div>
      
      <div className="text-center max-w-sm">
        <p className="text-sm text-gray-500 mb-6">
          {t('common.speakClearly')}
        </p>
        
        <Button 
          variant="outline" 
          className="rounded-full flex items-center gap-2 px-6"
          onClick={handleCancel}
        >
          <X size={16} />
          {t('common.cancel')}
        </Button>
      </div>
    </div>
  );
};

export default Listening;
