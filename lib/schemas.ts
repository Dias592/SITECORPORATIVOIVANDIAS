import { AREA_SERVED_CITIES, SITE } from './site';

export function getLocalBusinessSchema() {
  return {
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image: `${SITE.url}/images/og-ivan-dias-fotografo.jpg`,
    priceRange: '$$',
    currenciesAccepted: 'BRL',
    paymentAccepted: 'PIX, Transferência Bancária, Cartão de Crédito',
    areaServed: AREA_SERVED_CITIES.map((name) => ({ '@type': 'City', name })),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333',
    },
    sameAs: [SITE.instagram],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
  };
}

export function getPersonSchema() {
  return {
    '@type': 'Person',
    '@id': `${SITE.url}/#person`,
    name: 'Ivan Dias',
    jobTitle: 'Fotógrafo Corporativo',
    description:
      'Fotógrafo corporativo especializado em retratos executivos, fotos para LinkedIn e cobertura de eventos empresariais em São Paulo e região.',
    url: SITE.url,
    worksFor: { '@id': `${SITE.url}/#business` },
    knowsAbout: [
      'Fotografia Corporativa',
      'Retratos Executivos',
      'Fotografia para LinkedIn',
      'Cobertura de Eventos Corporativos',
      'Fotografia de Equipes',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${SITE.url}/#business` },
  };
}

export function getRootGraphSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [getLocalBusinessSchema(), getPersonSchema(), getWebSiteSchema()],
  };
}

export function getServiceSchema(options: {
  name: string;
  serviceType: string;
  description: string;
  areaServedName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    serviceType: options.serviceType,
    provider: { '@id': `${SITE.url}/#business` },
    areaServed: { '@type': 'City', name: options.areaServedName ?? 'São Paulo' },
    description: options.description,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
  };
}

export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getBreadcrumbListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function getArticleSchema(options: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}) {
  const published = options.datePublished.includes('T')
    ? options.datePublished
    : `${options.datePublished}T00:00:00-03:00`;
  const modified = options.dateModified
    ? options.dateModified.includes('T')
      ? options.dateModified
      : `${options.dateModified}T00:00:00-03:00`
    : published;

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    author: {
      '@type': 'Person',
      name: 'Ivan Dias',
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/images/og-ivan-dias-fotografo.jpg`,
      },
    },
    datePublished: published,
    dateModified: modified,
    image: options.image ?? `${SITE.url}/images/og-ivan-dias-fotografo.jpg`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE.url}/blog/${options.slug}`,
    },
  };
}

export function getHowToHireSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Como Contratar um Fotógrafo Corporativo em São Paulo',
    description:
      'Passo a passo para contratar fotógrafo corporativo, desde o briefing até a entrega das fotos.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Solicite orçamento',
        text: 'Entre em contato pelo WhatsApp ou formulário com o tipo de serviço desejado. Resposta em até 24h.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Defina o briefing',
        text: 'Alinhe objetivos, uso das imagens, número de pessoas, local e data da sessão.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Realize a sessão',
        text: 'Fotógrafo conduz a sessão com direção completa de poses. Duração conforme pacote contratado.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Selecione as fotos',
        text: 'Galeria online enviada em até 48h para seleção das fotos preferidas com cliques simples.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Receba as fotos tratadas',
        text: 'Entrega final em até 5 dias úteis. Arquivos em alta resolução para uso institucional e digital.',
      },
    ],
  };
}

export function getLocalBusinessForRegionSchema(options: {
  cityName: string;
  description: string;
  path: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${SITE.url}${options.path}#business`,
    name: `${SITE.name} - ${options.cityName}`,
    description: options.description,
    url: `${SITE.url}${options.path}`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: '$$',
    areaServed: { '@type': 'City', name: options.cityName },
    parentOrganization: { '@id': `${SITE.url}/#business` },
  };
}
