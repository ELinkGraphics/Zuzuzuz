
import React from 'react';
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';

interface SocialOverlayProps {
  language: Language;
  onClose: () => void;
}

const SocialOverlay: React.FC<SocialOverlayProps> = ({ language, onClose }) => {
  const t = UI_TRANSLATIONS[language];

  const socialLinks = [
    { 
      name: 'Instagram', 
      handle: '@littletigersbooks', 
      icon: 'https://littletigersbooks.com/img/instagrampng.png', 
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' 
    },
    { 
      name: 'TikTok', 
      handle: '@littletigers', 
      icon: 'https://littletigersbooks.com/img/tiktokpng.png', 
      color: 'bg-black' 
    },
    { 
      name: 'YouTube', 
      handle: 'Little Tigers TV', 
      icon: 'https://littletigersbooks.com/img/youtubepng.png', 
      color: 'bg-[#ff0000]' 
    },
    { 
      name: 'Facebook', 
      handle: 'Little Tigers Kids', 
      icon: 'https://littletigersbooks.com/img/facebookpng.png', 
      color: 'bg-[#1877f2]' 
    },
  ];

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 animate-in fade-in duration-500 overflow-hidden">
      {/* Immersive Background Image with Slow Zoom Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[20s] scale-110"
        style={{ 
          backgroundImage: 'url("https://littletigersbooks.com/img/socialback.jpg")',
          animation: 'slowZoomSocial 40s linear infinite alternate'
        }}
      />
      
      {/* Dark Glass Overlay for Depth and Contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Main Content Card */}
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[40px] md:rounded-[60px] p-8 md:p-12 relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] animate-in zoom-in-95 duration-700">
        
        {/* Floating Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/30 text-white transition-all text-2xl font-light border border-white/10 z-50 backdrop-blur-xl active:scale-90"
        >
          ×
        </button>

        <div className="mb-12 relative">
          <span className="text-orange-400 font-black text-xs uppercase tracking-[0.4em] mb-4 block">The Pride Online</span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 drop-shadow-lg">
            Connect <br/> with Us
          </h2>
          <div className="h-1 w-16 bg-white/20 rounded-full mb-6"></div>
          <p className="text-white/70 text-lg font-medium leading-relaxed max-w-md">
            Join the Little Tigers pride across the web for daily adventures, art reveals, and storytelling magic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href="#"
              className="group relative flex items-center gap-6 p-6 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/20 hover:border-white/40 transition-all hover:scale-[1.02] active:scale-95 overflow-hidden"
            >
              {/* Subtle hover background glow using the brand color */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${social.color}`}></div>
              
              {/* White Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-2xl group-hover:rotate-12 transition-transform duration-500 shrink-0 relative z-10 p-3">
                <img 
                  src={social.icon} 
                  alt={social.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="relative z-10">
                <h3 className="text-white font-black text-xl leading-none mb-1">{social.name}</h3>
                <p className="text-white/40 text-xs font-black uppercase tracking-widest">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer Meta */}
        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-white/30 text-[9px] font-black uppercase tracking-[0.3em]">
          <span>© 2024 Little Tigers</span>
          <span className="hidden sm:inline">Made with Magic</span>
          <span>Digital Pride Studio</span>
        </div>
      </div>

      <style>{`
        @keyframes slowZoomSocial {
          0% { transform: scale(1.1); }
          100% { transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default SocialOverlay;
