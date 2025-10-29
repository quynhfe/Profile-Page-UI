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
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      backgroundColor: {
        'bg-gradient':
          'linear-gradient(180deg, rgba(145,241,111,1) 100%, rgba(143,143,143,0) 0%)',
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};

module.exports = config;
