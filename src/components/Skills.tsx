import { motion } from "framer-motion";
import { HiCode, HiOutlineServer, HiOutlineSparkles, HiTerminal } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

interface SkillItem {
  name: string;
  logo: string;
  highlight?: boolean;
}

interface SkillCategory {
  titleKey: string;
  icon: JSX.Element;
  accent: string;
  badge: string;
  skills: SkillItem[];
}

export default function Skills() {
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    {
      titleKey: "skills.cat_frontend",
      icon: <HiCode className="text-xl text-blue-500" />,
      accent: "from-blue-500 via-cyan-500 to-indigo-500",
      badge: "Core Specialty",
      skills: [
        { name: "React 18", logo: "react", highlight: true },
        { name: "Next.js", logo: "nextjs", highlight: true },
        { name: "TypeScript", logo: "typescript", highlight: true },
        { name: "Tailwind CSS", logo: "tailwindcss", highlight: true },
        { name: "JavaScript ES6+", logo: "js" },
        { name: "HTML5", logo: "html-5" },
        { name: "CSS3", logo: "css" },
      ],
    },
    {
      titleKey: "skills.cat_backend",
      icon: <HiOutlineServer className="text-xl text-emerald-500" />,
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      badge: "Services & Data",
      skills: [
        { name: "Node.js", logo: "node", highlight: true },
        { name: "Express.js", logo: "express" },
        { name: "PHP", logo: "php" },
        { name: "Laravel", logo: "laravel" },
        { name: "MySQL", logo: "mysql", highlight: true },
        { name: "MongoDB", logo: "mongo" },
        { name: "Python", logo: "python" },
      ],
    },
    {
      titleKey: "skills.cat_tools",
      icon: <HiTerminal className="text-xl text-purple-500" />,
      accent: "from-purple-500 via-pink-500 to-indigo-500",
      badge: "Tooling & Design",
      skills: [
        { name: "Figma UI/UX", logo: "figma", highlight: true },
        { name: "Postman API", logo: "postman" },
        { name: "Bootstrap 5", logo: "bootstrap" },
      ],
    },
  ];

  return (
    <div className="section section-2 pt-12 sm:pt-16 pb-20">
      {/* Header with pill badge */}
      <div className="mb-8 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
          <HiOutlineSparkles className="text-sm" />
          <span>Ecosystem</span>
        </div>

        <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          {t("skills.title")}
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
          {t("skills.subtitle")}
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl p-6 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/40 hover:border-blue-500/50 dark:hover:border-blue-500/40 transition-all duration-300 overflow-hidden"
          >
            {/* Top accent line */}
            <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${cat.accent}`} />

            <div>
              {/* Category Header */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                    {cat.icon}
                  </div>
                  <h2 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                    {t(cat.titleKey)}
                  </h2>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80">
                  {cat.badge}
                </span>
              </div>

              {/* Skills List in Bento Card */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <motion.div
                    key={sIdx}
                    whileHover={{ scale: 1.04, y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className={`inline-flex items-center gap-2.5 px-3 py-2 rounded-2xl border text-xs font-semibold transition-all duration-200 cursor-default ${
                      skill.highlight
                        ? "bg-blue-50/80 dark:bg-blue-950/30 border-blue-200/80 dark:border-blue-800/60 text-blue-900 dark:text-blue-200 shadow-sm"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200/80 dark:border-slate-700/70 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"
                    }`}
                  >
                    <img
                      src={`./img/${skill.logo}.png`}
                      alt={skill.name}
                      className="w-5 h-5 object-contain shrink-0"
                      loading="lazy"
                    />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
