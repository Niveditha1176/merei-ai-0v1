
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
    "cancel": "Cancel",
    // Soil status translations
    "soilStatusToday": "Soil status today",
    "soilDetails": "pH 6.2, Nitrogen low",
    "whenToWater": "When to water?",
    "waterAnswer": "Wait 2 days - rain coming",
    // Added tryAsking and example queries
    "tryAsking": "Try asking",
    "checkPests": "Check for pests in my crop",
    "bestTimeWater": "What is the best time to water my field?",
    "improveSoil": "How to improve soil fertility?",
    "allRightsReserved": "All Rights Reserved"
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
      kn: {
        translation: {
          common: {
            "askAbout": "ಮಣ್ಣು, ಹವಾಮಾನ, ಅಥವಾ ಕೀಟಗಳ ಬಗ್ಗೆ ಕೇಳಿ",
            "recentQueries": "ಇತ್ತೀಚಿನ ಪ್ರಶ್ನೆಗಳು",
            "listening": "ಆಲಿಸುತ್ತಿದ್ದೇನೆ",
            "speakNow": "ಈಗ ಮಾತನಾಡಿ",
            "languages": "ಭಾಷೆಗಳು",
            "cancel": "ರದ್ದುಮಾಡಿ",
            // Soil status translations
            "soilStatusToday": "ಇಂದಿನ ಮಣ್ಣಿನ ಸ್ಥಿತಿ",
            "soilDetails": "pH 6.2, ನೈಟ್ರೋಜನ್ ಕಡಿಮೆ",
            "whenToWater": "ಯಾವಾಗ ನೀರು ಹಾಕಬೇಕು?",
            "waterAnswer": "2 ದಿನ ಕಾಯಿರಿ - ಮಳೆ ಬರುತ್ತಿದೆ",
            // Added tryAsking and example queries
            "tryAsking": "ಇದನ್ನು ಪ್ರಯತ್ನಿಸಿ",
            "checkPests": "ನನ್ನ ಬೆಳೆಯಲ್ಲಿ ಕೀಟಗಳನ್ನು ಪರಿಶೀಲಿಸಿ",
            "bestTimeWater": "ನನ್ನ ಹೊಲಕ್ಕೆ ನೀರು ಹಾಕಲು ಉತ್ತಮ ಸಮಯ ಯಾವುದು?",
            "improveSoil": "ಮಣ್ಣಿನ ಫಲವತ್ತತೆಯನ್ನು ಹೇಗೆ ಸುಧಾರಿಸುವುದು?",
            "allRightsReserved": "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ"
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
            "cancel": "రద్దు",
            // Soil status translations
            "soilStatusToday": "నేటి మట్టి స్థితి",
            "soilDetails": "pH 6.2, నత్రజని తక్కువ",
            "whenToWater": "నీరు ఎప్పుడు పోయాలి?",
            "waterAnswer": "2 రోజులు వేచి ఉండండి - వర్షం రాబోతోంది",
            // Added tryAsking and example queries
            "tryAsking": "ఇలా అడగండి",
            "checkPests": "నా పంటలో పురుగులను తనిఖీ చేయండి",
            "bestTimeWater": "నా పొలానికి నీరు పెట్టడానికి ఉత్తమ సమయం ఏది?",
            "improveSoil": "మట్టి సారాన్ని ఎలా మెరుగుపరచాలి?",
            "allRightsReserved": "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి"
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
            "cancel": "ரத்து செய்",
            // Soil status translations
            "soilStatusToday": "இன்றைய மண் நிலை",
            "soilDetails": "pH 6.2, நைட்ரஜன் குறைவு",
            "whenToWater": "எப்போது தண்ணீர் பாய்ச்ச வேண்டும்?",
            "waterAnswer": "2 நாட்கள் காத்திருங்கள் - மழை வருகிறது",
            // Added tryAsking and example queries
            "tryAsking": "இதை முயற்சிக்கவும்",
            "checkPests": "எனது பயிரில் பூச்சிகளை சரிபார்க்கவும்",
            "bestTimeWater": "என் வயலுக்கு தண்ணீர் பாய்ச்ச சிறந்த நேரம் எது?",
            "improveSoil": "மண் வளத்தை எப்படி மேம்படுத்துவது?",
            "allRightsReserved": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை"
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
