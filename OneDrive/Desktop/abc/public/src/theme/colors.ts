import type { ColorRange, PaletteColor } from '@mui/material/styles/createPalette';
import { alpha } from '@mui/system/colorManipulator';

const withAlphas = (color: PaletteColor): PaletteColor => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral: ColorRange = {
  50: '#F8F9FA',
  100: '#ffffff',
  200: '#E3E2E2',
  300: '#F2F2F2',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#0C0C0C',
};

export const blue = withAlphas({
  lightest: '#d8defc',
  light: '#899cf5',
  main: '#050F3E',
  dark: '#1D00D1',
  darkest: '#030a27',
  contrastText: '#FFFFFF',
});
export const black = withAlphas({
  lightest: '#eaeaea',
  light: '#bfbfbf',
  main: '#262626',
  dark: '#000000',
  darkest: '#404040',
  contrastText: '#151515',
});
export const orange = withAlphas({
  lightest: '#f8dfdb',
  light: '#eba093',
  main: '#DD5B46',
  dark: '#de604b',
  darkest: '#b33521',
  contrastText: '#FFFFFF',
});

export const green = withAlphas({
  lightest: '#cdfefc',
  light: '#68fdf6',
  main: '#03CBC2',
  dark: '#029790',
  darkest: '#013230',
  contrastText: '#FFFFFF',
});

export const grey = withAlphas({
  lightest: '#181818',
  light: '#0C0C0C',
  main: '#DDD8D8',
  dark: '#A7A7A7',
  darkest: '#C7C6C6',
  contrastText: '#FFFFFF',
});

export const indigo = withAlphas({
  lightest: '#F5F7FF',
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  darkest: '#312E81',
  contrastText: '#FFFFFF',
});

export const purple = withAlphas({
  lightest: '#F9F5FF',
  light: '#F4EBFF',
  main: '#9E77ED',
  dark: '#6941C6',
  darkest: '#42307D',
  contrastText: '#FFFFFF',
});

export const success = withAlphas({
  lightest: '#F0FDF9',
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  darkest: '#134E48',
  contrastText: '#FFFFFF',
});

export const info = withAlphas({
  lightest: '#ECFDFF',
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  darkest: '#164C63',
  contrastText: '#FFFFFF',
});

export const warning = withAlphas({
  lightest: '#FFFAEB',
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  darkest: '#7A2E0E',
  contrastText: '#FFFFFF',
});

export const error = withAlphas({
  lightest: '#FEF3F2',
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  darkest: '#7A271A',
  contrastText: '#FFFFFF',
});

export const yellow = withAlphas({
  lightest: '#ffe5cc',
  light: '#feb167',
  main: '#FE8109',
  dark: '#984b01',
  darkest: '#331900',
  contrastText: '#FFFFFF',
});

export const pink = withAlphas({
  lightest: '#ffccd4',
  light: '#E4796826',
  main: '#FF4E6B',
  dark: '#990019',
  darkest: '#330008',
  contrastText: '#FFFFFF',
});

