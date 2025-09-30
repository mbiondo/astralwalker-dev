import { Button } from "@/components/ui/button";
import Image from "next/image";
import { StaticNavigation } from "@/components/StaticComponents";
import { ClientWrapper } from "@/components/ClientWrapper";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import LogoPng from '/public/icon.png';

// Componentes interactivos que se cargan solo en cliente
const DynamicLanguageSwitcher = dynamic(
  () => import('./LanguageSwitcher').then(mod => ({ default: mod.LanguageSwitcher })),
  { 
    ssr: false,
    loading: () => <div className="w-20 h-8 bg-white/10 rounded animate-pulse" />
  }
);

const DynamicThemeToggle = dynamic(
  () => import('./theme-toggle').then(mod => ({ default: mod.ThemeToggle })),
  { 
    ssr: false,
    loading: () => <div className="w-8 h-8 bg-white/10 rounded animate-pulse" />
  }
);

const DynamicMobileMenu = dynamic(
  () => import('./MobileMenu').then(mod => ({ default: mod.MobileMenu })),
  { 
    ssr: false,
    loading: () => <div className="w-8 h-8 bg-white/10 rounded animate-pulse md:hidden" />
  }
);

// Wrapper para MobileMenu que maneja su propio estado
const DynamicMobileMenuWrapper = dynamic(
  () => Promise.resolve(function MobileMenuWrapper() {
    const [isOpen, setIsOpen] = useState(false);
    
    return <DynamicMobileMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />;
  }),
  { 
    ssr: false,
    loading: () => <div className="w-8 h-8 bg-white/10 rounded animate-pulse md:hidden" />
  }
);

// Función que genera el contenido estático de navegación para SSR
export function generateNavigationStaticContent(locale: string = 'es') {
  const texts = {
    es: {
      home: 'Inicio',
      services: 'Servicios', 
      portfolio: 'Portfolio',
      contact: 'Contacto',
      cta: 'Contactar'
    },
    en: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio', 
      contact: 'Contact',
      cta: 'Contact'
    }
  };

  const t = texts[locale as keyof typeof texts] || texts.es;

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="flex items-center justify-between h-16">
        {/* Logo - SSR */}
        <div className="flex items-center space-x-3">
          <div className="relative w-10 h-10">
            <Image
              src={LogoPng}
              alt="AstralWalker"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AstralWalker
          </span>
        </div>

        {/* Navigation Links - SSR para desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {[
            { href: '#hero', label: t.home },
            { href: '#services', label: t.services },
            { href: '#portfolio', label: t.portfolio },
            { href: '#contact', label: t.contact },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controles - Placeholder para SSR */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            {/* Placeholder para theme toggle */}
            <div className="w-8 h-8 bg-white/10 rounded animate-pulse" />
            {/* Placeholder para language switcher */}
            <div className="w-20 h-8 bg-white/10 rounded animate-pulse" />
          </div>
          
          {/* CTA Button - SSR */}
          <Button 
            size="sm"
            className="hidden sm:flex bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-medium transition-all duration-300"
          >
            {t.cta}
          </Button>

          {/* Placeholder para mobile menu */}
          <div className="w-8 h-8 bg-white/10 rounded animate-pulse md:hidden" />
        </div>
      </div>
    </div>
  );
}

// Componente principal de navegación híbrido
interface NavigationSSRProps {
  locale?: string;
}

export function NavigationSSR({ locale = 'es' }: NavigationSSRProps) {
  return (
    <StaticNavigation>
      {/* Contenido estático para SSR */}
      {generateNavigationStaticContent(locale)}
      
      {/* Componentes interactivos - Solo en cliente */}
      <ClientWrapper>
        <div className="absolute inset-0 pointer-events-none">
          <div className="container mx-auto px-4 sm:px-6 h-full">
            <div className="flex items-center justify-between h-16">
              {/* Spacer para logo */}
              <div className="flex items-center space-x-3 opacity-0">
                <div className="w-10 h-10" />
                <span className="text-xl font-bold">AstralWalker</span>
              </div>

              {/* Spacer para nav links */}
              <div className="hidden md:block opacity-0">
                <div className="w-80 h-6" />
              </div>

              {/* Controles interactivos */}
              <div className="flex items-center space-x-4 pointer-events-auto">
                <div className="hidden md:flex items-center space-x-3">
                  <DynamicThemeToggle />
                  <DynamicLanguageSwitcher />
                </div>
                
                <div className="opacity-0 hidden sm:block">
                  <Button size="sm">Contactar</Button>
                </div>

                <DynamicMobileMenuWrapper />
              </div>
            </div>
          </div>
        </div>
      </ClientWrapper>
    </StaticNavigation>
  );
}

// Export para usar en páginas con navegación estática
export { generateNavigationStaticContent as NavigationStaticContent };