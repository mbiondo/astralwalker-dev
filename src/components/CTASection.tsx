'use client';

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export function CTASection() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        <div className="text-center bg-card rounded-2xl p-12 shadow-sm border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold transition-all transform hover:scale-105">
              {t('cta.contactNow')}
            </Button>
            <Button variant="outline" className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold transition-colors">
              {t('cta.viewPortfolio')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}