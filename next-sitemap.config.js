/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://astralwalker.dev',
  generateRobotsTxt: true,
  exclude: ['/admin', '/private', '/api/*'],
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  
  // Configuración multiidioma
  alternateRefs: [
    {
      href: 'https://astralwalker.dev/es',
      hreflang: 'es',
    },
    {
      href: 'https://astralwalker.dev/en', 
      hreflang: 'en',
    },
    {
      href: 'https://astralwalker.dev/es',
      hreflang: 'x-default',
    },
  ],

  // Configuración del robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/private', '/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin', '/private', '/api/'],
      },
    ],
    additionalSitemaps: [
      'https://indigoprod.com/sitemap.xml', // Cambia por tu dominio real
    ],
  },

  // Configuración personalizada para páginas específicas
  transform: async (config, path) => {
    // Páginas principales con mayor prioridad
    if (path === '/es' || path === '/en') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      }
    }

    // Páginas de servicios con alta prioridad
    if (path.includes('/servicios') || path.includes('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: config.alternateRefs ?? [],
      }
    }

    // Otras páginas
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}