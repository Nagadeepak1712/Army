import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-army-800 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-sand-500 mr-2" />
              <span className="text-white font-display font-bold text-xl uppercase tracking-wider">Sentinel Force</span>
            </div>
            <p className="mb-4 max-w-sm">
              Dedicated to the protection of national sovereignty and the preservation of peace. Our mission is unwavering, our resolve absolute.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sand-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-sand-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-sand-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-gray-400 hover:text-sand-500 transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-sand-500 transition-colors">Recruitment</a></li>
              <li><a href="#" className="hover:text-sand-500 transition-colors">Tenders</a></li>
              <li><a href="#" className="hover:text-sand-500 transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-sand-500 transition-colors">Sitemap</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display font-bold uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Ministry of Defence</li>
              <li>Gate 4, Capital District</li>
              <li>Phone: 1800-SENTINEL</li>
              <li>Email: info@sentinel.mil</li>
            </ul>
          </div>
          
        </div>
        <div className="border-t border-army-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; 2024 Sentinel Force. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
