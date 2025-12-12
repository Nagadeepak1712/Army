import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, ChevronRight } from 'lucide-react';
import { PageId } from '../types';
import { PAGES } from '../data';

interface NavigationProps {
  onNavigate: (page: PageId) => void;
  currentPage: PageId;
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo(0, 0);
  };

  const navLinks = Object.values(PAGES);

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-army-950/95 backdrop-blur-md shadow-lg border-b border-army-700' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
              <Shield className="h-8 w-8 text-sand-500 mr-2" />
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-xl tracking-wider uppercase">ZSOS Army Hub</span>
                <span className="text-sand-500 text-xs tracking-[0.2em] uppercase">Army • Navy • Airforce</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['home', 'about', 'missions', 'recruitment', 'contact'].map((key) => (
                  <button
                    key={key}
                    onClick={() => handleNavClick(key as PageId)}
                    className={`${currentPage === key ? 'text-sand-500 border-b-2 border-sand-500' : 'text-gray-300 hover:text-white'} px-3 py-2 text-sm font-display font-medium uppercase tracking-wide transition-colors`}
                  >
                    {PAGES[key as PageId].title}
                  </button>
                ))}
                <button 
                  onClick={() => setIsOpen(true)}
                  className="bg-sand-600 hover:bg-sand-500 text-army-950 px-4 py-2 rounded-sm font-display font-bold uppercase tracking-wider text-sm transition-colors"
                >
                  Menu
                </button>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-army-800 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Menu Drawer */}
      <div className={`fixed inset-0 z-50 bg-army-950/98 backdrop-blur-xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-army-800">
             <div className="flex items-center">
              <Shield className="h-8 w-8 text-sand-500 mr-2" />
              <span className="text-white font-display font-bold text-2xl uppercase tracking-wider">Directory</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 text-gray-400 hover:text-white">
              <X className="h-8 w-8" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {navLinks.map((page) => (
                <button
                  key={page.id}
                  onClick={() => handleNavClick(page.id as PageId)}
                  className={`flex items-center justify-between p-4 rounded bg-army-900/50 hover:bg-army-800 border border-army-800 hover:border-sand-500/50 transition-all group text-left`}
                >
                  <span className={`font-display text-lg uppercase tracking-wide ${currentPage === page.id ? 'text-sand-500' : 'text-gray-200 group-hover:text-white'}`}>
                    {page.title}
                  </span>
                  <ChevronRight className={`h-5 w-5 ${currentPage === page.id ? 'text-sand-500' : 'text-army-600 group-hover:text-sand-500'}`} />
                </button>
              ))}
            </div>
          </div>
          
          <div className="p-6 border-t border-army-800 bg-army-900">
            <div className="text-center">
              <p className="text-sand-600 font-display text-sm uppercase tracking-widest">Duty • Honor • Country</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;