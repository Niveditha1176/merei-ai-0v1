
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// English translations
const enTranslations = {
  "common": {
    "askAbout": "Ask about soil, weather, or pests",
    "recentQueries": "Recent queries",
    "listening": "Listening...",
    "speakNow": "Speak now",
    "languages": "Languages"
  }
};

// Hindi translations
const hiTranslations = {
  "common": {
    "askAbout": "मिट्टी, मौसम, या कीड़े के बारे में पूछें",
    "recentQueries": "हाल ही की पूछताछ",
    "listening": "सुन रहा हूँ...",
    "speakNow": "अब बोलिए",
    "languages": "भाषाएँ"
  }
};

// Punjabi translations
const paTranslations = {
  "common": {
    "askAbout": "ਮਿੱਟੀ, ਮੌਸਮ, ਜਾਂ ਕੀੜਿਆਂ ਬਾਰੇ ਪੁੱਛੋ",
    "recentQueries": "ਹਾਲੀਆ ਪ੍ਰਸ਼ਨ",
    "listening": "ਸੁਣ ਰਿਹਾ ਹੈ...",
    "speakNow": "ਹੁਣ ਬੋਲੋ",
    "languages": "ਭਾਸ਼ਾਵਾਂ"
  }
};

// Telugu translations
const teTranslations = {
  "common": {
    "askAbout": "మట్టి, వాతావరణం లేదా పురుగుల గురించి అడగండి",
    "recentQueries": "ఇటీవల ప్రశ్నలు",
    "listening": "వింటున్నాము...",
    "speakNow": "ఇప్పుడు మాట్లాడండి",
    "languages": "భాషలు"
  }
};

// Tamil translations
const taTranslations = {
  "common": {
    "askAbout": "மண், வானிலை அல்லது பூச்சிகளைப் பற்றி கேளுங்கள்",
    "recentQueries": "சமீபத்திய வினவல்கள்",
    "listening": "கேட்கிறேன்...",
    "speakNow": "இப்போது பேசவும்",
    "languages": "மொழிகள்"
  }
};

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      hi: hiTranslations,
      pa: paTranslations,
      te: teTranslations,
      ta: taTranslations
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;
