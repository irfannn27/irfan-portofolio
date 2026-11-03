import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaComments, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import {
  HiHome,
  HiUser,
  HiFolder,
  HiMail,
  HiOutlineMenuAlt3,
  HiX
} from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navbarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        {
          opacity: 0,
          y: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const navItems = [
    { label: t("nav.home"), path: "/", icon: <HiHome className="text-xl" /> },
    { label: t("nav.about"), path: "/about", icon: <HiUser className="text-xl" /> },
    { label: t("nav.projects"), path: "/project", icon: <HiFolder className="text-xl" /> },
    { label: t("nav.contact"), path: "/contact", icon: <HiMail className="text-xl" /> },
  ];

  return (
    <>
      {/* =========================================================
          1. DESKTOP FLOATING NAVBAR (hidden on mobile, md:flex)
          ========================================================= */}
      <header
        className="hidden md:flex fixed top-0 left-0 right-0 z-[99999] justify-center pointer-events-none font-poppins"
        ref={navbarRef}
      >
        <nav className="pointer-events-auto mt-5 px-4 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white flex justify-between items-center shadow-2xl w-[92%] max-w-[480px] rounded-full border border-slate-200 dark:border-slate-700/80 transition-all duration-300">
          <div className="flex gap-1 list-none font-medium text-sm items-center relative">
            {navItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                    active
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="desktopNavActivePill"
                      className="absolute inset-0 bg-blue-600 rounded-full shadow-md shadow-blue-500/25 -z-10"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              type="button"
              className="px-2.5 py-1 text-xs font-bold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-blue-500 transition-all flex items-center gap-1 active:scale-95"
              title="Ganti Bahasa / Switch Language"
            >
              <span>{language === "en" ? "EN" : "ID"}</span>
            </button>

                        {/* Minimalist Theme Toggle (Lucide Moon / Sun) */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={toggleTheme}
              type="button"
              aria-label="Toggle theme"
              className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:text-blue-500 dark:hover:text-cyan-400 transition-colors shadow-sm cursor-pointer"
              title={theme === 'dark' ? "Mode Gelap aktif (klik untuk Terang)" : "Mode Terang aktif (klik untuk Gelap)"}
            >
              {theme === "dark" ? (
                <LuMoon className="text-sm stroke-[2.2]" />
              ) : (
                <LuSun className="text-sm stroke-[2.2]" />
              )}
            </motion.button>
          </div>
        </nav>
      </header>

      {/* =========================================================
          2. CLEAN MINIMALIST MOBILE TOP BAR (md:hidden)
          ========================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[99999] px-5 py-3.5 bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-slate-800/80 flex justify-between items-center font-poppins transition-colors duration-300">
        <Link to="/" className="font-black text-base tracking-tight text-slate-900 dark:text-white">
          Irfan Putra
        </Link>

        <div className="flex items-center gap-2">
          {/* Quick Language switch */}
          <button
            onClick={toggleLanguage}
            type="button"
            className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 text-xs font-bold transition-all active:scale-95"
            title="Switch Language"
          >
            {language === "en" ? "EN" : "ID"}
          </button>

          {/* Quick Theme Toggle (Lucide Moon / Sun) */}
          <motion.button
            whileTap={{ scale: 0.9, rotate: 15 }}
            onClick={toggleTheme}
            type="button"
            className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-800 transition-all active:scale-95"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Mode Gelap aktif (klik untuk Terang)" : "Mode Terang aktif (klik untuk Gelap)"}
          >
            {theme === "dark" ? (
              <LuMoon className="text-sm stroke-[2.2]" />
            ) : (
              <LuSun className="text-sm stroke-[2.2]" />
            )}
          </motion.button>

          {/* Clean Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-1.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all active:scale-95"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <HiX className="text-2xl" /> : <HiOutlineMenuAlt3 className="text-2xl" />}
          </button>
        </div>
      </header>

      {/* =========================================================
          3. CLEAN MINIMALIST MOBILE MENU OVERLAY (Zero AI Slop)
          ========================================================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="md:hidden fixed inset-0 z-[99998] bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Slide-down Clean Menu Panel */}
            <motion.nav
              initial={{ y: -15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="md:hidden fixed top-[56px] inset-x-0 z-[99999] bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 px-6 py-6 font-poppins shadow-2xl flex flex-col gap-6"
            >
              {/* Clean Nav Links */}
              <div className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const active = isActive(item.path);
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-2 text-lg font-bold transition-colors ${
                        active
                          ? "text-blue-600 dark:text-cyan-400"
                          : "text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && (
                        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-cyan-400" />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom Actions Strip */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-sm active:scale-95 transition-all"
                >
                  <FaComments className="text-base" />
                  <span>{t("nav.lets_talk")}</span>
                </Link>

                <div className="flex items-center justify-center gap-5 text-slate-500 dark:text-slate-400 pt-1">
                  <a
                    href="https://github.com/rrfnie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-blue-500 transition-colors"
                    title="GitHub"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/irfan-putra-pratama-54b10734b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-blue-500 transition-colors"
                    title="LinkedIn"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="https://www.instagram.com/skawnfaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 hover:text-rose-500 transition-colors"
                    title="Instagram"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
