import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineSparkles, HiChevronRight, HiOutlineRefresh } from "react-icons/hi";
import { useLanguage } from "../context/LanguageContext";

interface CardData {
  id: string;
  badgeKey: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  icon: string;
  gradient: string;
  badgeBg: string;
}

const CARDS: CardData[] = [
  {
    id: "card-1",
    badgeKey: "stack.c1_badge",
    titleKey: "stack.c1_title",
    descKey: "stack.c1_desc",
    tags: ["React 18", "Next.js 14", "TypeScript", "Tailwind CSS"],
    icon: "💻",
    gradient: "from-blue-600 via-indigo-600 to-cyan-500",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  },
  {
    id: "card-2",
    badgeKey: "stack.c2_badge",
    titleKey: "stack.c2_title",
    descKey: "stack.c2_desc",
    tags: ["Framer Motion", "GSAP", "Micro-Interactions", "Glassmorphism"],
    icon: "✨",
    gradient: "from-purple-600 via-pink-600 to-rose-500",
    badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  },
  {
    id: "card-3",
    badgeKey: "stack.c3_badge",
    titleKey: "stack.c3_title",
    descKey: "stack.c3_desc",
    tags: ["Node.js", "Express.js", "MongoDB", "MySQL", "Docker VPS"],
    icon: "⚙️",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  {
    id: "card-4",
    badgeKey: "stack.c4_badge",
    titleKey: "stack.c4_title",
    descKey: "stack.c4_desc",
    tags: ["Official Gov Portal (.go.id)", "E-Commerce", "Web Apps", "SEO"],
    icon: "🏛️",
    gradient: "from-amber-500 via-orange-600 to-rose-600",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
];

export default function StackedCards() {
  const { t } = useLanguage();
  const [cards, setCards] = useState<CardData[]>(CARDS);
  const [direction, setDirection] = useState<number>(1);

  // Shuffle front card to the back
  const cycleCard = () => {
    setDirection(1);
    setCards((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  // Bring specific card to front
  const bringToFront = (index: number) => {
    if (index === 0) {
      cycleCard();
      return;
    }
    setDirection(-1);
    setCards((prev) => {
      const selected = prev[index];
      const rest = prev.filter((_, i) => i !== index);
      return [selected, ...rest];
    });
  };

  // Reset to initial
  const resetCards = () => {
    setCards(CARDS);
  };

  return (
    <div className="w-full pt-8 sm:pt-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-2">
            <HiOutlineSparkles className="text-sm" />
            <span>{t("stack.badge")}</span>
          </div>
          <h2 className="font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            {t("stack.title")}
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1">
            {t("stack.subtitle")}
          </p>
        </div>

        {/* Interactive Shuffle Action & Hint */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={resetCards}
            title="Reset stack"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors"
          >
            <HiOutlineRefresh className="text-base" />
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            onClick={cycleCard}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/20 transition-colors cursor-pointer"
          >
            <span>{t("stack.shuffle_btn")}</span>
            <HiChevronRight className="text-base" />
          </motion.button>
        </div>
      </div>

      {/* Floating Hint Tag */}
      <div className="flex items-center justify-between text-[11px] text-slate-400 dark:text-slate-500 mb-4 px-1">
        <span>{t("stack.hint")}</span>
        <span className="font-mono font-semibold text-blue-600 dark:text-blue-400">
          Pillar {CARDS.findIndex((c) => c.id === cards[0].id) + 1} / {CARDS.length}
        </span>
      </div>

      {/* Overlapping Stack Deck Container */}
      <div className="relative w-full h-[270px] sm:h-[260px] max-w-2xl mx-auto select-none">
        <AnimatePresence initial={false} custom={direction}>
          {cards.map((card, index) => {
            const isFront = index === 0;

            // Stack depth styles
            // Front: y: 0, scale: 1, rotate: 0
            // Second: y: 14, scale: 0.95, rotate: 2.5deg
            // Third: y: 28, scale: 0.90, rotate: -2deg
            // Fourth: y: 42, scale: 0.85, rotate: 1.5deg
            const yOffset = index * 14;
            const scale = 1 - index * 0.05;
            const rotation =
              index === 0 ? 0 : index === 1 ? 2.5 : index === 2 ? -2.5 : 1.5;
            const zIndex = 40 - index * 10;
            const opacity = 1 - index * 0.12;

            return (
              <motion.div
                key={card.id}
                layout
                onClick={() => bringToFront(index)}
                style={{
                  zIndex,
                  transformOrigin: "top center",
                }}
                animate={{
                  y: yOffset,
                  scale,
                  rotate: rotation,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 340,
                  damping: 26,
                }}
                drag={isFront ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                onDragEnd={(_, info) => {
                  if (Math.abs(info.offset.x) > 60 || Math.abs(info.velocity.x) > 300) {
                    cycleCard();
                  }
                }}
                whileHover={
                  isFront
                    ? { y: -6, transition: { duration: 0.2 } }
                    : { scale: scale + 0.02, transition: { duration: 0.2 } }
                }
                whileTap={isFront ? { scale: 0.98 } : {}}
                className={`absolute inset-x-0 top-0 rounded-3xl p-5 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-900/5 dark:shadow-black/40 cursor-pointer overflow-hidden transition-colors ${
                  isFront
                    ? "ring-2 ring-blue-500/30 dark:ring-blue-400/20"
                    : "hover:border-blue-400/50"
                }`}
              >
                {/* Accent top gradient line */}
                <div
                  className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${card.gradient}`}
                />

                {/* Subtle corner glow */}
                <div
                  className={`absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br ${card.gradient} opacity-15 rounded-full blur-2xl pointer-events-none`}
                />

                {/* Card Content */}
                <div className="relative z-10 flex flex-col justify-between h-full gap-3">
                  <div>
                    {/* Header: Icon & Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl">{card.icon}</span>
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold border ${card.badgeBg}`}
                        >
                          {t(card.badgeKey)}
                        </span>
                      </div>

                      {/* Card index indicator */}
                      <span className="text-[11px] font-mono font-bold text-slate-400 dark:text-slate-500">
                        #{CARDS.findIndex((c) => c.id === card.id) + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white leading-snug">
                      {t(card.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-2">
                      {t(card.descKey)}
                    </p>
                  </div>

                  {/* Tags Pill List */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap gap-1.5 items-center">
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] sm:text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
