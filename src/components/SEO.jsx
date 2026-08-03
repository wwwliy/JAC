import { useEffect } from 'react';

// Dynamic SEO meta tag manager — updates document head on route/language change
export default function SEO({ title, description, keywords, path = '/', schema = null }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name, content, attr = 'name') => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    if (description) setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);
    setMeta('og:title', title, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', `https://jacforklift-saudi.com${path}`, 'property');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://jacforklift-saudi.com${path}`);

    // Inject schema if provided
    if (schema) {
      const existing = document.getElementById('page-schema');
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'page-schema';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const s = document.getElementById('page-schema');
      if (s) s.remove();
    };
  }, [title, description, keywords, path, schema]);

  return null;
}