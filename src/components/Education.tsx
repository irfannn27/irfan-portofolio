import { FaUniversity, FaAward, FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <div className="section section-2 pt-8 sm:pt-10">
      <div className="mb-4 space-y-1">
        <h1 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2 tracking-tight">
          {t("edu.title")}
        </h1>
      </div>

      {/* Featured Education Card - Scroll-Craft Entrance */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        whileHover={{ y: -4 }}
        className="relative w-full rounded-3xl p-6 sm:p-8 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/50 transition-all duration-300 overflow-hidden group"
      >
        {/* Top accent gradient line */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500" />

        {/* Ambient subtle corner glow */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br from-emerald-500/10 to-blue-500/0 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
          {/* Main Institution & Major */}
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center shadow-inner shrink-0">
                <FaUniversity className="text-2xl text-emerald-500" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-slate-900 dark:text-white">
                  Politeknik Sekayu
                </h2>
                <p className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {t("edu.poltek_major")}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("edu.poltek_desc")}
            </p>

            {/* Quick Metrics & Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
              {/* GPA Metric */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25">
                <FaAward className="text-amber-500 text-lg shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-400 tracking-wider">
                    {t("edu.gpa_label")}
                  </p>
                  <p className="text-sm font-extrabold text-amber-700 dark:text-amber-300">
                    {t("edu.poltek_gpa")}
                  </p>
                </div>
              </div>

              {/* Period Metric */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
                <FaCalendarAlt className="text-blue-500 text-base shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                    {t("edu.period_label")}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {t("edu.poltek_period")}
                  </p>
                </div>
              </div>

              {/* Focus Metric */}
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/80">
                <FaLaptopCode className="text-indigo-500 text-base shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                    {t("edu.focus_label")}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {t("edu.focus_val")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Status & GPA Badges Header for Desktop */}
          <div className="flex sm:flex-col items-start sm:items-end gap-2.5 shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {t("edu.poltek_status")}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30 shadow-xs">
              ⭐ {t("edu.poltek_gpa")}
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
