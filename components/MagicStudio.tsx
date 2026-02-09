
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';
import { UI_TRANSLATIONS } from '../translations';
import { LOADING_MESSAGES } from '../constants';

interface MagicStudioProps {
  language: Language;
  onClose: () => void;
}

const MagicStudio: React.FC<MagicStudioProps> = ({ language, onClose }) => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loadingMsg, setLoadingMsg] = useState(LOADING_MESSAGES[0]);
  const t = UI_TRANSLATIONS[language];

  useEffect(() => {
    let interval: any;
    if (isGenerating) {
      let idx = 0;
      interval = setInterval(() => {
        idx = (idx + 1) % LOADING_MESSAGES.length;
        setLoadingMsg(LOADING_MESSAGES[idx]);
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setGeneratedImage(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `A character portrait of a cute 3D Pixar-style tiger character from "Little Tigers", ${prompt}. High quality, white background, soft cinematic lighting.` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: "1K"
          }
        }
      });

      const parts = response.candidates?.[0]?.content?.parts || [];
      for (const part of parts) {
        if (part.inlineData) {
          setGeneratedImage(`data:image/png;base64,${part.inlineData.data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Generation failed:", error);
      alert("Something went wrong with the magic. Try again!");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-0 md:p-4 lg:p-8 animate-in fade-in duration-500 overflow-y-auto">
      <div className="w-full h-full md:h-auto max-w-4xl bg-[#111] md:bg-white/5 border-none md:border border-white/10 rounded-none md:rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl md:my-auto">
        
        {/* Close Button Mobile */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-white/10 rounded-full text-white md:hidden"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {/* Creation Side */}
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center pt-16 md:pt-12">
          <div className="mb-6 lg:mb-8">
            <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tighter mb-2">Magic Studio</h2>
            <p className="text-white/60 text-base lg:text-lg font-light">Create a new Little Tiger with AI magic.</p>
          </div>

          <div className="relative mb-6 lg:mb-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A tiger wearing a space suit..."
              className="w-full h-32 lg:h-40 bg-white/5 border border-white/20 rounded-2xl lg:rounded-3xl p-4 lg:p-6 text-white text-base lg:text-lg placeholder-white/30 focus:border-indigo-500 outline-none resize-none"
              disabled={isGenerating}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className={`w-full sm:flex-1 py-4 lg:py-5 rounded-xl lg:rounded-2xl font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3
                ${isGenerating 
                  ? 'bg-white/10 text-white/40' 
                  : 'bg-gradient-to-r from-indigo-600 to-rose-600 text-white hover:scale-[1.02]'}`}
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-xs truncate">{loadingMsg}</span>
                </>
              ) : (
                <>
                  <span>✨</span>
                  <span>Create</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="hidden md:block w-full sm:w-auto px-8 py-4 lg:py-5 bg-white/10 text-white font-bold rounded-xl lg:rounded-2xl border border-white/10"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Preview Side */}
        <div className="flex-1 bg-white/5 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col items-center justify-center p-8 relative min-h-[300px] lg:min-h-[500px]">
          {generatedImage ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6 animate-in zoom-in-95 duration-700">
              <img 
                src={generatedImage} 
                alt="Generated Character" 
                className="w-full max-w-[280px] lg:max-w-sm aspect-square object-cover rounded-[32px] lg:rounded-[40px] shadow-2xl border-2 border-white/20"
              />
              <button 
                className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 active:scale-95 transition-all text-xs lg:text-sm"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = generatedImage;
                  link.download = 'my-tiger.png';
                  link.click();
                }}
              >
                Download
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`w-24 h-24 lg:w-48 lg:h-48 border-4 border-dashed border-white/10 rounded-[32px] lg:rounded-[40px] flex items-center justify-center mb-6 mx-auto ${isGenerating ? 'animate-pulse' : ''}`}>
                <span className="text-3xl lg:text-6xl opacity-30">🐯</span>
              </div>
              <p className="text-white/30 font-bold uppercase tracking-widest text-[10px] lg:text-sm">
                {isGenerating ? 'Manifesting...' : 'Preview will appear here'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicStudio;
