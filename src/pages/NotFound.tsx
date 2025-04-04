
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useApp } from "@/contexts/AppContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const { theme } = useApp();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className={`min-h-screen flex items-center justify-center ${
      theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-100'
    }`}>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          {t('common.pageNotFound', 'Oops! Page not found')}
        </p>
        <a 
          href="/" 
          className={`${theme === 'dark' ? 'text-primary' : 'text-blue-500'} hover:text-blue-700 underline`}
        >
          {t('common.returnHome', 'Return to Home')}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
