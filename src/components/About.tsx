import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paragraphsRef = useRef<HTMLParagraphElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Title
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
        );
      }

      // Animate Paragraphs with smooth stagger
      if (paragraphsRef.current.length > 0) {
        gsap.fromTo(
          paragraphsRef.current,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.18,
            ease: "power2.out",
            delay: 0.15,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="section section-2" ref={containerRef}>
      <h1
        ref={titleRef}
        className="font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white flex items-center gap-2"
      >
        🚀 About Me
      </h1>
      <div className="text-slate-600 dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
        <p
          ref={(el) => (paragraphsRef.current[0] = el!)}
          className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm transition-all hover:border-blue-400/50"
        >
          Hello, I am Irfan Putra Pratama, a Frontend Web Developer with additional experience in programming. Based in Sekayu, Palembang (South Sumatra), I am deeply passionate about building modern, responsive web applications that deliver an excellent user experience.
        </p>
        <p
          ref={(el) => (paragraphsRef.current[1] = el!)}
          className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm transition-all hover:border-blue-400/50"
        >
          As an active student at Politeknik Sekayu, I have gained a solid technical foundation. I continuously refine my expertise in frontend technologies—such as React, NextJS, TypeScript, and Tailwind CSS—to create clean and intuitive web interfaces.
        </p>
        <p
          ref={(el) => (paragraphsRef.current[2] = el!)}
          className="p-4 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-sm shadow-sm transition-all hover:border-blue-400/50"
        >
          In my capacity as a Programmer, I am experienced in designing UI/UX, architecting application workflows, and developing both frontend and backend systems. I build and optimize web applications, integrate APIs, and implement payment gateways. Furthermore, I manage the deployment process using Docker on VPS, ensuring that the solutions I deliver are both efficient and scalable.
        </p>
      </div>
    </div>
  );
};

export default About;



