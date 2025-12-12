import React from 'react';
import { ContentSection } from '../types';
import { Target, CheckCircle2 } from 'lucide-react';
import { getImagePath } from '../imageMap';

interface SectionProps {
  data: ContentSection;
  index: number;
}

const Section: React.FC<SectionProps> = ({ data, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-16 md:py-24 ${isEven ? 'bg-army-950' : 'bg-army-900'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>

          <div className="w-full lg:w-1/2 space-y-6">
            <div className="flex items-center space-x-2 mb-2">
              <Target className="text-sand-600 h-5 w-5" />
              <span className="text-army-400 font-display uppercase tracking-widest text-sm">
                Section 0{index + 1}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase tracking-wide">
              {data.title}
            </h2>

            <p className="text-lg text-gray-400 leading-relaxed">
              {data.content}
            </p>

            {data.listItems && (
              <ul className="space-y-3 mt-4">
                {data.listItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-gray-300">
                    <CheckCircle2 className="h-6 w-6 text-sand-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            {data.imageKeyword ? (
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-sand-600/20 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <div className="relative h-64 md:h-96 w-full overflow-hidden bg-army-800 rounded-sm">
                  <img
                    src={getImagePath(data.imageKeyword!)}
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 contrast-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            ) : (
              <div className="h-64 md:h-96 w-full bg-army-800/50 border border-army-700 p-8 flex flex-col justify-center items-center text-center relative overflow-hidden group">
                {/* Decorative background pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sand-500 via-transparent to-transparent" />
                <ShieldIcon />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

const ShieldIcon = () => (
  <svg className="w-32 h-32 text-army-700/50" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export default Section;
