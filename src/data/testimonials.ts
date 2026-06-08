// Testimonios — MASTER PROMPT §5.5. Copy oficial, no inventar citas.
// El testimonio de Inversiones CS está pendiente: pending = true, sin cita.

export interface Testimonial {
  tag: string;
  company: string;
  name: string;
  role: string;
  quote: string;
  pending?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    tag: 'Alineación Estratégica',
    company: 'Agromillora',
    name: 'Silvana Díaz',
    role: 'Gerente de Recursos Humanos',
    quote:
      'Recomiendo a Sherpas Consulting, con quienes tuve la oportunidad de trabajar en Agromillora en un taller de alineación estratégica para nuestro equipo ejecutivo. Sherpas destaca por su mirada estratégica, su flexibilidad para adaptarse al proceso y, sobre todo, su gran capacidad de leer al equipo y aportar valor en cada etapa. Su trabajo fue clave para generar foco, conversación relevante y mayor alineamiento. Sin duda, una excelente partner para procesos estratégicos de alto impacto.',
  },
  {
    tag: 'Programa de Liderazgo',
    company: 'Legrand Bticino',
    name: 'Beverly Núñez',
    role: 'Gerente de Recursos Humanos & RSE',
    quote:
      'La experiencia de Legrand Chile con Sherpas ha sido muy positiva, tanto en el desarrollo de nuestros líderes como en el fortalecimiento de iniciativas de bienestar organizacional; su enfoque cercano y práctico ha permitido generar espacios de reflexión profundos, donde nuestros equipos han podido cuestionar y evolucionar sus estilos de liderazgo, incorporando herramientas concretas aplicables en el día a día, lo que ha contribuido a promover un liderazgo más consciente, colaborativo y alineado con nuestros valores organizacionales. Por otra parte, los talleres de autocuidado y bienestar han sido altamente valorados por los colaboradores, ya que han permitido abrir conversaciones necesarias sobre salud mental y entregar herramientas concretas y útiles para la gestión del estrés. Destacamos especialmente la capacidad de Sherpas para adaptarse a nuestra cultura y necesidades, generando confianza y compromiso en los equipos. Más que una consultora, han sido un partner estratégico, aportando de manera consistente al desarrollo de nuestra cultura organizacional y al bienestar integral de las personas.',
  },
  {
    tag: 'Charlas talento femenino',
    company: 'Grupo MBO',
    name: 'Beatriz Correa',
    role: 'Gerente de Personas',
    quote:
      'En el marco del Día de la Mujer, contamos con Sherpas Consulting para facilitar un conversatorio sobre la sobrecarga y la sobreexigencia que viven muchas mujeres en el mundo del trabajo. Fue una instancia profunda y necesaria, que abrió un espacio de conversación honesta sobre un tema que muchas veces queda silenciado en lo cotidiano. Destacamos especialmente la cercanía de la facilitadora, su capacidad para promover la participación del grupo y generar un ambiente de confianza, donde las personas se sintieron cómodas para compartir sus experiencias. Su mirada en temas de diversidad y género se reflejó en cada intervención, abordando el tema con empatía, sensibilidad y un enfoque actualizado, conectando la reflexión con la realidad concreta de nuestros equipos. El trabajo de Sherpas Consulting dejó aprendizajes relevantes y una invitación a seguir reflexionando como organización. Recomendamos ampliamente su trabajo a quienes busquen abordar estos temas con rigor, calidez y profundidad.',
  },
  {
    tag: 'Coaching ejecutivo',
    company: 'AFP Modelo',
    name: 'Andrés Flisfisch',
    role: 'Gerente General',
    quote:
      'Durante los últimos cinco años hemos contado con el acompañamiento de Sherpas Consulting en distintos procesos clave para nuestra organización, como planificación estratégica, programas de coaching ejecutivo y desarrollo de equipo. Su aporte ha sido muy valioso para acompañar procesos de coaching ejecutivo con personas clave de la organización, fortaleciendo su preparación y confianza en momentos de transición hacia nuevos roles, así como también potenciando el desempeño ejecutivo. También ha sido un aporte relevante en el desarrollo de equipo mediante la mentoría grupal, ayudándonos a mejorar la integración, la colaboración y la coordinación interna. Sherpas Consulting ha sido un socio cercano, profesional y confiable, capaz de comprender nuestras necesidades y acompañarnos con una mirada práctica, humana y estratégica.',
  },
  {
    tag: 'Gerenciamiento de RR.HH. a tiempo parcial',
    company: 'Inversiones CS',
    name: 'Cristián Sáez',
    role: 'Gerente General',
    quote: '',
    // TODO: testimonio pendiente de entrega. No inventar la cita.
    pending: true,
  },
];
