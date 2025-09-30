import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";
import Image from "next/image";
import { StaticHeroContent, StaticTransition } from "@/components/StaticComponents";
import { ClientWrapper, DynamicFloatingOrbs, DynamicMovingParticles, DynamicEnergyWaves } from "@/components/ClientWrapper";
import AstralwakerImage from '/public/astralwalker-logo.png';

// Función que genera el contenido estático del hero para SSR
export function generateHeroStaticContent(locale: string = 'es') {
  // Textos estáticos según el idioma
  const texts = {
    es: {
      badge: "Estudio de Producción Musical",
      title: "Transforma tu música en",
      titleHighlight: "experiencias cósmicas",
      subtitle: "Llevamos tu arte sonoro a dimensiones inexploradas con tecnología de vanguardia y creatividad sin límites",
      cta: "Explorar Servicios",
      demo: "Ver Demo"
    },
    en: {
      badge: "Music Production Studio",
      title: "Transform your music into",
      titleHighlight: "cosmic experiences", 
      subtitle: "We take your sound art to unexplored dimensions with cutting-edge technology and limitless creativity",
      cta: "Explore Services",
      demo: "Watch Demo"
    }
  };

  const t = texts[locale as keyof typeof texts] || texts.es;

  return (
    <div className="container mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-6rem)]">
        {/* Contenido textual - SSR */}
        <div className="space-y-8">
          <StaticTransition>
            <Badge 
              variant="secondary" 
              className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 px-6 py-2 text-sm font-medium backdrop-blur-sm"
            >
              {t.badge}
            </Badge>
          </StaticTransition>

          <StaticTransition>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {t.title}{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h1>
          </StaticTransition>

          <StaticTransition>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-xl">
              {t.subtitle}
            </p>
          </StaticTransition>

          <StaticTransition>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                {t.cta}
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                {t.demo}
              </Button>
            </div>
          </StaticTransition>
        </div>

        {/* Imagen - SSR con optimización */}
        <StaticTransition>
          <div className="relative">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={AstralwakerImage}
                alt="AstralWalker"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
             
            </div>
          </div>
        </StaticTransition>
      </div>
    </div>
  );
}

// Componente principal del Hero que combina SSR + CSR
interface HeroSectionProps {
  locale?: string;
}

export function HeroSection({ locale = 'es' }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Efectos cósmicos - Solo en cliente */}
      <ClientWrapper>
        <DynamicFloatingOrbs />
        <DynamicMovingParticles count={15} />
        <DynamicEnergyWaves className="opacity-30" />
      </ClientWrapper>
      
      {/* Contenido principal - SSR */}
      <StaticHeroContent>
        {generateHeroStaticContent(locale)}
      </StaticHeroContent>
    </section>
  );
}

// Export para usar en páginas con contenido estático
export { generateHeroStaticContent as HeroStaticContent };