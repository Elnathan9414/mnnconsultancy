export default function AboutUs() {
  return (
   <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          <span className="text-sm uppercase tracking-[0.3em] text-purple-500">
            Qui sommes-nous
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
            Nous construisons des systèmes digitaux
            <span className="block text-purple-500">
              qui génèrent de la croissance
            </span>
          </h2>

          <p className="mt-6 text-slate-600 text-lg leading-8">
            Nous accompagnons les entreprises dans la transformation de leurs idées en solutions concrètes grâce à l’IA, la data et l’automatisation.
            Notre objectif : simplifier vos opérations, améliorer vos performances et accélérer votre croissance.
          </p>

          {/* POINTS CLÉS */}
          <div className="mt-8 space-y-4">

            {[
              'Automatisation intelligente des processus',
              'Stratégies orientées résultats',
              'Solutions scalables et durables',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-slate-700">
                <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-purple-100 text-purple-600 text-xs font-bold">
                  ✓
                </span>
                {item}
              </div>
            ))}

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">

          {/* Glow */}
          <div className="absolute -inset-6 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 blur-3xl rounded-3xl"></div>

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
            alt="Equipe digitale"
            className="relative rounded-3xl shadow-xl object-cover w-full h-[420px]"
          />

        </div>

      </div>
    </section>
  );
}
