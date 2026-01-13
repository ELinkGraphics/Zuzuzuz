
import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isActive, onClick }) => {
  if (character.isFamilyCard) {
    return (
      <div 
        onClick={() => onClick(character)}
        className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 
          ${isActive ? 'scale-100' : 'opacity-40 scale-[0.85]'}`}
        style={{ 
          height: 'min(500px, 65vh)',
          width: '100%'
        }}
      >
        <div 
          className="absolute inset-0 rounded-[50px] shadow-2xl overflow-hidden transition-all duration-700 flex flex-col border-4 border-white"
          style={{ 
            backgroundImage: 'url("https://littletigersbooks.com/img/jungle.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Subtle dark gradient for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>

          {/* Button Container: Top-aligned */}
          <div className="p-6 pb-0 flex justify-center z-20">
             <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(character);
                }}
                className="w-full py-4 bg-[#3a86ff] text-white font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl border-2 border-white/40"
              >
                Buy the Book
              </button>
          </div>

          {/* Image Container: Expanded height and scaled up to reach the user's line */}
          <div className="flex-1 w-full px-4 md:px-6 flex items-center justify-center z-10 relative -mt-6">
            <img 
              src={character.image} 
              alt="Family Photo"
              className="w-full h-full object-contain scale-[1.15] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-1000 float-animation"
            />
          </div>
          
          {/* Minimal spacer at bottom */}
          <div className="h-10 pointer-events-none"></div>
        </div>
      </div>
    );
  }

  return (
    <div 
      onClick={() => onClick(character)}
      className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 
        ${isActive ? 'scale-100' : 'opacity-40 scale-[0.85]'}`}
      style={{ 
        height: 'min(500px, 65vh)',
        width: '100%'
      }}
    >
      {/* Character Image */}
      <div className={`absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none z-20 transition-transform duration-700 ${isActive ? 'translate-x-[15%]' : 'translate-x-0'}`}>
        <img 
          src={character.image} 
          alt={character.name}
          className={`h-[115%] w-auto object-contain transition-all duration-1000 will-change-transform float-animation
            ${isActive 
              ? 'translate-y-[-28%] drop-shadow-[0_45px_45px_rgba(0,0,0,0.35)]' 
              : 'translate-y-[-15%] opacity-80'}`}
        />
      </div>

      {/* Card Background */}
      <div className={`absolute bottom-0 left-0 w-full rounded-[50px] bg-gradient-to-b ${character.gradient} shadow-2xl overflow-hidden transition-all duration-700
        ${isActive ? 'h-[80%]' : 'h-[70%]'}`}
      >
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-black/10 -translate-x-12 -translate-y-12 rounded-full"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-black/10 translate-x-12 -translate-y-12 rounded-full"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-10 text-white select-none z-30">
          <h2 className={`font-black tracking-tighter mb-2 transition-all duration-500 leading-[0.9] ${isActive ? 'text-6xl md:text-7xl' : 'text-3xl'}`}>
            {character.name}
          </h2>
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-black tracking-widest uppercase opacity-80">
            <span>SOURCE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></span>
            <span>{character.role.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
