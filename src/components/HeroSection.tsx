import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiArrowRight, HiCode } from "react-icons/hi";
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { useLanguage } from "../context/LanguageContext";

gsap.registerPlugin(TextPlugin);

const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (textRef.current && imgRef.current) {
      gsap.to(textRef.current, {
        duration: 2.5,
        text: {
          value: t("hero.role"),
          delimiter: "",
        },
      });

      gsap.to(imgRef.current, {
        scale: 1.05,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, [language, t]);

  return (
    <div
      className="w-full flex flex-col justify-center items-center text-center max-w-2xl mx-auto pt-4 sm:pt-12"
      ref={containerRef}
    >
      {/* Profile Avatar with glowing border */}
      <div className="relative mb-4 group inline-block">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-60 dark:opacity-80 blur-md group-hover:opacity-100 transition duration-500"></div>
        <img
          ref={imgRef}
          src="./img/myfoto.jpg"
          alt="Irfan Putra Pratama"
          className="relative w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] object-cover rounded-full border-2 border-white dark:border-slate-800 shadow-2xl"
        />

        {/* Floating Developer </> Badge */}
        <div
          className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 z-10 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-900/90 text-blue-400 border-2 border-white dark:border-slate-800 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-110"
          title="Developer • Code Artisan"
        >
          <HiCode className="text-base sm:text-lg" />
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2.5 px-2">
        {/* Friendly greeting pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-1">
          <span className="animate-wave inline-block origin-bottom-right">👋</span>
          <span>{t("hero.greeting")}</span>
        </div>

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

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 justify-center items-center pt-2">
          <Link
            to="/project"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm shadow-md shadow-blue-500/20 active:scale-95 transition-all duration-200"
          >
            {t("hero.explore")} <HiArrowRight className="text-base" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-medium text-sm border border-slate-200 dark:border-slate-700 shadow-sm active:scale-95 transition-all duration-200"
          >
            {t("hero.contact")}
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 pt-3 justify-center items-center">
          <a
            href="https://www.instagram.com/skawnfaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            title="Instagram (@skawnfaa)"
          >
            <FaInstagram className="text-base sm:text-lg" />
          </a>
          <a
            href="https://github.com/irfannn27"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-slate-800 dark:bg-slate-700 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            title="GitHub (@irfannn27)"
          >
            <FaGithub className="text-base sm:text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/irfan-putra-pratama-54b10734b"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all duration-200"
            title="LinkedIn (Irfan Putra Pratama)"
          >
            <FaLinkedin className="text-base sm:text-lg" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

