
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe, Check } from 'lucide-react';

const LanguageSidebar = () => {
  const { language, setLanguage } = useApp();
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'English', native: 'English' },
    { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
    { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
    { code: 'te', name: 'Telugu', native: 'తెలుగు' },
    { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  ];

  const handleLanguageChange = (langCode: string) => {
    // Set the language in the app context
    setLanguage(langCode);
    
    // Change the i18next language
    i18n.changeLanguage(langCode).then(() => {
      // Store the language in localStorage for persistence
      localStorage.setItem('i18nextLng', langCode);
      
      // Reload the page to ensure all components are re-rendered with the new language
      window.location.reload();
    });
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header with logo */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            {/* Logo elements from Logo component */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-primary rounded"></div>
            <div className="absolute bottom-2 left-1.5 w-3 h-4 bg-primary rounded-tl-full rounded-tr-none rounded-bl-none rounded-br-full transform -rotate-45"></div>
            <div className="absolute bottom-2 right-1.5 w-3 h-4 bg-primary rounded-tl-none rounded-tr-full rounded-bl-full rounded-br-none transform rotate-45"></div>
          </div>
          <span className="font-bold text-lg text-primary">MEREI</span>
        </div>
      </div>
      
      <div className="p-4 flex-1 overflow-y-auto">
        <h2 className="font-medium flex items-center gap-2 mb-4">
          <Globe size={18} className="text-primary" />
          {t('common.languages')}
        </h2>
        
        <Accordion type="single" collapsible className="w-full" defaultValue="languages">
          <AccordionItem value="languages" className="border-none">
            <AccordionTrigger className="text-sm py-2 hover:no-underline">
              {t('common.languages')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-1 pt-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                      language === lang.code 
                        ? 'bg-primary/10 text-primary font-medium' 
                        : 'hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span>{lang.name}</span>
                      <span className="text-xs opacity-70">{lang.native}</span>
                    </div>
                    {language === lang.code && (
                      <Check size={16} className="text-primary" />
                    )}
                  </button>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      
      {/* Footer with version */}
      <div className="p-4 text-xs text-gray-400 border-t border-gray-100">
        MEREI v1.0
      </div>
    </div>
  );
};

export default LanguageSidebar;
