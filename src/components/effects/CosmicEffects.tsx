'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
}

interface CosmicBackgroundProps {
  className?: string;
  starCount?: number;
  intensity?: 'low' | 'medium' | 'high';
}

export function CosmicBackground({ 
  className = '', 
  starCount = 150,
  intensity = 'medium' 
}: CosmicBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Inicializar estrellas
    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    initStars();

    // Configuración de intensidad
    const intensityConfig = {
      low: { glowSize: 10, glowOpacity: 0.3, movementSpeed: 0.5 },
      medium: { glowSize: 15, glowOpacity: 0.5, movementSpeed: 0.8 },
      high: { glowSize: 20, glowOpacity: 0.7, movementSpeed: 1.2 }
    };

    const config = intensityConfig[intensity];

    // Función de animación
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Fondo con gradiente cósmico sutil
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(6, 182, 212, 0.02)'); // cyan
      gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.01)'); // blue  
      gradient.addColorStop(1, 'rgba(99, 102, 241, 0.01)'); // indigo
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Dibujar y animar estrellas
      starsRef.current.forEach((star, index) => {
        // Movimiento sutil
        star.y -= star.speed * config.movementSpeed;
        
        // Reposicionar estrellas que salen de la pantalla
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        // Efecto de parpadeo
        star.opacity += Math.sin(time * star.twinkleSpeed) * 0.1;
        star.opacity = Math.max(0.1, Math.min(1, star.opacity));

        // Dibujar estrella con efecto de brillo
        ctx.beginPath();
        
        // Brillo exterior
        const glowGradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * config.glowSize
        );
        
        // Colores cósmicos para el brillo
        const colors = [
          `rgba(6, 182, 212, ${star.opacity * config.glowOpacity})`, // cyan
          `rgba(168, 85, 247, ${star.opacity * config.glowOpacity})`, // purple
          `rgba(59, 130, 246, ${star.opacity * config.glowOpacity})`, // blue
          `rgba(236, 72, 153, ${star.opacity * config.glowOpacity})` // pink
        ];
        
        const colorIndex = index % colors.length;
        glowGradient.addColorStop(0, colors[colorIndex]);
        glowGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = glowGradient;
        ctx.arc(star.x, star.y, star.size * config.glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Núcleo de la estrella
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [starCount, intensity]);

  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
}

// Componente de orbes flotantes para secciones específicas
export function FloatingOrbs({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Orbes grandes */}
      <motion.div
        className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-xl"
        style={{ top: '10%', left: '10%' }}
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 blur-xl"
        style={{ top: '60%', right: '15%' }}
        animate={{
          y: [0, 15, 0],
          x: [0, -8, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-indigo-400/20 to-purple-500/20 blur-xl"
        style={{ bottom: '20%', left: '70%' }}
        animate={{
          y: [0, -12, 0],
          x: [0, 6, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
    </div>
  );
}

// Hook para efectos de mouse cósmicos
export function useCosmicCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'cosmic-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: radial-gradient(circle, rgba(6, 182, 212, 0.6) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease-out;
      display: none;
    `;
    
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;

    const updateCursor = () => {
      cursor.style.left = mouseX - 10 + 'px';
      cursor.style.top = mouseY - 10 + 'px';
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isMoving) {
        cursor.style.display = 'block';
        isMoving = true;
      }
      
      updateCursor();
    };

    const onMouseLeave = () => {
      cursor.style.display = 'none';
      isMoving = false;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeChild(cursor);
    };
  }, []);
}