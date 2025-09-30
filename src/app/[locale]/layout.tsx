import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { generateMetadata as generateSEOMetadata, generateJsonLd } from '@/lib/seo';
import { CosmicBackground } from '@/components/effects/CosmicEffects';
import type { Metadata } from 'next';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

const locales = ['en', 'es'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generateSEOMetadata({
    locale,
    url: `https://astralwalker.dev/${locale}`,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  const jsonLd = generateJsonLd(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href={`https://astralwalker.dev/${locale}`} />
        <link rel="alternate" hrefLang="es" href="https://astralwalker.dev/es" />
        <link rel="alternate" hrefLang="en" href="https://astralwalker.dev/en" />
        <link rel="alternate" hrefLang="x-default" href="https://astralwalker.dev/es" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/astralwalker-logo.png" />
        <meta name="theme-color" content="#06b6d4" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AstralWalker" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CosmicBackground starCount={100} intensity="low" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}