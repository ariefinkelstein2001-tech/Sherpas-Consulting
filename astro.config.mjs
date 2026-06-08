// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Configuración para GitHub Pages (project site).
// El sitio se publica en https://<usuario>.github.io/<repo>/, por eso se define
// un `base` con el nombre del repositorio.
// TODO: si más adelante usas un dominio propio, pon SITE = 'https://www.sherpasconsulting.cl'
//       y BASE = '/' (o elimina `base`).
const SITE = 'https://ariefinkelstein2001-tech.github.io';
const BASE = '/Sherpas-Consulting';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  base: BASE,
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap(),
  ],
});
