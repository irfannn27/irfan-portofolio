import React, { createContext, useContext, useEffect, useState } from "react";

export type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav items
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.navigation_menu": "Navigation Menu",
    "nav.lets_talk": "Let's Talk / Hire Me",
    "nav.open_to_work": "Open for Work & Projects",
    "nav.all_rights": "fann • All rights reserved.",

    // Hero Section
    "hero.greeting": "Hi, I'm",
    "hero.role": "Frontend & Web Developer",
    "hero.bio":
      "Passionate Software Developer crafting modern, high-performance web applications with seamless user experiences.",
    "hero.explore": "Explore Projects",
    "hero.contact": "Contact Me",

    // About Section
    "about.badge": "Biography & Passion",
    "about.title": "🚀 About Me",
    "about.p1":
      "Hello! I am Irfan Putra Pratama, a passionate Frontend & Web Developer based in Sekayu, Palembang (South Sumatra). I specialize in designing and engineering modern, accessible, and high-performance digital experiences.",
    "about.p2":
      "As an active student majoring in Informatics Engineering at Politeknik Sekayu, I continuously bridge academic foundations with modern industry-standard technologies—primarily focusing on the React ecosystem, Next.js, TypeScript, and Tailwind CSS.",
    "about.p3":
      "Beyond frontend aesthetics, I am also well-versed in backend development, API integration, payment gateway implementations, and deploying scalable solutions using Docker on VPS.",
    "about.loc_label": "Location",
    "about.loc_val": "Sekayu, Palembang",
    "about.edu_label": "Education",
    "about.edu_val": "Politeknik Sekayu (IT)",
    "about.focus_label": "Focus",
    "about.focus_val": "Frontend & Web Dev",
    "about.stack_label": "Core Stack",
    "about.stack_val": "React, Next.js, TS",

    // What I Do
    "services.title": "⚡ What I Do",
    "services.s1_title": "Web Development",
    "services.s1_desc":
      "Building fast, modern, and mobile-friendly websites with clean code architecture and optimal performance.",
    "services.s2_title": "UI/UX & Interactive Design",
    "services.s2_desc":
      "Crafting responsive and interactive user interfaces with Tailwind CSS and smooth micro-animations.",
    "services.s3_title": "Backend & API Integration",
    "services.s3_desc":
      "Developing REST APIs, managing database workflows (MongoDB/MySQL), and deploying with Docker on VPS.",

    // Education
    "edu.title": "🎓 Education & Studies",
    "edu.poltek_major": "Informatics Engineering",
    "edu.poltek_period": "August 2024 - Present",
    "edu.poltek_status": "Currently Studying",
    "edu.poltek_desc":
      "Focused on software engineering, modern web development, and database architecture.",
    "edu.smk_major": "Office Automation & Governance",
    "edu.smk_period": "2021 - 2024",
    "edu.smk_status": "Graduated",
    "edu.smk_desc":
      "Studied digital administration, business communications, discipline, and workflow efficiency.",
    "edu.period_label": "Period",

    // Skills
    "skills.title": "💻 Tech & Tools",

    // Projects
    "projects.title": "🚀 Featured Projects",
    "projects.saldaq_desc":
      "SaldaQ is a personal finance management web app designed to easily track expenses, income, monitor wallet balances, and categorize transactions with a clean intuitive dashboard.",
    "projects.klinik_desc":
      "Klinik Smartphone is an interactive landing page designed to introduce smartphone repair services to potential customers, complete with repair categories, customer testimonials, and quick consultation contacts.",
    "projects.duriat_desc":
      "Duriat Food is a dedicated catering website that showcases signature catering packages, including Tumpeng Nasi Kuning and Nasi Box, with menu details and fast customer ordering.",
    "projects.movie_desc":
      "FannMovie is a responsive movie web application featuring curated movie catalogs across Popular, Top Rated, and Upcoming categories with ratings, release dates, and trailer details.",
    "projects.recipes_desc":
      "FannsRecipes is an interactive cooking companion application providing over 1,000+ step-by-step recipes, categorized cooking guides, and instant recipe search for home chefs.",

    // Contact
    "contact.title": "📬 Let's Connect",
    "contact.subtitle":
      "Have a project in mind, an exciting job opportunity, or just want to say hi? Feel free to send a message!",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.message": "Your Message",
    "contact.placeholder_name": "e.g. John Doe",
    "contact.placeholder_email": "name@example.com",
    "contact.placeholder_msg": "Tell me about your project, idea, or questions...",
    "contact.send": "Send Message",
    "contact.sending": "Sending...",
    "contact.success_title": "Message Sent!",
    "contact.success_desc": "Thank you for reaching out! I will get back to you as soon as possible.",
  },
  id: {
    // Nav items
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.projects": "Proyek",
    "nav.contact": "Kontak",
    "nav.navigation_menu": "Menu Navigasi",
    "nav.lets_talk": "Yuk Ngobrol / Hubungi Saya",
    "nav.open_to_work": "Terbuka untuk Kerja & Proyek",
    "nav.all_rights": "fann • Hak Cipta Dilindungi.",

    // Hero Section
    "hero.greeting": "Halo, saya",
    "hero.role": "Frontend & Web Developer",
    "hero.bio":
      "Pengembang Web berdedikasi yang membangun aplikasi web modern berkinerja tinggi dengan pengalaman pengguna yang mulus.",
    "hero.explore": "Lihat Proyek",
    "hero.contact": "Hubungi Saya",

    // About Section
    "about.badge": "Biografi & Dedikasi",
    "about.title": "🚀 Tentang Saya",
    "about.p1":
      "Halo! Saya Irfan Putra Pratama, seorang Frontend & Web Developer yang berdomisili di Sekayu, Palembang (Sumatera Selatan). Saya berspesialisasi dalam merancang dan mengembangkan pengalaman web digital yang modern, responsif, dan berkinerja tinggi.",
    "about.p2":
      "Sebagai mahasiswa aktif jurusan Teknik Informatika di Politeknik Sekayu, saya terus memperdalam teknologi standar industri modern—khususnya ekosistem React, Next.js, TypeScript, dan Tailwind CSS.",
    "about.p3":
      "Selain tampilan antarmuka (frontend), saya juga terbiasa dengan backend development, integrasi REST API, implementasi payment gateway, hingga deployment menggunakan Docker di VPS.",
    "about.loc_label": "Lokasi",
    "about.loc_val": "Sekayu, Palembang",
    "about.edu_label": "Pendidikan",
    "about.edu_val": "Politeknik Sekayu (TI)",
    "about.focus_label": "Fokus",
    "about.focus_val": "Frontend & Web Dev",
    "about.stack_label": "Keahlian Inti",
    "about.stack_val": "React, Next.js, TS",

    // What I Do
    "services.title": "⚡ Layanan & Keahlian",
    "services.s1_title": "Pengembangan Web",
    "services.s1_desc":
      "Membangun website modern, cepat, dan ramah pengguna di perangkat seluler dengan kode yang bersih dan optimal.",
    "services.s2_title": "Desain UI/UX & Interaktif",
    "services.s2_desc":
      "Merancang antarmuka web yang menarik, intuitif, dan responsif dengan Tailwind CSS serta animasi halus.",
    "services.s3_title": "Integrasi Backend & API",
    "services.s3_desc":
      "Mengembangkan REST API, mengelola alur basis data (MongoDB/MySQL), serta deployment menggunakan Docker di VPS.",

    // Education
    "edu.title": "🎓 Riwayat Pendidikan",
    "edu.poltek_major": "Teknik Informatika",
    "edu.poltek_period": "Agustus 2024 - Sekarang",
    "edu.poltek_status": "Sedang Menempuh Studi",
    "edu.poltek_desc":
      "Fokus pada rekayasa perangkat lunak, pengembangan web modern, dan sistem basis data.",
    "edu.smk_major": "Otomatisasi Tata Kelola Perkantoran",
    "edu.smk_period": "2021 - 2024",
    "edu.smk_status": "Lulus",
    "edu.smk_desc":
      "Mempelajari administrasi digital, komunikasi bisnis, kedisiplinan kerja, dan efisiensi alur kerja.",
    "edu.period_label": "Periode",

    // Skills
    "skills.title": "💻 Teknologi & Tools",

    // Projects
    "projects.title": "🚀 Proyek Unggulan",
    "projects.saldaq_desc":
      "SaldaQ adalah aplikasi web manajemen keuangan pribadi untuk mencatat pengeluaran, pemasukan, memantau saldo dompet, dan mengkategorikan transaksi dengan dashboard intuitif.",
    "projects.klinik_desc":
      "Klinik Smartphone adalah landing page interaktif untuk memperkenalkan jasa servis HP ke calon pelanggan, dilengkapi kategori perbaikan, ulasan pelanggan, dan kontak konsultasi cepat.",
    "projects.duriat_desc":
      "Duriat Food adalah website katering kuliner yang menampilkan paket katering andalan, seperti Tumpeng Nasi Kuning dan Nasi Box, lengkap dengan rincian menu dan pemesanan praktis.",
    "projects.movie_desc":
      "FannMovie adalah aplikasi web katalog film responsif dengan daftar film Populer, Rating Tertinggi, dan Akan Datang yang terhubung langsung dengan TMDB API.",
    "projects.recipes_desc":
      "FannsRecipes adalah aplikasi resep masakan interaktif yang menyediakan lebih dari 1.000+ panduan memasak langkah-demi-langkah dan pencarian resep instan.",

    // Contact
    "contact.title": "📬 Hubungi Saya",
    "contact.subtitle":
      "Punya ide proyek, tawaran kerja sama menarik, atau sekadar ingin menyapa? Jangan ragu untuk mengirim pesan!",
    "contact.name": "Nama Anda",
    "contact.email": "Email Anda",
    "contact.message": "Pesan Anda",
    "contact.placeholder_name": "contoh: Noemi",
    "contact.placeholder_email": "nama@email.com",
    "contact.placeholder_msg": "Ceritakan tentang proyek, ide, atau pertanyaan Anda...",
    "contact.send": "Kirim Pesan",
    "contact.sending": "Mengirim...",
    "contact.success_title": "Pesan Terkirim!",
    "contact.success_desc": "Terima kasih sudah menghubungi! Saya akan segera membalas pesan Anda.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("portfolio_lang") as Language | null;
    if (saved === "id" || saved === "en") return saved;
    return "en"; // Default to English for global portfolio reach
  });

  useEffect(() => {
    localStorage.setItem("portfolio_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "id" : "en"));
  };

  const t = (key: string): string => {
    return translations[language][key] || translations["en"][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
