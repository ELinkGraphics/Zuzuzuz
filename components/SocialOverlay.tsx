
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
    { name: 'Instagram', handle: '@littletigersbooks', icon: '📸', color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' },
    { name: 'TikTok', handle: '@littletigers', icon: '🎵', color: 'bg-black' },
    { name: 'YouTube', handle: 'Little Tigers TV', icon: '📺', color: 'bg-[#ff0000]' },
    { name: 'Facebook', handle: 'Little Tigers Kids', icon: '👥', color: 'bg-[#1877f2]' },
  ];

  return (
    <div className="fixed inset-0 z-[300] bg-black/80 backdrop-blur-3xl flex items-center justify-center p-6 animate-in fade-in duration-500">
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-[60px] p-12 relative overflow-hidden shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-2xl font-light"
        >
          ×
        </button>

        <div className="mb-12">
          <h2 className="text-5xl font-black text-white tracking-tighter mb-4">Connect with Us</h2>
          <p className="text-white/60 text-lg">Follow the Little Tigers pride across the web for daily adventures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {socialLinks.map((social) => (
            <a 
              key={social.name}
              href="#"
              className="group relative flex items-center gap-6 p-6 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover:scale-[1.02]"
            >
              <div className={`w-16 h-16 rounded-2xl ${social.color} flex items-center justify-center text-3xl shadow-lg group-hover:rotate-12 transition-transform`}>
                {social.icon}
              </div>
              <div>
                <h3 className="text-white font-black text-xl">{social.name}</h3>
                <p className="text-white/40 text-sm font-medium">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex justify-between items-center text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">
          <span>© 2024 Little Tigers</span>
          <span>Digital Pride Studio</span>
        </div>
      </div>
    </div>
  );
};

export default SocialOverlay;
