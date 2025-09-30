'use client';

import { motion } from 'framer-motion';
import { useScrollProgress, useSmoothScroll } from '@/hooks/useScrollAnimations';

export function ScrollProgressIndicator() {
  const scrollProgress = useScrollProgress();

  return (
    <>
      {/* Barra de progreso principal */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[60] shadow-sm"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
      
      {/* Glow effect sutil */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400/50 via-purple-400/50 to-pink-400/50 origin-left z-[59] blur-sm"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        transition={{ type: "spring", stiffness: 400, damping: 40 }}
      />
    </>
  );
}

interface ScrollToTopButtonProps {
  className?: string;
}

export function ScrollToTopButton({ className = '' }: ScrollToTopButtonProps) {
  const scrollProgress = useScrollProgress();
  const { scrollToTop } = useSmoothScroll();

  if (scrollProgress < 20) return null;

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      whileHover={{ scale: 1.1, rotate: -90 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
      aria-label="Volver arriba"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200"
      >
        <path
          d="M7 14L12 9L17 14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      
      {/* Círculo de progreso alrededor del botón */}
      <svg
        className="absolute inset-0 w-full h-full -rotate-90"
        viewBox="0 0 36 36"
      >
        <path
          className="stroke-white/20"
          strokeWidth="2"
          fill="transparent"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <motion.path
          className="stroke-white"
          strokeWidth="2"
          fill="transparent"
          strokeLinecap="round"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          style={{
            strokeDasharray: 100,
            strokeDashoffset: 100 - scrollProgress,
          }}
        />
      </svg>
    </motion.button>
  );
}