
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-6 md:py-10 w-full max-w-[1400px] mx-auto z-50">
      <div className="flex items-center gap-3 md:gap-5 shrink-0">
        <img 
          src="https://littletigersbooks.com/img/logo%20(1).png" 
          alt="Logo" 
          className="h-16 md:h-24 lg:h-28 w-auto object-contain transition-all duration-300"
        />
        <span className="text-xl md:text-3xl font-medium text-gray-600 hidden sm:inline ml-2">Characters</span>
      </div>
      
      <div className="flex-1 flex justify-center max-w-sm lg:max-w-xl mx-4 md:mx-8">
        <div className="w-full relative group">
          <input 
            type="text" 
            placeholder="Search characters..." 
            className="w-full h-10 md:h-12 pl-10 md:pl-12 pr-4 rounded-full bg-gray-100 border-2 border-transparent focus:border-gray-200 focus:bg-white transition-all text-sm md:text-base text-gray-900 placeholder-gray-500 shadow-sm"
          />
          <svg className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8 shrink-0">
        <button className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-900 hover:text-rose-500 transition-all">Menu</button>
        <div className="grid grid-cols-2 gap-1 cursor-pointer hover:rotate-90 transition-transform duration-500">
          {[1, 2, 3, 4].map(i => <div key={i} className="w-1 md:w-1.5 h-1 md:h-1.5 bg-black rounded-full"></div>)}
        </div>
      </div>
    </header>
  );
};

export default Header;
