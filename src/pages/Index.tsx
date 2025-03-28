
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';
import MicButton from '@/components/MicButton';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const [isListening, setIsListening] = useState(false);
  const [recentQueries, setRecentQueries] = useState([
    "Soil status today",
    "When to water?",
    "Check for pests"
  ]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleMicClick = () => {
    setIsListening(true);
    
    toast({
      title: "Listening...",
      description: "Speak now",
      duration: 2000,
    });
    
    // Simulate voice recognition (in a real app, would use Web Speech API)
    setTimeout(() => {
      setIsListening(false);
      
      // Add the new query to recent queries
      const newQuery = "Check for pests in my cotton field";
      setRecentQueries(prev => [newQuery, ...prev.slice(0, 4)]);
      
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
          {/* Language selector would go here */}
          <Skeleton className="h-10 w-full" />
        </div>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <MicButton isListening={isListening} onClick={handleMicClick} />
        
        <p className="text-center mt-6 text-gray-600">
          Ask about soil, weather, or pests
        </p>
        
        <div className="w-full max-w-md mt-8">
          <h3 className="text-sm font-medium mb-2 text-gray-500">Recent queries</h3>
          <div className="space-y-2">
            {recentQueries.map((query, index) => (
              <div key={index} className="bg-white p-3 rounded-lg shadow-sm">
                {query}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
