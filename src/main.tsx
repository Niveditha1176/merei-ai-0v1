
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import i18n from './i18n.ts';

// Wait for i18n to be initialized before rendering the app
document.addEventListener('DOMContentLoaded', () => {
  // Get the initial language from localStorage or use default
  const savedLanguage = localStorage.getItem('i18nextLng');
  
  // Set language and then render the app
  const renderApp = () => {
    const root = ReactDOM.createRoot(document.getElementById('root')!);
    root.render(<App />);
  };

  if (savedLanguage) {
    console.log("Loading saved language:", savedLanguage);
    i18n.changeLanguage(savedLanguage).then(() => {
      renderApp();
    });
  } else {
    renderApp();
  }
});
