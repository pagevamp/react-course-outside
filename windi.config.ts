import { defineConfig } from 'windicss/helpers';
import typography from 'windicss/plugin/typography';
import { Plugin } from 'windicss/types/interfaces';
import colors from 'windicss/colors';

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // variants: {},
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: JSON.parse(JSON.stringify(colors)),
    screens: {
      usm: '350px',
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      uxl: '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    spacing: {
      1: '8px',
      2: '12px',
      3: '16px',
      4: '24px',
      5: '32px',
      6: '48px',
    },
  },
  plugins: [typography as Plugin],
});
