import React, { useEffect, useState } from 'react';
import { APP_NAME } from '../constants';

export const Footer: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-white border-t-4 border-brand-red mt-16 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start">
           <div className="flex items-center gap-2 mb-2">
              <i className="ph ph-globe-hemisphere-west-fill text-3xl text-brand-blue"></i>
              <span className="font-serif font-bold text-2xl text-brand-dark">{APP_NAME}</span>
           </div>
           <p className="text-sm text-brand-muted">
             © {new Date().getFullYear()} {APP_NAME} Inc. All rights reserved.
           </p>
        </div>

        <div className="flex gap-4">
           <a href="#" className="w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white flex items-center justify-center transition">
             <i className="ph ph-facebook-logo"></i>
           </a>
           <a href="#" className="w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white flex items-center justify-center transition">
             <i className="ph ph-twitter-logo"></i>
           </a>
           <a href="#" className="w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white flex items-center justify-center transition">
             <i className="ph ph-instagram-logo"></i>
           </a>
           <a href="#" className="w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-blue hover:text-white flex items-center justify-center transition">
             <i className="ph ph-youtube-logo"></i>
           </a>
        </div>

        <div className="text-right">
           <div className="text-2xl font-mono font-bold text-brand-text bg-gray-100 px-4 py-2 rounded">
             {time}
           </div>
        </div>

      </div>
    </footer>
  );
};
