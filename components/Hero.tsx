import React from 'react';
import { getImagePath } from '../imageMap';

interface HeroProps {
  title: string;
  subtitle: string;
  imageKeyword: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, imageKeyword }) => {
  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center bg-army-950">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{
          backgroundImage: `url('${getImagePath(imageKeyword)}')`,
          filter: 'grayscale(30%) contrast(110%)'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-army-950 via-army-900/60 to-transparent" />
      <div className="absolute inset-0 bg-black/30" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block mb-4 px-3 py-1 border border-sand-500/30 bg-black/40 backdrop-blur-sm rounded-sm">
          <span className="text-sand-500 font-display text-sm tracking-[0.3em] uppercase">{subtitle}</span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white uppercase tracking-wider drop-shadow-2xl mb-6">
          {title}
        </h1>
        <div className="h-1 w-24 bg-sand-600 mx-auto rounded-full" />
      </div>
    </div>
  );
};

export default Hero;
