'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  FadeIn, 
  SlideUp, 
  SlideInRight, 
  StaggerContainer, 
  StaggerItem,
  ScaleIn 
} from "@/components/animations/ScrollAnimations";
import { FloatingOrbs } from "@/components/effects/CosmicEffects";
import { EnergyWaves, MovingParticles } from "@/components/effects/CosmicTransitions";
import AstralwakerImage from '/public/astralwalker-logo.png';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Efectos cósmicos de fondo */}
      <FloatingOrbs />
      <MovingParticles count={15} />
      <EnergyWaves className="opacity-30" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido de texto con animaciones escalonadas */}
          <StaggerContainer className="space-y-6 sm:space-y-8">
            <StaggerItem>
              <div className="space-y-4 sm:space-y-6">
                <FadeIn delay={0.2}>
                  <Badge variant="secondary" className="text-xs sm:text-sm bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 border-cyan-200 shadow-sm">
                    {t('hero.badge')}
                  </Badge>
                </FadeIn>
                
                <SlideUp delay={0.4}>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-balance leading-tight">
                    {t('hero.title')}{" "}
                    <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                      {t('hero.titleHighlight')}
                    </span>{" "}
                    {t('hero.titleEnd')}
                  </h1>
                </SlideUp>
                
                <SlideUp delay={0.6}>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground text-pretty max-w-lg leading-relaxed">
                    {t('hero.description')}
                  </p>
                </SlideUp>
              </div>
            </StaggerItem>
            
            <StaggerItem>
              <SlideUp delay={0.8}>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group w-full sm:w-auto"
                  >
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    {t('hero.playDemo')}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 bg-transparent font-semibold shadow-sm hover:shadow-md transition-all duration-200 w-full sm:w-auto"
                  >
                    {t('hero.bookStudio')}
                  </Button>
                </div>
              </SlideUp>
            </StaggerItem>
          </StaggerContainer>
          
          {/* Imagen con animaciones desde la derecha */}
          <SlideInRight delay={0.5} className="relative order-first lg:order-last">
            <ScaleIn delay={0.7}>
              <div className="aspect-square rounded-2xl overflow-hidden  shadow-2xl relative flex items-center justify-center p-8">
                <Image
                  src={AstralwakerImage}
                  alt="AstralWalker - Guardián Cósmico de MVPs"
                  width={400}
                  height={400}
                  className="w-full h-full object-contain opacity-90 filter drop-shadow-2xl"
                  priority
                />              
              </div>
            </ScaleIn>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
}