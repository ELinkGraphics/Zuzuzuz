
import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  isActive: boolean;
  onClick: (character: Character) => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, isActive, onClick }) => {
  return (
    <div 
      onClick={() => onClick(character)}
      className={`relative cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex-shrink-0 
        ${isActive ? 'scale-100' : 'opacity-40 scale-[0.85] blur-[0.5px]'}`}
      style={{ 
        height: 'min(520px, 70vh)',
        width: '100%'
      }}
    >
      {/* 3D Character Image */}
      <div className={`absolute top-0 left-0 w-full h-full flex justify-center pointer-events-none z-20 transition-transform duration-700 ${isActive ? 'translate-x-[15%]' : 'translate-x-0'}`}>
        <img 
          src={character.image} 
          alt={character.name}
          className={`h-[110%] w-auto object-contain transition-all duration-1000 will-change-transform float-animation
            ${isActive 
              ? 'translate-y-[-22%] drop-shadow-[0_45px_45px_rgba(0,0,0,0.45)]' 
              : 'translate-y-[-15%] drop-shadow-[0_20px_20px_rgba(0,0,0,0.1)] opacity-80'}`}
        />
      </div>

      {/* Card Background */}
      <div className={`absolute bottom-0 left-0 w-full rounded-[40px] md:rounded-[50px] bg-gradient-to-b ${character.gradient} shadow-2xl overflow-hidden transition-all duration-700
        ${isActive ? 'h-[75%]' : 'h-[65%]'}`}
      >
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 text-white select-none z-30">
          <h2 className={`font-black tracking-tighter mb-1 drop-shadow-md transition-all duration-500 ${isActive ? 'text-4xl md:text-6xl' : 'text-2xl'}`}>
            {character.name}
          </h2>
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80">
            <span>Source</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            <span>{character.role.replace('Movie ', '')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
