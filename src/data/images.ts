// Rutas centralizadas de las fotos del sitio.
// Sube los archivos a /public/images con EXACTAMENTE estos nombres y aparecerán
// solas. Mientras no existan, se muestra un placeholder cálido (no se rompe nada).
// Formato recomendado: .jpg o .webp, buena resolución, orientación indicada.

// Prefijo del `base` (en GitHub Pages el sitio vive bajo /Sherpas-Consulting/).
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const images = {
  heroMain: `${base}/images/hero-principal.jpg`, // grupo celebrando
  heroSmall: `${base}/images/hero-taller.jpg`, // taller (auténtica)
  purpose: `${base}/images/equipo.jpg`, // equipo trabajando
  approachWide: `${base}/images/taller-banda.jpg`, // grupo en sala (banda ancha)
};

// Galería / slider de fotos. Agrega o quita entradas y sube el archivo a
// /public/images con el mismo nombre.
export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

export const gallery: GalleryPhoto[] = [
  { src: `${base}/images/galeria-1.jpg`, alt: 'Equipo celebrando al cierre de un programa', caption: 'Cierre de programa' },
  { src: `${base}/images/galeria-2.jpg`, alt: 'Conversación de trabajo en equipo', caption: 'Trabajo en equipo' },
  { src: `${base}/images/galeria-3.jpg`, alt: 'Actividad con juego de mesa de aprendizaje', caption: 'Aprendizaje lúdico' },
  { src: `${base}/images/galeria-4.jpg`, alt: 'Taller con dinámica de post-its', caption: 'Talleres aplicados' },
  { src: `${base}/images/galeria-5.jpg`, alt: 'Entrega de certificados a participantes', caption: 'Certificaciones' },
  { src: `${base}/images/galeria-6.jpg`, alt: 'Participación en instancia de talento femenino', caption: 'Talento femenino' },
];
