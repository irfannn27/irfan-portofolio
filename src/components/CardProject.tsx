interface CardProjectProps {
  title: string;
  description: string;
  image: string;
  tech: Array<string>;
}

export default function CardProject({ title, description, image, tech }: CardProjectProps){
  const imageSrc = image.startsWith('http') || image.startsWith('/') || image.startsWith('./')
    ? image
    : image.includes('.')
      ? `./img/${image}`
      : `./img/${image}.png`;

  return (
    <div className="w-full flex flex-col md:flex-row bg-white dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700/80 hover:border-blue-400 dark:hover:border-slate-500 rounded-2xl p-4 sm:p-5 font-poppins shadow-sm hover:shadow-lg transition-all duration-300 gap-4 sm:gap-6">
      <div className="w-full md:w-1/2 flex justify-center items-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900/50 shadow-inner">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-xl w-full h-[180px] sm:h-[220px] object-cover object-top hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = './img/bg.jpg';
          }}
        />
      </div>
      <div className="w-full md:w-1/2 p-1 sm:p-2 flex flex-col justify-between gap-4">
        <div className="space-y-2">
          <h2 className="font-bold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-wide">{title}</h2>
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