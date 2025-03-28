
import React from 'react';
import { useApp } from '@/contexts/AppContext';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Globe } from 'lucide-react';

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
    <div className="bg-white p-4 border-r border-gray-200 h-full">
      <h2 className="font-medium flex items-center gap-2 mb-4">
        <Globe size={18} />
        {t('common.languages')}
      </h2>
      
      <Accordion type="single" collapsible className="w-full" defaultValue="languages">
        <AccordionItem value="languages">
          <AccordionTrigger className="text-sm">{t('common.languages')}</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-1 pt-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors ${
                    language === lang.code ? 'bg-primary text-primary-foreground' : 'hover:bg-slate-100'
                  }`}
                >
                  <span>{lang.name}</span>
                  <span className="ml-2 text-xs opacity-70">{lang.native}</span>
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LanguageSidebar;
