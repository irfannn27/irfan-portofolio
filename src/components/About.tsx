import { HiOutlineGlobeAlt, HiOutlineShoppingBag, HiOutlineDatabase } from "react-icons/hi";
import { FaMapMarkerAlt, FaGraduationCap, FaCheckCircle, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const metadata = [
    {
      icon: <FaMapMarkerAlt className="text-slate-400 dark:text-slate-500 text-sm" />,
      label: t("about.loc_label"),
      value: t("about.loc_val"),
    },
    {
      icon: <FaGraduationCap className="text-slate-400 dark:text-slate-500 text-sm" />,
      label: t("about.edu_label"),
      value: t("about.edu_val"),
    },
    {
      icon: <FaCheckCircle className="text-emerald-500 text-sm" />,
      label: t("about.status_label"),
      value: t("about.status_val"),
      isLive: true,
    },
    {
      icon: <FaLaptopCode className="text-slate-400 dark:text-slate-500 text-sm" />,
      label: t("about.focus_label"),
      value: t("about.focus_val"),
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
    <section className="w-full flex flex-col gap-10 sm:gap-14">
      {/* 1. Human Story & Editorial Narrative */}
      <div>
        <h1 className="font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-tight max-w-3xl">
          {t("about.title")}
        </h1>

        <div className="text-slate-600 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed mt-6 max-w-3xl">
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
      </div>

      {/* 2. Understated Editorial Metadata Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.06]">
        {metadata.map((item, index) => (
          <div key={index} className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              {item.icon}
              <span className="font-medium text-[11px] uppercase tracking-wider">{item.label}</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-1.5 mt-0.5">
              {item.isLive && (
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              )}
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* 3. Client Services & Digital Solutions Bento Grid (Zero AI Slop) */}
      <div>
        <div className="mb-6 space-y-1.5">
          <h2 className="font-extrabold text-xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
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
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-7 rounded-2xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-blue-500/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-200 shadow-inner group-hover:scale-105 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/80">
                    {service.badgeKey ? t(service.badgeKey) : ""}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight mb-2">
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
    </section>
  );
};

export default About;
