'use client';

import styles from './Services.module.css';

export const SERVICES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    tag: 'IA & LLM',
    title: 'IA générative & automatisation',
    desc: 'Chatbots, génération de contenu, pipelines IA et outils sur mesure pour automatiser vos processus métier.',
    bg: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&q=80',
    color: 'violet',
  },
 

{
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 7h16M4 12h10M4 17h14" />
        <path d="M8 7l4 5-4 5" />
      </svg>
    ),
    tag: 'CRM & Sales',
    title: 'Gestion des leads & CRM',
    desc: 'Mise en place de systèmes de gestion des prospects, nurturing automatisé et pipelines de vente performants.',
    bg: 'https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=1200&q=80',
    color: 'indigo',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 4v16M8 8h8M8 16h8" />
        <circle cx="12" cy="5" r="2" />
      </svg>
    ),
    tag: 'IA Avancée',
    title: 'IA métier & assistants intelligents',
    desc: 'Développement d’assistants IA internes pour automatiser les tâches métier, améliorer la productivité et soutenir la prise de décision.',
    bg: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80',
    color: 'violet',
  },

  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 19h16M4 14h9M4 9h14M4 4h6" />
        <path d="M15 4v15" />
      </svg>
    ),
    tag: 'Data Avancée',
    title: 'Tracking & performance analytics',
    desc: 'Suivi avancé des performances, intégration des données et dashboards pour piloter efficacement votre croissance.',
    bg: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    color: 'cyan',
  },

  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12h16M4 7h16M4 17h10" />
        <path d="M8 7l4 5-4 5" />
      </svg>
    ),
    tag: 'Growth',
    title: 'Stratégie d’acquisition & scaling',
    desc: 'Mise en place de stratégies pour attirer plus de clients, scaler votre activité et maximiser votre retour sur investissement.',
    bg: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    color: 'emerald',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    tag: 'Data & BI',
    title: 'Analyse & visualisation de données',
    desc: 'Tableaux de bord interactifs, modèles prédictifs et rapports automatisés pour piloter vos décisions.',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80',
    color: 'coral',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"/>
      </svg>
    ),
    tag: 'Marketing',
    title: 'Stratégie & communication digitale',
    desc: 'Identité de marque, gestion des réseaux sociaux, campagnes publicitaires et brand storytelling.',
    bg: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80',
    color: 'violet',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    tag: 'Web & Design',
    title: 'Design & développement web',
    desc: 'Sites vitrines, landing pages performantes, UI/UX design et intégration technique sur mesure.',
    bg: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=1200&q=80',
    color: 'gray',
  },
];

export default function Services() {
  return (
    // <section className={styles.section} id="services">
    //   <div className={styles.inner}>

    //     <div className={styles.header}>
    //       <span className={styles.eyebrow}>Expertise</span>
    //       <h2 className={styles.title}>Ce que nous faisons pour vous</h2>
    //       <p className={styles.subtitle}>
    //         Une approche intégrée qui combine IA, data et créativité pour des résultats mesurables.
    //       </p>
    //     </div>

    //     {/* Grille de cards */}
    //     <div className={styles.grid}>
    //       {SERVICES.map((s) => (
    //         <div
    //           key={s.title}
    //           className={`${styles.card} ${styles[`card--${s.color}`]}`}
    //           style={{
    //             backgroundImage: `linear-gradient(rgba(9, 5, 36, 0.72), rgba(9, 5, 36, 0.32)), url(${s.bg})`,
    //           }}
    //         >
    //           <div className={styles.cardIcon}>{s.icon}</div>
    //           <span className={styles.cardTag}>{s.tag}</span>
    //           <h3 className={styles.cardTitle}>{s.title}</h3>
    //           <p className={styles.cardDesc}>{s.desc}</p>
    //           <div className={styles.cardArrow}>→</div>
    //         </div>
    //       ))}
    //     </div>

    //   </div>
    // </section>
    <section className="py-20 bg-[#F8FBFF]" id="services">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block text-sm uppercase tracking-widest text-purple-400 mb-4">
        Expertise
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-950 mb-4">
        Ce que nous faisons pour vous
      </h2>
      <p className="text-slate-600 max-w-2xl mx-auto">
        Une approche intégrée qui combine IA, data et créativité pour des résultats mesurables.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s) => (
        <div
          key={s.title}
          className="relative group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 min-h-[320px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.08),transparent)] opacity-90" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 mb-6">
                {s.icon}
              </div>
              <span className="text-xs uppercase tracking-wide text-slate-500 mb-2 block">
                {s.tag}
              </span>
              <h3 className="text-2xl font-semibold text-slate-950 mb-4">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-7">
                {s.desc}
              </p>
            </div>
            <div className="mt-8 text-slate-950 text-lg font-semibold transition-transform duration-300 group-hover:translate-x-1">
              →
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
}