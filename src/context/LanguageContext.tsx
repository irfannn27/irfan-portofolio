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

    // About Section (Human & Authentic Narrative)
    "about.eyebrow": "01 // PROFILE",
    "about.title": "About Me",
    "about.p1":
      "Hi, I'm Irfan Putra Pratama — a full-stack web developer based in South Sumatra, Indonesia. I specialize in building fast, practical websites and custom management systems for businesses, institutions, and modern brands.",
    "about.p2":
      "My passion started with a simple drive: using code to solve everyday workflow headaches. Currently studying Informatics Engineering at Politeknik Sekayu (GPA 3.90/4.00), I actively partner with clients to deliver real-world digital solutions — ranging from official government portals and e-commerce catalogs to automated financial and attendance systems.",
    "about.p3":
      "To me, great development isn't about chasing buzzwords or bloated frameworks. It's about delivering stable software that loads instantly on mobile, feels effortless to use, and helps people get work done.",
    "about.loc_label": "Location",
    "about.loc_val": "Palembang & Sekayu, ID",
    "about.edu_label": "Education",
    "about.edu_val": "Politeknik Sekayu (D3 TI)",
    "about.status_label": "Availability",
    "about.status_val": "Open for Projects",
    "about.focus_label": "Core Focus",
    "about.focus_val": "Web & System Solutions",

    // Client Services & Digital Solutions
    "services.eyebrow": "02 // CLIENT SOLUTIONS",
    "services.title": "What I Build for Clients & Businesses",
    "services.subtitle": "From business identity to internal automation, here are the digital solutions I deliver end-to-end.",
    "services.s1_badge": "Web Presence",
    "services.s1_title": "Corporate & Government Portals",
    "services.s1_desc":
      "Clean, modern websites and landing pages built to establish instant credibility, communicate official services clearly, and perform flawlessly across all mobile devices.",
    "services.s1_ref": "Featured: Bagian Umum Setda Muba • Klinik Smartphone",
    "services.s2_badge": "E-Commerce",
    "services.s2_title": "Online Stores & Product Catalogs",
    "services.s2_desc":
      "Interactive shopping platforms, food catering showcases, and digital catalogs designed to help retail and culinary businesses receive customer orders effortlessly.",
    "services.s2_ref": "Featured: FarahShop • Duriat Food Catering",
    "services.s3_badge": "Custom System",
    "services.s3_title": "Custom Web Applications & Data Systems",
    "services.s3_desc":
      "Tailored internal tools, finance management, student attendance, and administrative dashboards that replace messy spreadsheets with secure, automated workflows.",
    "services.s3_ref": "Featured: SaldaQ Personal Finance • Attendance System",

    // Education
    "edu.eyebrow": "03 // BACKGROUND",
    "edu.title": "Academic Journey & Fundamentals",
    "edu.poltek_major": "D3 Informatics Engineering",
    "edu.poltek_period": "2024 — Present",
    "edu.poltek_status": "Active Student",
    "edu.poltek_gpa": "GPA 3.90 / 4.00",
    "edu.poltek_desc":
      "Studying Informatics Engineering at Politeknik Sekayu with top academic performance (GPA 3.90). Grounding practical client work with deep fundamentals in Software Engineering, Relational & NoSQL Databases, Web Architecture, and System Design.",
    "edu.period_label": "Timeline",
    "edu.gpa_label": "Academic Standing",
    "edu.focus_label": "Core Study",
    "edu.focus_val": "Software & Web Engineering",

    // Skills
    "skills.eyebrow": "04 // TOOLKIT",
    "skills.title": "Technologies & Development Stack",
    "skills.subtitle": "The dependable languages, frameworks, databases, and tools I use to bring ideas into production.",
    "skills.cat_frontend": "Frontend & Interface",
    "skills.cat_backend": "Backend & Database",
    "skills.cat_tools": "DevOps, Tools & Design",

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

    // About Section (Human & Authentic Narrative)
    "about.eyebrow": "01 // PROFIL",
    "about.title": "Tentang Saya",
    "about.p1":
      "Halo, saya Irfan Putra Pratama — full-stack web developer asal Palembang/Sekayu. Saya fokus membantu bisnis, instansi pemerintahan, dan pelaku UMKM membangun website yang profesional serta aplikasi sistem manajemen data yang praktis.",
    "about.p2":
      "Perjalanan saya berawal dari ketertarikan menyelesaikan kendala kerja nyata lewat kode. Saat ini saya menempuh studi Teknik Informatika di Politeknik Sekayu (IPK 3.90/4.00), sambil aktif mengerjakan proyek klien — mulai dari portal resmi pemerintahan daerah, toko online dan katalog produk, hingga sistem pencatatan keuangan dan absensi.",
    "about.p3":
      "Prinsip saya sederhana: website yang bagus bukan sekadar tampilan animasi yang ramai, melainkan sistem di baliknya yang bekerja stabil, cepat dibuka dari HP, dan beneran mempermudah urusan bisnis Anda.",
    "about.loc_label": "Lokasi",
    "about.loc_val": "Palembang & Sekayu, ID",
    "about.edu_label": "Pendidikan",
    "about.edu_val": "Politeknik Sekayu (D3 TI)",
    "about.status_label": "Ketersediaan",
    "about.status_val": "Siap Terima Proyek",
    "about.focus_label": "Fokus Utama",
    "about.focus_val": "Web & Sistem Digital",

    // Client Services & Digital Solutions
    "services.eyebrow": "02 // LAYANAN KLIEN",
    "services.title": "Solusi Digital yang Siap Saya Bangun",
    "services.subtitle": "Mulai dari profil bisnis resmi hingga sistem automasi internal, berikut solusi yang bisa saya bantu wujudkan.",
    "services.s1_badge": "Profil Bisnis",
    "services.s1_title": "Website Bisnis & Instansi Resmi",
    "services.s1_desc":
      "Pembuatan website profil perusahaan, portal instansi pemerintahan, dan landing page promosi yang cepat, elegan, dan meningkatkan kepercayaan klien di semua perangkat.",
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
    "edu.eyebrow": "03 // PENDIDIKAN",
    "edu.title": "Pendidikan & Rekam Jejak Akademik",
    "edu.poltek_major": "D3 Teknik Informatika",
    "edu.poltek_period": "2024 — Sekarang",
    "edu.poltek_status": "Mahasiswa Aktif",
    "edu.poltek_gpa": "IPK 3.90 / 4.00",
    "edu.poltek_desc":
      "Menempuh studi Teknik Informatika di Politeknik Sekayu dengan capaian akademik istimewa (IPK 3.90). Memperkuat pengalaman praktik proyek dengan fondasi teori yang matang dalam Rekayasa Perangkat Lunak, Basis Data, Arsitektur Web, dan Desain Sistem.",
    "edu.period_label": "Periode",
    "edu.gpa_label": "Prestasi Akademik",
    "edu.focus_label": "Fokus Studi",
    "edu.focus_val": "Rekayasa Web & Perangkat Lunak",

    // Skills
    "skills.eyebrow": "04 // TOOLKIT",
    "skills.title": "Teknologi & Alur Kerja Pilihan",
    "skills.subtitle": "Bahasa pemrograman, framework, basis data, dan alat kerja andalan yang saya gunakan dalam membangun produk produksi.",
    "skills.cat_frontend": "Frontend & Antarmuka",
    "skills.cat_backend": "Backend & Basis Data",
    "skills.cat_tools": "DevOps, Tools & Desain",

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
