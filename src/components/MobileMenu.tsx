'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useSmoothScroll } from '@/hooks/useScrollAnimations';
import { useActiveSection } from '@/hooks/useActiveSection';
import { ThemeToggle } from './theme-toggle';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  const { t } = useTranslation();
  const { scrollToElement } = useSmoothScroll();
  const activeSection = useActiveSection();

  const navLinks = [
    { id: 'hero', label: 'Home', translationKey: 'navigation.home' },
    { id: 'services', label: 'Services', translationKey: 'navigation.services' },
    { id: 'team', label: 'Team', translationKey: 'navigation.team' },
    { id: 'case-studies', label: 'Case Studies', translationKey: 'navigation.caseStudies' },
    { id: 'pricing', label: 'Pricing', translationKey: 'navigation.pricing' },
    { id: 'contact', label: 'Contact', translationKey: 'navigation.contact' },
  ];

  const handleNavClick = (sectionId: string) => {
    scrollToElement(sectionId, 80);
    onToggle(); // Cerrar menú después de navegar
  };

  const isLinkActive = (sectionId: string) => {
    return activeSection === sectionId;
  };

  return (
    <>
      {/* Botón de menú hamburguesa */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.div>
      </button>

      {/* Overlay del menú */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menú deslizable - Optimizado para móviles */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-background/98 backdrop-blur-xl border-l border-border/50 shadow-2xl z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header del menú */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
                  <h3 className="text-lg font-semibold">{t('navigation.menu')}</h3>
                  <button
                    onClick={onToggle}
                    className="p-2 rounded-lg hover:bg-muted transition-colors"
                    aria-label={t('navigation.closeMenu')}
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Enlaces de navegación */}
                <nav className="flex-1 p-4 sm:p-6 bg-background/98 backdrop-blur-xl">
                  <ul className="space-y-3">
                    {navLinks.map((link, index) => (
                      <motion.li
                        key={link.id}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <button
                          onClick={() => handleNavClick(link.id)}
                          className={`w-full text-left p-4 rounded-lg transition-all duration-200 ${
                            isLinkActive(link.id)
                              ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 font-medium'
                              : 'hover:bg-muted'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-base">{t(link.translationKey)}</span>
                            {isLinkActive(link.id) && (
                              <motion.div
                                layoutId="mobileActiveIndicator"
                                className="w-2 h-2 bg-indigo-600 rounded-full"
                                initial={false}
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                              />
                            )}
                          </div>
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Controles móviles */}
                <div className="p-4 sm:p-6 border-t border-border bg-background/98 backdrop-blur-xl">
                  {/* Theme y Language toggles para móvil */}
                  <div className="flex justify-center items-center space-x-6 mb-4 sm:hidden">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                  
                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={() => handleNavClick('contact')}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    {t('navigation.bookSession')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}