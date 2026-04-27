'use client';

const REALISATIONS = [
  {
    title: 'Tableaux de bord stratégiques',
    tag: 'Data & BI',
    excerpt: 'Conception et déploiement de reporting interactif pour piloter les décisions métier en temps réel.',
    result: 'Amélioration de l’efficacité opérationnelle et visibilité renforcée sur les KPIs.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
  },
  {
    title: 'Automatisation marketing',
    tag: 'Marketing',
    excerpt: 'Mise en place de séquences automatisées et de contenus générés par IA pour booster l’engagement.',
    result: 'Gain de temps sur les campagnes et hausse du taux de conversion.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80',
  },
  {
    title: 'Site vitrine sur mesure',
    tag: 'Web & Design',
    excerpt: 'Création d’une présence digitale moderne, responsive et orientée conversion.',
    result: 'Image de marque renforcée et parcours client simplifié.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80',
  },
  {
    title: 'Automatisation opérationnelle',
    tag: 'Automatisation',
    excerpt: 'Déploiement de scripts, workflows et intégrations pour réduire les tâches manuelles.',
    result: 'Gain de temps, réduction des erreurs et meilleure réactivité opérationnelle.',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?fm=jpg&q=60&w=1200',
  },
];

export default function Realisations() {
  return (
    <section className="py-24 bg-[#05021a] text-white" id="realisations">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-sm uppercase tracking-widest text-purple-400 mb-4">
            Réalisations
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos projets les plus impactants
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Des solutions IA, data et digitales développées pour transformer les ambitions en résultats concrets.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {REALISATIONS.map((item) => (
            <article key={item.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition hover:-translate-y-1">
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-purple-200">
                  {item.tag}
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-300">
                  {item.excerpt}
                </p>
                <p className="mt-5 text-sm text-purple-300">
                  {item.result}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
