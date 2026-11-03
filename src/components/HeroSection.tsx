import { FaInstagram, FaGithub, FaLinkedin, FaUniversity, FaAward } from "react-icons/fa";
import { HiArrowRight, HiOutlineSparkles, HiCode } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(TextPlugin);

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 1.8,
        text: {
          value: t("hero.role"),
          delimiter: "",
        },
      });
    }
  }, [language, t]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-6xl mx-auto py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
      ref={containerRef}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left Column: Editorial Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-5">
          {/* Status pill with live beacon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-xs font-semibold text-emerald-700 dark:text-emerald-400 tracking-wide backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("hero.available")}</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-slate-600 dark:text-slate-400 font-normal">Sekayu, ID</span>
          </motion.div>

          {/* Name & Role Headline */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
              Irfan Putra Pratama
            </h1>
            <div className="min-h-[38px] flex items-center justify-center lg:justify-start">
              <span
                ref={textRef}
                className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-600 dark:text-cyan-400 tracking-tight"
              ></span>
            </div>
          </div>

          {/* Concise Bio */}
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
            {t("hero.bio")}
          </p>

          {/* Mini Highlights Bento Bar */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-md pt-1 pb-1">
            <div className="p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold mb-0.5">
                <FaAward />
                <span>3.90 GPA</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Politeknik Sekayu</p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-blue-500 text-xs font-bold mb-0.5">
                <HiOutlineSparkles />
                <span>8+ Works</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">Production Apps</p>
            </div>
            <div className="p-2.5 rounded-2xl bg-white/80 dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-1.5 text-cyan-500 text-xs font-bold mb-0.5">
                <HiCode />
                <span>React / Next</span>
              </div>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">TypeScript Stack</p>
            </div>
          </div>

          {/* CTA Buttons & Social Handles */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/project"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-xl shadow-slate-900/10 dark:shadow-white/5 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all"
              >
                <span>{t("hero.explore")}</span>
                <HiArrowRight className="text-base" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200 font-semibold text-sm border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500 dark:hover:border-blue-500/50 transition-all"
              >
                <span>{t("hero.contact")}</span>
              </Link>
            </motion.div>

            {/* Social handles */}
            <div className="flex items-center gap-2 pl-1">
              <motion.a
                href="https://github.com/rrfnie"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400 rounded-2xl shadow-sm transition-all"
                title="GitHub (@rrfnie)"
              >
                <FaGithub className="text-base" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/irfan-putra-pratama-54b10734b"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-cyan-400 rounded-2xl shadow-sm transition-all"
                title="LinkedIn"
              >
                <FaLinkedin className="text-base" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/skawnfaa/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-rose-500 dark:hover:text-rose-400 rounded-2xl shadow-sm transition-all"
                title="Instagram (@skawnfaa)"
              >
                <FaInstagram className="text-base" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Right Column: Architectural Portrait Card (Bespoke Studio Style) */}
        <div className="relative shrink-0 flex items-center justify-center">
          {/* Subtle architectural ambient backdrop */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/10 via-cyan-500/10 to-indigo-600/10 rounded-[36px] blur-2xl pointer-events-none"></div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-[32px] p-2 sm:p-2.5 bg-gradient-to-b from-slate-200/80 via-slate-100 to-slate-200/80 dark:from-slate-700/60 dark:via-slate-800/80 dark:to-slate-900 shadow-2xl backdrop-blur-xl border border-slate-200/80 dark:border-white/[0.1] group"
          >
            <div className="relative w-[240px] sm:w-[280px] lg:w-[320px] aspect-[4/5] rounded-[24px] overflow-hidden bg-slate-950">
              <img
                src="./img/myfoto.jpg"
                alt="Irfan Putra Pratama"
                width="320"
                height="400"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Bottom Card Identity Strip */}
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold leading-tight">Irfan Putra</p>
                  <p className="text-[10px] text-cyan-400 font-mono">Frontend Developer</p>
                </div>
                <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-blue-500/20 text-cyan-300 border border-blue-400/30">
                  &lt;IPP/&gt;
                </span>
              </div>
            </div>

            {/* Floating Top Badge */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white border border-white/15 shadow-xl backdrop-blur-md text-[11px] font-semibold"
            >
              <FaUniversity className="text-emerald-400" />
              <span>Politeknik Sekayu</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
