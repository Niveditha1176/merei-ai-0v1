
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import Logo from '@/components/Logo';
import MicButton from '@/components/MicButton';
import RecentQueries from '@/components/RecentQueries';
import LanguageSelector from '@/components/LanguageSelector';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const { 
    language, 
    setLanguage, 
    isListening, 
    setIsListening,
    recentQueries,
    setCurrentQuery
  } = useApp();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleMicClick = () => {
    setIsListening(true);
    
    // Simulate voice recognition - in a real app this would use the Web Speech API
    setTimeout(() => {
      const mockQueries = {
        'en': 'Check for pests in my cotton field',
        'hi': 'मेरी मिट्टी की जांच करो',
        'pa': 'ਮੇਰੇ ਖੇਤ ਦੀ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਰੋ',
        'te': 'నా పంట పొలంలో పురుగుల కోసం చెక్ చేయండి',
        'ta': 'என் வயலில் பூச்சிகளைத் தேடுங்கள்'
      };
      
      const query = mockQueries[language as keyof typeof mockQueries] || mockQueries.en;
      setCurrentQuery(query);
      setIsListening(false);
      
      // Navigate to the response page after processing
      setTimeout(() => {
        navigate('/response');
      }, 500);
    }, 3000);
    
    // Show listening toast
    toast({
      title: "Listening...",
      description: "Speak now",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="p-4 flex items-center justify-between">
        <Logo />
        <div className="w-32">
          <LanguageSelector value={language} onChange={setLanguage} />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <MicButton isListening={isListening} onClick={handleMicClick} />
        
        <p className="text-center mt-6 text-gray-600">
          Ask about soil, weather, or pests
        </p>
        
        <div className="w-full max-w-md mt-8">
          <RecentQueries queries={recentQueries} />
        </div>
      </main>
    </div>
  );
};

export default Home;
