import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Additional routes can be added here */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
