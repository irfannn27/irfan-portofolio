import { HiExternalLink } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  tech: Array<string>;
  link?: string;
}

export default function CardProject({ title, description, image, tech, link }: CardProjectProps){
  const { t } = useLanguage();
  const imageSrc = image.startsWith('http') || image.startsWith('/') || image.startsWith('./')
    ? image
    : image.includes('.')
      ? `./img/${image}`
      : `./img/${image}.png`;

  return (
    <div className="w-full flex flex-col md:flex-row bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-slate-500 rounded-2xl p-4 sm:p-5 font-poppins shadow-sm hover:shadow-lg transition-all duration-300 gap-4 sm:gap-6">
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/50 shadow-inner group/img relative">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-xl w-full h-[180px] sm:h-[220px] object-cover object-top hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = './img/bg.jpg';
          }}
        />
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] rounded-xl"
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-blue-500/30 transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
              {t("projects.visit_site")} <HiExternalLink className="text-base" />
            </span>
          </a>
        )}
      </div>
      <div className="w-full md:w-1/2 p-1 sm:p-2 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h2 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-wide">{title}</h2>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline shrink-0 pt-1"
                title={t("projects.visit_site")}
              >
                <span>{t("projects.visit_site")}</span>
                <HiExternalLink className="text-base" />
              </a>
            )}
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">{description}</p>
        </div>
        
        <div>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2">Technologies Used</p>
          <ul className="flex flex-wrap gap-2 items-center">
            {tech.map((el, index) => (
              <li key={index} className="inline-flex">
                <img src={el} alt="tech badge" className="rounded shadow-sm max-h-5 sm:max-h-6" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}