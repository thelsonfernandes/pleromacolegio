/** Metadados de rota e dados estruturados da Home. */
const siteOrigin = 'https://colegiopleroma.com.br';

const seoRoutes = {
  '/': {
    title: 'Pleroma - Colégio Cristão Clássico',
    description: 'Conheça o Pleroma, colégio cristão clássico em Juiz de Fora. Educação Infantil fundamentada em Cristo, na verdade, na bondade e na beleza.',
    socialDescription: 'Educação Infantil cristã clássica em Juiz de Fora, formando mentes, corpos e corações para a glória de Deus.',
    image: '/Fotos/Home - Cultura e Formacao.png',
    structuredData: true
  },
  '/home': {
    title: 'Pleroma - Colégio Cristão Clássico',
    description: 'Conheça o Pleroma, colégio cristão clássico em Juiz de Fora. Educação Infantil fundamentada em Cristo, na verdade, na bondade e na beleza.',
    socialDescription: 'Educação Infantil cristã clássica em Juiz de Fora, formando mentes, corpos e corações para a glória de Deus.',
    image: '/Fotos/Home - Cultura e Formacao.png',
    structuredData: true
  }
};

const defaultSeo = {
  title: 'Pleroma - Colégio Cristão Clássico',
  description: 'Pleroma - Colégio Cristão Clássico em Juiz de Fora, Minas Gerais.',
  socialDescription: 'Conheça o Pleroma - Colégio Cristão Clássico em Juiz de Fora.',
  image: '/brasao.png',
  structuredData: false
};

function absoluteSiteUrl(path) {
  return new URL(path, siteOrigin).href;
}

function setMetaContent(selector, content) {
  const element = document.querySelector(selector);
  if (element) element.setAttribute('content', content);
}

function setCanonicalUrl(url) {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = url;
}

function updateStructuredData(enabled) {
  document.getElementById('seo-structured-data')?.remove();
  if (!enabled) return;

  const origin = siteOrigin;
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: `${origin}/`,
        name: 'Pleroma - Colégio Cristão Clássico',
        alternateName: 'Colégio Pleroma',
        inLanguage: 'pt-BR'
      },
      {
        '@type': ['School', 'EducationalOrganization'],
        '@id': `${origin}/#school`,
        name: 'Pleroma - Colégio Cristão Clássico',
        alternateName: 'Colégio Pleroma',
        description: 'Colégio cristão clássico em Juiz de Fora com Educação Infantil fundamentada em Cristo, na verdade, na bondade e na beleza.',
        url: `${origin}/`,
        logo: `${origin}/brasao.png`,
        image: absoluteSiteUrl('/Fotos/Home - Cultura e Formacao.png'),
        telephone: '+55 32 99111-4565',
        sameAs: ['https://www.instagram.com/pleroma.rf/'],
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Rua Antônio Lagrota, 125',
          addressLocality: 'Juiz de Fora',
          addressRegion: 'MG',
          postalCode: '36035-020',
          addressCountry: 'BR'
        },
        areaServed: {
          '@type': 'City',
          name: 'Juiz de Fora'
        }
      }
    ]
  };

  const script = document.createElement('script');
  script.id = 'seo-structured-data';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(graph);
  document.head.appendChild(script);
}

function updateSeoForPath(pathname) {
  const normalizedPath = (pathname.replace(/\/+$/, '') || '/').toLowerCase();
  const config = seoRoutes[normalizedPath] || defaultSeo;
  const canonicalPath = normalizedPath === '/home' ? '/' : normalizedPath;
  const canonicalUrl = absoluteSiteUrl(canonicalPath);
  const imageUrl = absoluteSiteUrl(config.image);

  document.title = config.title;
  setMetaContent('meta[name="description"]', config.description);
  setCanonicalUrl(canonicalUrl);
  setMetaContent('#seo-og-title', config.title);
  setMetaContent('#seo-og-description', config.socialDescription);
  setMetaContent('#seo-og-url', canonicalUrl);
  setMetaContent('#seo-og-image', imageUrl);
  setMetaContent('#seo-twitter-title', config.title);
  setMetaContent('#seo-twitter-description', config.socialDescription);
  setMetaContent('#seo-twitter-image', imageUrl);
  updateStructuredData(config.structuredData);
}
