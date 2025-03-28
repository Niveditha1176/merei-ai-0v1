
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n.ts'

// Get the initial language from localStorage or use default
const savedLanguage = localStorage.getItem('i18nextLng');
if (savedLanguage) {
  // Apply the saved language to i18next
  import('./i18n.ts').then((i18nModule) => {
    i18nModule.default.changeLanguage(savedLanguage);
  });
}

// Ensure that React is properly imported and available
const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
