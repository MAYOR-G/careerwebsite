import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { rm } from 'node:fs/promises';

const root = resolve(import.meta.dirname, '..');
const template = await readFile(resolve(root, 'dist/index.html'), 'utf8');
const rendererPath = resolve(root, '.prerender/entry-server.js');

try {
  const { render, seoByPath, absoluteUrl, routeSchema, DEFAULT_IMAGE } =
    await import(rendererPath);

  for (const [path, config] of Object.entries(seoByPath)) {
    const url = absoluteUrl(config.path);
    const image = config.image || DEFAULT_IMAGE;
    const appHtml = render(path);
    let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    html = html
      .replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(config.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*" \/>/, meta('name', 'description', config.description))
      .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${url}" />`)
      .replace(/<meta property="og:title" content="[^"]*" \/>/, meta('property', 'og:title', config.title))
      .replace(/<meta property="og:description" content="[^"]*" \/>/, meta('property', 'og:description', config.description))
      .replace(/<meta property="og:url" content="[^"]*" \/>/, meta('property', 'og:url', url))
      .replace(/<meta property="og:image" content="[^"]*" \/>/, meta('property', 'og:image', image))
      .replace(/<meta name="twitter:title" content="[^"]*" \/>/, meta('name', 'twitter:title', config.title))
      .replace(/<meta name="twitter:description" content="[^"]*" \/>/, meta('name', 'twitter:description', config.description))
      .replace(/<meta name="twitter:image" content="[^"]*" \/>/, meta('name', 'twitter:image', image))
      .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, `<script type="application/ld+json">${safeJson(routeSchema(config))}</script>`);

    const fileName = path === '/' ? 'index.html' : `${path.slice(1)}.html`;
    await writeFile(resolve(root, 'dist', fileName), html);
  }

  const notFound = template
    .replace(/<title>.*?<\/title>/s, '<title>Page Not Found | ContentFlow Media</title>')
    .replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />')
    .replace('<div id="root"></div>', '<div id="root"><main style="min-height:100vh;display:grid;place-items:center;font-family:Arial,sans-serif;text-align:center;padding:2rem"><div><h1>Page not found</h1><p>The page you requested does not exist.</p><p><a href="/">Return to ContentFlow Media</a></p></div></main></div>')
    .replace(/<script type="module"[^>]*><\/script>/, '');
  await writeFile(resolve(root, 'dist/404.html'), notFound);
} finally {
  await rm(resolve(root, '.prerender'), { recursive: true, force: true });
}

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function meta(attribute, key, content) {
  return `<meta ${attribute}="${key}" content="${escapeHtml(content)}" />`;
}

function safeJson(value) {
  return JSON.stringify(value).replaceAll('<', '\\u003c');
}
