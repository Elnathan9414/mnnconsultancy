'use client';

import { useEffect, useState } from 'react';

type Profile = {
display_name: string;
avatar_url: string;
description: string;
job_title: string;
company: string;
location: string;
profile_url: string;
};

export default function GravatarProfile() {
const [profile, setProfile] = useState<Profile | null>(null);
const [loading, setLoading] = useState(true);

const HASH = "9ec646ae4b0fcc7cd22583ed6f72c7d6355c294c889f30d011a88bd900eeb633"; // ← remplace ici

useEffect(() => {
async function fetchProfile() {
try {
const res = await fetch(
`https://api.gravatar.com/v3/profiles/${HASH}`
);


    if (!res.ok) throw new Error('Erreur API');

    const data = await res.json();
    setProfile(data);
  } catch (err) {
    console.error('Erreur Gravatar:', err);
  } finally {
    setLoading(false);
  }
}

fetchProfile();


}, []);

if (loading) {
return ( <div className="py-20 text-center text-slate-500">
Chargement du profil... </div>
);
}

if (!profile) {
return ( <div className="py-20 text-center text-red-500">
Impossible de charger le profil </div>
);
}

return ( 
<section className="py-24 bg-sky-200"> <div className="max-w-4xl mx-auto px-6">


    <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-6 items-center">

      {/* AVATAR */}
      <img
        src={profile.avatar_url}
        alt={profile.display_name}
        className="w-24 h-24 rounded-full object-cover"
      />

      {/* INFOS */}
      <div className="text-center md:text-left">

        <h2 className="text-2xl font-bold text-slate-900">
          {profile.display_name}
        </h2>

        <p className="text-sky-600">
          {profile.job_title} {profile.company && `• ${profile.company}`}
        </p>

        <p className="text-sm text-slate-500 mt-1">
          {profile.location}
        </p>

        <p className="mt-4 text-slate-600 leading-6">
          {profile.description}
        </p>

        <a
          href={profile.profile_url}
          target="_blank"
          className="inline-block mt-4 text-purple-500 text-sm hover:underline"
        >
          Voir le profil complet →
        </a>

      </div>

    </div>

  </div>
</section>


);
}
