/* eslint-disable no-restricted-imports */
import { defineConfig } from 'windicss/helpers';
import plugin from 'windicss/plugin';
import defaultTheme from 'windicss/defaultTheme';
import baseTheme from './_themes/base.theme';
import { getTailwindConfig } from './_themes/theme.utils';

const theme = getTailwindConfig(baseTheme);
export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  // purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // variants: {},

  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui', ...defaultTheme.fontFamily.sans],
      serif: ['ui-serif', 'Georgia', ...defaultTheme.fontFamily.serif],
      mono: ['ui-monospace', 'SFMono-Regular', ...defaultTheme.fontFamily.mono],
      display: ['Oswald'],
      body: ['var(--font-family)'], // default font-family for body used  to define in plugin below
    },
    extend: {
      fontSize: {
        '2xl': '4.5rem !important',
      },
      colors: theme.colors,
      backgroundColor: theme.backgrounds,
    },
    screens: theme.screens,
    spacing: theme.spaces,
  },
  plugins: [
    // typography as Plugin,
    require('windicss/plugin/typography'),
    plugin(({ addBase, theme }) => {
      addBase({
        h1: { fontSize: theme('fontSize.2xl') as string },
        h2: { fontSize: theme('fontSize.xl') as string[] },
        h3: { fontSize: theme('fontSize.lg') as string[] },
        a: {
          fontWeight: theme('fontWeight.bold') as string,
          color: theme('colors.primary') as string,
          textDecoration: 'none',
        },
        body: { fontSize: theme('fontFamily.body') as string },
      });
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        '.btn': {
          padding: '.5rem 1rem',
          borderRadius: '.25rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#3490dc',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd',
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a',
          },
        },
      };
      addComponents(buttons);
    }),
  ],
});
