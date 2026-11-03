import { HiCode, HiOutlineGlobeAlt, HiOutlineShoppingBag, HiOutlineDatabase, HiOutlineSparkles } from "react-icons/hi";
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
      badgeKey: "services.s1_badge",
      icon: <HiOutlineGlobeAlt className="text-2xl text-blue-500" />,
      title: t("services.s1_title"),
      description: t("services.s1_desc"),
      reference: t("services.s1_ref"),
    },
    {
      badgeKey: "services.s2_badge",
      icon: <HiOutlineShoppingBag className="text-2xl text-rose-500" />,
      title: t("services.s2_title"),
      description: t("services.s2_desc"),
      reference: t("services.s2_ref"),
    },
    {
      badgeKey: "services.s3_badge",
      icon: <HiOutlineDatabase className="text-2xl text-emerald-500" />,
      title: t("services.s3_title"),
      description: t("services.s3_desc"),
      reference: t("services.s3_ref"),
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

      {/* 2. Quick Highlight Stats Bento Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 rounded-3xl bg-white/90 dark:bg-slate-900/80 border border-slate-200/90 dark:border-white/[0.08] shadow-sm flex items-center gap-3.5 transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40"
          >
            <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 shadow-inner">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Client Services & Digital Solutions - Clean Bespoke Bento Grid (Zero AI Slop) */}
      <div className="pt-10 sm:pt-14">
        <div className="mb-6 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase">
            <HiOutlineSparkles className="text-sm" />
            <span>{t("services.badge")}</span>
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            {t("services.title")}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-inner group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/80">
                    {service.badgeKey ? t(service.badgeKey) : ""}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              {/* Real Local Project Reference */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span className="truncate">{service.reference}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
