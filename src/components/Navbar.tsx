import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaSun, FaMoon, FaComments, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { 
  HiHome, 
  HiUser, 
  HiFolder, 
  HiMail, 
  HiArrowRight, 
  HiOutlineMenuAlt3, 
  HiX 
} from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const navbarRef = useRef<HTMLDivElement>(null);
  const { theme, toggleTheme } = useTheme();
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
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        }
      );
    }
  }, []);

  const navItems = [
    { label: "Home", path: "/", icon: <HiHome className="text-xl" /> },
    { label: "About", path: "/about", icon: <HiUser className="text-xl" /> },
    { label: "Projects", path: "/project", icon: <HiFolder className="text-xl" /> },
    { label: "Contact", path: "/contact", icon: <HiMail className="text-xl" /> },
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
        <nav className="pointer-events-auto mt-5 px-4 py-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-800 dark:text-white flex justify-between items-center shadow-2xl w-[92%] max-w-[430px] rounded-full border border-slate-200 dark:border-slate-700/80 transition-all duration-300">
          <div className="flex gap-1.5 list-none font-medium text-sm items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-500/25"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Theme Dual Pill Switch */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="relative flex items-center bg-slate-200/90 dark:bg-slate-800 p-0.5 rounded-full border border-slate-300 dark:border-slate-700 shadow-inner cursor-pointer transition-colors duration-200 ml-2 select-none active:scale-95"
            title={theme === 'dark' ? "Mode Gelap aktif (klik untuk Terang)" : "Mode Terang aktif (klik untuk Gelap)"}
          >
            <div
              className={`flex items-center justify-center w-7 h-6 rounded-full text-xs transition-all duration-300 ${
                theme === 'light'
                  ? "bg-amber-400 text-slate-900 shadow-md font-bold scale-105"
                  : "text-slate-400 hover:text-slate-600 dark:text-slate-500"
              }`}
            >
              <FaSun className="text-xs" />
            </div>
            <div
              className={`flex items-center justify-center w-7 h-6 rounded-full text-xs transition-all duration-300 ${
                theme === 'dark'
                  ? "bg-indigo-600 text-white shadow-md font-bold scale-105"
                  : "text-slate-400 hover:text-slate-600 dark:text-slate-500"
              }`}
            >
              <FaMoon className="text-xs" />
            </div>
          </button>
        </nav>
      </header>

      {/* =========================================================
          2. MOBILE TOP BAR (visible on mobile only, md:hidden)
          ========================================================= */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[99999] px-4 py-3 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 flex justify-between items-center font-poppins transition-colors duration-300">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src="./img/myfoto.jpg"
            alt="Irfan"
            className="w-8 h-8 rounded-full object-cover border border-blue-500"
          />
          <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
            Irfan Putra
            <MdVerified className="text-blue-500 text-base" />
          </span>
        </Link>

        <div className="flex items-center gap-2">
          {/* Quick theme toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FaSun className="text-sm text-amber-400" /> : <FaMoon className="text-sm text-indigo-600" />}
          </button>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            className="p-2 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            aria-label="Open menu"
          >
            <HiOutlineMenuAlt3 className="text-xl" />
          </button>
        </div>
      </header>

      {/* =========================================================
          3. FULL SCREEN MOBILE MENU (TikTok / Linktree Inspired!)
          ========================================================= */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[999999] bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white flex flex-col justify-between overflow-y-auto font-poppins p-6 transition-all duration-300 animate-fadeIn">
          {/* Top Close Button */}
          <div className="flex justify-between items-center w-full">
            <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">
              Navigation Menu
            </span>
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="p-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-sm active:scale-95"
              aria-label="Close menu"
            >
              <HiX className="text-xl" />
            </button>
          </div>

          {/* Center Profile & Options (Exactly as in TikTok screenshot) */}
          <div className="flex flex-col items-center text-center my-auto py-6 max-w-sm mx-auto w-full">
            {/* Avatar Profile */}
            <div className="relative mb-3 group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 opacity-70 blur-sm"></div>
              <img
                src="./img/myfoto.jpg"
                alt="Irfan Putra Pratama"
                className="relative w-24 h-24 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-2xl"
              />
            </div>

            {/* Name + Verified Badge */}
            <div className="flex items-center justify-center gap-1.5">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
                Irfan Putra Pratama
              </h2>
              <MdVerified className="text-blue-500 text-xl" />
            </div>

            {/* Handle / Role */}
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              @irfannn27 • @skawnfaa
            </p>

            {/* Toggles Row (Dual Pills: Status/Lang + Theme) */}
            <div className="flex items-center gap-3 mt-4 mb-6">
              {/* Status pill */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for hire
              </div>

              {/* Theme Switcher Pill (Matching screenshot with Cloud/Sun & Cloud/Moon) */}
              <button
                onClick={toggleTheme}
                type="button"
                className="flex items-center bg-slate-200 dark:bg-slate-800/90 p-1 rounded-full border border-slate-300 dark:border-slate-700 shadow-inner cursor-pointer"
                title="Ganti Mode Terang / Gelap"
              >
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all duration-300 ${
                    theme === 'light'
                      ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  <FaSun className="text-xs" />
                  <span className="text-[10px]">Light</span>
                </div>
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs transition-all duration-300 ${
                    theme === 'dark'
                      ? "bg-indigo-600 text-white font-bold shadow-sm"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  <FaMoon className="text-xs" />
                  <span className="text-[10px]">Dark</span>
                </div>
              </button>
            </div>

            {/* Vertical Menu Cards (Home, About, Projects, Contact) */}
            <div className="flex flex-col gap-2.5 w-full">
              {navItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all duration-200 border ${
                      active
                        ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25 font-semibold"
                        : "bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-850 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={active ? "text-white" : "text-blue-500"}>
                        {item.icon}
                      </span>
                      <span className="text-base">{item.label}</span>
                    </div>
                    <HiArrowRight className={`text-base ${active ? "text-white" : "text-slate-400"}`} />
                  </Link>
                );
              })}
            </div>

            {/* Highlight Action Button (Green bordered Smart Talk style) */}
            <div className="w-full mt-4">
              <Link
                to="/contact"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-2 border-emerald-500/50 font-bold text-sm shadow-sm transition-all active:scale-95"
              >
                <FaComments className="text-lg text-emerald-500" />
                <span>Let's Talk / Hire Me</span>
              </Link>
            </div>

            {/* Social Links inside Mobile Drawer */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <a
                href="https://www.instagram.com/skawnfaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all"
                title="Instagram (@skawnfaa)"
              >
                <FaInstagram className="text-base" />
              </a>
              <a
                href="https://github.com/irfannn27"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-slate-800 dark:bg-slate-700 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all"
                title="GitHub (@irfannn27)"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/irfan-putra-pratama-54b10734b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-blue-600 text-white rounded-xl shadow-md hover:scale-110 active:scale-95 transition-all"
                title="LinkedIn (Irfan Putra Pratama)"
              >
                <FaLinkedin className="text-base" />
              </a>
            </div>
          </div>

          {/* Copyright Footer */}
          <div className="text-center pt-4 pb-2 border-t border-slate-200 dark:border-slate-800/80">
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
              COPYRIGHT © {new Date().getFullYear()} FANN
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;