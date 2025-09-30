'use client';

import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  FadeIn,
  SlideInLeft,
  SlideInRight
} from "@/components/animations/ScrollAnimations";

export function ManifestoSection() {
  const { t } = useTranslation();

  return (
    <section id="manifesto" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título con animación */}
          <SlideUp className="mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {t('manifesto.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance">
              {t('manifesto.description')}
            </p>
          </SlideUp>

          {/* Quote principal con animaciones */}
          <div className="relative">
            <FadeIn delay={0.3}>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl border border-white/20">
                <div className="text-6xl sm:text-7xl md:text-8xl text-cyan-200 dark:text-cyan-600 mb-4 leading-none select-none">
                  "
                </div>
                <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground leading-relaxed italic relative -mt-6 sm:-mt-8">
                  {t('manifesto.quote')}
                </blockquote>
                <div className="flex justify-end">
                  <div className="text-6xl sm:text-7xl md:text-8xl text-cyan-200 dark:text-cyan-600 leading-none select-none -mt-4 sm:-mt-6">
                    "
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Elementos decorativos */}
            <SlideInLeft delay={0.6} className="absolute -left-4 sm:-left-8 top-8 sm:top-12">
              <div className="w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-60 animate-pulse"></div>
            </SlideInLeft>
            
            <SlideInRight delay={0.8} className="absolute -right-4 sm:-right-8 bottom-8 sm:bottom-12">
              <div className="w-3 h-3 sm:w-5 sm:h-5 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-60 animate-pulse"></div>
            </SlideInRight>
          </div>
        </div>
      </div>
    </section>
  );
}