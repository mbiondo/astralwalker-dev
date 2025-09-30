'use client';

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import { 
  SlideUp, 
  StaggerContainer, 
  StaggerItem,
  HoverCard,
  ScaleIn 
} from "@/components/animations/ScrollAnimations";
import { motion } from "framer-motion";

export function PortfolioSection() {
  const { t } = useTranslation();

  const projects = [
    {
      title: t('portfolio.projects.mvpApp.title'),
      category: t('portfolio.projects.mvpApp.category'),
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&auto=format",
      color: "from-cyan-500 to-blue-700",
    },
    {
      title: t('portfolio.projects.ecommercePlatform.title'),
      category: t('portfolio.projects.ecommercePlatform.category'),
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&auto=format",
      color: "from-purple-500 to-pink-700",
    },
    {
      title: t('portfolio.projects.saasLanding.title'),
      category: t('portfolio.projects.saasLanding.category'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&auto=format&q=80",
      color: "from-blue-500 to-indigo-700",
    },
    {
      title: t('portfolio.projects.fintech.title'),
      category: t('portfolio.projects.fintech.category'),
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&auto=format",
      color: "from-orange-500 to-red-700",
    },
    {
      title: t('portfolio.projects.socialNetwork.title'),
      category: t('portfolio.projects.socialNetwork.category'),
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&auto=format",
      color: "from-pink-500 to-purple-700",
    },
    {
      title: t('portfolio.projects.aiTool.title'),
      category: t('portfolio.projects.aiTool.category'),
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop&auto=format",
      color: "from-indigo-500 to-purple-700",
    },
    {
      title: t('portfolio.projects.marketplace.title'),
      category: t('portfolio.projects.marketplace.category'),
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&auto=format",
      color: "from-teal-500 to-cyan-700",
    },
    {
      title: t('portfolio.projects.healthApp.title'),
      category: t('portfolio.projects.healthApp.category'),
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&auto=format",
      color: "from-green-500 to-teal-700",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        {/* Título con animación */}
        <SlideUp className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">{t('portfolio.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            {t('portfolio.description')}
          </p>
        </SlideUp>
        
        {/* Grid de proyectos con animaciones escalonadas - Optimizado para móvil */}
        <StaggerContainer 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          staggerDelay={0.15}
        >
          {projects.map((project, index) => (
            <StaggerItem key={index}>
              <motion.div 
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-card border border-border shadow-sm hover:shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="aspect-[4/3] bg-muted overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Contenido siempre visible */}
                <div className="p-4 sm:p-6">
                  <Badge className="bg-muted text-muted-foreground border-border mb-3 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-indigo-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                
                {/* Efecto de brillo en hover - solo en la imagen */}
                <motion.div
                  className="absolute top-0 left-0 right-0 bottom-20 bg-gradient-to-r from-transparent via-indigo-500/10 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}