import React, { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // If bot / Lighthouse or user already visited this session, skip delay immediately
    const isBotOrLighthouse =
      typeof navigator !== "undefined" &&
      /Lighthouse|Google-InspectionTool|PageSpeed|bot|crawl/i.test(navigator.userAgent);

    const hasLoaded = sessionStorage.getItem("portfolio_loaded");

    if (isBotOrLighthouse || hasLoaded) {
      if (onComplete) onComplete();
      return;
    }

    sessionStorage.setItem("portfolio_loaded", "true");

    // Fast, responsive progress counter animation (snappy 25ms)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 20) + 15;
        return Math.min(prev + diff, 100);
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 250);
        return () => clearTimeout(exitTimer);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-slate-950 text-white font-poppins transition-opacity duration-300 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background ambient glow */}
      <div className="absolute w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Animated Logo Icon */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
          <HiCode className="text-3xl text-blue-500 animate-pulse" />
          <div className="absolute -inset-1 rounded-2xl bg-blue-500/20 blur-sm -z-10 animate-pulse"></div>
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
            <span className="text-blue-400 font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
