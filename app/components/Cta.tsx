export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F8FBFF] text-slate-900 w-full" id="contact">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(125,211,252,0.09),transparent_20%)] pointer-events-none" />
      <div className="absolute top-[-180px] right-[-180px] w-[520px] h-[520px] rounded-full bg-sky-400/20 blur-[130px]" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[420px] h-[420px] rounded-full bg-cyan-200/15 blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-sky-600 ring-1 ring-slate-200">
            Offre d’action rapide
          </span>

          <h2 className="mt-8 text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-950">
            Prêt à générer plus de clients
            <span className="block bg-gradient-to-r from-sky-500 to-cyan-500 bg-clip-text text-transparent">
              sans perdre de temps ?
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            Nous analysons votre situation avec précision et vous montrons exactement comment renforcer votre acquisition,
            augmenter vos conversions et transformer vos prospects en clients durables.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-10 py-4 text-lg font-semibold text-white shadow-[0_25px_60px_-35px_rgba(124,58,237,0.9)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(124,58,237,0.9)] focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            🚀 Audit gratuit
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-10 py-4 text-lg font-semibold text-slate-900 transition duration-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            📅 Réserver un appel
          </a>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 text-sm text-slate-700">
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="font-semibold text-slate-950">✔ Sans engagement</p>
            <p className="mt-2 text-slate-600">Vous gardez la liberté totale à chaque étape.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="font-semibold text-slate-950">✔ Réponse en 24h</p>
            <p className="mt-2 text-slate-600">Un retour rapide pour avancer sans attendre.</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <p className="font-semibold text-slate-950">✔ Résultats mesurables</p>
            <p className="mt-2 text-slate-600">Des actions claires et des indicateurs visibles.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
