import type { APIRoute } from 'astro';
import { engineeringProjects, products, site } from '../data/site';

const staticRoutes = ['/', '/products/', '/engineering/', '/open-source/', '/contact/'];

export const GET: APIRoute = () => {
	const routes = [
		...staticRoutes,
		...products.map((product) => `/products/${product.slug}/`),
		...engineeringProjects.map((project) => `/engineering/${project.slug}/`),
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url><loc>${new URL(route, site.url).href}</loc></url>`).join('\n')}
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml; charset=utf-8' },
	});
};
