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
    <section className="py-20 bg-[#05021a]" id="services">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="text-center mb-16">
      <span className="inline-block text-sm uppercase tracking-widest text-purple-400 mb-4">
        Expertise
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Ce que nous faisons pour vous
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Une approche intégrée qui combine IA, data et créativité pour des résultats mesurables.
      </p>
    </div>

    {/* Grid */}
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {SERVICES.map((s) => (
        <div
          key={s.title}
          className="relative group rounded-2xl overflow-hidden p-6 min-h-[280px] flex flex-col justify-end bg-cover bg-center transition-transform duration-300 hover:-translate-y-2"
          style={{
            backgroundImage: `linear-gradient(rgba(9,5,36,0.75), rgba(9,5,36,0.35)), url(${s.bg})`,
          }}
        >
          {/* Icon */}
          <div className="absolute top-6 left-6 text-white text-2xl">
            {s.icon}
          </div>

          {/* Tag */}
          <span className="text-xs uppercase tracking-wide text-purple-300 mb-2">
            {s.tag}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white mb-2">
            {s.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4">
            {s.desc}
          </p>

          {/* Arrow */}
          <div className="text-white text-lg transition-transform duration-300 group-hover:translate-x-2">
            →
          </div>

          {/* Overlay hover effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
        </div>
      ))}
    </div>

  </div>
</section>
  );
}