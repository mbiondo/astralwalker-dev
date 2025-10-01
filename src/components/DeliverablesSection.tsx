'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function DeliverablesSection() {
  const { t } = useTranslation();

  const deliverables = [
    {
      icon: '💻',
      title: t('deliverables.items.code.title'),
      description: t('deliverables.items.code.description'),
      details: t('deliverables.items.code.details'),
    },
    {
      icon: '🎨',
      title: t('deliverables.items.design.title'),
      description: t('deliverables.items.design.description'),
      details: t('deliverables.items.design.details'),
    },
    {
      icon: '📚',
      title: t('deliverables.items.documentation.title'),
      description: t('deliverables.items.documentation.description'),
      details: t('deliverables.items.documentation.details'),
    },
    {
      icon: '🚀',
      title: t('deliverables.items.deployment.title'),
      description: t('deliverables.items.deployment.description'),
      details: t('deliverables.items.deployment.details'),
    },
    {
      icon: '📊',
      title: t('deliverables.items.analytics.title'),
      description: t('deliverables.items.analytics.description'),
      details: t('deliverables.items.analytics.details'),
    },
    {
      icon: '🔑',
      title: t('deliverables.items.ownership.title'),
      description: t('deliverables.items.ownership.description'),
      details: t('deliverables.items.ownership.details'),
    },
  ];

  return (
    <section id="deliverables" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base">
            {t('deliverables.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('deliverables.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('deliverables.description')}
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {deliverables.map((item, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground mb-3 text-sm">{item.description}</p>
              <div className="pt-3 border-t">
                <p className="text-xs text-muted-foreground">{item.details}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mt-12">
          <div className="flex items-start gap-4">
            <div className="text-3xl">✨</div>
            <div>
              <h3 className="text-xl font-bold mb-2">{t('deliverables.guarantee.title')}</h3>
              <p className="text-muted-foreground">{t('deliverables.guarantee.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
