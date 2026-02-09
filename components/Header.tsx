
import React from 'react';
import { UI_TRANSLATIONS } from '../translations';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
}

const Header: React.FC<HeaderProps> = ({ language }) => {
  const t = UI_TRANSLATIONS[language];
  
  return (
    <header className="flex items-center justify-between px-4 md:px-12 py-3 md:py-8 w-full max-w-[1600px] mx-auto z-50 pointer-events-auto">
      <div className="flex items-center shrink-0">
        <h1 className="text-lg md:text-3xl lg:text-4xl font-semibold text-[#444] tracking-tight">{t.characters}</h1>
      </div>
      
      <div className="flex-1 flex justify-center mx-3 md:mx-8">
        <div className="w-full max-w-[200px] md:max-w-md relative group">
          <input 
            type="text" 
            placeholder={t.search}
            className="w-full h-9 md:h-12 pl-9 md:pl-12 pr-4 rounded-full bg-[#f2f2f2] border-none focus:ring-2 focus:ring-black/5 transition-all text-xs md:text-base text-gray-800 placeholder-gray-400 shadow-sm group-hover:shadow-md"
          />
          <svg className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-6 shrink-0">
        <button className="hidden sm:block text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-gray-900 hover:opacity-70 transition-all">{t.menu}</button>
        <button className="grid grid-cols-2 gap-[3px] md:gap-1 cursor-pointer p-2 md:p-3 hover:bg-gray-100 rounded-full transition-colors active:scale-95">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-[1px]"></div>)}
        </button>
      </div>
    </header>
  );
};

export default Header;
