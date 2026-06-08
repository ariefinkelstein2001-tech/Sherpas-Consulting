/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens de marca — ver MASTER PROMPT §3. Mood: alpino + cálido + tierra.
        ink: '#1C2B2D', // Texto principal (pizarra de montaña)
        summit: {
          DEFAULT: '#0F4C5C', // Primario — teal alpino profundo
          deep: '#0A363F', // Hover / fondos oscuros de sección
        },
        clay: '#C46A4B', // Acento cálido (terracota) — con moderación
        mist: '#9FB8B5', // Secundario suave, líneas, detalles
        stone: '#F4F1EC', // Fondo cálido principal (no blanco puro)
        paper: '#FBFAF7', // Fondo de tarjetas / contraste sutil
        line: '#E2DCD2', // Bordes y divisores
      },
      fontFamily: {
        serif: ['Fraunces Variable', 'Source Serif 4', 'Lora', 'Georgia', 'serif'],
        sans: ['Inter Variable', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        prose: '70ch', // medida de lectura ~65–75 caracteres
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(28,43,45,0.04), 0 8px 24px -12px rgba(28,43,45,0.12)',
        lift: '0 4px 12px rgba(28,43,45,0.06), 0 18px 40px -16px rgba(28,43,45,0.18)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'scroll-bob': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.6' },
          '50%': { transform: 'translateY(6px)', opacity: '1' },
        },
      },
      animation: {
        'scroll-bob': 'scroll-bob 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
