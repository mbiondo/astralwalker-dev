import { Metadata } from 'next';

export interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  locale?: string;
  type?: 'website' | 'article' | 'profile';
  noIndex?: boolean;
}

export const defaultSEO = {
  siteName: 'AstralWalker',
  domain: 'https://astralwalker.dev',
  defaultTitle: 'AstralWalker - MVPs en órbita | Desarrollo de Productos Digitales Innovadores',
  defaultDescription: 'Transformamos ideas en MVPs que vibran en el cosmos digital. Desarrollo rápido de prototipos, validación de productos y expansión fractal para startups visionarias.',
  defaultImage: '/images/og-astralwalker.jpg',
  twitterHandle: '@astralwalker_dev',
  keywords: [
    'desarrollo MVP',
    'prototipo rápido',
    'startup development',
    'producto mínimo viable',
    'desarrollo ágil',
    'innovación digital',
    'AstralWalker',
    'ideas a productos'
  ]
};

export const translations = {
  es: {
    title: 'AstralWalker - MVPs en órbita | Desarrollo de Productos Digitales Innovadores',
    description: 'Transformamos ideas en MVPs que vibran en el cosmos digital. Desarrollo rápido de prototipos, validación de productos y expansión fractal para startups visionarias.',
    keywords: [
      'desarrollo MVP',
      'prototipo rápido',
      'startup development',
      'producto mínimo viable',
      'desarrollo ágil',
      'innovación digital',
      'AstralWalker',
      'ideas a productos',
      'MVP España',
      'desarrollo startup México',
      'productos digitales',
      'validación producto'
    ]
  },
  en: {
    title: 'AstralWalker - MVPs in Orbit | Innovative Digital Product Development',
    description: 'We transform ideas into MVPs that vibrate in the digital cosmos. Rapid prototyping, product validation and fractal expansion for visionary startups.',
    keywords: [
      'MVP development',
      'rapid prototyping',
      'startup development',
      'minimum viable product',
      'agile development',
      'digital innovation',
      'AstralWalker',
      'ideas to products',
      'MVP development agency',
      'product validation',
      'startup consulting',
      'digital products'
    ]
  }
};

export function generateMetadata(config: SEOConfig = {}): Metadata {
  const {
    title = defaultSEO.defaultTitle,
    description = defaultSEO.defaultDescription,
    keywords = defaultSEO.keywords,
    image = defaultSEO.defaultImage,
    url = defaultSEO.domain,
    locale = 'es',
    type = 'website',
    noIndex = false
  } = config;

  const localeData = translations[locale as keyof typeof translations] || translations.es;
  const finalTitle = title || localeData.title;
  const finalDescription = description || localeData.description;
  const finalKeywords = keywords.length > 0 ? keywords : localeData.keywords;

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: finalKeywords,
    openGraph: {
      type,
      locale: locale === 'es' ? 'es_ES' : 'en_US',
      url,
      siteName: defaultSEO.siteName,
      title: finalTitle,
      description: finalDescription,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: finalTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [image],
      creator: defaultSEO.twitterHandle,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
      languages: {
        'es': `${defaultSEO.domain}/es`,
        'en': `${defaultSEO.domain}/en`,
      },
    },
  };
}

// Función para generar datos estructurados JSON-LD
export function generateJsonLd(locale: string = 'es') {
  const localeData = translations[locale as keyof typeof translations] || translations.es;
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${defaultSEO.domain}#organization`,
    name: defaultSEO.siteName,
    description: localeData.description,
    url: defaultSEO.domain,
    logo: `${defaultSEO.domain}/astralwalker-logo.png`,
    image: `${defaultSEO.domain}${defaultSEO.defaultImage}`,
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Innovación Digital 42',
      addressLocality: 'Ciudad de México',
      addressRegion: 'CDMX',
      postalCode: '01010',
      addressCountry: 'MX'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.4326,
      longitude: -99.1332
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+52-55-ASTRAL1',
      contactType: 'customer service',
      email: 'hola@astralwalker.dev',
      availableLanguage: ['Spanish', 'English']
    },
    sameAs: [
      'https://github.com/astralwalker-dev',
      'https://linkedin.com/company/astralwalker',
      'https://twitter.com/astralwalker_dev'
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'es' ? 'Servicios de Desarrollo MVP' : 'MVP Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Desarrollo de MVP' : 'MVP Development',
            description: locale === 'es' 
              ? 'Transformamos ideas en productos mínimos viables funcionales en 4-8 semanas'
              : 'We transform ideas into functional minimum viable products in 4-8 weeks'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Prototipado Rápido' : 'Rapid Prototyping',
            description: locale === 'es'
              ? 'Wireframes, mockups y flujos de usuario para validar antes de programar'
              : 'Wireframes, mockups and user flows to validate before programming'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Validación de Producto' : 'Product Validation',
            description: locale === 'es'
              ? 'Investigación de mercado y validación de ideas antes del desarrollo'
              : 'Market research and idea validation before development'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: locale === 'es' ? 'Consultoría Cósmica' : 'Cosmic Consulting',
            description: locale === 'es'
              ? 'Estrategia de producto, arquitectura técnica y roadmap para startups'
              : 'Product strategy, technical architecture and roadmap for startups'
          }
        }
      ]
    },
    brand: {
      '@type': 'Brand',
      name: 'AstralWalker',
      logo: `${defaultSEO.domain}/astralwalker-logo.png`,
      description: locale === 'es' 
        ? 'El guardián cósmico que guía ideas hacia su órbita digital perfecta'
        : 'The cosmic guardian that guides ideas to their perfect digital orbit'
    }
  };
}