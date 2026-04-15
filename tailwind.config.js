/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: 'rgb(var(--color-base) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        panel: 'rgb(var(--color-panel) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px -28px rgba(15, 23, 42, 0.35)',
        card: '0 20px 40px -24px rgba(15, 23, 42, 0.18)',
      },
      backgroundImage: {
        'mesh-glow':
          'radial-gradient(circle at top left, rgba(38, 166, 154, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(204, 112, 54, 0.12), transparent 30%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.65' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
