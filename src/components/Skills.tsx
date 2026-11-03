import { motion } from "framer-motion";
import { HiCode, HiOutlineServer, HiTerminal } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

interface SkillItem {
  name: string;
  logo: string;
  highlight?: boolean;
}

interface SkillCategory {
  titleKey: string;
  icon: JSX.Element;
  badge: string;
  skills: SkillItem[];
}

export default function Skills() {
  const { t } = useLanguage();

  const categories: SkillCategory[] = [
    {
      titleKey: "skills.cat_frontend",
      icon: <HiCode className="text-xl text-blue-500" />,
      badge: "Frontend",
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
      badge: "Backend & Data",
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
      icon: <HiTerminal className="text-xl text-indigo-500" />,
      badge: "Workflow & Tools",
      skills: [
        { name: "Figma UI/UX", logo: "figma", highlight: true },
        { name: "Postman API", logo: "postman" },
        { name: "Bootstrap 5", logo: "bootstrap" },
      ],
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6 space-y-1.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            {t("skills.eyebrow")}
          </span>
          <span className="h-px w-8 bg-indigo-500/30" />
        </div>

        <h2 className="font-extrabold text-xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
          {t("skills.title")}
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
          {t("skills.subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="flex flex-col justify-between rounded-2xl p-6 bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white tracking-tight">
                    {t(cat.titleKey)}
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200/80 dark:border-slate-700/80">
                  {cat.badge}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className={`inline-flex items-center gap-2 px-2.5 py-1.5 rounded-xl border text-xs font-medium transition-all duration-150 ${
                      skill.highlight
                        ? "bg-blue-50/70 dark:bg-blue-950/30 border-blue-200/80 dark:border-blue-800/50 text-blue-900 dark:text-blue-200"
                        : "bg-slate-50 dark:bg-slate-800/60 border-slate-200/70 dark:border-slate-700/60 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <img
                      src={`./img/${skill.logo}.png`}
                      alt={skill.name}
                      className="w-4 h-4 object-contain shrink-0"
                      loading="lazy"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
