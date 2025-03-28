
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Import translations
import hiTranslations from './translations/hi';

// English translations
const enTranslations = {
  common: {
    "askAbout": "Ask about soil, weather, or pests",
    "recentQueries": "Recent queries",
    "listening": "Listening",
    "speakNow": "Speak now",
    "languages": "Languages",
    "cancel": "Cancel"
  }
};

// Initialize i18next
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      hi: { translation: hiTranslations },
      pa: {
        translation: {
          common: {
            "askAbout": "ਮਿੱਟੀ, ਮੌਸਮ, ਜਾਂ ਕੀੜਿਆਂ ਬਾਰੇ ਪੁੱਛੋ",
            "recentQueries": "ਹਾਲੀਆ ਪ੍ਰਸ਼ਨ",
            "listening": "ਸੁਣ ਰਿਹਾ ਹੈ",
            "speakNow": "ਹੁਣ ਬੋਲੋ",
            "languages": "ਭਾਸ਼ਾਵਾਂ",
            "cancel": "ਰੱਦ ਕਰੋ"
          }
        }
      },
      te: {
        translation: {
          common: {
            "askAbout": "మట్టి, వాతావరణం లేదా పురుగుల గురించి అడగండి",
            "recentQueries": "ఇటీవల ప్రశ్నలు",
            "listening": "వింటున్నాము",
            "speakNow": "ఇప్పుడు మాట్లాడండి",
            "languages": "భాషలు",
            "cancel": "రద్దు"
          }
        }
      },
      ta: {
        translation: {
          common: {
            "askAbout": "மண், வானிலை அல்லது பூச்சிகளைப் பற்றி கேளுங்கள்",
            "recentQueries": "சமீபத்திய வினவல்கள்",
            "listening": "கேட்கிறேன்",
            "speakNow": "இப்போது பேசவும்",
            "languages": "மொழிகள்",
            "cancel": "ரத்து செய்"
          }
        }
      }
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
