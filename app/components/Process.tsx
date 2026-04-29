'use client';

const PROCESS_STEPS = [
  {
    phase: 'Découverte',
    title: 'Audit des besoins et cadrage',
    description: 'Analyse des enjeux, des données existantes et des objectifs business pour définir la meilleure feuille de route.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    phase: 'Conception',
    title: 'Architecture des solutions',
    description: 'Définition des workflows, des outils et des automatisations pour garantir une intégration fluide et scalable.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    phase: 'Déploiement',
    title: 'Mise en œuvre et paramétrage',
    description: 'Construction, configuration et test des systèmes pour un déploiement rapide et maîtrisé.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    phase: 'Optimisation',
    title: 'Suivi & amélioration continue',
    description: 'Mesure des performances, ajustements et élévation progressive des résultats pour maximiser l’impact.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
];

export default function Process() {
  return (
    // <section className="py-24 bg-[#05021a] text-white" id="process">
    //   <div className="max-w-7xl mx-auto px-6">
    //     <div className="text-center mb-16">
    //       <span className="inline-block text-sm uppercase tracking-widest text-purple-400 mb-4">
    //         Process
    //       </span>
    //       <h2 className="text-4xl md:text-5xl font-bold mb-4">
    //         Notre méthode d’accompagnement
    //       </h2>
    //       <p className="text-gray-400 max-w-2xl mx-auto">
    //         Un parcours clair et structuré pour transformer vos idées en solutions opérationnelles, du diagnostic à l’optimisation continue.
    //       </p>
    //     </div>

    //     <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
    //       <div className="space-y-6">
    //         {PROCESS_STEPS.map((step, index) => (
    //           <div key={step.phase} className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
    //             <div className="flex items-center justify-between gap-4 mb-4">
    //               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/15 text-lg font-semibold text-purple-200">
    //                 {index + 1}
    //               </div>
    //               <span className="text-xs uppercase tracking-[0.32em] text-gray-400">
    //                 {step.phase}
    //               </span>
    //             </div>
    //             <h3 className="text-2xl font-semibold text-white mb-3">{step.title}</h3>
    //             <p className="text-gray-300 leading-7">{step.description}</p>
    //           </div>
    //         ))}
    //       </div>

    //       <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20">
    //         <div className="mb-6">
    //           <span className="text-sm uppercase tracking-widest text-purple-400">Pourquoi ce process</span>
    //           <h3 className="mt-4 text-3xl font-bold text-white">Clarté, rapidité et résultats</h3>
    //         </div>
    //         <ul className="space-y-4 text-gray-300">
    //           <li className="flex gap-3">
    //             <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">✓</span>
    //             <span>Réduction du time-to-market grâce à une démarche pragmatique.</span>
    //           </li>
    //           <li className="flex gap-3">
    //             <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">✓</span>
    //             <span>Gouvernance partagée pour impliquer les équipes et sécuriser la transformation.</span>
    //           </li>
    //           <li className="flex gap-3">
    //             <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 text-purple-200">✓</span>
    //             <span>Approche itérative pour mesurer rapidement l’impact et ajuster les priorités.</span>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </section>
 <section className="py-16 bg-[#F8FBFF] text-slate-900" id="process">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-12">
      <span className="text-xs uppercase tracking-widest text-sky-600 block mb-3">
        Process
      </span>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-950">
        Une méthode efficace
      </h2>
      <p className="text-slate-600 max-w-xl mx-auto text-sm">
        Un processus simple et structuré pour transformer rapidement vos idées en résultats.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-10">

      {/* Steps */}
      <div className="space-y-5">
        {PROCESS_STEPS.map((step, index) => (
          <div
            key={step.phase}
            className="flex items-start gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1"
          >
            {/* Icon + number */}
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 text-lg">
              {step.icon || index + 1}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-base font-semibold text-slate-950">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right panel */}
     {/* Right panel */}
<div className="space-y-6">

  {/* VIDEO */}
  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-black">

    <video
      src="/videos/mission.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-[260px] md:h-[320px] object-cover"
    />

  </div>

  {/* TEXT CARD */}
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <h3 className="text-xl font-semibold mb-2 text-slate-950">
      Pourquoi ça fonctionne
    </h3>
    <p className="text-slate-600 text-sm leading-7">
      Une approche orientée résultats, rapide à déployer et optimisée en continu.
    </p>
  </div>

  {/* LIST */}
  <ul className="space-y-3">
    {[
      "Time-to-market réduit",
      "Alignement des équipes",
      "Optimisation continue",
    ].map((item, i) => (
      <li key={i} className="flex items-center gap-3 text-sm text-slate-600">
        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs">
          ✓
        </span>
        {item}
      </li>
    ))}
  </ul>

  {/* CTA */}
  <a
    href="#contact"
    className="block text-center px-5 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-medium hover:opacity-90 transition"
  >
    Lancer mon projet →
  </a>

</div>

    </div>

  </div>
</section>
  );
}
