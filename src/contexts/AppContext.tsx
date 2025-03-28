
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the types for our context
interface Query {
  id: string;
  question: string;
  answer: string;
}

interface AppContextType {
  language: string;
  setLanguage: (language: string) => void;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
  currentQuery: string;
  setCurrentQuery: (query: string) => void;
  recentQueries: Query[];
  addQuery: (question: string, answer: string) => void;
  onboardingComplete: boolean;
  completeOnboarding: () => void;
}

// Create the context with a default value
const AppContext = createContext<AppContextType | undefined>(undefined);

// Create a provider component
export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [isListening, setIsListening] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [recentQueries, setRecentQueries] = useState<Query[]>([
    { id: '1', question: 'Soil status today', answer: 'pH 6.2, Nitrogen low' },
    { id: '2', question: 'When to water?', answer: 'Wait 2 days - rain coming' }
  ]);
  const [onboardingComplete, setOnboardingComplete] = useState(false);

  const addQuery = (question: string, answer: string) => {
    const newQuery = {
      id: Date.now().toString(),
      question,
      answer
    };
    
    setRecentQueries(prev => [newQuery, ...prev.slice(0, 4)]);
  };

  const completeOnboarding = () => {
    setOnboardingComplete(true);
  };
  
  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        isListening,
        setIsListening,
        currentQuery,
        setCurrentQuery,
        recentQueries,
        addQuery,
        onboardingComplete,
        completeOnboarding
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Create a custom hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
