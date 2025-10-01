'use client';

import { useTranslation } from '@/hooks/useTranslation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function TeamSection() {
  const { t } = useTranslation();

  const team = [
    {
      name: t('team.members.founder.name'),
      role: t('team.members.founder.role'),
      bio: t('team.members.founder.bio'),
      expertise: t('team.members.founder.expertise'),
      avatar: '👨‍🚀',
    },
    {
      name: t('team.members.tech.name'),
      role: t('team.members.tech.role'),
      bio: t('team.members.tech.bio'),
      expertise: t('team.members.tech.expertise'),
      avatar: '👩‍💻',
    },
    {
      name: t('team.members.design.name'),
      role: t('team.members.design.role'),
      bio: t('team.members.design.bio'),
      expertise: t('team.members.design.expertise'),
      avatar: '🎨',
    },
  ];

  return (
    <section id="team" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-base">
            {t('team.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('team.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('team.description')}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="text-6xl mb-4 text-center">{member.avatar}</div>
              <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
              <p className="text-primary font-semibold mb-4 text-center">{member.role}</p>
              <p className="text-muted-foreground mb-4">{member.bio}</p>
              <div className="pt-4 border-t">
                <p className="text-sm font-semibold mb-2">{t('team.expertiseLabel')}</p>
                <p className="text-sm text-muted-foreground">{member.expertise}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Company Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">{t('team.values.title')}</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="font-semibold mb-2">{t('team.values.remote.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('team.values.remote.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="font-semibold mb-2">{t('team.values.collaboration.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('team.values.collaboration.description')}</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🚀</div>
              <h4 className="font-semibold mb-2">{t('team.values.speed.title')}</h4>
              <p className="text-sm text-muted-foreground">{t('team.values.speed.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
