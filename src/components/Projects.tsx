import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSparkles } from "react-icons/hi";
import CardProject from "./CardProject";
import { useLanguage } from "../context/LanguageContext";

type ProjectCategory = "all" | "gov" | "commerce" | "apps";

interface Project {
  title: string;
  category: "gov" | "commerce" | "apps";
  categoryTag: string;
  description: string;
  image: string;
  tech: Array<string>;
  link?: string;
}

const Projects = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<ProjectCategory>("all");

  const projects: Project[] = [
    {
      title: "Bagian Umum Setda Kab. Muba",
      category: "gov",
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
      title: "Irfan Putra • Official Portfolio",
      category: "apps",
      categoryTag: "Official Web Platform",
      description: t("projects.rrfnnn_desc"),
      image: "rrfnnn-portfolio.jpg",
      link: "https://www.rrfnnn.my.id/",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "FarahShop",
      category: "commerce",
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
      title: "Klinik Smartphone",
      category: "commerce",
      categoryTag: "Tech Repair Platform",
      description: t("projects.klinik_desc"),
      image: "kliniksmarphone.png",
      link: "https://kliniksmarphone.netlify.app/",
      tech: [
        "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "Personal Finance - SaldaQ",
      category: "apps",
      categoryTag: "Personal Finance App",
      description: t("projects.saldaq_desc"),
      image: "saldaq.png",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white",
        "https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white",
        "https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
      ],
    },
    {
      title: "Duriat Food",
      category: "commerce",
      categoryTag: "Culinary & Catering",
      description: t("projects.duriat_desc"),
      image: "duriatfood.png",
      link: "https://duriatfood.netlify.app/",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "FannMovie",
      category: "apps",
      categoryTag: "Movie & Media Catalog",
      description: t("projects.movie_desc"),
      image: "fannmovies.png",
      link: "https://fannmoviess.netlify.app/",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/TMDB_API-01B4E4?style=flat-square&logo=themoviedatabase&logoColor=white",
      ],
    },
    {
      title: "FannsRecipes",
      category: "apps",
      categoryTag: "Interactive Cooking App",
      description: t("projects.recipes_desc"),
      image: "fannrecep.png",
      link: "https://fannreceipes.netlify.app/",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/REST_API-005571?style=flat-square&logo=fastapi&logoColor=white",
      ],
    },
  ];

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t("projects.filter_all") },
    { id: "gov", label: t("projects.filter_gov") },
    { id: "commerce", label: t("projects.filter_commerce") },
    { id: "apps", label: t("projects.filter_apps") },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((item) => item.category === activeTab);

  return (
    <div className="section section-2 pt-24 sm:pt-28 md:pt-36 pb-20">
      {/* Header with pill badge */}
      <div className="mb-8 space-y-2">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase"
        >
          <HiSparkles className="text-blue-500 text-sm" />
          <span>Portfolio Works</span>
        </motion.div>

        <h1 className="font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          {t("projects.title")}
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-xl leading-relaxed">
          {t("projects.subtitle")}
        </p>
      </div>

      {/* Interactive Minimalist Filter Segment */}
      <div className="flex items-center gap-1 sm:gap-1.5 mb-6 sm:mb-8 p-1 sm:p-1.5 bg-slate-200/60 dark:bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-200/80 dark:border-slate-800/80 w-full sm:w-fit overflow-x-auto scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors duration-200 whitespace-nowrap text-center ${isActive
                  ? "text-white"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterPill"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-sm shadow-blue-500/30"
                  transition={{ type: "spring", stiffness: 420, damping: 32 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Project Cards List */}
      <motion.div layout className="flex flex-col gap-6 sm:gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <CardProject
                title={project.title}
                categoryTag={project.categoryTag}
                description={project.description}
                image={project.image}
                tech={project.tech}
                link={project.link}
                index={index}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects;
