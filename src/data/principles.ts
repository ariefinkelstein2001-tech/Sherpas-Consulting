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
    body: 'Integramos conocimiento, trayectoria y mirada estratégica para diseñar soluciones simples, útiles y ajustadas a cada contexto organizacional.',
  },
  {
    icon: 'handshake',
    title: 'Cercanía y compromiso',
    body: 'Trabajamos junto a nuestros clientes con escucha, criterio y responsabilidad, construyendo vínculos de confianza y colaboración.',
  },
  {
    icon: 'sparkles',
    title: 'Creatividad con sentido',
    body: 'Creamos experiencias de aprendizaje prácticas, lúdicas y aplicadas, que facilitan la participación, la reflexión y la transferencia al puesto de trabajo.',
  },
  {
    icon: 'trending-up',
    title: 'Transformación real',
    body: 'Orientamos cada proceso a generar cambios observables en la forma de liderar, comunicarse, tomar decisiones y trabajar en equipo.',
  },
];
