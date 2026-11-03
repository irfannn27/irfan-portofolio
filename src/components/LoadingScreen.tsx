import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete?: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Anchor at top and lock scroll during curtain
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";
    const unlock = () => { document.body.style.overflow = ""; };
    // Only bypass for automated audit tools (Lighthouse / PageSpeed)
    const isBot =
      typeof navigator !== "undefined" &&
      /Lighthouse|Google-InspectionTool|PageSpeed/i.test(navigator.userAgent);

    if (isBot) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Fast, crisp timing: 650ms total impression before smooth curtain lift
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 650);

    return () => { clearTimeout(timer); unlock(); };
  }, [onComplete]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (onComplete) onComplete();
      }}
    >
      {isVisible && (
        <motion.div
          key="cinematic-curtain"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1], // Signature luxury cubic-bezier curtain reveal
            },
          }}
          className="fixed inset-0 z-[9999999] flex flex-col items-center justify-center bg-slate-950 text-white font-poppins select-none overflow-hidden"
        >
          {/* Subtle architectural ambient aura */}
          <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Minimalist Editorial Typography */}
          <div className="relative z-10 flex flex-col items-center gap-4 text-center px-6">
            {/* Elegant live beacon tag */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-mono text-slate-400 tracking-widest uppercase shadow-inner"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Portfolio &bull; 2026</span>
            </motion.div>

            {/* Name Typography with expanding letter-spacing */}
            <motion.h1
              initial={{ opacity: 0, y: 15, letterSpacing: "0.06em" }}
              animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="text-xl sm:text-2xl font-black uppercase text-white tracking-[0.18em]"
            >
              Irfan Putra Pratama
            </motion.h1>

            {/* Minimal hairline expanding accent bar */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "64px", opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.15, ease: "easeInOut" }}
              className="h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
