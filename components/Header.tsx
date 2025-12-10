import React, { useState } from 'react';
import { NAV_LINKS, BREAKING_NEWS, APP_NAME } from '../constants';
import { AISearchModal } from './AISearchModal';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiModalOpen, setAiModalOpen] = useState(false);

  return (
    <>
      <header className="bg-white sticky top-0 z-[1000] shadow-md">
        
        {/* Top Row: Logo | Search | Utils */}
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Branding */}
            <div className="flex items-center gap-2">
              <div className="text-4xl text-brand-blue">
                <i className="ph ph-globe-hemisphere-west-fill"></i>
              </div>
              <div className="leading-none">
                 <h1 className="font-serif font-bold text-3xl tracking-tight text-brand-dark">
                   {APP_NAME}
                 </h1>
                 <p className="text-[0.6rem] font-bold tracking-[0.2em] text-brand-blue uppercase">
                   Connecting The World
                 </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-grow max-w-lg w-full relative">
              <input 
                type="text" 
                placeholder="Search for news, topics..." 
                className="w-full pl-4 pr-10 py-2 bg-gray-100 border border-gray-200 rounded text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue"
              />
              <button className="absolute right-0 top-0 h-full px-3 text-gray-500 hover:text-brand-blue">
                <i className="ph ph-magnifying-glass font-bold"></i>
              </button>
            </div>

            {/* Utilities */}
            <div className="flex gap-3 items-center text-sm font-semibold">
              <button 
                onClick={() => setAiModalOpen(true)}
                className="hidden md:flex items-center gap-1 text-brand-blue border border-brand-blue px-3 py-1.5 rounded hover:bg-brand-blue hover:text-white transition"
              >
                <i className="ph ph-sparkle"></i> AI Assistant
              </button>
              <a href="#" className="hidden md:flex items-center gap-1 text-green-600 hover:text-green-700">
                <i className="ph ph-television-simple"></i> LIVE TV
              </a>
              <a href="#" className="bg-brand-blue text-white px-4 py-1.5 rounded hover:bg-brand-dark transition shadow-sm">
                Login
              </a>
            </div>

          </div>
        </div>

        {/* Blue Nav Bar */}
        <div className="bg-brand-blue text-white mt-2">
           <div className="max-w-7xl mx-auto px-4 relative">
              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex justify-between items-center py-2">
                 <a href="/" className="text-xl"><i className="ph ph-house-fill"></i></a>
                 <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl">
                   <i className={`ph ${mobileMenuOpen ? 'ph-x' : 'ph-list'}`}></i>
                 </button>
              </div>

              {/* Nav List */}
              <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block py-1`}>
                <ul className="flex flex-col md:flex-row md:justify-center gap-0 md:gap-6 text-sm font-semibold uppercase tracking-wide">
                  <li className="hidden md:block">
                    <a href="/" className="block py-2 md:py-3 hover:text-white/80">
                      <i className="ph ph-house-fill text-lg"></i>
                    </a>
                  </li>
                  {NAV_LINKS.filter(l => l.label !== 'Home').map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href} 
                        className="block py-2 md:py-3 border-b md:border-none border-blue-400 hover:bg-white/10 md:hover:bg-transparent md:hover:text-blue-200 transition px-2 md:px-0"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                   {/* Mobile only Util link */}
                   <li className="md:hidden mt-2">
                    <button 
                      onClick={() => setAiModalOpen(true)}
                      className="w-full text-left py-2 px-2 flex items-center gap-2 text-yellow-300"
                    >
                      <i className="ph ph-sparkle"></i> Ask AI
                    </button>
                   </li>
                </ul>
              </nav>
           </div>
        </div>

        {/* Breaking News Ticker */}
        <div className="bg-gray-100 border-b border-gray-200 h-10 flex overflow-hidden">
           <div className="bg-brand-red text-white px-6 flex items-center font-bold text-sm uppercase tracking-wide z-10 shadow-lg shrink-0">
             Breaking News
           </div>
           <div className="flex-grow relative flex items-center overflow-hidden">
             <div className="whitespace-nowrap animate-ticker pl-[100%] inline-block">
                {BREAKING_NEWS.map((news, idx) => (
                  <span key={idx} className="mr-12 text-sm font-medium text-gray-800 inline-flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-red rounded-full mr-2"></span>
                    {news}
                  </span>
                ))}
             </div>
           </div>
        </div>

      </header>

      {/* AI Modal */}
      <AISearchModal isOpen={aiModalOpen} onClose={() => setAiModalOpen(false)} />
    </>
  );
};
