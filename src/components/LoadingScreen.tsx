import React, { useEffect, useState } from "react";
import { HiCode } from "react-icons/hi";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment between 5 and 15 for a natural loader feel
        const diff = Math.floor(Math.random() * 12) + 6;
        return Math.min(prev + diff, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          if (onComplete) onComplete();
        }, 500);
        return () => clearTimeout(exitTimer);
      }, 300);

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
      <div className="absolute w-60 h-60 bg-indigo-600/20 rounded-full blur-2xl"></div>

      {/* Center content */}
      <div className="relative flex flex-col items-center z-10 px-6">
        {/* Animated Avatar / Logo Icon */}
        <div className="relative mb-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-0.5 shadow-2xl shadow-blue-500/30 animate-bounce">
            <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-700/50">
              <HiCode className="text-3xl text-blue-400 animate-pulse" />
            </div>
          </div>
          {/* Subtle spinning ring */}
          <div className="absolute -inset-2 rounded-2xl border-2 border-dashed border-blue-500/40 animate-spin" style={{ animationDuration: "6s" }}></div>
        </div>

        {/* Brand Name */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          Irfan Putra Pratama
        </h2>
        <p className="text-xs tracking-widest text-blue-400 font-mono uppercase mt-1">
          Portfolio • Loading Experience
        </p>

        {/* Progress Bar Container */}
        <div className="w-64 sm:w-72 mt-8">
          <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
            <span>Loading assets...</span>
            <span className="text-blue-400 font-bold">{progress}%</span>
          </div>

          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5 border border-slate-700/60 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-150 ease-out shadow-sm shadow-blue-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
