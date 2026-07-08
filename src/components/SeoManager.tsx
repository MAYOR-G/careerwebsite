import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { absoluteUrl, DEFAULT_IMAGE, getSeoConfig, routeSchema, SITE_NAME } from '../seo';

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export default function SeoManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    const config = getSeoConfig(location.pathname);
    const url = absoluteUrl(config.path);
    const image = config.image || DEFAULT_IMAGE;

    document.documentElement.lang = 'en-GB';
    document.title = config.title;

    setMeta('meta[name="description"]', 'name', 'description', config.description);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('meta[name="googlebot"]', 'name', 'googlebot', 'index, follow, max-image-preview:large');
    setMeta('meta[property="og:type"]', 'property', 'og:type', config.type || 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', SITE_NAME);
    setMeta('meta[property="og:title"]', 'property', 'og:title', config.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', config.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', `${SITE_NAME} social media content strategy and production`);
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'en_GB');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', config.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', config.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    setLink('canonical', url);

    const schemaId = 'route-json-ld';
    let schema = document.getElementById(schemaId) as HTMLScriptElement | null;

    if (!schema) {
      schema = document.createElement('script');
      schema.id = schemaId;
      schema.type = 'application/ld+json';
      document.head.appendChild(schema);
    }

    schema.textContent = JSON.stringify(routeSchema(config));
  }, [location.pathname]);

  return null;
}
