# 🏔️ Sherpas Consulting — Sitio web

Sitio institucional de **Sherpas Consulting**, consultora chilena de gestión de
personas, liderazgo y desarrollo organizacional. Una sola página (long-scroll)
con narrativa de ascenso: parallax de montañas, ruta de ascenso scroll-linked,
curvas de nivel y scroll-reveal coreografiado.

> **Concepto:** *Sherpas = el guía experto que acompaña a otros a llegar a la
> cima, sin reemplazarlos.* — «Porque ninguna cima se alcanza sola.»

---

## Stack

- **[Astro](https://astro.build)** — sitio estático, rápido y con SEO impecable.
- **[Tailwind CSS](https://tailwindcss.com)** — con tokens de marca en `tailwind.config.mjs`.
- **Tipografías** — Fraunces (titulares) e Inter (cuerpo), vía `@fontsource-variable` (`font-display: swap`).
- **Íconos** — Lucide (inline en `src/components/Icon.astro`, sin dependencias extra).
- **Animaciones** — Vanilla JS (`IntersectionObserver` + `requestAnimationFrame`), todo por `transform`/`opacity`. Respeta `prefers-reduced-motion`.
- **Sitemap** — `@astrojs/sitemap`.

---

## Correr en local

Requisitos: **Node 18+** y npm.

```bash
npm install      # instala dependencias
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # build de producción en dist/
npm run preview  # previsualiza el build de producción
```

---

## Estructura

```
src/
├── components/        # Header, Hero, Purpose, Compass, Services, Testimonials,
│                      # Resources, FinalCTA, Footer, ContactForm y decorativos
│                      # (MountainParallax, ContourBackground, AscentPath, etc.)
├── data/              # Copy y datos centralizados (fuente de verdad del contenido)
│   ├── principles.ts  # Los 4 principios de "La brújula"
│   ├── services.ts    # Los 4 servicios
│   ├── testimonials.ts# Testimonios de clientes
│   └── resources.ts   # Recursos / publicaciones (links externos)
├── layouts/Layout.astro   # <head>, SEO, Open Graph, JSON-LD
├── pages/index.astro      # Ensambla todas las secciones
├── scripts/main.ts        # Reveals, parallax, ruta de ascenso, header, nav, menú
└── styles/global.css      # Tokens CSS, base tipográfica, utilidades de animación
```

---

## Cómo editar contenido y marca

### Textos y datos
Todo el copy de las secciones repetitivas vive en **`src/data/`** (servicios,
principios, testimonios, recursos). Edita ahí para actualizar tarjetas sin tocar
componentes. El copy de Hero, Propósito y CTA está en sus componentes
(`src/components/Hero.astro`, `Purpose.astro`, `FinalCTA.astro`).

### Colores y tipografías
Los **tokens de marca** están en dos lugares espejo:

- `tailwind.config.mjs` → clases utilitarias (`bg-summit`, `text-clay`, …).
- `src/styles/global.css` → variables CSS (`var(--summit)`, …) para SVGs y gradientes.

Cambia el valor en ambos para mantener la coherencia.

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#1C2B2D` | Texto principal |
| `summit` | `#0F4C5C` | Primario (CTAs, links) |
| `summit-deep` | `#0A363F` | Hover / fondos oscuros |
| `clay` | `#C46A4B` | Acento cálido (con moderación) |
| `mist` | `#9FB8B5` | Secundario suave, líneas |
| `stone` | `#F4F1EC` | Fondo principal |
| `paper` | `#FBFAF7` | Fondo de tarjetas |
| `line` | `#E2DCD2` | Bordes y divisores |

---

## Conectar el formulario de contacto

El formulario (`src/components/ContactForm.astro`) funciona sin configuración
usando un **fallback `mailto:`**. Para recibir envíos reales:

1. Crea un formulario en **[Formspree](https://formspree.io)** (u otro endpoint que acepte `POST` con `FormData`).
2. Copia `.env.example` a `.env` y define:

   ```bash
   PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/tu-id
   PUBLIC_CONTACT_EMAIL=contacto@sherpasconsulting.cl
   ```

3. Reconstruye. Con el endpoint definido, el formulario envía por `fetch` y
   muestra estados de éxito/error. Sin endpoint, abre el correo del usuario.

Incluye protección anti-spam por **honeypot** (campo oculto `website`).
No se hardcodean credenciales: todo via variables de entorno `PUBLIC_*`.

---

## Desplegar

Sitio 100% estático → cualquier host de estáticos.

**Vercel / Netlify:** conecta el repo. Detectan Astro automáticamente
(`build: npm run build`, output: `dist/`). Define las variables de entorno
`PUBLIC_*` en el panel del proveedor.

Antes de publicar, actualiza el dominio real en:
- `astro.config.mjs` → constante `SITE`.
- `public/robots.txt` → URL del sitemap.

---

## Pendientes (`TODO`)

Marcados en el código donde falta material real:

- **Dominio** de producción (`astro.config.mjs`, `robots.txt`).
- **Imagen OG** real en `.png/.jpg` 1200×630 (hay un placeholder SVG en `public/og-image.svg`).
- **Endpoint** del formulario y **email** de contacto (`.env`).
- **LinkedIn** y datos de contacto del footer (`src/components/Footer.astro`).
- **Testimonio de Inversiones CS** (Cristián Sáez) — pendiente; la tarjeta muestra un placeholder elegante y no inventa la cita (`src/data/testimonials.ts`).
- **Logo** y **fotos del equipo** si se incorporan.

---

## Accesibilidad y performance

- Mobile-first; HTML semántico; contraste AA; foco visible; tap targets ≥ 44px.
- `prefers-reduced-motion` desactiva todas las animaciones.
- Animaciones por GPU (`transform`/`opacity`), sin reflows.
- Imágenes/SVG decorativos con `aria-hidden`; skip-link al contenido.
