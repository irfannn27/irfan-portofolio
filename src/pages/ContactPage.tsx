import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-[100dvh] w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-20 transition-colors duration-300 relative overflow-x-hidden">
      <div className="absolute top-[-5%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/15 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-5%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-indigo-500/10 dark:bg-purple-600/15 blur-[120px] pointer-events-none"></div>

      <Navbar/>
      <div className="relative z-0">
        <ContactForm/>
      </div>
    </div>
  );
}