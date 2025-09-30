'use client';

import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import LogoPNG from '/public/icon.png';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Logo y nombre */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shadow-lg logo-glow-active">
              <Image
                src={LogoPNG}
                alt="AstralWalker Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            </div>
            <span className="text-base sm:text-lg font-bold text-foreground">AstralWalker</span>
          </div>
          
          {/* Links de navegación */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
            <a href="#servicios" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.services')}
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.portfolio')}
            </a>
            <a href="mailto:hola@astralwalker.dev" className="text-muted-foreground hover:text-indigo-600 transition-colors">
              {t('navigation.contact')}
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
            {t('footer.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}