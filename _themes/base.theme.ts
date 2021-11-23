import { ITheme } from '@/_themes/types.theme';

export const baseTheme: ITheme = {
  colors: {
    primary: 'red',
    main: '#111111',
    secondary: '#555555',
    accent: '#718096',
    header: '#2d3748',
  },
  backgrounds: {
    primary: '#fff',
  },
  screens: {
    xs: '350px',
    sm: '640px',
    md: '768px',
    lg: '1200px',
    xl: '1920px',
    xxl: '2100px',
  },
  spaces: {
    0: '0rem',
    1: '1rem',
    2: '2rem',
    3: '3rem',
    4: '4rem',
    5: '5rem',
    6: '6rem',
    7: '7rem',
    8: '8rem',
    9: '9rem',
    10: '10rem',
    11: '11rem',
    12: '12rem',
  },
  fonts: {
    'default-family': [`\"Nunito Sans\"`, `sans-serif`, `ui-sans-serif`, `system-ui`, `-apple-system`].join(', '),
    outside: 'Sans Seriff',
  },
};

export default baseTheme;
