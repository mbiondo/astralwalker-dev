'use client';

import { Card } from "@/components/ui/card";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard 
} from "@/components/animations/ScrollAnimations";

export function UniquenessSection() {
  const { t } = useTranslation();

  // Características únicas basadas en idea.md con colores del logo
  const features = [
    {
      icon: "😼",
      title: t('uniqueness.features.0.title'),
      description: t('uniqueness.features.0.description'),
      gradient: "from-cyan-400 via-blue-500 to-indigo-600", // Azul cósmico del siamés
    },
    {
      icon: "🎨", 
      title: t('uniqueness.features.1.title'),
      description: t('uniqueness.features.1.description'),
      gradient: "from-purple-500 via-pink-500 to-red-500", // Rosa/púrpura de las estrellas
    },
    {
      icon: "🛠️",
      title: t('uniqueness.features.2.title'),
      description: t('uniqueness.features.2.description'),
      gradient: "from-blue-600 via-indigo-600 to-purple-700", // Azul profundo del espacio
    },
    {
      icon: "🌠",
      title: t('uniqueness.features.3.title'),
      description: t('uniqueness.features.3.description'),
      gradient: "from-orange-400 via-pink-500 to-purple-600", // Colores de las estrellas del logo
    }
  ];

  return (
    <section id="uniqueness" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        {/* Título con animación */}
        <SlideUp className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">
            {t('uniqueness.title')}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('uniqueness.description')}
          </p>
        </SlideUp>
        
        {/* Grid de características únicas */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto"
          staggerDelay={0.15}
        >
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <HoverCard 
                hoverScale={1.03}
                className="h-full"
              >
                <Card className="p-6 sm:p-8 h-full bg-card border border-border group transition-all duration-300 hover:shadow-xl hover:border-indigo-300">
                  <div className="flex items-start space-x-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <span className="text-2xl sm:text-3xl">
                        {feature.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-700 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}