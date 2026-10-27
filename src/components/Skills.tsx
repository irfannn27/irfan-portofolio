export default function Skills(){
  const logos: string[] = ['html-5', 'css', 'js', 'bootstrap', 'tailwindcss', 'react', 'nextjs', 'node', 'typescript', 'express', 'mongo', 'python', 'php', 'laravel', 'mysql', 'figma', 'postman']
  
  return(
    <div className="section section-2 pt-8 sm:pt-10 pb-16">
      <h1 className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2">
        💻 Tech & Tools
      </h1>
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center sm:justify-start mt-2">
        {
          logos.map((el, index) => (
            <div 
              key={index} 
              className="p-3 sm:p-4 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-400 dark:hover:border-slate-500 hover:scale-110 transition-all duration-200 flex items-center justify-center w-[64px] h-[64px] sm:w-[80px] sm:h-[80px]"
              title={el.toUpperCase()}
            >
              <img src={`./img/${el}.png`} alt={`${el}`} className="w-[36px] h-[36px] sm:w-[46px] sm:h-[46px] object-contain"/>
            </div>
          ))
        }
      </div>
    </div>
  )
}


