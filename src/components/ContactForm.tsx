import { useForm } from '@formspree/react';
import { useEffect } from 'react';
import Swal from 'sweetalert2'
import { useLanguage } from '../context/LanguageContext';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xaeeolbj'); 
  const { t } = useLanguage();

  useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: t("contact.success_title"),
        text: t("contact.success_desc"),
        icon: "success"
      });

      const form = document.getElementById('contactForm') as HTMLFormElement;
      if (form) form.reset();
    }
  }, [state.succeeded, t]);

  return (
    <section className="section section-2">
      <div className="py-6 sm:py-10 px-2 sm:px-4 mx-auto w-full max-w-[540px]">
        <div className="bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-700/80 shadow-md backdrop-blur-sm transition-all duration-300">
          <h2 className="mb-2 text-2xl sm:text-3xl font-extrabold text-center text-slate-900 dark:text-white tracking-tight">
            {t("contact.title")}
          </h2>
          <p className="mb-6 text-xs sm:text-sm text-center text-slate-600 dark:text-slate-400">
            {t("contact.subtitle")}
          </p>

          <form
            id="contactForm"
            onSubmit={handleSubmit}
            className="space-y-5 w-full"
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
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
                className="block mb-2 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
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
              className="w-full sm:w-auto py-3 px-6 text-sm font-semibold text-center text-white rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 transition-all duration-200 shadow-md shadow-blue-500/20 disabled:opacity-50"
            >
              {state.submitting ? t("contact.sending") : t("contact.send")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
