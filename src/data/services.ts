// Los 4 servicios — MASTER PROMPT §5.4.
// `summary`: versión corta visible (1 frase). `body`: detalle completo, opcional,
// que se muestra al expandir "Ver detalle". `value` se usa en el <select> del form.

export interface Service {
  number: string;
  value: string;
  title: string;
  hook: string;
  summary: string;
  body: string;
  icon: string;
  accent: 'summit' | 'clay' | 'sage' | 'amber';
}

export const services: Service[] = [
  {
    number: '01',
    value: 'Gerenciamiento de Personas a Tiempo Parcial',
    title: 'Gerencia de Personas a tiempo parcial',
    hook: 'La experiencia de una gerencia de RR.HH., sin el costo de una estructura interna.',
    summary:
      'Actuamos como socio estratégico del gerente general para ordenar y profesionalizar la gestión de personas, de forma flexible y ajustada a tu etapa de crecimiento.',
    body: 'Acompañamos a empresas que necesitan ordenar, profesionalizar y fortalecer su gestión de personas, pero que aún no cuentan con una gerencia interna de RR.HH. o no requieren una posición full time. Aportamos criterio, experiencia y foco para tomar mejores decisiones en personas, cultura, liderazgo y organización: diagnosticamos prioridades, definimos planes de acción y construimos prácticas de gestión claras y sostenibles.',
    icon: 'compass',
    accent: 'summit',
  },
  {
    number: '02',
    value: 'Coaching Ejecutivo',
    title: 'Coaching Ejecutivo',
    hook: 'Un espacio individual para fortalecer el liderazgo y el crecimiento profesional.',
    summary:
      'Procesos de coaching para líderes y talentos clave, enfocados en objetivos concretos y cambios visibles en su forma de liderar y relacionarse.',
    body: 'Acompañamos a ejecutivos, líderes y talentos clave a ampliar su autoconocimiento, fortalecer su confianza y enfrentar con claridad sus desafíos: liderazgo, transición de rol, toma de decisiones, comunicación, manejo de conflictos o posicionamiento profesional. Cada proceso parte de objetivos reales para que la persona avance hacia su mejor versión.',
    icon: 'trending-up',
    accent: 'clay',
  },
  {
    number: '03',
    value: 'Programas de Liderazgo',
    title: 'Programas de Liderazgo',
    hook: 'Experiencias de aprendizaje para líderes más conscientes, cercanos y efectivos.',
    summary:
      'Programas a la medida que combinan evidencia, juego y práctica, con herramientas aplicables desde el día siguiente.',
    body: 'Diseñamos programas de liderazgo ajustados a tu realidad, combinando metodologías basadas en evidencia, actividades lúdicas y entrenamiento práctico. Fortalecemos habilidades clave: comunicación, feedback, conversaciones difíciles, accountability, gestión de conflictos, seguridad psicológica y liderazgo de equipos diversos. No buscamos solo inspirar: buscamos que los líderes lideren mejor desde el día siguiente.',
    icon: 'sparkles',
    accent: 'amber',
  },
  {
    number: '04',
    value: 'Asesorías en Gestión de Personas',
    title: 'Asesorías en Gestión de Personas',
    hook: 'Soluciones a la medida para desafíos concretos de personas, equipos y cultura.',
    summary:
      'Proyectos puntuales —desempeño, cultura, gestión del cambio, bienestar— con diseño metodológico e implementación simple y ordenada.',
    body: 'Acompañamos proyectos de gestión de personas que requieren mirada experta e implementación ordenada: gestión del desempeño, desarrollo de equipos, gestión del cambio, planificación estratégica, clima y cultura, salud mental y bienestar organizacional. Transformamos necesidades en soluciones claras, prácticas y sostenibles, con impacto real en la forma de trabajar.',
    icon: 'handshake',
    accent: 'sage',
  },
];
