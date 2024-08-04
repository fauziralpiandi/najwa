import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Fira_Sans } from "@next/font/google";
import { Fira_Code } from "@next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/app/components/ThemeProvider";
import Navigation from "@/app/components/Navigation";

import { site } from "app/libs/Site";

export const metadata: Metadata = {
  metadataBase: new URL(`${site.baseUrl}`),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    url: site.baseUrl,
    images: [
      {
        url: `${site.baseUrl}/api/og?title=${site.domain}`,
        alt: `${site.domain}`,
      },
    ],
  },
};

const firaSans = Fira_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-fira-sans",
});

const firaCode = Fira_Code({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: "--font-fira-code",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={site.language}
      className={`${firaSans.variable} ${firaCode.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="width-full bg-contrast text-primary antialiased dark:bg-primary">
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navigation />
          <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}