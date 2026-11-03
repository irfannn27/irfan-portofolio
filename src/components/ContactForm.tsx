import { useForm } from '@formspree/react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMail, HiCheckCircle, HiArrowRight } from 'react-icons/hi';
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaeeolbj'); 
  const { t } = useLanguage();

  return (
    <section className="section section-2">
      <div className="py-6 sm:py-10 px-2 sm:px-4 mx-auto w-full max-w-[560px]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white/95 dark:bg-slate-900/90 p-6 sm:p-9 rounded-3xl border border-slate-200/90 dark:border-white/[0.08] shadow-2xl backdrop-blur-xl transition-all duration-300"
        >
          <div className="flex flex-col items-center mb-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-3">
              <HiMail className="text-sm" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
              {t("contact.title")}
            </h2>
          </div>
          <p className="mb-6 text-xs sm:text-sm text-center text-slate-600 dark:text-slate-400 max-w-sm mx-auto">
            {t("contact.subtitle")}
          </p>

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
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                    {t("contact.success_desc")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => window.location.reload()}
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold transition-transform hover:scale-105 active:scale-95"
                >
                  <span>Kirim Pesan Lain</span>
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
                    rows={4}
                    className="input-form"
                    placeholder={t("contact.placeholder_msg")}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-3 px-6 text-sm font-bold text-center text-white rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <span>{state.submitting ? t("contact.sending") : t("contact.send")}</span>
                  <HiArrowRight className="text-base" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
