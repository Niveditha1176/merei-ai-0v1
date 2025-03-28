
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LanguageSidebar from './LanguageSidebar';
import { Menu, X } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme } = useApp();

  return (
    <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-slate-900' : 'bg-gradient-to-b from-slate-50 to-slate-100'}`}>
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md transition-colors ${
          theme === 'dark' ? 'bg-slate-800 hover:bg-slate-700' : 'bg-white hover:bg-slate-50'
        }`}
        aria-label="Toggle sidebar"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
      
      {/* Sidebar - hidden on mobile by default, can be toggled */}
      <div 
        className={`fixed md:static inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-40 transition-transform duration-300 ease-in-out w-64 ${
          theme === 'dark' ? 'bg-slate-800 shadow-slate-900' : 'bg-white'
        } shadow-md md:shadow-none h-full`}
      >
        <LanguageSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1 transition-all duration-300">
        <Outlet />
      </div>
      
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AppLayout;
