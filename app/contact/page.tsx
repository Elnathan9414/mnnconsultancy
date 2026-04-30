import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Contact — Axonova',
  description: 'Contactez Axonova pour vos projets IA, data et communication digitale.',
};

export default function ContactPage() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:py-24">
        <div className="rounded-[40px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-10 shadow-[0_60px_120px_-40px_rgba(15,23,42,0.85)] sm:p-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-400">Contact</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Discutons de votre prochaine ambition digitale.
            </h1>
            <p className="text-lg leading-8 text-slate-300">
              Axonova vous accompagne dans la conception de solutions IA, la valorisation de vos données et la création de stratégies marketing performantes. Prenez contact et démarrons ensemble.
            </p>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  );
}
