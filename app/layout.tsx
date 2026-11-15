import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'CREATOR PRO — Isabela Rocha | Beauty Editorial',
  description:
    'Apresentação comercial demonstrativa desenvolvida pela PRUMO CREATORS para Isabela Rocha, criadora de conteúdo especializada em beleza, maquiagem, skincare e autocuidado.',
  openGraph: {
    title: 'CREATOR PRO — Isabela Rocha | Beauty Editorial',
    description:
      'Apresentação comercial demonstrativa desenvolvida pela PRUMO CREATORS para Isabela Rocha, criadora de conteúdo especializada em beleza, maquiagem, skincare e autocuidado.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CREATOR PRO — Isabela Rocha | Beauty Editorial',
    description:
      'Apresentação comercial demonstrativa desenvolvida pela PRUMO CREATORS para Isabela Rocha, criadora de conteúdo especializada em beleza, maquiagem, skincare e autocuidado.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#FAF7F4] text-[#3A2821] font-body antialiased"
      >
        {children}
      </body>
    </html>
  );
}
