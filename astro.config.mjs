// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// TODO: reemplazar por el dominio real de producción.
const SITE = 'https://www.sherpasconsulting.cl';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
