import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { projects } from '../src/data/projects.js';

const distDir = 'dist';
const indexHtml = join(distDir, 'index.html');

if (!existsSync(indexHtml)) {
  throw new Error('dist/index.html does not exist. Run this script after vite build.');
}

const routes = [
  'error.html',
  'resume/index.html',
  ...projects.map((project) => `projects/${project.slug}/index.html`),
];

for (const route of routes) {
  const target = join(distDir, route);
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(indexHtml, target);
}

const docsRoutes = [
  {
    source: 'public/section-a.html',
    target: 'docs/maincode-takehome-testresults/index.html',
  },
];

for (const route of docsRoutes) {
  const target = join(distDir, route.target);
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(route.source, target);
}

console.log(`Generated ${routes.length} static SPA route files and ${docsRoutes.length} docs route.`);
