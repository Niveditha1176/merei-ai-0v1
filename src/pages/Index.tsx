
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';
import MicButton from '@/components/MicButton';
import { useToast } from '@/components/ui/use-toast';
import { useApp } from '@/contexts/AppContext';
import LanguageSelector from '@/components/LanguageSelector';

const Index = () => {
  const { language, recentQueries, setCurrentQuery, addQuery, setLanguage } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();

  // Update the current language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setLanguage(savedLanguage);
    }
    console.log("Current language:", i18n.language);
    console.log("Translation test:", t('common.askAbout'));
  }, [i18n, setLanguage]);

  const handleMicClick = () => {
    toast({
      title: t('common.listening'),
      description: t('common.speakNow'),
      duration: 2000,
    });
    
    // Navigate to the listening page
    navigate('/listening');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Logo />
        <div className="w-32">
          <LanguageSelector onChange={(lang) => {
            setLanguage(lang);
            i18n.changeLanguage(lang).then(() => {
              localStorage.setItem('i18nextLng', lang);
              console.log("Language changed to:", lang);
              window.location.reload();
            });
          }} value={language} />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <MicButton isListening={false} onClick={handleMicClick} />
        
        <p className="text-center mt-6 text-gray-600">
          {t('common.askAbout')}
        </p>
        
        <div className="w-full max-w-md mt-8">
          <h3 className="text-sm font-medium mb-2 text-gray-500">
            {t('common.recentQueries')}
          </h3>
          <div className="space-y-2">
            {recentQueries.map((query) => (
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
