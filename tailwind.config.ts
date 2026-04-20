/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'tech-black': '#09090b',
        'tech-slate': '#111827',
        'neon-green': '#39ff14',
        'neon-cyan': '#06b6d4',
        'rust-orange': '#ea580c',
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Roboto Mono', 'monospace'],
        sans: ['Inter', 'Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
