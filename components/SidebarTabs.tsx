import React, { useState } from 'react';
import { LATEST_NEWS, TRENDING_NEWS } from '../constants';
import { NewsItem } from '../types';

export const SidebarTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'latest' | 'trending'>('latest');

  const items = activeTab === 'latest' ? LATEST_NEWS.slice(0, 5) : TRENDING_NEWS;

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm h-full">
      <div className="flex border-b-2 border-brand-blue">
        <button
          onClick={() => setActiveTab('latest')}
          className={`flex-1 py-3 font-semibold text-sm uppercase tracking-wide transition-colors ${
            activeTab === 'latest'
              ? 'bg-brand-blue text-white'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
        >
          Latest News
        </button>
        <button
          onClick={() => setActiveTab('trending')}
          className={`flex-1 py-3 font-semibold text-sm uppercase tracking-wide transition-colors ${
            activeTab === 'trending'
              ? 'bg-brand-blue text-white'
              : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
          }`}
        >
          Trending
        </button>
      </div>

      <div className="divide-y divide-gray-100">
        {items.map((item: NewsItem) => (
          <div key={item.id} className="p-4 hover:bg-gray-50 cursor-pointer group transition">
            <div className="flex gap-3">
              <span className="text-brand-blue font-bold text-lg leading-none mt-1">
                #
              </span>
              <div>
                <h4 className="font-serif font-semibold text-brand-text group-hover:text-brand-blue leading-snug mb-1">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-brand-muted">
                   <span className="uppercase text-[10px] font-bold text-brand-red border border-brand-red px-1 rounded-sm">
                     {item.category}
                   </span>
                   <span>{item.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-3 bg-gray-50 text-center border-t border-gray-200">
        <button className="text-xs font-bold text-brand-blue hover:underline uppercase">
          View All {activeTab}
        </button>
      </div>
    </div>
  );
};
