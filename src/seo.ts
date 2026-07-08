export const SITE_URL = 'https://contentflowmedia.co.uk';
export const SITE_NAME = 'ContentFlow Media';
export const DEFAULT_IMAGE = `${SITE_URL}/hero-bg.png`;

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
};

export const seoByPath: Record<string, SeoConfig> = {
  '/': {
    title: 'ContentFlow Media | Social Media Content Agency UK',
    description:
      'ContentFlow Media helps UK businesses plan, create, edit, schedule, and optimise social media content across TikTok, Instagram, Facebook, YouTube, X, and Pinterest.',
    path: '/',
  },
  '/about': {
    title: 'About ContentFlow Media | UK Social Media Content Team',
    description:
      'Learn how ContentFlow Media helps businesses build content systems for social media management, content creation, video editing, publishing, and growth.',
    path: '/about',
    image: `${SITE_URL}/hero-bg-3.png`,
  },
  '/services': {
    title: 'Social Media Management, Content Creation and Video Editing Services',
    description:
      'Explore ContentFlow Media services including social media management, content creation schedules, digital marketing, video editing, posting, and optimisation.',
    path: '/services',
    image: `${SITE_URL}/solution-content-strategy.png`,
  },
  '/pricing': {
    title: 'ContentFlow Media Pricing | Social Media Growth Packages',
    description:
      'Compare ContentFlow Media social media growth packages for monthly content planning, posting, video editing, platform optimisation, and conversion support.',
    path: '/pricing',
    image: `${SITE_URL}/solution-scheduling.png`,
  },
  '/gallery': {
    title: 'ContentFlow Media Gallery | Social Media Content Work',
    description:
      'View ContentFlow Media creative work and social media content examples across short-form video, platform creative, and brand growth campaigns.',
    path: '/gallery',
    image: `${SITE_URL}/solution-content-creation.png`,
  },
  '/blog': {
    title: 'ContentFlow Blog | Social Media Growth Insights',
    description:
      'Read ContentFlow Media insights on social media algorithms, content planning, short-form video, digital marketing, and conversion strategy.',
    path: '/blog',
  },
  '/contact': {
    title: 'Contact ContentFlow Media | Book a Free Growth Plan',
    description:
      'Contact ContentFlow Media in London to book a free social media strategy session and identify content, posting, and conversion opportunities.',
    path: '/contact',
    image: `${SITE_URL}/why-businesses-work.png`,
  },
};

export function normalizePath(pathname: string) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '') || '/';
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

export function getSeoConfig(pathname: string) {
  const path = normalizePath(pathname);
  return seoByPath[path] || seoByPath['/'];
}

export function organizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo-official.png`,
    image: DEFAULT_IMAGE,
    description:
      'ContentFlow Media is a UK social media content agency helping businesses plan, create, edit, schedule, and optimise content across major social platforms.',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'London',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-20-1234-5678',
      contactType: 'sales',
      areaServed: 'GB',
      availableLanguage: 'en',
    },
    knowsAbout: [
      'Social media management',
      'Content creation',
      'Video editing',
      'Digital marketing',
      'Content scheduling',
      'TikTok marketing',
      'Instagram marketing',
      'YouTube Shorts',
    ],
  };
}

export function routeSchema(config: SeoConfig) {
  const url = absoluteUrl(config.path);
  const graph: Array<Record<string, unknown>> = [
    organizationSchema(),
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: config.title,
      description: config.description,
      isPartOf: {
        '@id': `${SITE_URL}/#website`,
      },
      about: {
        '@id': `${SITE_URL}/#organization`,
      },
      inLanguage: 'en-GB',
    },
  ];

  if (config.path === '/' || config.path === '/services') {
    graph.push({
      '@type': 'Service',
      '@id': `${SITE_URL}/#social-media-service`,
      name: 'Social media content management',
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      serviceType: [
        'Social media management',
        'Content creation',
        'Digital marketing',
        'Video editing',
        'Content scheduling',
      ],
      description:
        'Planning, creative production, video editing, scheduling, publishing, and optimisation for social media content.',
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
