import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/Nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://zira.my.id'),
  title: {
    default: 'Fauzira Alpiandi',
    template: '%s | Fauzira Alpiandi',
  },
  description: 'Developer, writer.',
  openGraph: {
    title: 'Fauzira Alpiandi',
    description: 'Developer, writer.',
    url: 'https://zira.my.id',
    siteName: 'Fauzira Alpiandi',
    locale: 'id-ID',
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
  },
};

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id-ID"
      className={cx('width-full m-4', GeistSans.variable, GeistMono.variable)}
    >
      <body className="antialiased max-w-2xl flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 flex flex-col md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
