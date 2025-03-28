
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '@/components/Logo';
import MicButton from '@/components/MicButton';
import { useToast } from '@/components/ui/use-toast';
import { useApp } from '@/contexts/AppContext';
import { HelpCircle, History, Mic } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DialogResponse from '@/components/DialogResponse';
import ThemeSwitcher from '@/components/ThemeSwitcher';

const Index = () => {
  const { language, recentQueries, setCurrentQuery, addQuery, setLanguage, theme } = useApp();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, i18n } = useTranslation();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedQuery, setSelectedQuery] = useState('');

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

  const handleQueryClick = (query: string) => {
    setSelectedQuery(query);
    setCurrentQuery(query);
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
    // Add to recent queries when dialog closes
    addQuery(selectedQuery, "Response provided for: " + selectedQuery);
  };

  const exampleQueries = [
    { text: t('common.checkPests'), icon: '🐛' },
    { text: t('common.bestTimeWater'), icon: '💧' },
    { text: t('common.improveSoil'), icon: '🌱' }
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-slate-800 text-white' : 'bg-gradient-to-b from-slate-50 to-slate-100'} flex flex-col`}>
      {/* Theme Switcher - positioned top right */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeSwitcher />
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
        
        {/* Example queries */}
        <div className="w-full max-w-md">
          <h3 className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-1.5`}>
            <HelpCircle size={14} />
            {t('common.tryAsking')}
          </h3>
          
          <div className="grid grid-cols-1 gap-2 mb-8">
            {exampleQueries.map((query, index) => (
              <button 
                key={index} 
                className={`text-left ${theme === 'dark' ? 'bg-slate-800 hover:bg-primary/20 border-gray-700' : 'bg-white hover:bg-primary/5 border-gray-200'} p-3 rounded-lg border transition-colors flex items-center gap-2`}
                onClick={() => handleQueryClick(query.text)}
              >
                <span className="text-xl">{query.icon}</span>
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{query.text}</span>
              </button>
            ))}
          </div>
          
          {/* Recent queries */}
          {recentQueries.length > 0 && (
            <>
              <h3 className={`text-sm font-medium mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} flex items-center gap-1.5`}>
                <History size={14} />
                {t('common.recentQueries')}
              </h3>
              
              <div className="space-y-2">
                {recentQueries.map((query) => (
                  <Card 
                    key={query.id} 
                    className={`overflow-hidden hover:border-primary/50 transition-colors cursor-pointer ${theme === 'dark' ? 'bg-slate-800 border-gray-700' : ''}`}
                    onClick={() => handleQueryClick(query.question)}
                  >
                    <CardContent className="p-3">
                      <div className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : ''}`}>{query.question}</div>
                      <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-1 line-clamp-1`}>{query.answer}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </main>
      
      {/* Dialog Response */}
      <DialogResponse 
        isOpen={dialogOpen} 
        onClose={handleDialogClose} 
        query={selectedQuery} 
      />
      
      {/* Footer */}
      <footer className={`text-center p-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-400'}`}>
        © 2025 MEREI.ai • {t('common.allRightsReserved')}
      </footer>
    </div>
  );
};

export default Index;
