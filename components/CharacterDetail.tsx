
import React, { useState, useEffect } from 'react';
import { Character } from '../types';

interface CharacterDetailProps {
  character: Character;
  onBack: () => void;
}

export default function CharacterDetail({ character, onBack }: CharacterDetailProps) {
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Immersive Layout Container */}
      <div className="flex-1 flex flex-col lg:flex-row relative overflow-hidden">
        
        {/* Dynamic Background Container */}
        <div className={`absolute inset-0 lg:inset-[1.5%] lg:rounded-[40px] bg-gradient-to-br ${character.gradient} transition-all duration-1000 ease-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {/* Massive Background Accent Name */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] overflow-hidden select-none">
                <span className="text-[35vw] font-black text-white tracking-tighter uppercase whitespace-nowrap -rotate-6">
                    {character.name}
                </span>
            </div>
        </div>

        {/* Global Controls Over Background */}
        <div className="absolute top-0 left-0 right-0 z-[120] flex items-center justify-between p-6 lg:p-12 pointer-events-none">
          {/* Logo Section */}
          <div className="pointer-events-auto flex items-center gap-4 cursor-pointer group" onClick={onBack}>
            <img 
              src="https://littletigersbooks.com/img/logo%20(1).png" 
              alt="Logo" 
              className="h-12 lg:h-20 w-auto object-contain transition-all"
            />
            <span className="text-xl lg:text-3xl font-light text-white/60 ml-2">Character</span>
          </div>
          
          {/* Top Right Actions */}
          <div className="flex items-center gap-3 lg:gap-4 pointer-events-auto">
             <button 
              onClick={onBack}
              className="group flex items-center gap-2 px-5 py-2 lg:px-7 lg:py-2.5 bg-white/10 hover:bg-white/30 backdrop-blur-xl rounded-full text-white font-bold text-sm lg:text-base border border-white/20 transition-all active:scale-95 shadow-xl"
            >
              <span className="text-xl leading-none group-hover:rotate-90 transition-transform">×</span>
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* Content Section: Split Hero Image & Scrolling Info */}
        <div className="relative flex-1 flex flex-col lg:flex-row h-full">
          
          {/* LEFT: Hero Character Image */}
          <div className="w-full lg:w-[45%] h-[40vh] lg:h-full z-[100] flex items-center justify-center p-8 lg:p-16 relative">
            <img 
              src={character.image} 
              alt={character.name}
              className={`max-h-[95%] lg:max-h-[110%] w-auto object-contain drop-shadow-[0_80px_100px_rgba(0,0,0,0.5)] transition-all duration-1000 delay-200 will-change-transform float-animation
                ${isVisible ? 'opacity-100 scale-100 lg:scale-[1.25] translate-y-0' : 'opacity-0 scale-90 translate-y-20'}`}
            />
          </div>

          {/* RIGHT: Scrolling Content Area */}
          <div className="w-full lg:w-[55%] h-full z-[110] flex flex-col relative overflow-y-auto no-scrollbar pt-[5vh] lg:pt-[12vh]">
            <div className={`px-6 md:px-16 lg:px-12 py-10 lg:py-16 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              
              {/* Header Text Group */}
              <div className="mb-10 lg:mb-14">
                <h2 className="text-[80px] md:text-[120px] lg:text-[160px] leading-[0.75] font-black text-white tracking-tighter mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
                  {character.name}
                </h2>
                <div className="h-1.5 w-24 bg-white/40 rounded-full mb-8"></div>
                <p className="text-white/90 text-lg md:text-2xl leading-relaxed font-light tracking-wide max-w-2xl">
                  {character.bio}
                </p>
              </div>

              {/* Special Clips Section */}
              <div className="mb-16 lg:mb-24">
                <div className="flex items-end justify-between border-b border-white/20 pb-4 mb-6">
                  <h4 className="text-white font-black text-xl lg:text-2xl tracking-tighter uppercase">Special Clips</h4>
                  <button className="text-white/60 text-[10px] font-black hover:text-white transition-colors uppercase tracking-[0.2em]">Gallery</button>
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

              {/* Stats & Metadata Footer */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 p-8 lg:p-12 bg-white/5 backdrop-blur-3xl rounded-[32px] lg:rounded-[40px] border border-white/10 mb-10">
                  <div>
                      <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">Artist</div>
                      <div className="text-lg lg:text-2xl font-black text-white truncate">{character.voiceActor}</div>
                  </div>
                  <div>
                      <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">Skill</div>
                      <div className="text-lg lg:text-2xl font-black text-white">{character.stats.intelligence}/100</div>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                      <div className="text-[10px] lg:text-[11px] uppercase opacity-50 mb-3 font-black text-white tracking-[0.2em]">Universe</div>
                      <div className="text-lg lg:text-2xl font-black text-white">{character.role}</div>
                  </div>
              </div>
              
              {/* Extra Padding for scrollability */}
              <div className="h-20 lg:h-32"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
