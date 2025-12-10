import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import { SidebarTabs } from '../components/SidebarTabs';
import { NewsCard } from '../components/NewsCard';
import { LATEST_NEWS } from '../constants';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      
      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-8">
        
        {/* Left Column (Main Content) */}
        <div className="flex flex-col gap-8">
          
          {/* Hero Slider */}
          <section>
            <HeroCarousel />
          </section>

          {/* Top Stories Grid */}
          <section>
             <div className="flex items-center mb-6">
                <h2 className="text-2xl font-serif font-bold text-brand-dark relative pr-4">
                  Top Stories
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-brand-red opacity-20"></span>
                </h2>
                <div className="h-[1px] bg-gray-200 flex-grow ml-4"></div>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {LATEST_NEWS.map((item) => (
                 <NewsCard key={item.id} item={item} />
               ))}
             </div>
          </section>

        </div>

        {/* Right Column (Sidebar) */}
        <aside className="lg:pl-4">
           <div className="sticky top-40">
              <SidebarTabs />

              {/* Ad Placeholder */}
              <div className="mt-8 w-full aspect-[300/250] bg-gray-100 flex items-center justify-center border border-gray-200 rounded">
                <span className="text-gray-400 text-sm font-semibold tracking-widest">ADVERTISEMENT</span>
              </div>
           </div>
        </aside>

      </div>
    </div>
  );
};
