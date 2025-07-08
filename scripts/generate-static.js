import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

// Routes to generate static HTML for
const routes = [
  '/',
  '/about',
  '/contact',
  '/company/jasha',
  '/company/knitwire',
  '/company/biodynamic-fuel'
];

// Read the main index.html
const indexHtml = readFileSync('dist/index.html', 'utf8');

// Generate static HTML for each route
routes.forEach(route => {
  const path = route === '/' ? 'dist' : `dist${route}`;
  
  // Create directory if it doesn't exist
  mkdirSync(path, { recursive: true });
  
  // Write index.html for each route
  writeFileSync(join(path, 'index.html'), indexHtml);
  
  console.log(`Generated static HTML for: ${route}`);
});

console.log('Static generation complete!'); 