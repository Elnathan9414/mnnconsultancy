'use client';

import { SERVICES } from './Services';


const MISSION = {
  title: 'Notre mission opérationnelle',
  subtitle:
    'Transformer les ambitions IA, data et digitales en projets concrets et performants pour chaque étape de croissance.',
  description:
    'Nous orchestrons les services listés pour construire une mission claire : industrialiser l’intelligence, valoriser les données, renforcer l’impact marketing et délivrer des interfaces hautement efficaces. Nous aidons nos clients à passer de l’idée à l’exécution en déployant des solutions pragmatiques, visibles et adaptées à leurs enjeux métier.',
  detail:
    'La mission couvre l’analyse des besoins, la définition d’une stratégie data/IA, la création de contenus à fort impact, la mise en place d’une gouvernance de données et l’optimisation continue des parcours clients. Nous travaillons en étroite collaboration avec les équipes internes pour garantir une adoption rapide et un retour sur investissement mesurable.',
  goals: [
    'Structurer une stratégie IA et data pour des gains mesurables.',
    'Créer des parcours clients fluides et une image de marque forte.',
    'Déployer des outils digitaux modulaires et scalables.',
    'Mesurer la performance en continu et ajuster les actions selon les résultats.',
  ],
  bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80',
};

export default function Missions() {
  return (
    // <section className={styles.section} id="missions">
    //   <div className={styles.inner}>
    //     <div className={styles.heading}>
    //       <span className={styles.label}>Missions</span>
    //       <h2 className={styles.title}>{MISSION.title}</h2>
    //       <p className={styles.subtitle}>{MISSION.subtitle}</p>
    //     </div>

    //     <div className={styles.grid}>
    //       <article
    //         className={styles.missionCard}
    //         style={{
    //           backgroundImage: `linear-gradient(rgba(9, 5, 36, 0.72), rgba(9, 5, 36, 0.92)), url(${MISSION.bg})`,
    //         }}
    //       >
    //         <h3>La mission</h3>
    //         <p>{MISSION.description}</p>
    //         <p className={styles.detail}>{MISSION.detail}</p>
    //         <ul className={styles.goalList}>
    //           {MISSION.goals.map((goal) => (
    //             <li key={goal}>{goal}</li>
    //           ))}
    //         </ul>
    //       </article>

    //       <aside className={styles.serviceSummary}>
    //         <div className={styles.summaryHeader}>
    //           <span>Services mobilisés</span>
    //         </div>
    //         <div className={styles.servicesList}>
    //           {SERVICES.map((service) => (
    //             <div key={service.title} className={styles.serviceItem}>
    //               <span className={styles.serviceLogo}>{service.icon}</span>
    //               <div>
    //                 <strong>{service.tag}</strong>
    //                 <p>{service.title}</p>
    //               </div>
    //             </div>
    //           ))}
    //         </div>
    //       </aside>
    //     </div>
    //   </div>
    // </section>
    <section className="py-24 bg-[#F4F9FF]" id="missions">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
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

    {/* Grid */}
    <div className="grid lg:grid-cols-2 gap-10">

      {/* Mission Card */}
      <article className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-sm shadow-slate-200/70">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-slate-950">
            La mission
          </h3>

          <p className="text-slate-600 leading-8">
            {MISSION.description}
          </p>

          <p className="text-slate-500 text-sm leading-7">
            {MISSION.detail}
          </p>

          <ul className="space-y-3 mt-4">
            {MISSION.goals.map((goal) => (
              <li key={goal} className="flex items-start gap-3 text-slate-600 text-sm">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 text-xs font-semibold">
                  ✓
                </span>
                {goal}
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Services Summary */}
      <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/60">
        
        <div className="mb-6">
          <span className="text-sm uppercase tracking-wide text-slate-500">
            Services mobilisés
          </span>
        </div>

        <div className="space-y-4">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="flex items-center gap-4 rounded-3xl border border-slate-200/80 bg-slate-50 p-4"
            >
              <div className="text-xl text-sky-600">
                {service.icon}
              </div>

              <div>
                <strong className="block text-sm text-slate-950">
                  {service.tag}
                </strong>
                <p className="text-slate-600 text-sm">
                  {service.title}
                </p>
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
