'use client';

import { useEffect, useState } from 'react';

/**
 * Hook para detectar si estamos en el cliente o servidor
 * Útil para renderizado condicional de componentes que requieren hidratación
 */
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}

/**
 * Hook para detectar soporte de animaciones
 */
export function useAnimationSupport() {
  const [supportsAnimations, setSupportsAnimations] = useState(false);
  const isClient = useIsClient();

  useEffect(() => {
    if (!isClient) return;

    // Detectar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Detectar capacidades del dispositivo
    const hasGoodPerformance = !!(
      navigator.hardwareConcurrency && 
      navigator.hardwareConcurrency >= 4
    );

    setSupportsAnimations(!prefersReducedMotion && hasGoodPerformance);
  }, [isClient]);

  return { isClient, supportsAnimations };
}

/**
 * Hook para lazy loading de componentes pesados
 */
export function useLazyLoad() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const { isClient, supportsAnimations } = useAnimationSupport();

  useEffect(() => {
    if (!isClient) return;

    // Cargar componentes pesados después de la hidratación inicial
    const timer = setTimeout(() => {
      setShouldLoad(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [isClient]);

  return { shouldLoad, supportsAnimations };
}