
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
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-primary animate-pulse"></div>
        <div className="absolute inset-0 scale-125 rounded-full border-2 border-primary animate-pulse opacity-70"></div>
        <div className="absolute inset-0 scale-150 rounded-full border border-primary animate-pulse opacity-40"></div>
        
        <div className="relative z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center">
          <Mic size={36} className="text-white" />
        </div>
      </div>
      
      <h1 className="text-2xl font-medium mb-8">
        {t('common.listening')}... {t('common.speakNow')}
      </h1>
      
      <Button 
        variant="outline" 
        className="rounded-full flex items-center gap-2"
        onClick={handleCancel}
      >
        <X size={16} />
        {t('common.cancel')}
      </Button>
    </div>
  );
};

export default Listening;
