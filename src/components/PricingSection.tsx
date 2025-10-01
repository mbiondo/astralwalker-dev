'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function PricingSection() {
  const { t } = useTranslation();

  const plans = [
    {
      id: 'starter',
      icon: '🌙',
      popular: false,
    },
    {
      id: 'full',
      icon: '🪐',
      popular: true,
    },
    {
      id: 'enterprise',
      icon: '🌌',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base">
            {t('pricing.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`p-8 relative hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'border-primary border-2 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  {t('pricing.popularLabel')}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2">
                  {t(`pricing.plans.${plan.id}.name`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(`pricing.plans.${plan.id}.description`)}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {t(`pricing.plans.${plan.id}.price`)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  {t(`pricing.plans.${plan.id}.priceDetail`)}
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-6 p-3 bg-primary/5 rounded-lg text-center">
                <p className="text-sm font-semibold">
                  ⏱️ {t(`pricing.plans.${plan.id}.timeline`)}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
                  const feature = t(`pricing.plans.${plan.id}.features.${num}`);
                  return feature !== `pricing.plans.${plan.id}.features.${num}` ? (
                    <div key={num} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ) : null;
                })}
              </div>

              {/* CTA Button */}
              <Button 
                className="w-full" 
                variant={plan.popular ? 'default' : 'outline'}
                size="lg"
              >
                {t(`pricing.plans.${plan.id}.cta`)}
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="p-6">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">💬</span>
              {t('pricing.customTitle')}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {t('pricing.customDescription')}
            </p>
            <Button variant="outline" size="sm">
              {t('pricing.customCTA')}
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              {t('pricing.guaranteeTitle')}
            </h3>
            <p className="text-sm text-muted-foreground">
              {t('pricing.guaranteeDescription')}
            </p>
          </Card>
        </div>

        {/* FAQ Pricing */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">{t('pricing.faqText')}</p>
        </div>
      </div>
    </section>
  );
}
