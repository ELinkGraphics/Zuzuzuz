
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
    <div className="fixed inset-0 z-[300] bg-black/90 backdrop-blur-3xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-500">
      <div className="w-full max-w-4xl bg-white/5 border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        
        {/* Creation Side */}
        <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">Magic Studio</h2>
            <p className="text-white/60 text-lg font-light">Bring a new Little Tiger to life using Gemini Magic.</p>
          </div>

          <div className="relative mb-8">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="e.g. A tiger wearing a space suit and holding a blue flower..."
              className="w-full h-40 bg-white/5 border border-white/20 rounded-3xl p-6 text-white text-lg placeholder-white/30 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none outline-none"
              disabled={isGenerating}
            />
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className={`flex-1 py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3
                ${isGenerating 
                  ? 'bg-white/10 text-white/40 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-indigo-600 to-rose-600 text-white hover:scale-[1.02] active:scale-[0.98]'}`}
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  {loadingMsg}
                </>
              ) : (
                <>
                  <span>✨</span>
                  <span>Create Magic</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-8 py-5 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition-all border border-white/10"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Preview Side */}
        <div className="flex-1 bg-white/5 border-l border-white/10 flex flex-col items-center justify-center p-8 relative min-h-[400px]">
          {generatedImage ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-8 animate-in zoom-in-95 duration-700">
              <div className="relative group">
                <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <img 
                  src={generatedImage} 
                  alt="Generated Character" 
                  className="w-full max-w-sm aspect-square object-cover rounded-[40px] shadow-2xl border-4 border-white/20 relative z-10"
                />
              </div>
              <button 
                className="px-10 py-4 bg-white text-black font-black uppercase tracking-widest rounded-full hover:scale-110 active:scale-95 transition-all shadow-xl"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = generatedImage;
                  link.download = 'my-little-tiger.png';
                  link.click();
                }}
              >
                Download Creation
              </button>
            </div>
          ) : (
            <div className="text-center">
              <div className={`w-32 h-32 md:w-48 md:h-48 border-4 border-dashed border-white/10 rounded-[40px] flex items-center justify-center mb-6 mx-auto ${isGenerating ? 'animate-pulse scale-105' : ''}`}>
                <span className="text-4xl md:text-6xl grayscale opacity-30">🐯</span>
              </div>
              <p className="text-white/30 font-bold uppercase tracking-widest text-sm">
                {isGenerating ? 'Manifesting Beauty...' : 'Preview will appear here'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MagicStudio;
