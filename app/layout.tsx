import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://fauziralpiandi.vercel.app'),
  title: {
    default: 'Fauzira Alpiandi',
    template: '%s | Fauzira Alpiandi',
  },
  description: 'Developer, writer.',
  openGraph: {
    title: 'Fauzira Alpiandi',
    description: 'Developer, writer.',
    url: 'https://fauziralpiandi.vercel.app',
    siteName: 'Fauzira Alpiandi',
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Fauzira Alpiandi',
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx('dark text-theme-text bg-theme-background', GeistSans.variable, GeistMono.variable)}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="mx-auto max-w-[768px] m-12 px-8 antialiased">
        <main>
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}