
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Volume2, Mic, MicOff, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ResponseCard from '@/components/ResponseCard';
import { PieChart, CloudLightning, Leaf } from 'lucide-react';

const Response: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { currentQuery, theme } = useApp();
  
  const [isGenerating, setIsGenerating] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [response, setResponse] = useState('');
  const [isListening, setIsListening] = useState(false);
  
  // Simulate API response on load
  useEffect(() => {
    // Start generating response
    setIsGenerating(true);
    
    const timer = setTimeout(() => {
      // Simulated response for now
      const simulatedResponse = currentQuery ? 
        `Based on your question about "${currentQuery}", I recommend checking for aphids on the underside of leaves. They are common in cotton fields this season. Spray with neem oil solution for organic pest control.` : 
        `For pest control in cotton fields, regularly inspect plants for aphids, bollworms, and spider mites. Use integrated pest management techniques by introducing beneficial insects like ladybugs. Apply neem oil spray early in the morning for best results.`;
      
      setResponse(simulatedResponse);
      setIsGenerating(false);
      setIsPlaying(true);
      
      // Auto-stop playing after a while
      setTimeout(() => {
        setIsPlaying(false);
      }, 5000);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, [currentQuery]);
  
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };
  
  const handleListen = () => {
    setIsListening(!isListening);
    
    if (!isListening) {
      // If starting to listen - show some feedback
      setTimeout(() => {
        // Simulate hearing the user and navigate back to listening 
        navigate('/listening');
      }, 3000);
    }
  };
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-slate-800 dark:text-white' : 'bg-gradient-to-b from-slate-50 to-slate-100'} flex flex-col`}>
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/')}
          className="text-primary"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">{t('common.goBack')}</span>
        </Button>
        
        {/* Mic button - positioned on right side */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => navigate('/listening')}
          className="relative group text-primary"
        >
          <Mic className="h-5 w-5" />
          <span className="sr-only">{t('common.goToListening')}</span>
          
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
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        {isGenerating ? (
          <div className="text-center">
            <div className="mb-6 flex justify-center">
              {/* Audio wave visualization during generation */}
              <div className="w-20 h-16 flex items-end justify-center gap-1">
                <div className="w-1.5 h-3 bg-primary rounded-full animate-wave"></div>
                <div className="w-1.5 h-4 bg-primary rounded-full animate-wave animation-delay-300"></div>
                <div className="w-1.5 h-6 bg-primary rounded-full animate-wave animation-delay-600"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full animate-wave animation-delay-300"></div>
                <div className="w-1.5 h-10 bg-primary rounded-full animate-wave"></div>
                <div className="w-1.5 h-8 bg-primary rounded-full animate-wave animation-delay-300"></div>
                <div className="w-1.5 h-6 bg-primary rounded-full animate-wave animation-delay-600"></div>
                <div className="w-1.5 h-4 bg-primary rounded-full animate-wave animation-delay-300"></div>
                <div className="w-1.5 h-3 bg-primary rounded-full animate-wave"></div>
              </div>
            </div>
            <p className="text-lg font-medium">{t('common.analyzingInput')}</p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} mt-2`}>
              {t('common.pleaseWait')}
            </p>
          </div>
        ) : (
          <div className="w-full max-w-md">
            <Card className={`mb-8 shadow-md ${theme === 'dark' ? 'bg-slate-800 border-gray-700' : ''}`}>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">
                    {currentQuery || t('common.pestControl')}
                  </h3>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className={`rounded-full ${isPlaying ? 'text-primary animate-pulse' : ''}`}
                    onClick={togglePlayback}
                  >
                    <Volume2 size={20} />
                  </Button>
                </div>
                
                {/* Audio wave visualization only for voice output - no text display */}
                <div className="mt-6 mb-4 flex justify-center">
                  <div className={`h-12 flex items-end justify-center gap-1 ${isPlaying ? 'opacity-100' : 'opacity-40'}`}>
                    <div className={`w-1 h-4 bg-primary/70 rounded-full ${isPlaying ? 'animate-wave' : ''}`}></div>
                    <div className={`w-1 h-6 bg-primary/80 rounded-full ${isPlaying ? 'animate-wave animation-delay-300' : ''}`}></div>
                    <div className={`w-1 h-8 bg-primary/90 rounded-full ${isPlaying ? 'animate-wave animation-delay-600' : ''}`}></div>
                    <div className={`w-1 h-10 bg-primary rounded-full ${isPlaying ? 'animate-wave animation-delay-300' : ''}`}></div>
                    <div className={`w-1 h-12 bg-primary rounded-full ${isPlaying ? 'animate-wave' : ''}`}></div>
                    <div className={`w-1 h-10 bg-primary/90 rounded-full ${isPlaying ? 'animate-wave animation-delay-300' : ''}`}></div>
                    <div className={`w-1 h-8 bg-primary/80 rounded-full ${isPlaying ? 'animate-wave animation-delay-600' : ''}`}></div>
                    <div className={`w-1 h-6 bg-primary/70 rounded-full ${isPlaying ? 'animate-wave animation-delay-300' : ''}`}></div>
                    <div className={`w-1 h-4 bg-primary/60 rounded-full ${isPlaying ? 'animate-wave' : ''}`}></div>
                  </div>
                </div>
                
                {/* Voice controls */}
                <div className="flex justify-center">
                  <Button
                    onClick={togglePlayback}
                    variant="outline"
                    className="rounded-full px-6 py-3 flex items-center gap-2"
                  >
                    <Volume2 size={16} />
                    {isPlaying ? t('common.pause') : t('common.play')}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Adding Response cards that are properly translated */}
            <div className="mb-8">
              <ResponseCard 
                title={t('common.pestDetection')} 
                icon={<Leaf className="h-5 w-5" />}
                delayIndex={0}
              >
                <p>{t('common.pestDescription')}</p>
              </ResponseCard>

              <ResponseCard 
                title={t('common.recommendedAction')} 
                icon={<CloudLightning className="h-5 w-5" />}
                delayIndex={1}
              >
                <p>{t('common.actionDescription')}</p>
              </ResponseCard>

              <ResponseCard 
                title={t('common.soilAnalysis')} 
                icon={<PieChart className="h-5 w-5" />}
                delayIndex={2}
              >
                <p>{t('common.soilAnalysisDesc')}</p>
              </ResponseCard>
            </div>
            
            <div className="text-center space-y-4">
              <Button
                onClick={handleListen}
                variant="outline"
                className="rounded-full px-6 py-3 flex items-center gap-2"
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                {isListening ? t('common.stopListening') : t('common.askAnother')}
              </Button>
              
              {/* Back to Home Button */}
              <Button
                onClick={() => navigate('/')}
                variant="ghost"
                className={`rounded-full px-6 py-3 flex items-center gap-2 w-full justify-center ${theme === 'dark' ? 'hover:bg-slate-700' : 'hover:bg-slate-200'}`}
              >
                <Home size={16} />
                {t('common.backToHome')}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Response;
