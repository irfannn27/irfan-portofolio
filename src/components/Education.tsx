import { FaUniversity, FaCalendarAlt, FaAward, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <section className="w-full">
      <div className="mb-6 space-y-1.5">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {t("edu.eyebrow")}
          </span>
          <span className="h-px w-8 bg-emerald-500/30" />
        </div>

        <h2 className="font-extrabold text-xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
          {t("edu.title")}
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4 }}
        className="w-full rounded-2xl p-6 sm:p-8 bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shrink-0">
                <FaUniversity className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                  Politeknik Sekayu
                </h3>
                <p className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                  {t("edu.poltek_major")}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {t("edu.poltek_desc")}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                <FaAward className="text-amber-500 text-base shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                    {t("edu.gpa_label")}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {t("edu.poltek_gpa")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                <FaCalendarAlt className="text-blue-500 text-sm shrink-0" />
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500 tracking-wider">
                    {t("edu.period_label")}
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                    {t("edu.poltek_period")}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60">
                <FaLaptopCode className="text-indigo-500 text-sm shrink-0" />
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
        </div>
      </motion.div>
    </section>
  );
}
