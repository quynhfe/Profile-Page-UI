import { heroui } from '@heroui/theme';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        plus: ['var(--font-plus)'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        dark: {
          colors: {
            foreground: '#fff',
            background: '#000000',
            border: '#2b2826',
          },
        },
        light: {
          colors: {
            background: '#ffffff',
            foreground: '#000000',
            border: '#ffffff',
          },
        },
      },
    }),
  ],
};

module.exports = config;
