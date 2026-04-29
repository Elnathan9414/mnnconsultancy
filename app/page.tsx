import Hero from "./components/Hero";
import Services from "./components/Services";
import Missions from "./components/Missions";
import Process from "./components/Process";
import Realisations from "./components/Realisations";
import Testimonial from "./components/Testimonial";
import FinalCTA from "./components/Cta";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-slate-900">
      <main className="w-full max-w-7xl flex-col items-center justify-between px-6 py-20 sm:px-8">
        <Hero />
      </main>
      <Services />
      <Missions />
      <Process />
      <Realisations />
      <FinalCTA />
      <Testimonial />
    </div>
  );
}
