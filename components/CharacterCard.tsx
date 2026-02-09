
import React from 'react';
import { Character, Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  language: Language;
  onClick: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isActive, language, onClick }) => {
  const t = UI_TRANSLATIONS[language];
  const charName = language === 'am' ? character.nameAm : character.name;
  const charRole = language === 'am' ? character.roleAm : character.role;

  // Family/Book Card
  if (character.isFamilyCard) {
    return (
      <div 
        onClick={() => onClick(character)}
        className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 
          ${isActive ? 'scale-100' : 'opacity-40 scale-[0.85]'}`}
        style={{ 
          height: 'min(450px, 60vh)',
          width: '100%'
        }}
      >
        <div 
          className="absolute inset-0 rounded-[30px] md:rounded-[50px] shadow-2xl overflow-hidden transition-all duration-700 flex flex-col border-[3px] md:border-4 border-white"
          style={{ 
            backgroundImage: 'url("https://littletigersbooks.com/img/jungle.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none"></div>
          <div className="h-6 md:h-10 pointer-events-none"></div>

          <div className="flex-1 w-full px-4 md:px-6 flex items-center justify-center z-10 relative">
            <img 
              src={character.image} 
              alt="Family Photo"
              className="w-full h-full object-contain scale-[1.3] md:scale-[1.25] drop-shadow-[0_25px_60px_rgba(0,0,0,0.6)] transition-all duration-1000 float-animation"
            />
          </div>
          
          <div className="p-4 md:p-6 pt-0 flex justify-center relative z-50">
             <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(character);
                }}
                className="w-full py-3 md:py-4 bg-[#3a86ff] text-white text-sm md:text-base font-black uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl border-2 border-white/40"
              >
                {t.buyBook}
              </button>
          </div>
        </div>
      </div>
    );
  }

  // Standard Character Card
  return (
    <div 
      onClick={() => onClick(character)}
      className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 
        ${isActive ? 'scale-100' : 'opacity-40 scale-[0.85]'}`}
      style={{ 
        height: 'min(450px, 60vh)',
        width: '100%'
      }}
    >
      <div className={`absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none z-20 transition-transform duration-700 ${isActive ? 'translate-x-[10%] md:translate-x-[15%]' : 'translate-x-0'}`}>
        <img 
          src={character.image} 
          alt={charName}
          className={`h-[110%] md:h-[115%] w-auto object-contain transition-all duration-1000 will-change-transform float-animation
            ${isActive 
              ? 'translate-y-[-20%] md:translate-y-[-28%] drop-shadow-[0_45px_45px_rgba(0,0,0,0.35)]' 
              : 'translate-y-[-10%] opacity-80'}`}
        />
      </div>

      <div className={`absolute bottom-0 left-0 w-full rounded-[30px] md:rounded-[50px] bg-gradient-to-b ${character.gradient} shadow-2xl overflow-hidden transition-all duration-700
        ${isActive ? 'h-[75%] md:h-[80%]' : 'h-[65%] md:h-[70%]'}`}
      >
        <div className="absolute inset-0 bg-black/5 mix-blend-overlay"></div>
        <div className="absolute top-0 left-0 w-24 h-24 bg-black/10 -translate-x-12 -translate-y-12 rounded-full"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-black/10 translate-x-12 -translate-y-12 rounded-full"></div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 text-white select-none z-30">
          <h2 className={`font-black tracking-tighter mb-1 md:mb-2 transition-all duration-500 leading-[0.9] ${isActive ? 'text-4xl sm:text-5xl md:text-7xl' : 'text-2xl md:text-3xl'}`}>
            {charName}
          </h2>
          <div className="flex items-center gap-2 text-[8px] md:text-xs font-black tracking-widest uppercase opacity-80">
            <span>{t.source}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white opacity-40"></span>
            <span>{charRole.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
