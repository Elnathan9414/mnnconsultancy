

export default function Banner() {
  return (
    <section className="text-gray-300 bg-white w-full flex items-center p-6" id="a-propos">

  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Futuristic neon mountain"
      className="w-full h-full object-cover opacity-60"
    />

    {/* OVERLAY DARK */}
    <div className="absolute inset-0 bg-gradient-to-r from-[#05021a] via-[#05021a]/90 to-transparent"></div>

    {/* GLOW EFFECT */}
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-cyan-400/20"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">

    <div >

      

      <p className="mt-6 text-gray-400 text-lg max-w-xl">
        Nous aidons les entreprises à transformer leurs idées en systèmes performants grâce à l’intelligence artificielle, la data et l’automatisation.
      </p>

      {/* VALUES */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">🚀</div>
          <div>
            <p className="font-semibold">Innovation</p>
            <p className="text-sm text-gray-400">Technologies modernes</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center">🎯</div>
          <div>
            <p className="font-semibold">Impact</p>
            <p className="text-sm text-gray-400">Résultats mesurables</p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center">🤝</div>
          <div>
            <p className="font-semibold">Partenariat</p>
            <p className="text-sm text-gray-400">Collaboration long terme</p>
          </div>
        </div>

      </div>

      {/* STATS */}
      <div className="mt-12 flex gap-10 flex-wrap">
        <div>
          <p className="text-3xl font-bold">50+</p>
          <p className="text-gray-400">Projets</p>
        </div>
        <div>
          <p className="text-3xl font-bold">20+</p>
          <p className="text-gray-400">Clients</p>
        </div>
        <div>
          <p className="text-3xl font-bold">98%</p>
          <p className="text-gray-400">Satisfaction</p>
        </div>
      </div>

    </div>

    <div></div>

  </div>

</section>
    );
}