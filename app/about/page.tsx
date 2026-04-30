
import AboutUs from "@/components/About";
import type { Metadata } from 'next';
import Hero from "@/components/Hero";
import Banner from "@/components/Banner";
import TeamSection from "@/components/Team";
import GravatarProfile from "@/components/GravatarProfil";

export const metadata = {
  title: 'À propos — Axonova',
  description: 'Découvrez l’approche d’Axonova pour transformer la data en croissance, avec des solutions IA, analytics et stratégie digitale sur-mesure.',
};

export default function About() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-900">     
        <main className="w-full max-w-7xl flex-col items-center justify-between px-6 py-20 sm:px-8">
            <Banner />
            <AboutUs />
            <TeamSection />
        </main>
    </div>
  );
}