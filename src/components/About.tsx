import { HiCode, HiOutlineGlobeAlt, HiOutlineServer, HiOutlineSparkles } from "react-icons/hi";
import { FaMapMarkerAlt, FaGraduationCap, FaLaptopCode, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <FaMapMarkerAlt className="text-rose-500 text-lg" />,
      label: t("about.loc_label"),
      value: t("about.loc_val"),
    },
    {
      icon: <FaGraduationCap className="text-blue-500 text-lg" />,
      label: t("about.edu_label"),
      value: t("about.edu_val"),
    },
    {
      icon: <FaLaptopCode className="text-indigo-500 text-lg" />,
      label: t("about.focus_label"),
      value: t("about.focus_val"),
    },
    {
      icon: <FaRocket className="text-amber-500 text-lg" />,
      label: t("about.stack_label"),
      value: t("about.stack_val"),
    },
  ];

  const services = [
    {
      icon: <HiOutlineGlobeAlt className="text-2xl text-blue-500" />,
      accent: "from-blue-500 via-indigo-500 to-cyan-500",
      title: t("services.s1_title"),
      description: t("services.s1_desc"),
      highlights: ["React 18 & Next.js", "TypeScript Architecture", "Tailwind CSS", "Responsive Mobile-First"],
    },
    {
      icon: <HiOutlineSparkles className="text-2xl text-purple-500" />,
      accent: "from-purple-500 via-pink-500 to-rose-500",
      title: t("services.s2_title"),
      description: t("services.s2_desc"),
      highlights: ["Framer Motion Physics", "Micro-Interactions", "Clean Typography", "Custom Interaction Design"],
    },
    {
      icon: <HiOutlineServer className="text-2xl text-emerald-500" />,
      accent: "from-emerald-500 via-teal-500 to-cyan-500",
      title: t("services.s3_title"),
      description: t("services.s3_desc"),
      highlights: ["Node.js & Express", "MongoDB & MySQL", "RESTful API Design", "Docker VPS Deployment"],
    },
  ];

  return (
    <div className="section section-2">
      {/* 1. Header & Story Text */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-3">
          <HiCode className="text-sm" />
          <span>{t("about.badge")}</span>
        </div>

        <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
          {t("about.title")}
        </h1>

        <div className="text-slate-600 dark:text-slate-300 space-y-3.5 text-sm sm:text-base leading-relaxed mt-4">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
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

      {/* 3. What I Do / Services - Scroll-Craft Sticky Stacking Cards */}
      <div className="pt-10 sm:pt-14">
        <div className="mb-6 space-y-1">
          <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
            {t("services.title")}
          </h2>
        </div>

        {/* Sticky Stacking Track (Scroll-Craft Pattern) */}
        <div className="flex flex-col gap-6 relative pb-16">
          {services.map((service, index) => {
            const topOffset = 84 + index * 20; // 84px, 104px, 124px
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                style={{
                  top: `${topOffset}px`,
                }}
                className="sticky w-full rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/50 transition-all duration-300 group overflow-hidden"
              >
                {/* Accent line on top of each card */}
                <div
                  className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${service.accent}`}
                />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                        {service.icon}
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        Pillar 0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Capabilities / Tech Stack Pills */}
                  <div className="flex flex-wrap md:flex-col gap-2 shrink-0 md:min-w-[200px]">
                    {service.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-700 dark:text-slate-300"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;





