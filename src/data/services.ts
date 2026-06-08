// Los 4 servicios — MASTER PROMPT §5.4. Copy oficial, no editar el contenido.
// El `value` se usa también como opción en el <select> del formulario.

export interface Service {
  number: string;
  value: string;
  title: string;
  hook: string;
  body: string;
}

export const services: Service[] = [
  {
    number: '01',
    value: 'Gerenciamiento de Personas a Tiempo Parcial',
    title: 'Gerenciamiento de Personas a Tiempo Parcial',
    hook: 'Una mirada estratégica de personas, con la experiencia de una gerencia de RR.HH., sin el costo de una estructura interna.',
    body: 'Acompañamos a empresas que necesitan ordenar, profesionalizar y fortalecer su gestión de personas, pero que aún no cuentan con una gerencia interna de Recursos Humanos o no requieren una posición full time. Actuamos como un socio estratégico del gerente general y su equipo directivo, aportando criterio, experiencia y foco para tomar mejores decisiones en temas de personas, cultura, liderazgo y organización. Ayudamos a diagnosticar prioridades, definir planes de acción, acompañar decisiones complejas y construir prácticas de gestión más claras, simples y sostenibles. Ideal para empresas que necesitan incorporar una mirada experta de personas, de manera flexible, cercana y ajustada a su etapa de crecimiento.',
  },
  {
    number: '02',
    value: 'Coaching Ejecutivo',
    title: 'Coaching Ejecutivo',
    hook: 'Un espacio de acompañamiento individual para fortalecer el desarrollo, el liderazgo y el crecimiento profesional.',
    body: 'Acompañamos a ejecutivos, líderes, profesionales y talentos clave en procesos de coaching orientados a ampliar su autoconocimiento, fortalecer su confianza, desarrollar nuevas habilidades y enfrentar con mayor claridad sus desafíos laborales. El coaching puede estar enfocado en liderazgo, transición de rol, preparación para nuevos desafíos, desarrollo de talento, toma de decisiones, comunicación, gestión de relaciones, manejo de conflictos o fortalecimiento del posicionamiento profesional. Cada proceso se construye a partir de objetivos concretos y desafíos reales, para que la persona pueda generar cambios visibles en su forma de actuar, relacionarse y desplegar su potencial. El foco es acompañar a las personas a crecer profesionalmente, tomar mayor conciencia de sus recursos y avanzar hacia su mejor versión.',
  },
  {
    number: '03',
    value: 'Programas de Liderazgo',
    title: 'Programas de Liderazgo',
    hook: 'Experiencias de aprendizaje para desarrollar líderes más conscientes, cercanos y efectivos.',
    body: 'Diseñamos programas de liderazgo ajustados a la realidad de cada organización, combinando metodologías basadas en evidencia, actividades lúdicas, reflexión aplicada y entrenamiento práctico. Nuestros programas buscan fortalecer habilidades clave como comunicación, feedback, conversaciones difíciles, accountability, gestión de conflictos, seguridad psicológica, bienestar, influencia y liderazgo de equipos diversos. No buscamos solo inspirar; buscamos que los líderes se lleven herramientas simples y aplicables para liderar mejor desde el día siguiente.',
  },
  {
    number: '04',
    value: 'Asesorías en Gestión de Personas',
    title: 'Asesorías en Gestión de Personas',
    hook: 'Soluciones específicas para desafíos concretos de personas, equipos y cultura.',
    body: 'Acompañamos a las organizaciones en proyectos de gestión de personas que requieren mirada experta, diseño metodológico y una implementación simple y ordenada. Desarrollamos asesorías en gestión del desempeño, desarrollo de equipos, gestión del cambio, planificación estratégica, clima y cultura, salud mental, autocuidado, bienestar organizacional y otros procesos clave para fortalecer la experiencia de las personas dentro de la organización. Nuestro foco es transformar necesidades organizacionales en soluciones claras, prácticas y sostenibles, que generen impacto real en la forma de trabajar.',
  },
];
