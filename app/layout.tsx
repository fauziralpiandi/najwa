import './global.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Navbar } from './components/nav';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Footer from './components/footer';

import { site, verify } from 'libs/Site';

export const metadata: Metadata = {
  metadataBase: new URL(`${site.baseUrl}`),
  title: {
    default: site.title,
    template: `%s | ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.baseUrl,
    siteName: site.title,
    locale: site.locale,
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
    title: site.title,
    card: 'summary_large_image',
  },
  verification: {
    google: verify.google,
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
      lang={site.locale}
      className={cx(
        'dark text-theme-text bg-theme-background',
        GeistSans.variable,
        GeistMono.variable,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="mx-auto max-w-[700px] flex-col m-12 px-8 antialiased">
        <main>
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Analytics />
          <SpeedInsights />
          <Footer />
        </main>
      </body>
    </html>
  );
}
