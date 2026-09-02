/** Metadados de rota e dados estruturados da Home. */
const siteOrigin = 'https://colegiopleroma.com.br';

const seoRoutes = {
  '/': {
    title: 'Pleroma - Colégio Cristão Clássico',
    description: 'Matrículas abertas no Pleroma, colégio cristão clássico em Juiz de Fora. Conheça nossa Educação Infantil e inscreva-se para uma visita.',
    socialDescription: 'Matrículas abertas no Pleroma. Conheça nossa Educação Infantil cristã clássica em Juiz de Fora e inscreva-se para uma visita.',
    image: '/Fotos/Home - Cultura e Formacao.png',
    structuredData: 'home'
  },
  '/home': {
    title: 'Pleroma - Colégio Cristão Clássico',
    description: 'Matrículas abertas no Pleroma, colégio cristão clássico em Juiz de Fora. Conheça nossa Educação Infantil e inscreva-se para uma visita.',
    socialDescription: 'Matrículas abertas no Pleroma. Conheça nossa Educação Infantil cristã clássica em Juiz de Fora e inscreva-se para uma visita.',
    image: '/Fotos/Home - Cultura e Formacao.png',
    structuredData: 'home'
  },
  '/formacao/educacao-infantil': {
    title: 'Educação Infantil Cristã em Juiz de Fora | Pleroma',
    description: 'Matrículas abertas para a Educação Infantil cristã clássica, de 2 a 5 anos, em Juiz de Fora. Conheça o Colégio Pleroma e inscreva-se para uma visita.',
    socialDescription: 'Matrículas abertas para a Educação Infantil do Pleroma, de 2 a 5 anos, em Juiz de Fora. Conheça a proposta e inscreva-se para uma visita.',
    image: '/Fotos/Nossa Formacao - Banner.png',
    structuredData: 'educationInfantil'
  },
  '/formacao/proposta': {
    title: 'Proposta Pedagógica Cristã Clássica | Pleroma',
    description: 'Conheça a proposta pedagógica cristã clássica do Colégio Pleroma em Juiz de Fora: formação integral fundamentada em Cristo, na verdade, bondade e beleza.',
    socialDescription: 'Conheça a proposta pedagógica do Pleroma: Educação Cristã Clássica, formação de virtudes e parceria com as famílias em Juiz de Fora.',
    image: '/Fotos/Nossa Formacao - Banner.png',
    structuredData: 'propostaPedagogica'
  },
  '/formacao/reforco-formativo': {
    title: 'Reforço Formativo para Crianças em Juiz de Fora | Pleroma',
    description: 'Reforço Formativo cristão para crianças de 2 a 5 anos em Juiz de Fora, com literatura, matemática, movimento, maravilhamento e virtudes.',
    socialDescription: 'Conheça o Reforço Formativo Pleroma para crianças de 2 a 5 anos: cinco oficinas em um ambiente cristão, acolhedor e intencional.',
    image: '/Fotos/Leitura em Roda na Sala de Aula Clássica.png',
    structuredData: 'reforcoFormativo'
  },
  '/admissao': {
    title: 'Matrículas Abertas no Colégio Pleroma | Juiz de Fora',
    description: 'Matrículas abertas no Colégio Pleroma em Juiz de Fora. Conheça as quatro etapas do processo e inscreva-se para uma visita com nossa equipe.',
    socialDescription: 'Matrículas abertas no Colégio Pleroma. Conheça o processo de matrícula e agende uma visita em Juiz de Fora.',
    image: '/Fotos/Admissao - Banner.png',
    structuredData: 'admissao'
  },
  '/sobre': {
    title: 'Sobre o Colégio Pleroma | Origem e Vocação',
    description: 'Conheça a origem, a vocação e o significado do nome Pleroma. Um colégio cristão clássico dedicado à formação integral da criança em Juiz de Fora.',
    socialDescription: 'Conheça a origem e a vocação do Colégio Pleroma, sua visão de Educação Cristã Clássica e o significado de plenitude em Cristo.',
    image: '/Fotos/Sobre - Banner.png',
    structuredData: 'sobre'
  },
  '/contato': {
    title: 'Contato e Localização | Colégio Pleroma em Juiz de Fora',
    description: 'Entre em contato com o Colégio Pleroma em Juiz de Fora. Consulte endereço, WhatsApp, Instagram e mapa para agendar sua visita.',
    socialDescription: 'Fale com o Colégio Pleroma e conheça nossa sede no bairro Mariano Procópio, em Juiz de Fora.',
    image: '/Fotos/Contato - Banner.png',
    structuredData: 'contato'
  },
  '/formacao/educacao-bilingue': {
    title: 'Educação Bilíngue Infantil em Juiz de Fora | Pleroma',
    description: 'Conheça a Educação Bilíngue do Pleroma para crianças de 2 a 5 anos, com contato frequente e significativo com a língua inglesa na primeira infância.',
    socialDescription: 'Educação Bilíngue para crianças de 2 a 5 anos, integrando inglês, histórias, músicas, movimento e brincadeiras à formação do Pleroma.',
    image: '/Fotos/Nossa Formacao - Banner.png',
    structuredData: 'educacaoBilingue'
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

function updateStructuredData(pageType, canonicalUrl) {
  document.getElementById('seo-structured-data')?.remove();
  if (!pageType) return;

  const origin = siteOrigin;
  const graphItems = [
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
        description: 'Colégio cristão clássico em Juiz de Fora com matrículas abertas para a Educação Infantil, fundamentada em Cristo, na verdade, na bondade e na beleza.',
        url: `${origin}/`,
        logo: `${origin}/brasao.png`,
        image: absoluteSiteUrl('/Fotos/Home - Cultura e Formacao.png'),
        telephone: '+55 32 99111-4565',
        sameAs: ['https://www.instagram.com/pleroma.rf/'],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+55 32 99111-4565',
          contactType: 'atendimento',
          availableLanguage: 'Portuguese'
        },
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
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -21.747564080183306,
          longitude: -43.35541142472304
        },
        potentialAction: {
          '@type': 'RegisterAction',
          name: 'Matrículas abertas — inscreva-se',
          target: `${origin}/admissao`
        }
      }
  ];

  if (pageType === 'educationInfantil') {
    graphItems.push(
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Educação Infantil Cristã em Juiz de Fora | Pleroma',
        description: 'Matrículas abertas para a Educação Infantil cristã clássica, de 2 a 5 anos, em Juiz de Fora, com turnos de manhã e tarde. Inscreva-se para uma visita.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#school` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Nossa Formação', item: `${origin}/formacao/proposta` },
          { '@type': 'ListItem', position: 3, name: 'Educação Infantil', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'propostaPedagogica') {
    graphItems.push(
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Proposta Pedagógica Cristã Clássica | Pleroma',
        description: 'Proposta pedagógica cristã clássica do Colégio Pleroma em Juiz de Fora, voltada à formação integral da criança em parceria com a família.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: [
          { '@id': `${origin}/#school` },
          { '@type': 'Thing', name: 'Educação Cristã Clássica' }
        ],
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Proposta Pedagógica', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'reforcoFormativo') {
    graphItems.push(
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Reforço Formativo para Crianças em Juiz de Fora | Pleroma',
        description: 'Reforço Formativo cristão para crianças de 2 a 5 anos em Juiz de Fora, com cinco oficinas integradas.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: [
          { '@id': `${origin}/#school` },
          { '@type': 'Thing', name: 'Reforço Formativo' }
        ],
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Nossa Formação', item: `${origin}/formacao/proposta` },
          { '@type': 'ListItem', position: 3, name: 'Reforço Formativo', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'admissao') {
    graphItems.push(
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Matrículas Abertas no Colégio Pleroma | Juiz de Fora',
        description: 'Matrículas abertas no Colégio Pleroma em Juiz de Fora. Processo de ingresso em quatro etapas, começando pelo contato e pela visita.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: { '@id': `${origin}/#school` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` },
        potentialAction: {
          '@type': 'RegisterAction',
          name: 'Inicie o processo de matrícula',
          target: canonicalUrl
        }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Matrículas', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'sobre') {
    graphItems.push(
      {
        '@type': 'AboutPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Sobre o Colégio Pleroma | Origem e Vocação',
        description: 'Origem, vocação e significado do nome Pleroma, um colégio cristão clássico dedicado à formação integral da criança em Juiz de Fora.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        mainEntity: { '@id': `${origin}/#school` },
        about: [
          { '@id': `${origin}/#school` },
          { '@type': 'Thing', name: 'Educação Cristã Clássica' },
          { '@type': 'Thing', name: 'Pleroma', description: 'Palavra grega que significa plenitude.' }
        ],
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Sobre', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'contato') {
    graphItems.push(
      {
        '@type': 'ContactPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Contato e Localização | Colégio Pleroma em Juiz de Fora',
        description: 'Endereço, WhatsApp, Instagram e localização do Colégio Pleroma no bairro Mariano Procópio, em Juiz de Fora.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        mainEntity: { '@id': `${origin}/#school` },
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Contato', item: canonicalUrl }
        ]
      }
    );
  }

  if (pageType === 'educacaoBilingue') {
    graphItems.push(
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: 'Educação Bilíngue Infantil em Juiz de Fora | Pleroma',
        description: 'Educação Bilíngue para crianças de 2 a 5 anos, com contato frequente, significativo e progressivo com a língua inglesa.',
        inLanguage: 'pt-BR',
        isPartOf: { '@id': `${origin}/#website` },
        about: [
          { '@id': `${origin}/#school` },
          { '@type': 'Thing', name: 'Educação Bilíngue' },
          { '@type': 'Language', name: 'Inglês', alternateName: 'English' },
          { '@type': 'Thing', name: 'Educação Infantil' }
        ],
        breadcrumb: { '@id': `${canonicalUrl}#breadcrumb` }
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Início', item: `${origin}/` },
          { '@type': 'ListItem', position: 2, name: 'Nossa Formação', item: `${origin}/formacao/proposta` },
          { '@type': 'ListItem', position: 3, name: 'Educação Bilíngue', item: canonicalUrl }
        ]
      }
    );
  }

  const graph = { '@context': 'https://schema.org', '@graph': graphItems };

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
  updateStructuredData(config.structuredData, canonicalUrl);
}
