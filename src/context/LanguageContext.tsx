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
    "hero.available": "Available for new projects",
    "hero.role": "Full-Stack Web Developer",
    "hero.bio":
      "Full-Stack Web Developer building modern websites and high-performance application systems. Open for client projects, business websites, e-commerce, and custom digital solutions.",
    "hero.explore": "Explore Projects",
    "hero.contact": "Contact Me",

    // About Section
    "about.badge": "Biography & Focus",
    "about.title": "About Me",
    "about.p1":
      "Irfan Putra Pratama is a Full-Stack Web Developer and Informatics Engineering student at Politeknik Sekayu, dedicated to building clean, accessible, and high-performance websites and custom application systems.",
    "about.p2":
      "Currently pursuing my degree at Politeknik Sekayu with an outstanding academic record (GPA 3.90/4.00), I focus primarily on modern web ecosystems including React 18, Next.js, TypeScript, and Tailwind CSS.",
    "about.p3":
      "My engineering experience covers both intuitive user interfaces and practical backend services—ranging from RESTful API architecture and relational/document databases (MySQL, MongoDB) to deploying containerized production applications using Docker on Linux VPS.",
    "about.loc_label": "Location",
    "about.loc_val": "Sekayu, Palembang",
    "about.edu_label": "Education",
    "about.edu_val": "Politeknik Sekayu (IT)",
    "about.focus_label": "Focus",
    "about.focus_val": "Full-Stack & Web Dev",
    "about.stack_label": "Core Stack",
    "about.stack_val": "React, Next.js, TS",

        // Client Services & Digital Solutions
    "services.badge": "Services & Solutions",
    "services.title": "Client Services & Solutions",
    "services.subtitle": "Delivering reliable, tailored digital solutions for businesses, institutions, and modern brands.",
    "services.s1_badge": "Web Presence",
    "services.s1_title": "Corporate & Government Portals",
    "services.s1_desc":
      "Professional corporate profiles, government portals, and modern high-converting landing pages tailored to establish trust and credibility across all devices.",
    "services.s1_ref": "Featured: Bagian Umum Setda Muba • Klinik Smartphone",
    "services.s2_badge": "E-Commerce",
    "services.s2_title": "Online Stores & Product Catalogs",
    "services.s2_desc":
      "Interactive product showcases, culinary ordering websites, and seamless catalog platforms designed for retail, food services, and personal shopper businesses.",
    "services.s2_ref": "Featured: FarahShop • Duriat Food Catering",
    "services.s3_badge": "Full-Stack System",
    "services.s3_title": "Custom Web Applications & Data Systems",
    "services.s3_desc":
      "Tailored internal tools, finance management, student attendance, and operational dashboards with secure database storage and automated workflows.",
    "services.s3_ref": "Featured: SaldaQ Personal Finance • Attendance System",

    // Education
    "edu.title": "Education & Academic Background",
    "edu.poltek_major": "Informatics Engineering",
    "edu.poltek_period": "August 2024 - Present",
    "edu.poltek_status": "Currently Studying",
    "edu.poltek_gpa": "GPA 3.90 / 4.00",
    "edu.poltek_desc":
      "Pursuing a degree in Informatics Engineering with an outstanding academic record (GPA 3.90). Focused on modern software engineering, web application architecture, and database systems.",
    "edu.period_label": "Period",
    "edu.gpa_label": "Academic Performance",
    "edu.focus_label": "Focus Area",
    "edu.focus_val": "Software & Web Engineering",

    // Skills
    "skills.title": "Technical Ecosystem & Stack",
    "skills.subtitle": "Modern frameworks, languages, databases, and developer workflows I use to engineer robust products.",
    "skills.cat_frontend": "Frontend & UI Architecture",
    "skills.cat_backend": "Backend & Database Systems",
    "skills.cat_tools": "Workflow, DevOps & Design",

    // Projects
    "projects.title": "Featured Projects",
    "projects.explore_all": "Explore All Projects & Works",
    "projects.subtitle": "A curated showcase of real-world digital solutions, official platforms, and modern web applications.",
    "projects.visit_site": "Visit Website",
    "projects.status_live": "Live",
    "projects.filter_all": "All",
    "projects.filter_gov": "Government",
    "projects.filter_commerce": "Commerce",
    "projects.filter_apps": "Apps",
    "projects.setdamuba_desc":
      "Official web portal for Bagian Umum Sekretariat Daerah Kabupaten Musi Banyuasin, providing public administration information, organizational profiles, event galleries, and venue loan SOP services.",
    "projects.rrfnnn_desc":
      "Official high-performance portfolio web platform showcasing curated digital projects, technical expertise, and engineering achievements with a modern, fast, and responsive user interface.",
    "projects.farahshop_desc":
      "FarahShop is an interactive e-commerce and catalog web platform offering curated products, culinary delights, photo printing, and personal shopper (jastip) services with a modern responsive UI.",
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
    "contact.title": "Let's Connect",
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
    "hero.available": "Terbuka untuk proyek baru",
    "hero.role": "Full-Stack Web Developer",
    "hero.bio":
      "Full-Stack Web Developer yang membangun website modern dan aplikasi sistem berkinerja tinggi. Siap melayani jasa pembuatan website bisnis, toko online, hingga sistem manajemen data kustom.",
    "hero.explore": "Lihat Proyek",
    "hero.contact": "Hubungi Saya",

    // About Section
    "about.badge": "Biografi & Dedikasi",
    "about.title": "Tentang Saya",
    "about.p1":
      "Irfan Putra Pratama adalah seorang Full-Stack Web Developer dan mahasiswa Teknik Informatika di Politeknik Sekayu. Berpengalaman membangun website bisnis modern, landing page interaktif, hingga aplikasi sistem manajemen data yang andal dan mudah digunakan.",
    "about.p2":
      "Saat ini aktif menempuh studi di Politeknik Sekayu dengan IPK 3.90/4.00, mendalami teknologi web standar industri—khususnya ekosistem React 18, Next.js, TypeScript, dan Tailwind CSS.",
    "about.p3":
      "Selain pengembangan antarmuka (frontend), saya juga berpengalaman dalam integrasi RESTful API, perancangan database (MySQL, MongoDB), serta deployment aplikasi menggunakan Docker di lingkungan server Linux VPS.",
    "about.loc_label": "Lokasi",
    "about.loc_val": "Sekayu, Palembang",
    "about.edu_label": "Pendidikan",
    "about.edu_val": "Politeknik Sekayu (TI)",
    "about.focus_label": "Fokus",
    "about.focus_val": "Full-Stack & Web Dev",
    "about.stack_label": "Keahlian Inti",
    "about.stack_val": "React, Next.js, TS",

        // Client Services & Digital Solutions
    "services.badge": "Layanan & Solusi",
    "services.title": "Layanan & Solusi Digital",
    "services.subtitle": "Membantu instansi, bisnis, dan UMKM membangun solusi digital yang andal dari konsep hingga deployment.",
    "services.s1_badge": "Profil Bisnis",
    "services.s1_title": "Website Bisnis & Instansi Resmi",
    "services.s1_desc":
      "Pembuatan website profil perusahaan, instansi pemerintahan, dan landing page modern yang cepat, elegan, dan meningkatkan kepercayaan klien di semua perangkat.",
    "services.s1_ref": "Karya: Bagian Umum Setda Muba • Klinik Smartphone",
    "services.s2_badge": "Toko Online",
    "services.s2_title": "Toko Online & Katalog Produk",
    "services.s2_desc":
      "Platform katalog interaktif, website pemesanan katering/kuliner, dan etalase belanja digital yang praktis untuk UMKM, retail, maupun jasa titip (jastip).",
    "services.s2_ref": "Karya: FarahShop • Duriat Food Catering",
    "services.s3_badge": "Sistem Full-Stack",
    "services.s3_title": "Aplikasi Sistem & Manajemen Data",
    "services.s3_desc":
      "Perancangan sistem informasi kustom, aplikasi pembukuan keuangan/kas, sistem absensi, dan dashboard operasional dengan basis data yang rapi dan aman.",
    "services.s3_ref": "Karya: SaldaQ Personal Finance • Attendance System",

    // Education
    "edu.title": "Riwayat Pendidikan",
    "edu.poltek_major": "Teknik Informatika",
    "edu.poltek_period": "Agustus 2024 - Sekarang",
    "edu.poltek_status": "Sedang Menempuh Studi",
    "edu.poltek_gpa": "IPK 3.90 / 4.00",
    "edu.poltek_desc":
      "Menempuh studi Teknik Informatika dengan prestasi akademik istimewa (IPK 3.90). Berfokus pada rekayasa perangkat lunak modern, arsitektur web, dan sistem basis data.",
    "edu.period_label": "Periode",
    "edu.gpa_label": "Prestasi Akademik",
    "edu.focus_label": "Fokus Studi",
    "edu.focus_val": "Rekayasa Web & Perangkat Lunak",

    // Skills
    "skills.title": "Ekosistem & Keahlian Teknis",
    "skills.subtitle": "Framework modern, bahasa pemrograman, database, dan alur kerja pengembangan yang saya gunakan untuk membangun produk andal.",
    "skills.cat_frontend": "Arsitektur Frontend & UI",
    "skills.cat_backend": "Sistem Backend & Database",
    "skills.cat_tools": "Tools, Alur Kerja & Desain",

    // Projects
    "projects.title": "Proyek Unggulan",
    "projects.explore_all": "Jelajahi Semua Proyek & Karya",
    "projects.subtitle": "Koleksi proyek nyata, platform resmi, dan aplikasi web modern yang telah saya rancang & kembangkan.",
    "projects.visit_site": "Kunjungi Web",
    "projects.status_live": "Live",
    "projects.filter_all": "Semua",
    "projects.filter_gov": "Pemerintah",
    "projects.filter_commerce": "Commerce",
    "projects.filter_apps": "Aplikasi",
    "projects.setdamuba_desc":
      "Website resmi Bagian Umum Sekretariat Daerah Kabupaten Musi Banyuasin untuk menyajikan informasi profil bagian, struktur organisasi, galeri kegiatan, serta transparansi SOP peminjaman tempat.",
    "projects.rrfnnn_desc":
      "Platform website portofolio resmi berkinerja tinggi yang menampilkan kurasi proyek digital, keahlian teknis, dan pencapaian dengan antarmuka modern yang cepat dan responsif.",
    "projects.farahshop_desc":
      "FarahShop adalah platform katalog & belanja online serba ada untuk pemesanan berbagai produk, aneka kuliner/makanan, cetak foto, hingga layanan jasa titip (jastip) dengan tampilan modern dan responsif.",
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
    "contact.title": "Hubungi Saya",
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
