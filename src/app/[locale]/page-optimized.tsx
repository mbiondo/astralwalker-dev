import { HeroSection } from '@/components/HeroSectionSSR';
import { NavigationSSR } from '@/components/NavigationSSR';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

// Componentes de sección que se pueden hacer SSR
import dynamic from 'next/dynamic';

// Lazy load de componentes menos críticos
const DynamicServicesSection = dynamic(
  () => import('@/components/ServicesSection').then(mod => ({ default: mod.ServicesSection })),
  { 
    ssr: true, // Mantener SSR para contenido importante
    loading: () => <div className="h-96 bg-gradient-to-r from-purple-900/20 to-blue-900/20 animate-pulse rounded-xl" />
  }
);

const DynamicPortfolioSection = dynamic(
  () => import('@/components/PortfolioSection').then(mod => ({ default: mod.PortfolioSection })),
  { 
    ssr: true,
    loading: () => <div className="h-96 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 animate-pulse rounded-xl" />
  }
);

const DynamicContactSection = dynamic(
  () => import('@/components/ContactSection').then(mod => ({ default: mod.ContactSection })),
  { 
    ssr: false, // Form interactivo puede ser CSR
    loading: () => <div className="h-96 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 animate-pulse rounded-xl" />
  }
);

const DynamicFooter = dynamic(
  () => import('@/components/Footer').then(mod => ({ default: mod.Footer })),
  { 
    ssr: true,
    loading: () => <div className="h-32 bg-black/50 animate-pulse" />
  }
);

// Componentes de efectos que solo se cargan en cliente
const DynamicScrollProgressIndicator = dynamic(
  () => import('@/components/ScrollIndicators').then(mod => ({ default: mod.ScrollProgressIndicator })),
  { ssr: false }
);

const DynamicScrollToTop = dynamic(
  () => import('@/components/ScrollIndicators').then(mod => ({ default: mod.ScrollToTopButton })),
  { ssr: false }
);

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generateSEOMetadata({
    locale,
    url: `https://astralwalker.dev/${locale}`,
  });
}

export default async function OptimizedPage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* Navegación - Híbrida SSR/CSR */}
      <NavigationSSR locale={locale} />
      
      {/* Hero Section - Híbrida SSR/CSR */}
      <HeroSection locale={locale} />
      
      {/* Secciones principales - SSR con lazy loading progresivo */}
      <DynamicServicesSection />
      <DynamicPortfolioSection />
      
      {/* Sección de contacto - CSR por interactividad */}
      <DynamicContactSection />
      
      {/* Footer - SSR */}
      <DynamicFooter />
      
      {/* Efectos adicionales - Solo cliente */}
      <DynamicScrollProgressIndicator />
      <DynamicScrollToTop />
    </main>
  );
}

// Generación estática de rutas
export function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' }
  ];
}