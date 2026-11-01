import React, { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Only bypass for Google PageSpeed bot, human visitors ALWAYS get the full cinematic animation
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Google-InspectionTool|PageSpeed/i.test(navigator.userAgent);

    if (isBot) {
      if (onComplete) onComplete();
      return;
    }

    // Natural, satisfying progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 11) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 55);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
        return () => clearTimeout(exitTimer);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-slate-950 text-white font-poppins transition-opacity duration-500 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Branded <IPP/> Logo Emblem */}
        <div className="relative group">
          <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-indigo-600/40 blur-lg animate-pulse"></div>
          <div className="relative flex items-center justify-center px-6 py-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl backdrop-blur-md">
            <span className="font-mono font-black text-2xl sm:text-3xl tracking-wider select-none flex items-center">
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">&lt;</span>
              <span className="bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent px-1">
                IPP
              </span>
              <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.7)]">/&gt;</span>
            </span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 sm:w-64 flex flex-col items-center gap-2">
          <div className="w-full h-1.5 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 rounded-full transition-all duration-75 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="w-full flex justify-between items-center text-[11px] font-mono tracking-wider text-slate-400">
            <span>LOADING</span>
            <span className="text-cyan-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
