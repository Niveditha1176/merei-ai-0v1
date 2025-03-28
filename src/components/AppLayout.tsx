
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import LanguageSidebar from './LanguageSidebar';
import { Menu } from 'lucide-react';

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Mobile sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow-md"
        aria-label="Toggle sidebar"
      >
        <Menu size={20} />
      </button>
      
      {/* Sidebar - hidden on mobile by default, can be toggled */}
      <div 
        className={`fixed md:static inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 z-40 transition-transform duration-200 ease-in-out w-64`}
      >
        <LanguageSidebar />
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        <Outlet />
      </div>
      
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default AppLayout;
