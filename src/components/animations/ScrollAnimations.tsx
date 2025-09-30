'use client';

import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from '@/hooks/useScrollAnimations';
import { useEffect } from 'react';

// Variantes de animación predefinidas
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

// Interfaces para los componentes
interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  once?: boolean;
}

/**
 * Componente para animación Fade In
 */
export function FadeIn({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true 
}: AnimatedElementProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const customVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para animación Slide Up
 */
export function SlideUp({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true 
}: AnimatedElementProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const customVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para animación Slide In desde la izquierda
 */
export function SlideInLeft({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true 
}: AnimatedElementProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const customVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para animación Slide In desde la derecha
 */
export function SlideInRight({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true 
}: AnimatedElementProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const customVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para animación Scale In
 */
export function ScaleIn({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.6,
  once = true 
}: AnimatedElementProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const customVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration, delay, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={customVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Contenedor para animaciones escalonadas
 */
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({ 
  children, 
  className = '', 
  staggerDelay = 0.1,
  once = true 
}: StaggerContainerProps) {
  const { ref, inView, hasBeenInView } = useInView();
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={once ? (hasBeenInView ? 'visible' : 'hidden') : (inView ? 'visible' : 'hidden')}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Item para usar dentro de StaggerContainer
 */
export function StaggerItem({ 
  children, 
  className = '' 
}: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={staggerItemVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para efectos de hover avanzados
 */
interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
}

export function HoverCard({ 
  children, 
  className = '', 
  hoverScale = 1.05,
  hoverRotate = 0 
}: HoverCardProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale, 
        rotate: hoverRotate,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Componente para texto que se escribe progresivamente
 */
interface TypewriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}

export function Typewriter({ 
  text, 
  delay = 0, 
  speed = 0.05,
  className = '' 
}: TypewriterProps) {
  const { ref, hasBeenInView } = useInView();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={hasBeenInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ delay }}
    >
      {hasBeenInView && (
        <motion.span
          initial={{ width: 0 }}
          animate={{ width: 'auto' }}
          transition={{
            duration: text.length * speed,
            ease: 'easeInOut',
            delay: delay + 0.5
          }}
          style={{ 
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'inline-block'
          }}
        >
          {text}
        </motion.span>
      )}
    </motion.div>
  );
}