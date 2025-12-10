import React from 'react';
import { NewsItem } from '../types';

interface NewsCardProps {
  item: NewsItem;
}

export const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="flex flex-col border-b border-gray-200 pb-4 hover:bg-gray-50 transition p-2 rounded cursor-pointer group">
      <div className="overflow-hidden rounded mb-3">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
        />
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-brand-red font-bold text-xs uppercase tracking-wider">
            {item.category}
          </span>
          <span className="text-brand-muted text-xs flex items-center gap-1">
            <i className="ph ph-clock"></i> {item.timestamp}
          </span>
        </div>
        
        <h3 className="font-serif font-bold text-xl leading-tight mb-2 group-hover:text-brand-blue transition">
          {item.title}
        </h3>
        
        <p className="text-brand-muted text-sm line-clamp-2">
          {item.excerpt}
        </p>
      </div>
    </div>
  );
};
