/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Tokens de marca Sherpas — azul + naranjo del logo, sobre neutros cálidos.
        ink: '#20264A', // Texto principal (azul pizarra profundo)
        summit: {
          DEFAULT: '#4A5DE0', // Primario — azul Sherpas
          deep: '#303C93', // Hover / fondos oscuros de sección
        },
        clay: '#E67E30', // Acento cálido — naranjo Sherpas
        mist: '#AEB6DC', // Secundario suave, líneas, detalles (periwinkle)
        stone: '#F4F1EC', // Fondo cálido principal (no blanco puro)
        paper: '#FBFAF7', // Fondo de tarjetas / contraste sutil
        line: '#E4DFD4', // Bordes y divisores
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
