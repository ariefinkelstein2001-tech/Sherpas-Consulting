// Los 4 principios de "La brújula" — MASTER PROMPT §5.3.
// El campo `icon` referencia un nombre de ícono en src/components/Icon.astro.

export interface Principle {
  icon: string;
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    icon: 'compass',
    title: 'Experiencia aplicada',
    body: 'Conocimiento, trayectoria y mirada estratégica para diseñar soluciones simples y útiles.',
  },
  {
    icon: 'handshake',
    title: 'Cercanía y compromiso',
    body: 'Trabajamos junto a ti con escucha y criterio, construyendo vínculos de confianza.',
  },
  {
    icon: 'sparkles',
    title: 'Creatividad con sentido',
    body: 'Experiencias de aprendizaje lúdicas y aplicadas, que facilitan la participación y la reflexión.',
  },
  {
    icon: 'trending-up',
    title: 'Transformación real',
    body: 'Cambios observables en la forma de liderar, comunicarse y trabajar en equipo.',
  },
];
