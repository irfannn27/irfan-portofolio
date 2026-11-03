import About from "../components/About";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-24 transition-colors duration-300 relative overflow-x-hidden">
      {/* Clean architectural engineering dot-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800d_1px,transparent_1px),linear-gradient(to_bottom,#8080800d_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <Navbar />

      <main className="relative z-0 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-44 pt-24 sm:pt-28 md:pt-32 max-w-7xl mx-auto space-y-16 sm:space-y-20">
        <About />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
