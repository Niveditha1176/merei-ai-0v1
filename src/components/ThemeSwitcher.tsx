
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useApp } from '@/contexts/AppContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useApp();
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Update the document class for theming
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save theme preference to localStorage
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex items-center gap-2">
      <Sun size={16} className="text-yellow-500" />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-slate-700"
      />
      <Moon size={16} className="text-slate-700 dark:text-slate-300" />
    </div>
  );
};

export default ThemeSwitcher;
