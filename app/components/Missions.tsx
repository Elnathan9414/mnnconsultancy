'use client';

import type { ReactNode } from 'react';
import { SERVICES } from './Services';

/* TYPE SAFE */
type Service = {
  tag: string;
  title: string;
  icon?: ReactNode;
};

const MISSION = {
  title: 'Transformer vos idées en systèmes performants',
  subtitle:
    'Nous concevons et déployons des solutions IA, data et digitales pour générer des résultats concrets et mesurables.',
  description:
    'Nous combinons IA, data, marketing et design pour créer des systèmes efficaces qui automatisent vos opérations, améliorent votre acquisition et optimisent vos performances.',
  detail:
    'De l’analyse stratégique à l’exécution, nous accompagnons vos équipes avec des solutions pragmatiques, scalables et orientées résultats.',
  goals: [
    'Structurer une stratégie IA et data avec un impact mesurable',
    'Créer des parcours clients fluides et performants',
    'Déployer des outils digitaux modulaires et scalables',
    'Optimiser en continu grâce à la data et aux performances',
  ],
};

export default function Missions() {
  const safeServices = (SERVICES || []) as Service[];

  return (
    <section className="py-24 bg-[#F4F9FF]" id="missions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-purple-400 block mb-4">
            Missions
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
            {MISSION.title}
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            {MISSION.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-slate-950">La mission</h3>
              <p className="text-slate-600 leading-8">{MISSION.description}</p>
              <p className="text-slate-500 text-sm leading-7">{MISSION.detail}</p>
              <ul className="space-y-3 mt-6">
                {MISSION.goals.map((goal, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-blue-500 text-white text-xs font-semibold">
                      ✓
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <span className="text-sm uppercase tracking-wide text-slate-500">Services mobilisés</span>
            </div>
            <div className="space-y-4">
                {safeServices.slice(0, 4).map((service, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="text-xl text-sky-600">{service.icon ?? '•'}</div>
                  <div>
                    <strong className="block text-sm text-slate-950">{service.tag}</strong>
                    <p className="text-slate-600 text-sm">{service.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
