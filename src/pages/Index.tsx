
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import MicButton from '@/components/MicButton';
import { useToast } from '@/components/ui/use-toast';
import { useApp } from '@/contexts/AppContext';
import { History, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { Button } from '@/components/ui/button';

const Index = () => {
  const { language, recentQueries, setLanguage, theme } = useApp();
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
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-b from-slate-50 to-slate-100'} flex flex-col`}>
      {/* Theme Switcher - positioned top right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitcher />
      </div>
      
      {/* Listening icon - positioned top left */}
      <div className="absolute top-4 left-4 z-10">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/listening')}
          className="relative group"
        >
          <Mic className="h-5 w-5 text-primary" />
          <span className="sr-only">Go to listening page</span>
          
          {/* Small wave animation on hover */}
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 flex items-end justify-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-0.5 h-1 bg-primary rounded-full animate-wave"></div>
            <div className="w-0.5 h-1.5 bg-primary rounded-full animate-wave animation-delay-300"></div>
            <div className="w-0.5 h-2 bg-primary rounded-full animate-wave animation-delay-600"></div>
            <div className="w-0.5 h-1.5 bg-primary rounded-full animate-wave animation-delay-300"></div>
            <div className="w-0.5 h-1 bg-primary rounded-full animate-wave"></div>
          </div>
        </Button>
      </div>
      
      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">MEREI</h1>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {t('common.askAbout')}
          </p>
        </div>
        
        <div className="mb-12">
          <MicButton isListening={false} onClick={handleMicClick} />
        </div>
        
        {/* Recent queries */}
        {recentQueries.length > 0 && (
          <div className="w-full max-w-md">
            <h3 className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-1.5`}>
              <History size={14} />
              {t('common.recentQueries')}
            </h3>
            
            <div className="space-y-2">
              {recentQueries.map((query) => (
                <Card 
                  key={query.id} 
                  className={`overflow-hidden hover:border-primary/50 transition-colors cursor-pointer ${theme === 'dark' ? 'bg-slate-800 border-gray-700' : ''}`}
                >
                  <CardContent className="p-3">
                    <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>{query.question}</div>
                    <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1 line-clamp-1`}>{query.answer}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
      
      {/* Footer */}
      <footer className={`text-center p-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
        © 2025 MEREI.ai • {t('common.allRightsReserved')}
      </footer>
    </div>
  );
};

export default Index;
