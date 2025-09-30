import { ReactNode } from 'react';

/**
 * Versiones SSR-safe de componentes animados
 * Renderizan contenido estático en servidor y se enhancen con animaciones en cliente
 */

interface StaticContentProps {
  children: ReactNode;
  className?: string;
}

// Componente estático que se renderiza en SSR
export function StaticHeroContent({ children, className = '' }: StaticContentProps) {
  return (
    <div className={`transition-opacity duration-300 ${className}`}>
      {children}
    </div>
  );
}

export function StaticServiceCard({ children, className = '' }: StaticContentProps) {
  return (
    <div className={`service-card-ssr ssr-consistent hydration-safe ${className}`}>
      {children}
    </div>
  );
}

export function StaticPortfolioItem({ children, className = '' }: StaticContentProps) {
  return (
    <div className={`portfolio-item-ssr ssr-consistent hydration-safe ${className}`}>
      {children}
    </div>
  );
}

export function StaticNavigation({ children, className = '' }: StaticContentProps) {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 nav-ssr-consistent ssr-to-csr-transition ${className}`}>
      {children}
    </nav>
  );
}

export function StaticSection({ children, className = '', id }: StaticContentProps & { id?: string }) {
  return (
    <section id={id} className={`py-20 px-4 transition-opacity duration-300 ${className}`}>
      {children}
    </section>
  );
}

// Componente para manejar transiciones suaves sin animaciones pesadas
export function StaticTransition({ children, className = '' }: StaticContentProps) {
  return (
    <div className={`transition-all duration-500 ease-out ${className}`}>
      {children}
    </div>
  );
}

// Background estático que se reemplaza por efectos cósmicos en cliente
export function StaticCosmicBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`cosmic-background-ssr ${className}`} />
  );
}