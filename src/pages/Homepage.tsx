import { Link } from "react-router-dom";
import { HiArrowRight, HiSparkles } from "react-icons/hi";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import CardProject from "../components/CardProject";
import { useLanguage } from "../context/LanguageContext";

export default function Homepage() {
  const { t } = useLanguage();

  const featured = [
    {
      title: "Bagian Umum Setda Kab. Muba",
      categoryTag: "Official Government",
      description: t("projects.setdamuba_desc"),
      image: "setdamuba.png",
      link: "https://bagianumumsetda.mubakab.go.id/",
      tech: [
        "https://img.shields.io/badge/PHP-777BB4?style=flat-square&logo=php&logoColor=white",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white",
        "https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
      ],
    },
    {
      title: "FarahShop",
      categoryTag: "E-Commerce & Retail",
      description: t("projects.farahshop_desc"),
      image: "farahshop.png",
      link: "https://farahhshop.netlify.app/",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "Personal Finance - SaldaQ",
      categoryTag: "Personal Finance App",
      description: t("projects.saldaq_desc"),
      image: "saldaq.png",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white",
        "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
      ],
    },
  ];

  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-x-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Clean architectural engineering dot-grid (Bespoke Studio Aesthetic, No fake galaxy wallpaper) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <Navbar />

      <main className="relative z-0 flex-1 w-full pt-16 sm:pt-20">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Featured Works Spotlight (Eliminates the empty AI template feeling) */}
        <section className="section-2 pt-12 sm:pt-16 pb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
                <HiSparkles className="text-sm" />
                <span>Selected Works</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t("projects.title")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
                {t("projects.subtitle")}
              </p>
            </div>

            <Link
              to="/project"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-colors group"
            >
              <span>{t("projects.filter_all")} (8)</span>
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Cards List */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {featured.map((proj, idx) => (
              <CardProject
                key={proj.title}
                title={proj.title}
                categoryTag={proj.categoryTag}
                description={proj.description}
                image={proj.image}
                link={proj.link}
                tech={proj.tech}
                index={idx}
              />
            ))}
          </div>

          {/* Bottom Explore All CTA */}
          <div className="mt-10 text-center">
            <Link
              to="/project"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-md hover:border-blue-500 dark:hover:border-cyan-400 transition-all hover:scale-105 active:scale-95"
            >
              <span>{t("projects.explore_all")}</span>
              <HiArrowRight />
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200/80 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-400 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} fann • All Rights Reserved</p>
      </footer>
    </div>
  );
}
