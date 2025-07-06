import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { Providers } from '@/components/providers';
import { APP_CONFIG } from '@/constants';
import './globals.css';
import { Locale, locales } from '@/i18n/lib';

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.name,
    template: `%s | ${APP_CONFIG.name}`,
  },
  description: APP_CONFIG.description,
  keywords: [
    'WordPress',
    'website development',
    'web design',
    'custom websites',
    'professional websites',
  ],
  authors: [
    {
      name: APP_CONFIG.name,
      url: APP_CONFIG.url,
    },
  ],
  creator: APP_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: APP_CONFIG.url,
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    siteName: APP_CONFIG.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_CONFIG.name,
    description: APP_CONFIG.description,
    creator: `@${APP_CONFIG.name.toLowerCase()}`,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export async function generateStaticParams() {
  return locales.map(locale => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params
  return (
    <html lang="en" suppressHydrationWarning dir={lang === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
        suppressHydrationWarning
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

