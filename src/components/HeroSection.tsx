import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiCode } from "react-icons/hi";
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
  const imgRef = useRef<HTMLImageElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 2.2,
        text: {
          value: t("hero.role"),
          delimiter: "",
        },
      });
    }
  }, [language, t]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto pt-4 sm:pt-12"
      ref={containerRef}
    >
      {/* Profile Avatar with gentle float animation & glowing aura */}
      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="relative mb-5 group inline-block"
      >
        <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 dark:opacity-80 blur-lg group-hover:opacity-100 transition duration-500"></div>
        <img
          ref={imgRef}
          src="./img/myfoto.jpg"
          alt="Irfan Putra Pratama"
          width="160"
          height="160"
          fetchPriority="high"
          decoding="async"
          className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] object-cover rounded-full border-2 border-white dark:border-slate-800 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />

        {/* Floating Developer </> Badge with spring bounce */}
        <motion.div
          whileHover={{ scale: 1.15, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/90 text-blue-400 border-2 border-white dark:border-slate-800 shadow-lg backdrop-blur-sm cursor-pointer"
          title="Developer • Code Artisan"
        >
          <HiCode className="text-base sm:text-lg" />
        </motion.div>
      </motion.div>

      {/* Info Section */}
      <div className="space-y-3 px-2">
        {/* Friendly greeting pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-1"
        >
          <span className="animate-wave inline-block origin-bottom-right">👋</span>
          <span>{t("hero.greeting")}</span>
        </motion.div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Irfan Putra Pratama
        </h2>

        <div className="min-h-[40px] flex items-center justify-center">
          <h1
            className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent"
            ref={textRef}
          ></h1>
        </div>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          {t("hero.bio")}
        </p>

        {/* CTA Buttons with Spring Physics */}
        <div className="flex flex-wrap gap-3 justify-center items-center pt-3">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/project"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all duration-200"
            >
              {t("hero.explore")} <HiArrowRight className="text-base" />
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-white font-semibold text-sm border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-200"
            >
              {t("hero.contact")}
            </Link>
          </motion.div>
        </div>

        {/* Social Links with Spring Physics */}
        <div className="flex gap-3 pt-3 justify-center items-center">
          <motion.a
            href="https://www.instagram.com/skawnfaa/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="p-2.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl shadow-md"
            title="Instagram (@skawnfaa)"
          >
            <FaInstagram className="text-base sm:text-lg" />
          </motion.a>

          <motion.a
            href="https://github.com/irfannn27"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="p-2.5 bg-slate-800 dark:bg-slate-700 text-white rounded-xl shadow-md"
            title="GitHub (@irfannn27)"
          >
            <FaGithub className="text-base sm:text-lg" />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/irfan-putra-pratama-54b10734b"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md"
            title="LinkedIn (Irfan Putra Pratama)"
          >
            <FaLinkedin className="text-base sm:text-lg" />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
