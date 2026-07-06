// Rutas centralizadas de las fotos del sitio.
// Sube los archivos a /public/images con EXACTAMENTE estos nombres y aparecerán
// solas. Mientras no existan, se muestra un placeholder cálido (no se rompe nada).
// Formato recomendado: .jpg o .webp, buena resolución, orientación indicada.

export const images = {
  heroMain: '/images/hero-principal.jpg', // vertical (retrato), persona/equipo — 4:5
  heroSmall: '/images/hero-taller.jpg', // cuadrada, taller/detalle — 1:1
  purpose: '/images/equipo.jpg', // vertical, equipo — 4:5
  approachWide: '/images/taller-banda.jpg', // horizontal, banda ancha — 16:9
};
