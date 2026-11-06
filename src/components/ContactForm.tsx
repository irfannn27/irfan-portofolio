import { useState } from 'react';
import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCopy, FaCheck } from 'react-icons/fa';
import { HiCheckCircle, HiArrowRight, HiOutlineExternalLink } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaeeolbj');
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const phoneDisplay = "0821-8395-2772";
  const emailAddress = "irfanputrap71@gmail.com";
  const whatsappUrl = `https://wa.me/6282183952772?text=${encodeURIComponent("Halo Irfan, saya ingin konsultasi mengenai proyek website/sistem.")}`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-24">
      {/* 1. Header (Zero AI Slop - Clean, Confident, Human) */}
      <div className="mb-10 sm:mb-14 max-w-2xl">
        <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white tracking-tight leading-tight">
          {t("contact.title")}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      {/* 2. Bespoke Two-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Direct Action Channels (WhatsApp & Email) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Direct WhatsApp Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-2xl shrink-0 group-hover:scale-105 transition-transform">
                  <FaWhatsapp />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      {t("contact.wa_label")}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mt-0.5 tracking-tight font-mono">
                    {phoneDisplay}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              {t("contact.wa_sub")}
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all"
            >
              <FaWhatsapp className="text-base" />
              <span>{t("contact.wa_btn")}</span>
              <HiOutlineExternalLink className="text-base ml-0.5" />
            </a>
          </motion.div>

          {/* Direct Email Card */}
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ duration: 0.2 }}
            className="p-6 rounded-3xl bg-white/90 dark:bg-slate-900/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm hover:border-blue-500/50 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl shrink-0 group-hover:scale-105 transition-transform">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {t("contact.email_label")}
                  </h3>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-0.5 tracking-tight hover:text-blue-600 dark:hover:text-cyan-400 transition-colors block break-all font-mono"
                  >
                    {emailAddress}
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
              {t("contact.email_sub")}
            </p>

            <div className="mt-4 flex gap-2">
              <a
                href={`mailto:${emailAddress}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-bold active:scale-[0.98] transition-all"
              >
                <FaEnvelope />
                <span>Kirim Email</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:border-blue-500 transition-all active:scale-95"
                title={t("contact.copy_email")}
              >
                {copied ? (
                  <>
                    <FaCheck className="text-emerald-500 text-xs" />
                    <span className="text-emerald-600 dark:text-emerald-400">{t("contact.copied")}</span>
                  </>
                ) : (
                  <>
                    <FaCopy className="text-xs text-slate-500" />
                    <span>{t("contact.copy_email")}</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Quick Context & Location Pill Bar */}
          <div className="p-4 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200/70 dark:border-white/[0.05] space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <FaMapMarkerAlt className="text-slate-400 shrink-0" />
              <span>{t("contact.location_val")}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-slate-800 dark:text-slate-200">{t("contact.availability_val")}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Direct Message Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white/95 dark:bg-slate-900/90 p-6 sm:p-9 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-sm backdrop-blur-xl"
          >
            <div className="mb-6 space-y-1">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {t("contact.form_heading")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {t("contact.form_sub")}
              </p>
            </div>

            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 text-center flex flex-col items-center gap-4 bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 rounded-2xl"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 flex items-center justify-center text-emerald-500 text-3xl">
                    <HiCheckCircle />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {t("contact.success_title")}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-sm">
                      {t("contact.success_desc")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold transition-transform hover:scale-105 active:scale-95"
                  >
                    <span>{t("contact.send_another")}</span>
                    <HiArrowRight />
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  id="contactForm"
                  onSubmit={handleSubmit}
                  className="space-y-4 w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="input-form"
                      placeholder={t("contact.placeholder_email")}
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300"
                    >
                      {t("contact.message")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="input-form"
                      placeholder={t("contact.placeholder_msg")}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full py-3.5 px-6 text-sm font-bold text-center text-white rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{state.submitting ? t("contact.sending") : t("contact.send")}</span>
                    <HiArrowRight className="text-base" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
