'use client';

// ⚠️ Remplace les hashes par les tiens (MD5 de tes emails)
const TEAM = [
{
name: "josue ELnathan Mbondo",
role: "Fondateur & Consultant IA",
img: "https://www.gravatar.com/avatar/9ec646ae4b0fcc7cd22583ed6f72c7d6355c294c889f30d011a88bd900eeb633",
},  
{
name: "Sarah Martin",
role: "Head of Data",
img: "https://www.gravatar.com/avatar/9ec646ae4b0fcc7cd22583ed6f72c7d6355c294c889f30d011a88bd900eeb633",
},
{
name: "David Leroy",
role: "Lead Developer",
img: "https://www.gravatar.com/avatar/9ec646ae4b0fcc7cd22583ed6f72c7d6355c294c889f30d011a88bd900eeb633",
},
];

export default function TeamSection() {
return ( <section className="py-24 bg-slate-100 w-full"> <div className="max-w-7xl mx-auto px-6">


    {/* HEADER */}
    <div className="text-center max-w-2xl mx-auto mb-16">
      <span className="text-sm uppercase tracking-[0.3em] text-purple-500">
        Équipe
      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
        Les personnes derrière les résultats
      </h2>

      <p className="mt-6 text-slate-600">
        Une équipe orientée performance, innovation et impact pour accompagner votre croissance.
      </p>
    </div>

    {/* GRID */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

      {TEAM.map((member) => (
        <div
          key={member.name}
          className="group rounded-3xl bg-white border border-slate-200 overflow-hidden transition hover:-translate-y-2 hover:shadow-xl"
        >

          {/* IMAGE */}
          <div className="relative h-[300px] overflow-hidden flex items-center justify-center bg-slate-100">

            <img
              src={member.img}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover transition duration-500 group-hover:scale-110"
            />

          </div>

          {/* INFO */}
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold text-slate-900">
              {member.name}
            </h3>

            <p className="text-sm text-sky-600 mt-1">
              {member.role}
            </p>
          </div>

        </div>
      ))}

    </div>

  </div>
</section>

);
}
