
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

  const clips = [
    { id: 1, thumb: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=400&auto=format&fit=crop' },
    { id: 2, thumb: 'https://images.unsplash.com/photo-1542204113-e9354658ef53?q=80&w=400&auto=format&fit=crop' },
    { id: 3, thumb: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=400&auto=format&fit=crop' },
  ];

  const isBook = character.isFamilyCard;
  const charName = language === 'am' ? character.nameAm : character.name;
  const charBio = language === 'am' ? character.bioAm : character.bio;
  const charPublisher = language === 'am' ? (character.publisherAm || character.publisher) : character.publisher;
  const charRole = language === 'am' ? character.roleAm : character.role;

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        
        <div className={`absolute inset-0 lg:inset-[1.5%] lg:rounded-[40px] bg-gradient-to-br ${character.gradient} transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] overflow-hidden select-none">
                <span className="text-[35vw] font-black text-white tracking-tighter uppercase whitespace-nowrap -rotate-6">
                    {isBook ? (language === 'am' ? 'ይግዙ' : 'BUY NOW') : charName}
                </span>
            </div>
        </div>

        <div className="absolute top-0 left-0 right-0 z-[120] flex items-center justify-between p-6 lg:p-12 pointer-events-none">
          <div className="pointer-events-auto flex items-center gap-4 cursor-pointer group" onClick={onBack}>
            <img 
              src="https://littletigersbooks.com/img/logo%20(1).png" 
              alt="Logo" 
              className="h-12 lg:h-20 w-auto object-contain transition-all"
            />
            <span className="text-xl lg:text-3xl font-light text-white/60 ml-2">{isBook ? t.store : t.characterLabel}</span>
          </div>
          
          <div className="flex items-center gap-3 lg:gap-4 pointer-events-auto">
             <button 
              onClick={onBack}
              className="group flex items-center gap-2 px-5 py-2 lg:px-7 lg:py-2.5 bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white font-bold text-sm lg:text-base border border-white/20 transition-all active:scale-95 shadow-xl"
            >
              <span className="text-xl leading-none group-hover:rotate-90 transition-transform">×</span>
              <span>{isBook ? t.backToGallery : t.close}</span>
            </button>
          </div>
        </div>

        <div className="relative flex-1 flex flex-col lg:flex-row h-full">
          
          <div className="w-full lg:w-[45%] h-[45vh] lg:h-full z-[100] flex items-center justify-center p-8 lg:p-16 relative">
            <img 
              src={character.image} 
              alt={charName}
              className={`max-h-[95%] lg:max-h-[110%] w-auto object-contain drop-shadow-[0_80px_100px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-200 will-change-transform float-animation
                ${isVisible ? 'opacity-100 scale-100 lg:scale-[1.2] translate-y-0' : 'opacity-0 scale-90 translate-y-20'}`}
            />
          </div>

          <div className="w-full lg:w-[55%] h-full z-[110] flex flex-col relative overflow-y-auto no-scrollbar pt-[2vh] lg:pt-[12vh]">
            <div className={`px-6 md:px-16 lg:px-12 py-10 lg:py-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              
              <div className="mb-10 lg:mb-14">
                <h2 className={`${isBook ? 'text-[50px] md:text-[80px] lg:text-[100px]' : 'text-[80px] md:text-[120px] lg:text-[160px]'} leading-[0.85] font-black text-white tracking-tighter mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]`}>
                  {charName}
                </h2>
                <div className="h-1.5 w-24 bg-white/40 rounded-full mb-8"></div>
                
                {isBook && (
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-5xl font-black text-white">{character.price}</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg text-white text-xs font-bold uppercase tracking-widest border border-white/20">{language === 'am' ? 'ሃርድኮቨር' : 'Hardcover'}</span>
                  </div>
                )}

                <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-light tracking-wide max-w-2xl">
                  {charBio}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 p-8 lg:p-12 bg-white/5 backdrop-blur-3xl rounded-[32px] lg:rounded-[40px] border border-white/10 mb-12">
                  {isBook ? (
                    <>
                      <div>
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.pages}</div>
                        <div className="text-lg lg:text-2xl font-black text-white">{character.pages} {t.pages}</div>
                      </div>
                      <div>
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.ageRange}</div>
                        <div className="text-lg lg:text-2xl font-black text-white">{character.ageRange}</div>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.publisher}</div>
                        <div className="text-lg lg:text-2xl font-black text-white truncate">{charPublisher}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.artist}</div>
                        <div className="text-lg lg:text-2xl font-black text-white truncate">{character.voiceActor}</div>
                      </div>
                      <div>
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.skill}</div>
                        <div className="text-lg lg:text-2xl font-black text-white">{character.stats.intelligence}/100</div>
                      </div>
                      <div className="col-span-2 md:col-span-1">
                        <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">{t.universe}</div>
                        <div className="text-lg lg:text-2xl font-black text-white">{charRole}</div>
                      </div>
                    </>
                  )}
              </div>

              {isBook ? (
                <div className="flex flex-col gap-6">
                   <button 
                    onClick={() => window.open('https://littletigersbooks.com', '_blank')}
                    className="w-full py-6 md:py-8 bg-white text-black text-2xl md:text-3xl font-black uppercase tracking-[0.1em] rounded-[32px] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_30px_60px_rgba(0,0,0,0.3)] flex items-center justify-center gap-4 group"
                  >
                    <span>{t.addToCart}</span>
                    <svg className="w-8 h-8 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                  <p className="text-center text-white/40 text-sm font-bold uppercase tracking-widest">{t.freeShipping}</p>
                </div>
              ) : (
                <div className="mb-16 lg:mb-24">
                  <div className="flex items-end justify-between border-b border-white/20 pb-4 mb-6">
                    <h4 className="text-white font-black text-xl lg:text-2xl tracking-tighter uppercase">{t.specialClips}</h4>
                    <button className="text-white/60 text-[10px] font-black hover:text-white transition-colors uppercase tracking-[0.2em]">{t.gallery}</button>
                  </div>
                  
                  <div className="flex overflow-x-auto no-scrollbar gap-4 lg:gap-6 pb-6 -mx-2 px-2">
                    {clips.map((clip, i) => (
                      <div 
                        key={clip.id} 
                        className="group relative flex-shrink-0 w-64 md:w-72 aspect-video rounded-[24px] lg:rounded-[32px] overflow-hidden bg-black/30 border border-white/10 cursor-pointer transition-all duration-500 hover:scale-105 hover:border-white/30"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <img src={clip.thumb} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-white/20 backdrop-blur-2xl border border-white/30 flex items-center justify-center text-white transition-all group-hover:scale-110 group-hover:bg-white/40">
                            <svg className="w-6 h-6 fill-current ml-1" viewBox="0 0 20 20">
                              <path d="M6 4l10 6-10 6z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="h-20 lg:h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}