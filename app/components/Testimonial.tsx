"use client";

import { useEffect, useRef, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "Leur accompagnement IA & data a été parfaitement aligné sur nos objectifs, et nous avons doublé notre taux de conversion en moins de trois mois.",
    name: "Claire Dubois",
    title: "Directrice marketing",
    company: "Pentacle Studio",
    result: "200%",
  },
  {
    quote: "La stratégie digitale proposée était claire, pragmatique et immédiatement opérationnelle, ce qui nous a permis de lancer notre campagne en un temps record.",
    name: "Romain Lefèvre",
    title: "CEO",
    company: "Altis Conseil",
    result: "150%",
  },
  {
    quote: "Ils ont su transformer notre usage des données en actions concrètes, avec des KPI clairs et un plan opérationnel immédiatement déployable.",
    name: "Sophie Martin",
    title: "Responsable opérations",
    company: "Nova Retail",
    result: "180%",
  },
];

export default function Testimonial() {
  // Référence au conteneur qui fait défiler les témoignages
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Changement automatique tous les 4 secondes
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Applique la translation X pour afficher le témoignage courant
    trackRef.current?.style.setProperty('transform', `translateX(-${index * 100}%)`);
  }, [index]);

  return (
    <section className="relative w-full overflow-hidden bg-[#F8FBFF] text-slate-900" id="testimonials">

      {/* Glow */}
      <div className="absolute top-[-120px] left-[-120px] w-[520px] h-[520px] bg-sky-400/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-sky-600">
            Témoignages
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4 text-slate-950">
            Des résultats concrets, pas des promesses
          </h2>

          <p className="text-slate-600 max-w-xl mx-auto">
            Plus de leads. Plus de conversions. Plus de revenus.
          </p>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">

          <div
            ref={trackRef}
            className="flex transition-transform duration-700 ease-in-out"
          >

            {TESTIMONIALS.map((item, i) => (
              <div key={i} className="min-w-full px-4">

                <div className="group relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                  {/* Glow hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-sky-100/80 to-cyan-100/70"></div>

                  <div className="relative z-10">

                    {/* Rating */}
                    <div className="text-yellow-500 mb-3">★★★★★</div>

                    {/* RESULT */}
                    <p className="text-sm text-sky-600 mb-2">
                      +{item.result} de croissance
                    </p>

                    {/* Quote */}
                    <p className="text-lg leading-8 text-slate-700 mb-6">
                      “{item.quote}”
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center font-bold">
                        {item.name.charAt(0)}
                      </div>

                      <div>
                        <p className="font-semibold text-slate-950">{item.name}</p>
                        <p className="text-sm text-slate-600">
                          {item.title}
                          {item.company ? ` — ${item.company}` : ''}
                        </p>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-white/30"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}