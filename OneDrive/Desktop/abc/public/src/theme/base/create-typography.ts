import type { TypographyOptions } from '@mui/material/styles/createTypography';

export const createTypography = (): TypographyOptions => {
  return {
    fontFamily:
      'montserrat',
    body1: {
      fontSize: '1rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.57,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '1.625rem',
      fontWeight: 700,
      lineHeight: 1.57,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      letterSpacing: '0.5px',
      lineHeight: 2.5,
      textTransform: 'uppercase',
    },
    h1: {
      fontFamily: "'oswald'",
      fontWeight: 700,
      fontSize: '4.1rem',
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'oswald',
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'oswald'",
      fontWeight: 700,
      fontSize: '2.75rem',
      lineHeight: 1.2,
    },
    h4: {
      fontFamily: "'oswald'",
      fontWeight: 700,
      fontSize: '1.625rem',
      lineHeight: 1.2,
    },
    h5: {
      fontFamily: "'montserrat'",
      fontWeight: 700,
      fontSize: '1.375rem',
      lineHeight: 1.2,
    },
    h6: {
      fontFamily: "'montserrat'",
      fontWeight: 700,
      fontSize: '1.125rem',
      lineHeight: 1.2,
    },
  };
};
