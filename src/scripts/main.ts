// Comportamiento de cliente: reveals, parallax, ruta de ascenso, header y nav.
// Todo por transform/opacity (GPU). Respeta prefers-reduced-motion.

const prefersReduced =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --- Scroll-reveal coreografiado (fade + subida con stagger) --------------- */
function initReveals() {
  const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
  if (prefersReduced || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const stagger = Number(el.dataset.revealStagger ?? 0);
        if (stagger) el.style.setProperty('--reveal-delay', `${stagger}ms`);
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => io.observe(el));
}

/* --- Parallax por capas (montañas) ---------------------------------------- */
function initParallax() {
  if (prefersReduced) return;
  const layers = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
  if (!layers.length) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    layers.forEach((layer) => {
      const speed = Number(layer.dataset.parallaxSpeed ?? 0.2);
      const rect = layer.getBoundingClientRect();
      // Desplazamiento relativo al centro del viewport
      const offset = (rect.top + rect.height / 2 - vh / 2) * speed * -1;
      layer.style.setProperty('--py', `${offset.toFixed(1)}px`);
    });
    ticking = false;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* --- Ruta de ascenso global (stroke-dashoffset según progreso) ------------- */
function initAscentPath() {
  if (prefersReduced) return;
  const path = document.querySelector<SVGPathElement>('.js-ascent-progress');
  if (!path) return;

  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    path.style.strokeDashoffset = String(1 - progress);
    ticking = false;
  };
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  update();
}

/* --- Curvas de nivel que se dibujan al entrar en viewport ------------------ */
function initContours() {
  const svgs = Array.from(document.querySelectorAll<SVGSVGElement>('.js-contour'));
  if (!svgs.length) return;

  svgs.forEach((svg) => {
    const paths = Array.from(svg.querySelectorAll('path'));
    paths.forEach((p) => {
      const len = p.getTotalLength();
      p.style.strokeDasharray = String(len);
      if (!prefersReduced) p.style.strokeDashoffset = String(len);
    });
  });
  if (prefersReduced || !('IntersectionObserver' in window)) return;

  const io = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const svg = entry.target as SVGSVGElement;
        svg.querySelectorAll('path').forEach((p, i) => {
          const el = p as SVGPathElement;
          el.style.transition = `stroke-dashoffset 1.4s var(--ease-smooth) ${i * 120}ms`;
          el.style.strokeDashoffset = '0';
        });
        obs.unobserve(svg);
      });
    },
    { threshold: 0.2 },
  );
  svgs.forEach((svg) => io.observe(svg));
}

/* --- Header: fondo translúcido al hacer scroll ----------------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const update = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* --- Nav: link activo según sección visible -------------------------------- */
function initActiveNav() {
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map((l) => [l.getAttribute('href')?.slice(1), l]));
  const sections = Array.from(byId.keys())
    .map((id) => (id ? document.getElementById(id) : null))
    .filter((el): el is HTMLElement => !!el);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.remove('is-active'));
        byId.get(entry.target.id)?.classList.add('is-active');
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
  );
  sections.forEach((s) => io.observe(s));
}

/* --- Menú mobile ----------------------------------------------------------- */
function initMobileMenu() {
  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;

  const setOpen = (open: boolean) => {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };
  toggle.addEventListener('click', () =>
    setOpen(toggle.getAttribute('aria-expanded') !== 'true'),
  );
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}

function init() {
  initReveals();
  initParallax();
  initAscentPath();
  initContours();
  initHeader();
  initActiveNav();
  initMobileMenu();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
