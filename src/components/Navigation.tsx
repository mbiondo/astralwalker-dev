'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./MobileMenu";
import { useSmoothScroll } from "@/hooks/useScrollAnimations";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion } from "framer-motion";
import { useState } from "react";
import LogoPng from '/public/icon.png';
export function Navigation() {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId, 80); // 80px offset para compensar la navegación fija
  };

  // Configuración de enlaces de navegación
  const navLinks = [
    { id: 'hero', label: 'Home', translationKey: 'navigation.home' },
    { id: 'services', label: 'Services', translationKey: 'navigation.services' },
    { id: 'portfolio', label: 'Portfolio', translationKey: 'navigation.portfolio' },
    { id: 'contact', label: 'Contact', translationKey: 'navigation.contact' },
  ];

  // Función para determinar si un enlace está activo
  const isLinkActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border/50"
    >
          <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
            <div className="flex items-center justify-between">
              {/* Logo con animación - Optimizado para móvil */}
              <motion.div 
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => scrollToElement('hero', 0)}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shadow-lg logo-glow">
                  <Image
                    src={LogoPng}
                    alt="AstralWalker Logo"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-lg"
                    priority
                  />
                </div>
                <span className="text-lg sm:text-xl font-bold text-foreground hidden xs:block sm:block">AstralWalker</span>
                <span className="text-sm font-bold text-foreground block xs:hidden sm:hidden">AW</span>
              </motion.div>

              {/* Enlaces de navegación con smooth scroll y estado activo */}
              <div className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative font-medium transition-colors duration-200 ${
                      isLinkActive(link.id)
                        ? 'text-indigo-600'
                        : 'text-muted-foreground hover:text-indigo-600'
                    }`}
                  >
                    {t(link.translationKey)}
                    
                    {/* Indicador de sección activa */}
                    {isLinkActive(link.id) && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>

              {/* Controles y botón CTA - Optimizado para móvil */}
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="hidden sm:flex items-center space-x-3">
                  <ThemeToggle />
                  <LanguageSwitcher />
                </div>
                
                {/* Botón CTA - Solo desktop */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden lg:block"
                >
                  <Button 
                    onClick={() => handleNavClick('contact')}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {t('navigation.bookSession')}
                  </Button>
                </motion.div>

                {/* Menú móvil */}
                <MobileMenu 
                  isOpen={isMobileMenuOpen} 
                  onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                />
              </div>
            </div>
          </div>
        </motion.nav>
  );
}