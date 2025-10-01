'use client';

import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  FadeIn,
  SlideInLeft,
  SlideInRight
} from "@/components/animations/ScrollAnimations";
import { Sparkles, Rocket, Zap } from "lucide-react";

export function ManifestoSection() {
  const { t } = useTranslation();

  const principles = [
    {
      icon: Sparkles,
      title: t('manifesto.principle1.title'),
      description: t('manifesto.principle1.description'),
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Rocket,
      title: t('manifesto.principle2.title'),
      description: t('manifesto.principle2.description'),
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Zap,
      title: t('manifesto.principle3.title'),
      description: t('manifesto.principle3.description'),
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="manifesto" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Título con animación */}
          <SlideUp className="mb-12 sm:mb-16 text-center">
            <div className="inline-flex items-center justify-center px-4 py-2 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-600 dark:text-cyan-400" />
              <span className="text-cyan-700 dark:text-cyan-300">{t('manifesto.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('manifesto.title')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-balance max-w-3xl mx-auto">
              {t('manifesto.description')}
            </p>
          </SlideUp>

          {/* Mensaje central destacado */}
          <FadeIn delay={0.2}>
            <div className="mb-12 sm:mb-16 max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-800/70 backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/50 dark:border-gray-700/50">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
                <p className="relative text-xl sm:text-2xl md:text-3xl font-medium text-foreground leading-relaxed text-center">
                  {t('manifesto.core')}
                </p>
                {/* Elementos decorativos flotantes */}
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </FadeIn>

          {/* Principios en grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const delay = 0.3 + (index * 0.15);
              
              return (
                <FadeIn key={index} delay={delay}>
                  <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full min-h-[320px] sm:min-h-[340px] flex flex-col">
                    {/* Icono con gradiente */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${principle.gradient} mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    
                    {/* Contenido */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-foreground">
                        {principle.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {principle.description}
                      </p>
                    </div>

                    {/* Efecto hover de brillo */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}