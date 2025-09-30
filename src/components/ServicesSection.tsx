'use client';

import { Card } from "@/components/ui/card";
import { Search, Zap, Code, Rocket, RotateCcw, Lightbulb } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard 
} from "@/components/animations/ScrollAnimations";
import { SectionTransition, CosmicText } from "@/components/effects/CosmicTransitions";

export function ServicesSection() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: t('services.discovery.title'),
      description: t('services.discovery.description'),
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: t('services.prototype.title'),
      description: t('services.prototype.description'),
      gradient: "from-purple-500 via-pink-500 to-red-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: t('services.development.title'),
      description: t('services.development.description'),
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t('services.launch.title'),
      description: t('services.launch.description'),
      gradient: "from-orange-400 via-pink-500 to-purple-600",
    },
    {
      icon: <RotateCcw className="w-8 h-8" />,
      title: t('services.iteration.title'),
      description: t('services.iteration.description'),
      gradient: "from-cyan-300 via-teal-400 to-blue-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      gradient: "from-pink-400 via-purple-500 to-indigo-600",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 bg-background">
      <div className="container mx-auto">
        {/* Título con animación */}
        <SlideUp className="text-center mb-12 sm:mb-16">
          <CosmicText glowColor="cyan">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('services.title')}</h2>
          </CosmicText>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('services.description')}
          </p>
        </SlideUp>
        
        {/* Grid de servicios con animaciones escalonadas - Optimizado para móvil */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <HoverCard 
                hoverScale={1.02}
                className="h-full"
              >
                <Card className="p-4 sm:p-6 h-full bg-card border border-border group transition-all duration-300 hover:shadow-xl hover:border-indigo-300">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-3 sm:mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="scale-75 sm:scale-100">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-indigo-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}