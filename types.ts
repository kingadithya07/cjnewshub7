export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  timestamp: string;
  author: string;
}

export interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

export interface CarouselItem {
  id: string;
  image: string;
  title: string;
  category: string;
}

export enum GeminiModel {
  FLASH = 'gemini-2.5-flash',
  PRO = 'gemini-3-pro-preview'
}