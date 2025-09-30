'use client';

import dynamic from 'next/dynamic';
import { ReactNode, Suspense, useEffect, useState } from 'react';

/**
 * Hook para detectar hidratación segura
 */
function useIsHydrated() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return isHydrated;
}

/**
 * Wrapper para componentes que requieren hidratación del cliente
 * Permite SSR del contenido estático mientras carga componentes interactivos
 */
interface ClientWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
  ssr?: boolean;
}

export function ClientWrapper({ 
  children, 
  fallback = null, 
  ssr = true 
}: ClientWrapperProps) {
  const isHydrated = useIsHydrated();

  if (!isHydrated) {
    return <div className="ssr-to-csr-transition">{fallback}</div>;
  }

  return (
    <div className="ssr-to-csr-transition">
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </div>
  );
}

/**
 * Wrapper específico para componentes con animaciones
 * Renderiza contenido estático en SSR y enhances con animaciones en cliente
 */
interface AnimatedWrapperProps {
  children: ReactNode;
  staticContent?: ReactNode;
  className?: string;
}

export function AnimatedWrapper({ 
  children, 
  staticContent, 
  className = '' 
}: AnimatedWrapperProps) {
  return (
    <div className={className}>
      {/* Contenido estático para SSR */}
      {staticContent && (
        <noscript>
          {staticContent}
        </noscript>
      )}
      
      {/* Componente animado para cliente */}
      <ClientWrapper>
        {children}
      </ClientWrapper>
    </div>
  );
}

/**
 * HOC para hacer componentes SSR-safe con lazy loading
 */
export function withSSRSafe<T extends object>(
  Component: React.ComponentType<T>,
  LoadingComponent?: () => JSX.Element
) {
  const SSRSafeComponent = dynamic(
    () => Promise.resolve(Component),
    {
      ssr: false,
      loading: LoadingComponent || (() => <div className="animate-pulse bg-gray-200 rounded h-8 w-full" />)
    }
  );

  return SSRSafeComponent;
}

/**
 * Dynamic import with optimized loading para efectos cósmicos
 */
export const DynamicCosmicEffects = dynamic(
  () => import('@/components/effects/CosmicEffects').then(mod => ({ default: mod.CosmicBackground })),
  {
    ssr: false,
    loading: () => <div className="cosmic-background-ssr" />
  }
);

export const DynamicFloatingOrbs = dynamic(
  () => import('@/components/effects/CosmicEffects').then(mod => ({ default: mod.FloatingOrbs })),
  {
    ssr: false,
    loading: () => null
  }
);

export const DynamicMovingParticles = dynamic(
  () => import('@/components/effects/CosmicTransitions').then(mod => ({ default: mod.MovingParticles })),
  {
    ssr: false,
    loading: () => null
  }
);

export const DynamicEnergyWaves = dynamic(
  () => import('@/components/effects/CosmicTransitions').then(mod => ({ default: mod.EnergyWaves })),
  {
    ssr: false,
    loading: () => null
  }
);