import { inputLabelClasses } from '@mui/material/InputLabel';
import { tableCellClasses } from '@mui/material/TableCell';

import { createTheme } from '@mui/material/styles';
import type { Components } from '@mui/material/styles/components';
import Checked from 'public/assets/checked.svg';
import Unchecked from 'public/assets/unchecked.svg';
import { createShadows } from '../light/create-shadows';
// import { tableRowClasses } from '@mui/material';

// Used only to create transitions
const muiTheme = createTheme();
const shadow = createShadows();

// Define a new type for your custom variant
type CustomTypographyVariant = 'boldBody1';

// Extend the existing variant options with your custom variant
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    custom: true;
    // Add your custom variant here
    boldBody1?: true;
    lightH2?: true;
  }
}

export const createComponents = (): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 600,
          letterSpacing: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '5px',
          textTransform: 'none',
        },
        sizeSmall: {
          padding: '6px 16px',
        },
        sizeMedium: {
          padding: '12px 20px',
        },
        sizeLarge: {
          padding: '11px 24px',
        },
        textSizeSmall: {
          padding: '7px 12px',
        },
        textSizeMedium: {
          padding: '9px 16px',
        },
        textSizeLarge: {
          padding: '12px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 5,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px 24px',
          paddingTop: '20px',
          '&:last-child': {
            paddingBottom: '32px',
          },
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
        subheaderTypographyProps: {
          variant: 'body2',
        },
      },
      styleOverrides: {
        root: {
          padding: '32px 24px 16px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: muiTheme.palette.grey[300],
          borderRadius: '5px',
        },
      },
      defaultProps: {
        checkedIcon: <Checked />,
        color: 'primary',
        icon: <Unchecked />,
        indeterminateIcon: <Unchecked />,
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        body: {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
        },
        '#root, #__next': {
          display: 'flex',
          flex: '1 1 auto',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        },
        '#nprogress': {
          pointerEvents: 'none',
        },
        '#nprogress .bar': {
          height: 3,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        sizeSmall: {
          padding: 4,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            opacity: 1,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          borderRadius: 8,
          borderStyle: 'solid',
          borderWidth: 1,
          overflow: 'hidden',
          transition: muiTheme.transitions.create(['border-color', 'box-shadow']),
          '&:before': {
            display: 'none',
          },
          '&:after': {
            display: 'none',
          },
        },
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          fontSize: 14,
          fontWeight: 500,
          lineHeight: '24px',
        },
        notchedOutline: {
          transition: muiTheme.transitions.create(['border-color', 'box-shadow']),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontWeight: 500,
          [`&.${inputLabelClasses.filled}`]: {
            transform: 'translate(12px, 18px) scale(1)',
          },
          [`&.${inputLabelClasses.shrink}`]: {
            [`&.${inputLabelClasses.standard}`]: {
              transform: 'translate(0, -1.5px) scale(0.85)',
            },
            [`&.${inputLabelClasses.filled}`]: {
              transform: 'translate(12px, 6px) scale(0.85)',
            },
            [`&.${inputLabelClasses.outlined}`]: {
              transform: 'translate(14px, -9px) scale(0.85)',
            },
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          marginRight: '16px',
          minWidth: 'unset',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiPopover: {
      defaultProps: {
        elevation: 16,
      },
    },
    MuiRadio: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiSwitch: {
      defaultProps: {
        color: 'primary',
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: 16,
          fontFamily: 'montserrat',
          fontWeight: 500,
          lineHeight: 1.71,
          minWidth: 'auto',
          paddingLeft: 0,
          paddingRight: 0,
          textTransform: 'none',
          '& + &': {
            marginLeft: 50,
          },
          '&.Mui-selected': {
            fontWeight: 700,
          },
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          [`& .${tableCellClasses.root}`]: {
            borderBottom: 'none',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 2,
            letterSpacing: 0.5,
          },
          [`& .${tableCellClasses.paddingCheckbox}`]: {
            paddingTop: 4,
            paddingBottom: 4,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: 'boldBody1' as CustomTypographyVariant },
          style: {
            fontFamily: 'montserrat',
            fontSize: '0.875rem',
            fontWeight: 500,
            lineHeight: '2.188rem',
          },
        },
        {
          props: { variant: 'lightH2' as CustomTypographyVariant },
          style: {
            fontFamily: 'montserrat',
            fontSize: '3rem',
            fontWeight: 700,
            lineHeight: '4.438rem',
          },
        },
      ],
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: shadow![24],
          borderRadius: 5,
          '&::before': {
            position: 'relative',
          },
        },
      },
    },
  };
};
