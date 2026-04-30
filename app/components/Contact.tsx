'use client';

import { FormEvent, useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');

    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus('sent');
    setForm(initialForm);
  };

  return (
    <section className="relative overflow-hidden bg-white py-10 text-slate-100" id="contact">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 sm:px-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="grow rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_60px_120px_-40px_rgba(15,23,42,0.8)] sm:p-12 lg:max-w-xl">
          <span className="inline-flex rounded-full bg-sky-200/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-300">
            Contact
          </span>
          <h2 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Prêt à générer plus de clients sans perdre de temps ?
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-300">
           Nous analysons votre situation avec précision et vous montrons exactement comment renforcer votre acquisition, augmenter vos conversions et transformer vos prospects en clients durables.
          </p>

          <div className="mt-10 grid gap-4 text-sm text-slate-300">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold text-white">Téléphone</p>
              <p className="mt-2 text-slate-300">+1 (438) 304 1131</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="font-semibold text-white">Email</p>
              <p className="mt-2 text-slate-300">contact@axonoa.com</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl rounded-[36px] bg-white p-8 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.18)] sm:p-10"
        >
          <div className="mb-8 text-center">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Votre demande</p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-950">Formulaire de contact</h3>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Complétez les informations ci-dessous et nous vous rappellerons rapidement.
            </p>
          </div>

          <div className="grid gap-5">
            <label className="space-y-2 text-sm text-slate-700">
              <span className="block font-semibold text-slate-900">Nom complet</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Marie Dupont"
                required
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-700">
                <span className="block font-semibold text-slate-900">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="contact@entreprise.fr"
                  required
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </label>

              <label className="space-y-2 text-sm text-slate-700">
                <span className="block font-semibold text-slate-900">Téléphone</span>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="06 12 34 56 78"
                  className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                />
              </label>
            </div>

            <label className="space-y-2 text-sm text-slate-700">
              <span className="block font-semibold text-slate-900">Entreprise</span>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Nom de votre société"
                className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </label>

            <label className="space-y-2 text-sm text-slate-700">
              <span className="block font-semibold text-slate-900">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Expliquez votre objectif, le contexte et les résultats attendus."
                required
                rows={5}
                className="w-full rounded-[28px] border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-base font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>

          {status === 'sent' && (
            <p className="mt-5 rounded-3xl bg-emerald-100 px-5 py-4 text-sm text-emerald-900">
              Merci, votre message a bien été pris en compte. Nous revenons vers vous rapidement.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
