// Rutas centralizadas de las fotos del sitio.
// Sube los archivos a /public/images con EXACTAMENTE estos nombres y aparecerán
// solas. Mientras no existan, se muestra un placeholder cálido (no se rompe nada).
// Formato recomendado: .jpg o .webp, buena resolución, orientación indicada.

// Prefijo del `base` (en GitHub Pages el sitio vive bajo /Sherpas-Consulting/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const images = {
  heroMain: `${base}/images/hero-principal.jpg`, // vertical (retrato), persona/equipo — 4:5
  heroSmall: `${base}/images/hero-taller.jpg`, // cuadrada, taller/detalle — 1:1
  purpose: `${base}/images/equipo.jpg`, // vertical, equipo — 4:5
  approachWide: `${base}/images/taller-banda.jpg`, // horizontal, banda ancha — 16:9
};
