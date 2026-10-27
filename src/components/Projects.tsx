import CardProject from "./CardProject";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "../context/LanguageContext";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: Array<string>;
}

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 }, 
          {
            opacity: 1,
            y: 0, 
            duration: 0.8,
            delay: index * 0.2, 
            ease: "power1.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%", 
              end: "bottom 30%", 
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  const projects: Project[] = [
    {
      title: "Klinik Smartphone",
      description: t("projects.klinik_desc"),
      image: "kliniksmarphone.png",
      tech: [
        "https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "Personal Finance - SaldaQ",
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
      description: t("projects.duriat_desc"),
      image: "duriatfood.png",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
      ],
    },
    {
      title: "FannMovie",
      description: t("projects.movie_desc"),
      image: "fannmovies.png",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/TMDB_API-01B4E4?style=flat-square&logo=themoviedatabase&logoColor=white",
      ],
    },
    {
      title: "FannsRecipes",
      description: t("projects.recipes_desc"),
      image: "fannrecep.png",
      tech: [
        "https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB",
        "https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/REST_API-005571?style=flat-square&logo=fastapi&logoColor=white",
      ],
    },
  ];

  return (
    <div className="section section-2 pt-24 sm:pt-28 md:pt-36 pb-20">
      <h1 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        {t("projects.title")}
      </h1>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <div key={index} ref={(el) => (cardRefs.current[index] = el!)} className="w-full">
            <CardProject
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;