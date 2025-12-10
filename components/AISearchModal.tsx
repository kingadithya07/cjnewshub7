import React, { useState, useRef, useEffect } from 'react';
import { askGeminiAssistant } from '../services/geminiService';

interface AISearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AISearchModal: React.FC<AISearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResponse(null);

    const result = await askGeminiAssistant(query);
    setResponse(result);
    setIsLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div 
        ref={modalRef}
        className="bg-white w-full max-w-lg rounded-lg shadow-2xl overflow-hidden animate-fade-in"
      >
        <div className="bg-brand-blue p-4 flex justify-between items-center text-white">
          <h3 className="font-serif font-bold text-xl flex items-center gap-2">
            <i className="ph ph-sparkle-fill text-yellow-300"></i>
            AI News Assistant
          </h3>
          <button onClick={onClose} className="hover:bg-white/20 p-1 rounded transition">
            <i className="ph ph-x text-xl"></i>
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-600 mb-4 text-sm">
            Ask about current events, summaries, or specific topics. Powered by Gemini.
          </p>

          <form onSubmit={handleSubmit} className="mb-4">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ex: Summarize today's tech news..."
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-blue hover:bg-brand-surface p-2 rounded-full transition"
              >
                {isLoading ? (
                  <i className="ph ph-spinner animate-spin text-xl"></i>
                ) : (
                  <i className="ph ph-paper-plane-right-fill text-xl"></i>
                )}
              </button>
            </div>
          </form>

          {response && (
            <div className="bg-brand-surface p-4 rounded-lg border border-gray-200">
              <h4 className="font-bold text-sm text-brand-blue mb-2 uppercase tracking-wide">AI Response</h4>
              <p className="text-brand-text leading-relaxed text-sm md:text-base">
                {response}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
