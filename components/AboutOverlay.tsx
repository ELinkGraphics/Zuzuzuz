
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
      threshold: 0.6,
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
    <div className="fixed inset-0 z-[300] bg-white flex items-center justify-center p-0 md:p-4 lg:p-8 animate-in zoom-in-95 duration-500">
      <div className="w-full h-full max-w-[1400px] bg-[#f8f9fa] md:rounded-[60px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl border border-gray-100">
        
        {/* Close Button - Fixed */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 lg:top-10 lg:right-10 z-[100] flex items-center gap-3 px-6 py-3 bg-black text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl"
        >
          <span>×</span>
          <span>{t.close}</span>
        </button>

        {/* Left Side: Scrollable Text Narrative */}
        <div 
          ref={scrollContainerRef}
          className="w-full lg:w-1/2 h-full overflow-y-auto no-scrollbar snap-y snap-mandatory relative z-10"
        >
          {ABOUT_SECTIONS.map((section, index) => (
            <div 
              key={section.id}
              data-index={index}
              className="about-section-trigger min-h-screen snap-start flex flex-col justify-center px-8 md:px-16 lg:px-24 py-24"
            >
              <span className="text-orange-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">
                {section.topic}
              </span>
              <h2 className="text-[48px] md:text-[70px] lg:text-[90px] leading-[0.9] font-black text-black tracking-tighter mb-10">
                {section.title}
              </h2>
              <div className="h-1.5 w-20 bg-orange-500 rounded-full mb-12"></div>
              
              <div className="space-y-8 max-w-xl pr-4">
                <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-medium">
                  {section.content}
                </p>
                
                {section.stats && (
                  <div className="grid grid-cols-2 gap-8 pt-8">
                    {section.stats.map((stat) => (
                      <div key={stat.label}>
                        <span className="block text-black font-black text-4xl mb-2">{stat.value}</span>
                        <span className="text-gray-400 text-xs font-bold uppercase tracking-widest">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Mobile Only: Inline Image (optional, but let's keep it purely synced with the side for now) */}
            </div>
          ))}
        </div>

        {/* Right Side: Sticky Visuals with Transitions */}
        <div className="w-full lg:w-1/2 h-[300px] lg:h-full bg-gray-900 relative overflow-hidden group shrink-0 order-first lg:order-last">
          {ABOUT_SECTIONS.map((section, index) => (
            <div 
              key={`img-${section.id}`}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                activeSection === index 
                  ? 'opacity-100 scale-100 translate-y-0' 
                  : 'opacity-0 scale-110 translate-y-10 pointer-events-none'
              }`}
            >
              <img 
                src={section.image} 
                alt={section.topic}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          ))}

          {/* Persistent Overlay Info on Right Side */}
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 p-6 lg:p-8 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[24px] lg:rounded-[32px] text-white z-20 transition-all duration-700">
            <h3 className="text-xl lg:text-2xl font-black mb-2">The Magic Studio</h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-md">
              Current Topic: <span className="text-orange-400 uppercase font-black tracking-widest ml-2">{ABOUT_SECTIONS[activeSection].topic}</span>
            </p>
          </div>

          {/* Background Decorative Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden opacity-10">
            <span className="text-[20vw] font-black text-white tracking-tighter uppercase whitespace-nowrap">
              {ABOUT_SECTIONS[activeSection].topic.split(' ')[0]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOverlay;
