
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';
import MicButton from '@/components/MicButton';
import { useToast } from '@/components/ui/use-toast';
import { useApp } from '@/contexts/AppContext';
import LanguageSelector from '@/components/LanguageSelector';

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const { language, recentQueries, setCurrentQuery, addQuery } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleMicClick = () => {
    setIsListening(true);
    
    toast({
      title: t('common.listening'),
      description: t('common.speakNow'),
      duration: 2000,
    });
    
    // Simulate voice recognition (in a real app, would use Web Speech API)
    setTimeout(() => {
      setIsListening(false);
      
      // Add the new query to recent queries
      const newQuery = "Check for pests in my cotton field";
      setCurrentQuery(newQuery);
      addQuery(newQuery, "No pests detected in your cotton field today.");
      
      // Navigate to response page after processing
      setTimeout(() => {
        navigate('/listening');
      }, 500);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Logo />
        <div className="w-32">
          <LanguageSelector onChange={(lang) => useApp().setLanguage(lang)} value={language} />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <MicButton isListening={isListening} onClick={handleMicClick} />
        
        <p className="text-center mt-6 text-gray-600">
          {t('common.askAbout')}
        </p>
        
        <div className="w-full max-w-md mt-8">
          <h3 className="text-sm font-medium mb-2 text-gray-500">{t('common.recentQueries')}</h3>
          <div className="space-y-2">
            {recentQueries.map((query, index) => (
              <div key={query.id} className="bg-white p-3 rounded-lg shadow-sm">
                <div>{query.question}</div>
                <div className="text-sm text-gray-500 mt-1">{query.answer}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
