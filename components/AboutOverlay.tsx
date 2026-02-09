
import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';

interface AboutOverlayProps {
  language: Language;
  onClose: () => void;
}

interface AboutSection {
  id: string;
  topic: string;
  title: string;
  content: string;
  image: string;
  stats?: { label: string; value: string }[];
}

const ABOUT_SECTIONS: AboutSection[] = [
  {
    id: 'story',
    topic: 'Our Story',
    title: 'Adventure Starts Here.',
    content: 'Little Tigers is more than just a book series; it\'s a universe designed to inspire curiosity and courage in children everywhere. Born from a passion for storytelling and vibrant illustration, we create characters like Zuzu and Bewiqetu to reflect the diverse and magical world we live in.',
    image: 'https://littletigersbooks.com/img/charactor.jpg',
    stats: [
      { label: 'Global Books', value: '12+' },
      { label: 'Happy Readers', value: '50k' }
    ]
  },
  {
    id: 'art',
    topic: 'The Craft',
    title: 'Art in Every Pixel.',
    content: 'Every illustration is hand-crafted with love, bringing the jungle to life with vibrant colors and rich textures. Our artists spend hundreds of hours ensuring that every strand of fur and every jungle leaf feels tangible and magical.',
    image: 'https://littletigersbooks.com/img/jungle.jpg',
  },
  {
    id: 'mission',
    topic: 'Our Mission',
    title: 'Educate & Inspire.',
    content: 'We believe that stories are the most powerful way to teach. Our books focus on emotional intelligence, problem-solving, and the importance of family bonds, all while keeping children at the edge of their seats.',
    image: 'https://littletigersbooks.com/img/family.png',
  },
  {
    id: 'future',
    topic: 'The Future',
    title: 'Digital Magic.',
    content: 'The journey doesn\'t end with the last page. Through AI-powered studios and interactive web experiences, we are bringing the Little Tigers into the digital age, allowing children to create their own stories and characters.',
    image: 'https://littletigersbooks.com/img/zuzu.png',
  }
];

const AboutOverlay: React.FC<AboutOverlayProps> = ({ language, onClose }) => {
  const t = UI_TRANSLATIONS[language];
  const [activeSection, setActiveSection] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: scrollContainerRef.current,
      threshold: 0.5,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = document.querySelectorAll('.about-section-trigger');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-[300] bg-white flex items-center justify-center p-0 lg:p-8 animate-in zoom-in-95 duration-500">
      <div className="w-full h-full lg:max-w-[1400px] bg-[#f8f9fa] lg:rounded-[60px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl border border-gray-100">
        
        {/* Close Button - Fixed */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 lg:top-10 lg:right-10 z-[100] flex items-center gap-2 lg:gap-3 px-4 lg:px-6 py-2 lg:py-3 bg-black text-white rounded-full font-black text-[10px] lg:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          <span>×</span>
          <span>{t.close}</span>
        </button>

        {/* Top/Sticky Visual (Responsive) */}
        <div className="w-full lg:w-1/2 h-[35vh] lg:h-full bg-gray-900 relative overflow-hidden shrink-0 lg:order-last sticky top-0 lg:relative z-20">
          {ABOUT_SECTIONS.map((section, index) => (
            <div 
              key={`img-${section.id}`}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                activeSection === index 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-110 translate-y-4 pointer-events-none'
              }`}
            >
              <img 
                src={section.image} 
                alt={section.topic}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 lg:bg-black/30"></div>
            </div>
          ))}

          {/* Persistent Overlay Info on Right Side */}
          <div className="absolute bottom-4 left-4 right-4 lg:bottom-12 lg:left-12 lg:right-12 p-4 lg:p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] lg:rounded-[32px] text-white z-20 transition-all duration-700">
            <h3 className="text-lg lg:text-2xl font-black mb-1">The Magic Studio</h3>
            <p className="text-white/80 text-[10px] lg:text-sm leading-relaxed max-w-md uppercase font-bold tracking-widest">
              Topic: <span className="text-orange-400 ml-2">{ABOUT_SECTIONS[activeSection].topic}</span>
            </p>
          </div>
        </div>

        {/* Left Side: Scrollable Text Narrative */}
        <div 
          ref={scrollContainerRef}
          className="flex-1 overflow-y-auto no-scrollbar snap-y snap-mandatory relative z-10 lg:w-1/2"
        >
          {ABOUT_SECTIONS.map((section, index) => (
            <div 
              key={section.id}
              data-index={index}
              className="about-section-trigger min-h-[65vh] lg:min-h-screen snap-start flex flex-col justify-center px-6 md:px-16 lg:px-24 py-16 lg:py-24"
            >
              <span className="text-orange-500 font-black text-[10px] lg:text-xs uppercase tracking-[0.4em] mb-4 lg:mb-6 block">
                {section.topic}
              </span>
              <h2 className="text-[32px] md:text-[60px] lg:text-[90px] leading-[1] lg:leading-[0.9] font-black text-black tracking-tighter mb-6 lg:mb-10">
                {section.title}
              </h2>
              <div className="h-1 lg:h-1.5 w-12 lg:w-20 bg-orange-500 rounded-full mb-8 lg:mb-12"></div>
              
              <div className="space-y-6 lg:space-y-8 max-w-xl pr-4">
                <p className="text-gray-500 text-lg md:text-2xl leading-relaxed font-medium">
                  {section.content}
                </p>
                
                {section.stats && (
                  <div className="grid grid-cols-2 gap-4 lg:gap-8 pt-4 lg:pt-8">
                    {section.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="block text-black font-black text-2xl lg:text-4xl mb-1">{stat.value}</span>
                        <span className="text-gray-400 text-[8px] lg:text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
