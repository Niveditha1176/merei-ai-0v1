
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
    "allRightsReserved": "All Rights Reserved",
    // Dialog content translations
    "pestDetection": "Pest Detection",
    "pestDescription": "Your sunflower field appears to have signs of aphid infestation. These small insects are visible on the underside of leaves.",
    "recommendedAction": "Recommended Action",
    "actionDescription": "Apply neem oil spray in the early morning. Use 5ml per liter of water and spray every 7 days for 3 weeks.",
    "weatherForecast": "Weather Forecast",
    "weatherDescription": "Light rainfall expected in the next 48 hours in your region. Total precipitation: 15-20mm.",
    "wateringRecommendation": "Watering Recommendation",
    "wateringDescription": "Wait until after the rain to assess soil moisture. Early morning watering is recommended if soil still appears dry.",
    "soilAnalysis": "Soil Analysis",
    "soilAnalysisDesc": "Your soil sample shows low nitrogen (N) content and moderate phosphorus (P). pH level is 6.2 which is slightly acidic.",
    "improvementStrategy": "Improvement Strategy",
    "improvementDesc": "Add compost and well-rotted manure to improve nitrogen levels. Consider growing legumes as a cover crop to fix nitrogen naturally.",
    // Response page translations
    "analyzingInput": "Analyzing your input",
    "pleaseWait": "Please wait...",
    "pestControl": "Pest Control",
    "play": "Play",
    "pause": "Pause",
    "stopListening": "Stop listening",
    "askAnother": "Ask another question",
    "backToHome": "Back to Home",
    "goBack": "Go back",
    "goToListening": "Go to listening page",
    "speakClearly": "Speak clearly and slowly",
    // Onboarding translations
    "welcomeToMerei": "Welcome to MEREI!",
    "speakNaturally": "Speak naturally in your language",
    "continue": "Continue",
    "tapAndSpeak": "Tap and speak like this:",
    "getStarted": "Get Started",
    // NotFound translations
    "pageNotFound": "Oops! Page not found",
    "returnHome": "Return to Home"
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
            "allRightsReserved": "ಎಲ್ಲ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
            // Dialog content translations
            "pestDetection": "ಕೀಟ ಪತ್ತೆ",
            "pestDescription": "ನಿಮ್ಮ ಸೂರ್ಯಕಾಂತಿ ಹೊಲದಲ್ಲಿ ಸೀಳೆಗಳ ಸೋಂಕಿನ ಲಕ್ಷಣಗಳು ಕಂಡುಬಂದಿವೆ. ಈ ಚಿಕ್ಕ ಕೀಟಗಳು ಎಲೆಗಳ ಕೆಳಭಾಗದಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",
            "recommendedAction": "ಶಿಫಾರಸು ಮಾಡಿದ ಕ್ರಿಯೆ",
            "actionDescription": "ಬೆಳಿಗ್ಗೆ ಬೇಗನೆ ಬೇವಿನ ಎಣ್ಣೆ ಸಿಂಪಡಿಸಿ. ಒಂದು ಲೀಟರ್ ನೀರಿಗೆ 5 ಮಿಲೀ ಬಳಸಿ ಮತ್ತು 3 ವಾರಗಳ ಕಾಲ ಪ್ರತಿ 7 ದಿನಗಳಿಗೊಮ್ಮೆ ಸಿಂಪಡಿಸಿ.",
            "weatherForecast": "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ",
            "weatherDescription": "ನಿಮ್ಮ ಪ್ರದೇಶದಲ್ಲಿ ಮುಂದಿನ 48 ಗಂಟೆಗಳಲ್ಲಿ ಸಣ್ಣ ಮಳೆ ನಿರೀಕ್ಷೆ. ಒಟ್ಟು ಮಳೆ: 15-20 ಮಿಮೀ.",
            "wateringRecommendation": "ನೀರು ಹಾಕುವ ಶಿಫಾರಸು",
            "wateringDescription": "ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಅಂದಾಜಿಸಲು ಮಳೆಯ ನಂತರ ಕಾಯಿರಿ. ಮಣ್ಣು ಇನ್ನೂ ಒಣಗಿದಂತೆ ಕಂಡುಬಂದರೆ ಬೆಳಗಿನ ಜಾವದಲ್ಲಿ ನೀರು ಹಾಕುವುದು ಸೂಕ್ತ.",
            "soilAnalysis": "ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ",
            "soilAnalysisDesc": "ನಿಮ್ಮ ಮಣ್ಣಿನ ಮಾದರಿಯಲ್ಲಿ ಕಡಿಮೆ ಸಾರಜನಕ (N) ಮತ್ತು ಮಧ್ಯಮ ರಂಜಕ (P) ಇದೆ. pH ಮಟ್ಟ 6.2 ಇದು ಸ್ವಲ್ಪ ಆಮ್ಲೀಯವಾಗಿದೆ.",
            "improvementStrategy": "ಸುಧಾರಣಾ ತಂತ್ರ",
            "improvementDesc": "ಸಾರಜನಕದ ಮಟ್ಟವನ್ನು ಹೆಚ್ಚಿಸಲು ಕಾಂಪೋಸ್ಟ್ ಮತ್ತು ಚೆನ್ನಾಗಿ ಕೊಳೆತ ಗೊಬ್ಬರವನ್ನು ಸೇರಿಸಿ. ನೈಸರ್ಗಿಕವಾಗಿ ಸಾರಜನಕವನ್ನು ಸ್ಥಿರಗೊಳಿಸಲು ಕಾಳುಗಳನ್ನು ಮುಚ್ಚುಬೆಳೆಯಾಗಿ ಬೆಳೆಯಲು ಪರಿಗಣಿಸಿ.",
            // Response page translations
            "analyzingInput": "ನಿಮ್ಮ ಇನ್‌ಪುಟ್ ಅನ್ನು ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ",
            "pleaseWait": "ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ...",
            "pestControl": "ಕೀಟ ನಿಯಂತ್ರಣ",
            "play": "ಪ್ಲೇ ಮಾಡಿ",
            "pause": "ವಿರಾಮ",
            "stopListening": "ಕೇಳುವುದನ್ನು ನಿಲ್ಲಿಸಿ",
            "askAnother": "ಮತ್ತೊಂದು ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಿ",
            "backToHome": "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
            "goBack": "ಹಿಂದೆ ಹೋಗಿ",
            "goToListening": "ಕೇಳುವ ಪುಟಕ್ಕೆ ಹೋಗಿ",
            "speakClearly": "ಸ್ಪಷ್ಟವಾಗಿ ಮತ್ತು ನಿಧಾನವಾಗಿ ಮಾತನಾಡಿ",
            // Onboarding translations
            "welcomeToMerei": "MEREI ಗೆ ಸುಸ್ವಾಗತ!",
            "speakNaturally": "ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಸಹಜವಾಗಿ ಮಾತನಾಡಿ",
            "continue": "ಮುಂದುವರಿಸಿ",
            "tapAndSpeak": "ಹೀಗೆ ಟ್ಯಾಪ್ ಮಾಡಿ ಮತ್ತು ಮಾತನಾಡಿ:",
            "getStarted": "ಪ್ರಾರಂಭಿಸಿ",
            // NotFound translations
            "pageNotFound": "ಓಹ್! ಪುಟ ಕಂಡುಬಂದಿಲ್ಲ",
            "returnHome": "ಮುಖಪುಟಕ್ಕೆ ಮರಳಿ"
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
            "allRightsReserved": "అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి",
            // Dialog content translations
            "pestDetection": "పురుగుల గుర్తింపు",
            "pestDescription": "మీ సూర్యకాంతి పొలంలో తేళ్ల దాడి లక్షణాలు కనిపిస్తున్నాయి. ఈ చిన్న పురుగులు ఆకుల కింది భాగంలో కనిపిస్తాయి.",
            "recommendedAction": "సిఫార్సు చేసిన చర్య",
            "actionDescription": "తెల్లవారుజామున వేప నూనె స్ప్రే చేయండి. లీటరు నీటికి 5 మిల్లీలు ఉపయోగించి 3 వారాలపాటు ప్రతి 7 రోజులకు స్ప్రే చేయండి.",
            "weatherForecast": "వాతావరణ సూచన",
            "weatherDescription": "మీ ప్రాంతంలో తదుపరి 48 గంటల్లో తేలికపాటి వర్షం పడే అవకాశం ఉంది. మొత్తం వర్షపాతం: 15-20మిమీ.",
            "wateringRecommendation": "నీరు పెట్టడానికి సిఫార్సు",
            "wateringDescription": "నేల తేమను అంచనా వేయడానికి వర్షం తర్వాత వేచి ఉండండి. నేల ఇంకా పొడిగా కనిపిస్తే ఉదయాన్నే నీరు పెట్టడం మంచిది.",
            "soilAnalysis": "మట్టి విశ్లేషణ",
            "soilAnalysisDesc": "మీ మట్టి నమూనాలో తక్కువ నత్రజని (N) మరియు మధ్యస్థ భాస్వరం (P) ఉంది. pH స్థాయి 6.2, ఇది కొంచెం ఆమ్లీయంగా ఉంది.",
            "improvementStrategy": "మెరుగుదల వ్యూహం",
            "improvementDesc": "నత్రజని స్థాయిలను మెరుగుపరచడానికి కంపోస్ట్ మరియు బాగా కుళ్ళిన ఎరువును చేర్చండి. సహజంగా నత్రజనిని స్థిరీకరించడానికి కవర్ క్రాప్‌గా పప్పుధాన్యాలను పెంచడాన్ని పరిగణించండి.",
            // Response page translations
            "analyzingInput": "మీ ఇన్‌పుట్‌ను విశ్లేషిస్తోంది",
            "pleaseWait": "దయచేసి వేచి ఉండండి...",
            "pestControl": "పురుగుల నియంత్రణ",
            "play": "ప్లే",
            "pause": "పాజ్",
            "stopListening": "వినడం ఆపండి",
            "askAnother": "మరొక ప్రశ్న అడగండి",
            "backToHome": "హోమ్‌కి తిరిగి వెళ్ళండి",
            "goBack": "వెనక్కి వెళ్ళండి",
            "goToListening": "వినే పేజీకి వెళ్ళండి",
            "speakClearly": "స్పష్టంగా మరియు నెమ్మదిగా మాట్లాడండి",
            // Onboarding translations
            "welcomeToMerei": "MEREI కి స్వాగతం!",
            "speakNaturally": "మీ భాషలో సహజంగా మాట్లాడండి",
            "continue": "కొనసాగించండి",
            "tapAndSpeak": "ఇలా నొక్కి మాట్లాడండి:",
            "getStarted": "ప్రారంభించండి",
            // NotFound translations
            "pageNotFound": "అయ్యో! పేజీ కనబడలేదు",
            "returnHome": "హోమ్‌కి తిరిగి వెళ్లండి"
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
            "allRightsReserved": "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
            // Dialog content translations
            "pestDetection": "பூச்சி கண்டறிதல்",
            "pestDescription": "உங்கள் சூரியகாந்தி வயலில் ஆப்பிட் தாக்குதலின் அறிகுறிகள் தெரிகின்றன. இந்த சிறிய பூச்சிகள் இலைகளின் அடிப்பறத்தில் காணப்படுகின்றன.",
            "recommendedAction": "பரிந்துரைக்கப்பட்ட நடவடிக்கை",
            "actionDescription": "அதிகாலையில் வேப்பெண்ணெய் தெளிப்பு செய்யவும். ஒரு லிட்டர் தண்ணீருக்கு 5மிலி பயன்படுத்தி 3 வாரங்களுக்கு 7 நாட்களுக்கு ஒருமுறை தெளிக்கவும்.",
            "weatherForecast": "வானிலை முன்னறிவிப்பு",
            "weatherDescription": "உங்கள் பகுதியில் அடுத்த 48 மணி நேரத்தில் லேசான மழை எதிர்பார்க்கப்படுகிறது. மொத்த மழைப்பொழிவு: 15-20மிமீ.",
            "wateringRecommendation": "நீர்ப்பாசன பரிந்துரை",
            "wateringDescription": "மண்ணின் ஈரப்பதத்தை மதிப்பிட மழைக்குப் பிறகு காத்திருங்கள். மண் இன்னும் உலர்ந்து காணப்பட்டால், அதிகாலையில் நீர்ப்பாய்ச்சுதல் பரிந்துரைக்கப்படுகிறது.",
            "soilAnalysis": "மண் பகுப்பாய்வு",
            "soilAnalysisDesc": "உங்கள் மண் மாதிரியில் குறைந்த நைட்ரஜன் (N) மற்றும் மிதமான பாஸ்பரஸ் (P) உள்ளது. pH அளவு 6.2, இது சற்று அமிலத்தன்மை கொண்டது.",
            "improvementStrategy": "மேம்பாட்டு உத்தி",
            "improvementDesc": "நைட்ரஜன் அளவை அதிகரிக்க கம்போஸ்ட் மற்றும் நன்கு மக்கிய எரு சேர்க்கவும். இயற்கையாக நைட்ரஜனை நிலைநிறுத்த பயறு வகை பயிர்களை கவர் க்ராப்பாக வளர்ப்பதை பரிசீலிக்கவும்.",
            // Response page translations
            "analyzingInput": "உங்கள் உள்ளீட்டை ஆராய்கிறது",
            "pleaseWait": "தயவுசெய்து காத்திருக்கவும்...",
            "pestControl": "பூச்சி கட்டுப்பாடு",
            "play": "இயக்கு",
            "pause": "இடைநிறுத்து",
            "stopListening": "கேட்பதை நிறுத்து",
            "askAnother": "மற்றொரு கேள்வியைக் கேள்",
            "backToHome": "முகப்பு பக்கத்திற்குத் திரும்பு",
            "goBack": "பின் செல்",
            "goToListening": "கேட்கும் பக்கத்திற்குச் செல்",
            "speakClearly": "தெளிவாகவும் மெதுவாகவும் பேசுங்கள்",
            // Onboarding translations
            "welcomeToMerei": "MEREI க்கு வரவேற்கிறோம்!",
            "speakNaturally": "உங்கள் மொழியில் இயல்பாகப் பேசுங்கள்",
            "continue": "தொடரவும்",
            "tapAndSpeak": "இப்படி தட்டி பேசுங்கள்:",
            "getStarted": "தொடங்குங்கள்",
            // NotFound translations
            "pageNotFound": "அடடா! பக்கம் காணப்படவில்லை",
            "returnHome": "முகப்புப் பக்கத்திற்குத் திரும்பு"
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
