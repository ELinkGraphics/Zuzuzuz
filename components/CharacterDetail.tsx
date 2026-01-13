
import React, { useState, useEffect } from 'react';
import { Character, Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';

interface CharacterDetailProps {
  character: Character;
  language: Language;
  onBack: () => void;
}

export default function CharacterDetail({ character, language, onBack }: CharacterDetailProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    document.body.style.overflow = 'hidden';
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isBook = character.isFamilyCard;
  const charName = language === 'am' ? character.nameAm : character.name;
  const charBio = language === 'am' ? character.bioAm : character.bio;
  const charRole = language === 'am' ? character.roleAm : character.role;

  // Extract color from gradient for solid background feel if needed
  // Example: from-[#ff4b5c] -> #ff4b5c
  const bgColorClass = character.gradient.split(' ')[0].replace('from-[', '').replace(']', '');

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex items-center justify-center p-4 lg:p-8 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Main Card Container */}
      <div 
        className={`relative w-full h-full max-w-[1400px] max-h-[800px] rounded-[60px] overflow-hidden shadow-2xl transition-all duration-1000 ease-out flex flex-col lg:flex-row ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        style={{ backgroundColor: bgColorClass || '#ff4b5c' }}
      >
        
        {/* Giant Watermark Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none z-0">
          <span className="text-[40vw] font-black text-black/10 tracking-tighter uppercase whitespace-nowrap transform -translate-x-1/4">
            {charName}
          </span>
        </div>

        {/* Header Bar */}
        <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-8 lg:p-12 pointer-events-none">
          <div className="flex flex-col">
            <span className="text-white/60 text-lg lg:text-2xl font-medium tracking-tight">
              {isBook ? t.store : t.characterLabel}
            </span>
          </div>
          
          <div className="pointer-events-auto">
            <button 
              onClick={onBack}
              className="group flex items-center gap-3 px-6 py-3 bg-black/20 hover:bg-black/40 backdrop-blur-2xl rounded-full text-white font-bold text-sm lg:text-base border border-white/10 transition-all active:scale-95 shadow-xl"
            >
              <span className="text-xl leading-none">×</span>
              <span>{isBook ? t.backToGallery : t.close}</span>
            </button>
          </div>
        </div>

        {/* Content Layout */}
        <div className="relative flex-1 flex flex-col lg:flex-row h-full z-10">
          
          {/* Left Side: Character Visual */}
          <div className="w-full lg:w-1/2 h-[50%] lg:h-full flex items-center justify-center p-12 relative">
            <img 
              src={character.image} 
              alt={charName}
              className={`max-h-[110%] w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.4)] transition-all duration-1000 delay-200 will-change-transform float-animation
                ${isVisible ? 'opacity-100 scale-110 translate-x-0' : 'opacity-0 scale-90 -translate-x-20'}`}
            />
          </div>

          {/* Right Side: Information */}
          <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-12 lg:pr-24 pb-12 lg:pb-0">
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-[100px] md:text-[140px] lg:text-[180px] leading-[0.8] font-black text-white tracking-tighter mb-4 drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)]">
                {charName}
              </h2>
              
              <div className="h-1.5 w-20 bg-white/60 rounded-full mb-10"></div>
              
              <div className="max-w-xl">
                <p className="text-white text-xl md:text-2xl lg:text-3xl leading-snug font-normal tracking-tight mb-10 opacity-90">
                  {charBio}
                </p>

                {/* Stats or Quick Info */}
                <div className="flex flex-wrap gap-8 text-white">
                   {!isBook && (
                     <>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">{t.skill}</span>
                        <span className="text-2xl font-black">{character.stats.intelligence}%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">{t.universe}</span>
                        <span className="text-2xl font-black">{charRole}</span>
                      </div>
                     </>
                   )}
                   {isBook && (
                     <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-black opacity-50 mb-1">Price</span>
                        <span className="text-4xl font-black">{character.price}</span>
                      </div>
                   )}
                </div>

                {isBook && (
                  <button 
                    onClick={() => window.open('https://littletigersbooks.com', '_blank')}
                    className="mt-12 px-12 py-6 bg-white text-black text-2xl font-black uppercase tracking-widest rounded-3xl hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center gap-4"
                  >
                    {t.buyBook}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
