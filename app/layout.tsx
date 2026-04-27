import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Axonova — IA, Data & Communication Digitale',
  description:
    'Axonova combine intelligence artificielle, analyse de données et stratégie digitale pour accélérer la croissance des startups et PME.',
  keywords: ['IA', 'intelligence artificielle', 'data', 'communication digitale', 'agence', 'startups', 'PME'],
  authors: [{ name: 'Axonova' }],
  openGraph: {
    title: 'Axonova — IA, Data & Communication Digitale',
    description: 'Transformez vos données en décisions qui font la différence.',
    url: 'https://axonova.io',
    siteName: 'Axonova',
    locale: 'fr_FR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}