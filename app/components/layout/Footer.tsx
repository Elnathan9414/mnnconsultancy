

const links = [
  { label: 'Services', items: ['IA générative & automatisation', 'IA métier & assistants intelligents', 'Gestion des leads & CRM','Tracking & performance analytics','Stratégie d’acquisition & scaling'] },
  { label: 'Entreprise', items: ['À propos', 'Équipe', 'Carrières', 'Contact'] },
  { label: 'Ressources', items: ['Blog', 'Guides', 'FAQ', 'Support'] },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(280px,320px)_1fr_minmax(280px,320px)] lg:items-start">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">
            Axonova
          </span>
          <p className="text-sm leading-7 text-slate-300">
            Studio digital spécialisé dans la direction artistique, la création d’interfaces et les expériences immersives.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-3">
          {links.map((column) => (
            <div key={column.label} className="min-w-0">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
                {column.label}
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                {column.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="transition hover:text-white">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="min-w-0 space-y-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">
            Restez informé
          </h3>
          <p className="text-sm leading-7 text-slate-400">
            Recevez nos actualités et inspirations créatives chaque mois.
          </p>
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Votre email"
              aria-label="Votre email"
              className="min-w-0 flex-1 rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
            />
            <button
              type="submit"
              className="inline-flex justify-center rounded-2xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              S’inscrire
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
