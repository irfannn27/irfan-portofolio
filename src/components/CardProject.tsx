import { HiExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export interface CardProjectProps {
  title: string;
  categoryTag?: string;
  description: string;
  image: string;
  tech: Array<string>;
  link?: string;
  index?: number;
}

export default function CardProject({
  title,
  categoryTag,
  description,
  image,
  tech,
  link,
  index = 0,
}: CardProjectProps) {
  const { t } = useLanguage();
  const imageSrc =
    image.startsWith("http") || image.startsWith("/") || image.startsWith("./")
      ? image
      : image.includes(".")
      ? `./img/${image}`
      : `./img/${image}.png`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: Math.min(index * 0.08, 0.35),
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative w-full flex flex-col md:flex-row bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-slate-800 rounded-3xl p-5 sm:p-6 font-poppins shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-indigo-500/15 hover:border-blue-400/80 dark:hover:border-blue-500/60 transition-all duration-300 gap-5 sm:gap-7 overflow-hidden"
    >
      {/* Subtle ambient spotlight behind card on hover */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Image Preview Container */}
      <div className="w-full md:w-[48%] flex justify-center items-center overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200/70 dark:border-slate-800/90 relative group/img aspect-[16/10] shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-500 ease-out"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "./img/bg.jpg";
          }}
        />

        {/* Live Status indicator pill */}
        {link && (
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 dark:bg-slate-950/90 text-white text-[11px] font-medium backdrop-blur-md border border-white/10 shadow-sm pointer-events-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t("projects.status_live")}</span>
          </div>
        )}

        {/* Hover overlay with button */}
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-xl shadow-blue-600/40 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300"
            >
              <span>{t("projects.visit_site")}</span>
              <HiExternalLink className="text-base" />
            </motion.span>
          </a>
        )}
      </div>

      {/* Content Details */}
      <div className="w-full md:w-[52%] flex flex-col justify-between gap-5 relative z-10">
        <div className="space-y-3">
          {/* Category Tag & Live Link Header */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            {categoryTag && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide border border-slate-200 dark:border-slate-700/80">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                <span>{categoryTag}</span>
              </span>
            )}
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 2 }}
                className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                title={t("projects.visit_site")}
              >
                <span>{t("projects.visit_site")}</span>
                <HiExternalLink className="text-sm transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </motion.a>
            )}
          </div>

          <h2 className="font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-snug">
            {title}
          </h2>

          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technologies List */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
          <p className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">
            Tech Stack
          </p>
          <ul className="flex flex-wrap gap-2 items-center">
            {tech.map((el, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex"
              >
                <img
                  src={el}
                  alt="tech badge"
                  className="rounded-md shadow-xs max-h-5 sm:max-h-6 filter dark:brightness-95 hover:filter-none transition-all"
                />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  );
}
