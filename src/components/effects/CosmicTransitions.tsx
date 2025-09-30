'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function SectionTransition({ 
  children, 
  className = '', 
  delay = 0 
}: SectionTransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Efecto de portal dimensional para transiciones importantes
export function PortalTransition({ 
  children, 
  className = '',
  triggerOnView = true 
}: {
  children: ReactNode;
  className?: string;
  triggerOnView?: boolean;
}) {
  const portalVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -180,
      filter: "blur(10px)"
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      filter: "blur(0px)"
    }
  };

  const transitionConfig = {
    duration: 1.2,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    scale: {
      type: "spring" as const,
      stiffness: 300,
      damping: 25
    }
  };

  const WrapperComponent = triggerOnView ? motion.div : motion.div;
  const props = triggerOnView 
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-50px" },
        variants: portalVariants,
        transition: transitionConfig
      }
    : {
        initial: "hidden" as const,
        animate: "visible" as const,
        variants: portalVariants,
        transition: transitionConfig
      };

  return (
    <WrapperComponent
      {...props}
      className={`relative ${className}`}
    >
      {/* Anillo de energía */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: `conic-gradient(
            from 0deg,
            transparent 0deg,
            rgba(6, 182, 212, 0.3) 90deg,
            rgba(168, 85, 247, 0.3) 180deg,
            rgba(236, 72, 153, 0.3) 270deg,
            transparent 360deg
          )`
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </WrapperComponent>
  );
}

// Efecto de ondas de energía
export function EnergyWaves({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 border border-cyan-400/20 rounded-full"
          style={{ scale: 0 }}
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 1.3,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
}

// Efecto de partículas en movimiento
export function MovingParticles({ 
  count = 20, 
  className = '' 
}: { 
  count?: number; 
  className?: string; 
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 4;
        const randomSize = 2 + Math.random() * 4;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: randomSize,
              height: randomSize
            }}
            animate={{
              y: [0, -100, -200],
              x: [0, Math.random() * 50 - 25, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
}

// Efecto de texto con brillo cósmico
export function CosmicText({ 
  children, 
  className = '',
  glowColor = 'cyan' 
}: {
  children: ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'pink' | 'blue';
}) {
  const glowColors = {
    cyan: 'drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
    purple: 'drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
    pink: 'drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
    blue: 'drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]'
  };

  return (
    <motion.div
      className={`${className} ${glowColors[glowColor]}`}
      animate={{
        filter: [
          'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))',
          'drop-shadow(0 0 20px rgba(6, 182, 212, 0.8))',
          'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))'
        ]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {children}
    </motion.div>
  );
}

// Componente de loading cósmico
export function CosmicLoader({ size = 'medium' }: { size?: 'small' | 'medium' | 'large' }) {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} mx-auto`}>
      {/* Anillo exterior */}
      <motion.div
        className="absolute inset-0 border-2 border-transparent border-t-cyan-400 border-r-purple-400 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Anillo interior */}
      <motion.div
        className="absolute inset-2 border-2 border-transparent border-b-pink-400 border-l-blue-400 rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Núcleo central */}
      <motion.div
        className="absolute inset-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}