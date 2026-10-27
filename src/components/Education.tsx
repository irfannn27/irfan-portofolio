import { FaGraduationCap, FaUniversity } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  const educationList = [
    {
      institution: "Politeknik Sekayu",
      major: t("edu.poltek_major"),
      period: t("edu.poltek_period"),
      status: t("edu.poltek_status"),
      badgeColor: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
      icon: <FaUniversity className="text-xl text-emerald-500" />,
      description: t("edu.poltek_desc"),
    },
    {
      institution: "SMK Negeri 1 Sekayu",
      major: t("edu.smk_major"),
      period: t("edu.smk_period"),
      status: t("edu.smk_status"),
      badgeColor: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border-blue-500/30",
      icon: <FaGraduationCap className="text-xl text-blue-500" />,
      description: t("edu.smk_desc"),
    },
  ];

  return (
    <div className="section section-2 pt-8 sm:pt-10">
      <h1 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2">
        {t("edu.title")}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2">
        {educationList.map((item, index) => (
          <div
            key={index}
            className="w-full bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 p-5 sm:p-6 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-slate-500 transition-all duration-300 flex flex-col justify-between gap-3"
          >
            <div>
              <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/70">
                    {item.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-900 dark:text-white">
                      {item.institution}
                    </h2>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {item.major}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-medium border ${item.badgeColor}`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
            <div className="pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>{t("edu.period_label")}</span>
              <span className="font-medium text-slate-700 dark:text-slate-300">{item.period}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


