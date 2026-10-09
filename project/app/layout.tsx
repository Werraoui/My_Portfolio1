import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wiame Erraoui — AI & Data Engineering',
  description:
    'Portfolio of Wiame Erraoui, AI and Data Engineering student. Explainable models, generative agents, data systems, and a 6-month PFE internship from February 2027.',
  keywords: ['Wiame Erraoui', 'AI Engineer', 'Data Engineer', 'Machine Learning', 'Generative AI', 'Digital Twin', 'Morocco'],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#03050a',
  openGraph: {
    title: 'Wiame Erraoui — AI & Data Engineering',
    description: 'From data foundations to intelligent systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=IBM+Plex+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
