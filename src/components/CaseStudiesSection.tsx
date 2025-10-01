'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import CurvephonicImage from '/public/images/curvephonic.png';

export function CaseStudiesSection() {
  const { t } = useTranslation();

  return (
    <section id="case-studies" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base">
            {t('caseStudies.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('caseStudies.description')}
          </p>
        </div>
        
        {/* Featured Case Study: Curvephonic */}
        <Card className="p-8 md:p-12 mb-12 hover:shadow-2xl transition-all duration-300 border-2 border-primary/20">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column: Image Placeholder */}
            <div>
              <div className="relative aspect-video bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-lg mb-6 overflow-hidden border border-primary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src={CurvephonicImage}
                    alt="Curvephonic Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="text-2xl mb-1">🎵</div>
                  <p className="text-xs font-semibold">AI Music</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="text-2xl mb-1">⚡</div>
                  <p className="text-xs font-semibold">Concurrent</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="text-2xl mb-1">🎬</div>
                  <p className="text-xs font-semibold">Video</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg text-center">
                  <div className="text-2xl mb-1">🔧</div>
                  <p className="text-xs font-semibold">4 Services</p>
                </div>
              </div>
            </div>

            {/* Right Column: Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-5xl">🎬</div>
                <div>
                  <h3 className="text-3xl font-bold mb-1">
                    {t('caseStudies.cases.curvephonic.title')}
                  </h3>
                  <Badge variant="secondary">Featured Case</Badge>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {t('caseStudies.cases.curvephonic.description')}
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
                  <span className="text-2xl">🎯</span>
                  {t('caseStudies.challengeLabel')}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t('caseStudies.cases.curvephonic.challenge')}
                </p>
              </div>

              <div className="mb-6">
                <h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
                  <span className="text-2xl">✨</span>
                  {t('caseStudies.solutionLabel')}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {t('caseStudies.cases.curvephonic.solution')}
                </p>
              </div>

              <div className="mb-6 p-6 bg-muted/50 rounded-lg">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <span className="text-xl">📊</span>
                  {t('caseStudies.metricsLabel')}
                </h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary">{t('caseStudies.cases.curvephonic.metrics.timeline')}</div>
                    <div className="text-xs text-muted-foreground mt-1">{t('caseStudies.timelineLabel')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">4</div>
                    <div className="text-xs text-muted-foreground mt-1">Services</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">75%</div>
                    <div className="text-xs text-muted-foreground mt-1">Faster</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm">{t('caseStudies.techLabel')}</h4>
                <div className="flex flex-wrap gap-2">
                  {t('caseStudies.cases.curvephonic.technologies').split(', ').map((tech: string, idx: number) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <a href="https://curvephonic.app" target='_blank' className="w-full group inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  {t('caseStudies.viewProjectButton')}
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
        
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">{t('caseStudies.ctaText')}</p>
          <Button size="lg" className="group">
            {t('caseStudies.ctaButton')}
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
