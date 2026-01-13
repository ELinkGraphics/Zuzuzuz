
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-6 md:py-10 w-full max-w-[1600px] mx-auto z-50">
      <div className="flex items-center shrink-0">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#444] tracking-tight">Characters</h1>
      </div>
      
      <div className="flex-1 flex justify-center max-w-xl mx-8">
        <div className="w-full relative">
          <input 
            type="text" 
            placeholder="Search characters..." 
            className="w-full h-12 px-12 rounded-full bg-[#f2f2f2] border-none focus:ring-0 transition-all text-base text-gray-800 placeholder-gray-400"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-6 shrink-0">
        <button className="text-xs font-black uppercase tracking-[0.1em] text-gray-900 hover:opacity-70 transition-all">MENU</button>
        <div className="grid grid-cols-2 gap-1 cursor-pointer">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-1 md:w-1 h-1 md:h-1 bg-black rounded-[1px]"></div>)}
        </div>
      </div>
    </header>
  );
};

export default Header;
