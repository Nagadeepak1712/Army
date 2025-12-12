import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import { PAGES } from './data';
import { PageId } from './types';

function App() {
  const [currentPageId, setCurrentPageId] = useState<PageId>('home');
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPageId]);

  const handleNavigate = (pageId: PageId) => {
    setIsLoading(true);
    // Simulate loading for better UX feel
    setTimeout(() => {
      setCurrentPageId(pageId);
      setIsLoading(false);
    }, 300);
  };

  const currentPageData = PAGES[currentPageId];

  return (
    <div className="min-h-screen bg-army-950 text-gray-100 flex flex-col font-sans selection:bg-sand-500 selection:text-black">
      <Navigation onNavigate={handleNavigate} currentPage={currentPageId} />
      
      {/* Loading Overlay */}
      <div className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${isLoading ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-army-800 border-t-sand-500 rounded-full animate-spin mb-4"></div>
          <span className="text-sand-500 font-display tracking-widest uppercase text-sm animate-pulse">Loading Asset...</span>
        </div>
      </div>

      <main className="flex-grow">
        <Hero 
          title={currentPageData.heroTitle} 
          subtitle={currentPageData.heroSubtitle} 
          imageKeyword={currentPageData.heroImageKeyword}
        />
        
        <div className="bg-army-950 relative">
          {/* Decorative Divider Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sand-600 to-transparent opacity-50" />
          
          {currentPageData.sections.map((section, index) => (
            <Section key={index} data={section} index={index} />
          ))}
        </div>

        {/* Call to Action (visible on all pages at bottom of content) */}
        <section className="bg-sand-600 py-16 text-army-950 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-multiply"></div>
          <div className="relative z-10 max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-display font-bold uppercase mb-4">Duty Calls</h2>
            <p className="mb-8 font-medium text-lg max-w-2xl mx-auto">The nation needs guardians. If you have the will, we have the way.</p>
            <button 
              onClick={() => handleNavigate('recruitment')}
              className="bg-black text-white px-8 py-3 rounded-sm font-display font-bold uppercase tracking-widest hover:bg-army-900 transition-colors border-2 border-black hover:border-army-800"
            >
              Start Your Journey
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
