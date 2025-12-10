import { NavLink, NewsItem, CarouselItem } from './types';

export const APP_NAME = "CJNewsHUB";

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', isActive: true },
  { label: 'Andhra Pradesh', href: '#' },
  { label: 'Telangana', href: '#' },
  { label: 'Cinema', href: '#' },
  { label: 'Cricket', href: '#' },
  { label: 'Politics', href: '#' },
  { label: 'Business', href: '#' },
  { label: 'Family', href: '#' },
  { label: 'Magazines', href: '#' },
];

export const BREAKING_NEWS = [
  "Global markets reach all-time high as tech sector rallies.",
  "New sustainable energy breakthrough announced in Geneva.",
  "SpaceX successfully lands rocket on Mars surface simulation.",
  "Olympic Committee announces new sports for 2028 games.",
  "AI Summit 2025 concludes with major safety agreements."
];

export const HERO_SLIDES: CarouselItem[] = [
  {
    id: '1',
    image: 'https://picsum.photos/1200/600?random=1',
    title: "Global Summit Addresses Climate Action Targets for 2030",
    category: "World News"
  },
  {
    id: '2',
    image: 'https://picsum.photos/1200/600?random=2',
    title: "Revolutionary Medical Tech Unveiled at Health Expo",
    category: "Technology"
  },
  {
    id: '3',
    image: 'https://picsum.photos/1200/600?random=3',
    title: "The Future of Space Travel: Mars Mission Updates",
    category: "Science"
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '101',
    title: "Economic Policy Shift Impacts Local Markets",
    excerpt: "The central bank announced a new strategy regarding interest rates...",
    category: "Business",
    image: "https://picsum.photos/400/300?random=4",
    timestamp: "2 hours ago",
    author: "Jane Doe"
  },
  {
    id: '102',
    title: "New Electric Vehicle Incentives Proposed",
    excerpt: "Government officials are debating a new bill to subsidize EV purchases...",
    category: "Automotive",
    image: "https://picsum.photos/400/300?random=5",
    timestamp: "4 hours ago",
    author: "John Smith"
  },
  {
    id: '103',
    title: "Championship Finals: A Historic Victory",
    excerpt: "In a stunning upset, the underdogs took home the trophy last night...",
    category: "Sports",
    image: "https://picsum.photos/400/300?random=6",
    timestamp: "5 hours ago",
    author: "Mike Ross"
  },
  {
    id: '104',
    title: "Tech Giants Merge in Billion Dollar Deal",
    excerpt: "Two of the largest software companies have agreed to a merger...",
    category: "Technology",
    image: "https://picsum.photos/400/300?random=7",
    timestamp: "6 hours ago",
    author: "Sarah Conner"
  }
];

export const TRENDING_NEWS: NewsItem[] = [
  {
    id: '201',
    title: "Viral Sensation: The Cat That Can Do Math",
    excerpt: "Internet users are baffled by this feline's arithmetic skills...",
    category: "Offbeat",
    image: "https://picsum.photos/400/300?random=8",
    timestamp: "1 day ago",
    author: "Web Desk"
  },
  {
    id: '202',
    title: "Top 10 Travel Destinations for 2025",
    excerpt: "Planning your next vacation? Here are the must-visit spots...",
    category: "Travel",
    image: "https://picsum.photos/400/300?random=9",
    timestamp: "2 days ago",
    author: "Travel Weekly"
  },
  {
    id: '203',
    title: "Local Hero Saves Puppy from Frozen Lake",
    excerpt: "A heartwarming story of bravery in the midst of winter...",
    category: "Local",
    image: "https://picsum.photos/400/300?random=10",
    timestamp: "12 hours ago",
    author: "Local News"
  }
];
