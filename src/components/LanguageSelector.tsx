
import React from 'react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useTranslation } from 'react-i18next';

interface LanguageSelectorProps {
  onChange: (language: string) => void;
  value: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange, value }) => {
  const { i18n, t } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'Hindi' },
    { code: 'pa', name: 'Punjabi' },
    { code: 'te', name: 'Telugu' },
    { code: 'ta', name: 'Tamil' },
  ];

  const handleLanguageChange = (langCode: string) => {
    console.log("Changing language to:", langCode);
    onChange(langCode);
  };

  return (
    <Select value={value} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={t('common.languages')} />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.code} value={lang.code}>
            {lang.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
