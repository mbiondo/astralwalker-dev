'use client';

import { useEffect, useState } from 'react';

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = ['hero', 'services', 'team', 'case-studies', 'pricing', 'deliverables', 'post-mvp', 'contact'];
    const sectionElements = sections.map(id => document.getElementById(id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: [0.3, 0.5, 0.7],
        rootMargin: '-80px 0px -80px 0px', // Offset para compensar la navbar
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Función para detectar la sección activa basada en scroll
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset + 100; // Offset para la navbar

      for (const section of sectionElements) {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Detectar sección inicial
    handleScroll();

    // Agregar listeners
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return activeSection;
}