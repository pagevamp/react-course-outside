// /* eslint-disable no-restricted-imports */
// import defaultTheme from 'windicss/defaultTheme';
// import baseTheme from './_themes/base.theme';
// import { getTailwindConfig } from './_themes/theme.utils';
//
// const theme = getTailwindConfig(baseTheme);
// /** @type {import('windicss/types/interfaces').FullConfig} */
module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ['Oswald'],
      body: ['var(--font-family)'], // default font-family for body used  to define in plugin below
    },
    extend: {
      fontSize: {
        '2xl': '4.5rem !important',
      },
    },
  },
};
