import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <div className="relative min-h-[100dvh] w-full flex flex-col justify-between overflow-x-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative ambient glowing circles for sleek aesthetic */}
      <div className="absolute top-[-5%] left-[-10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/20 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] rounded-full bg-indigo-500/10 dark:bg-purple-600/20 blur-[100px] sm:blur-[130px] pointer-events-none"></div>
      
      {/* Subtle texture overlay without buggy bg-fixed */}
      <div className="absolute inset-0 bg-[url('/img/bg.jpg')] bg-cover bg-center opacity-[0.07] dark:opacity-[0.25] pointer-events-none"></div>

      <Navbar/>

      <main className="relative z-0 flex-1 flex items-center justify-center w-full px-4 pt-14 pb-4 sm:py-8">
        <HeroSection/>
      </main>

      <footer className="relative z-10 text-center py-3 text-[11px] sm:text-xs text-slate-400 dark:text-slate-500 tracking-wider">
        © {new Date().getFullYear()} fann
      </footer>
    </div>
  );
}