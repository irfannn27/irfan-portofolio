import React from "react";
import { HiCode, HiOutlineGlobeAlt, HiOutlineServer, HiOutlineSparkles } from "react-icons/hi";
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";

const About: React.FC = () => {
  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-rose-500 text-lg" />,
      label: "Location",
      value: "Sekayu, Palembang",
    },
    {
      icon: <FaGraduationCap className="text-blue-500 text-lg" />,
      label: "Education",
      value: "Politeknik Sekayu (TI)",
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-lg" />,
      label: "Focus",
      value: "Frontend & Web Dev",
    },
    {
      icon: <FaRocket className="text-amber-500 text-lg" />,
      label: "Core Stack",
      value: "React, Next.js, TS",
    },
  ];

  const services = [
    {
      icon: <HiOutlineGlobeAlt className="text-2xl text-blue-500" />,
      title: "Web Development",
      description:
        "Building fast, modern, and mobile-friendly websites with clean code architecture and optimal performance.",
    },
    {
      icon: <HiOutlineSparkles className="text-2xl text-purple-500" />,
      title: "UI/UX & Interactive Design",
      description:
        "Crafting responsive and interactive user interfaces with Tailwind CSS and smooth micro-animations.",
    },
    {
      icon: <HiOutlineServer className="text-2xl text-emerald-500" />,
      title: "Backend & API Integration",
      description:
        "Developing REST APIs, managing database workflows (MongoDB/MySQL), and deploying with Docker on VPS.",
    },
  ];

  return (
    <div className="section section-2">
      {/* 1. Header & Story Text */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <HiCode className="text-sm" />
          <span>Biography & Passion</span>
        </div>

        <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
          🚀 About Me
        </h1>

        <div className="text-slate-600 dark:text-slate-300 space-y-3.5 text-sm sm:text-base leading-relaxed mt-4">
          <p>
            Hello! I am <span className="font-semibold text-slate-900 dark:text-white">Irfan Putra Pratama</span>, a passionate Frontend & Web Developer based in Sekayu, Palembang (South Sumatra). I specialize in designing and engineering modern, accessible, and high-performance digital experiences.
          </p>
          <p>
            As an active student majoring in Informatics Engineering at Politeknik Sekayu, I continuously bridge academic foundations with modern industry-standard technologies—primarily focusing on the React ecosystem, Next.js, TypeScript, and Tailwind CSS.
          </p>
          <p>
            Beyond frontend aesthetics, I am also well-versed in backend development, API integration, payment gateway implementations, and deploying scalable solutions using Docker on VPS.
          </p>
        </div>
      </div>

      {/* 2. Quick Highlight Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] sm:text-xs text-slate-400 dark:text-slate-500 font-medium uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. What I Do / Services Cards */}
      <div className="pt-6 sm:pt-8">
        <h2 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          ⚡ What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-white dark:bg-slate-850/80 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-slate-600 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;




