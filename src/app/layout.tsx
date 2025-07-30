import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Configure Inter font (variable version)
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Home | Plato',
  description:
    'Plato offers world-class website and app design solutions for startups and modern brands. We design digital experiences that drive growth and innovation.',
  openGraph: {
    title: 'Home | Plato',
    description:
      'Plato offers world-class website and app design solutions for startups and modern brands.',
    url: '/',
    siteName: 'Plato',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Plato Website & App Design Preview',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen flex flex-col bg-white">
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
