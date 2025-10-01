'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function PostMVPSection() {
  const { t } = useTranslation();

  const supportOptions = [
    {
      id: 'maintenance',
      icon: '🔧',
      recommended: false,
    },
    {
      id: 'scaling',
      icon: '📈',
      recommended: true,
    },
    {
      id: 'evolution',
      icon: '🌟',
      recommended: true,
    },
  ];

  return (
    <section id="post-mvp" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base">
            {t('postMVP.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('postMVP.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('postMVP.description')}
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportOptions.map((option) => (
            <Card 
              key={option.id} 
              className={`p-6 relative hover:shadow-xl transition-all duration-300 ${
                option.recommended ? 'border-primary border-2' : ''
              }`}
            >
              {option.recommended && (
                <Badge className="absolute -top-3 right-4">
                  {t('postMVP.recommendedLabel')}
                </Badge>
              )}
              <div className="text-5xl mb-4 text-center">{option.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">
                {t(`postMVP.options.${option.id}.title`)}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t(`postMVP.options.${option.id}.description`)}
              </p>
              
              {/* Features */}
              <div className="space-y-2 mb-6">
                <h4 className="font-semibold text-sm mb-3">{t('postMVP.includesLabel')}</h4>
                {[1, 2, 3, 4].map((num) => {
                  const feature = t(`postMVP.options.${option.id}.features.${num}`);
                  return feature !== `postMVP.options.${option.id}.features.${num}` ? (
                    <div key={num} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ) : null;
                })}
              </div>

              {/* Pricing indicator */}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold">{t('postMVP.fromLabel')}</span>{' '}
                  {t(`postMVP.options.${option.id}.pricing`)}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Comparison or Path */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('postMVP.path.title')}</h3>
          <div className="grid md:grid-cols-4 gap-4 items-center">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <p className="font-semibold">{t('postMVP.path.step1')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('postMVP.path.step1Detail')}</p>
            </div>
            <div className="hidden md:block text-center text-2xl text-primary">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">📊</div>
              <p className="font-semibold">{t('postMVP.path.step2')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('postMVP.path.step2Detail')}</p>
            </div>
            <div className="hidden md:block text-center text-2xl text-primary">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <p className="font-semibold">{t('postMVP.path.step3')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('postMVP.path.step3Detail')}</p>
            </div>
            <div className="hidden md:block text-center text-2xl text-primary">→</div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌟</div>
              <p className="font-semibold">{t('postMVP.path.step4')}</p>
              <p className="text-xs text-muted-foreground mt-1">{t('postMVP.path.step4Detail')}</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">{t('postMVP.ctaText')}</p>
          <Button size="lg" variant="outline">
            {t('postMVP.ctaButton')}
          </Button>
        </div>
      </div>
    </section>
  );
}
