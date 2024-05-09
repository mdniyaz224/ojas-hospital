import { backdropClasses } from '@mui/material/Backdrop';
import { filledInputClasses } from '@mui/material/FilledInput';
import { formLabelClasses } from '@mui/material/FormLabel';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { alpha } from '@mui/system/colorManipulator';

import { paperClasses } from '@mui/material/Paper';
import { tableCellClasses } from '@mui/material/TableCell';
import { common } from '@mui/material/colors';
import type { Components } from '@mui/material/styles/components';
import type { PaletteColor, PaletteOptions } from '@mui/material/styles/createPalette';

interface Config {
  palette: PaletteOptions;
}

export const createComponents = ({ palette }: Config): Components => {
  return {
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.neutral![200],
          color: common.black,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          [`&:not(.${backdropClasses.invisible})`]: {
            backgroundColor: alpha(palette.neutral![900], 0.75),
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          [`&.${paperClasses.elevation1}`]: {
            boxShadow: '0px 5px 22px rgba(0, 0, 0, 0.04), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.03)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        icon: {
          color: palette.action!.active,
        },
        root: {
          borderColor: palette.neutral![200],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '#nprogress .bar': {
          backgroundColor: (palette.primary as PaletteColor).main,
        },
        '.slick-dots li button': {
          '&:before': {
            fontSize: 10,
            color: (palette.primary as PaletteColor).main,
          },
        },
        '.slick-dots li.slick-active button': {
          '&:before': {
            color: (palette.primary as PaletteColor).main,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          '&::placeholder': {
            color: '#0C0C0C80',
            fontSize: 16,
            fontFamily: 'Montserrat',
            LineHeight: '35px',
            fontWeight: 400
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderColor: palette.neutral![200],
          '&:hover': {
            backgroundColor: palette.action!.hover,
          },
          [`&.${filledInputClasses.disabled}`]: {
            backgroundColor: 'transparent',
          },
          [`&.${filledInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            borderColor: (palette.primary as PaletteColor).main,
            boxShadow: `${(palette.primary as PaletteColor).main} 0 0 0 2px`,
          },
          [`&.${filledInputClasses.error}`]: {
            borderColor: (palette.error as PaletteColor).main,
            boxShadow: `${(palette.error as PaletteColor).main} 0 0 0 2px`,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          [`&.${formLabelClasses.root}`]: {
            color: '#0C0C0C80',
            fontSize: 16,
            fontFamily: 'Montserrat',
            LineHeight: '35px',
            fontWeight: 400
          },
          [`&.${formLabelClasses.disabled}`]: {
            color: palette.text!.disabled,
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: palette.action!.hover,
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: palette.neutral![200],
            },
          },
          [`&.${outlinedInputClasses.focused}`]: {
            backgroundColor: 'transparent',
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: (palette.primary as PaletteColor).main,
              borderWidth: '3px',
            },
          },
          [`&.${filledInputClasses.error}`]: {
            [`& .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: (palette.error as PaletteColor).main,
              borderWidth: '3px',
            },
          },
        },
        notchedOutline: {
          borderColor: palette.neutral![200],
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: palette.neutral![500],
        },
        track: {
          backgroundColor: palette.neutral![400],
          opacity: 1,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'montserrat',
          fontWeight: 500,
          borderBottom: 'none'
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'separate',
          borderSpacing: '0 1rem',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            '&:first-of-type': {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            },
            '&:last-of-type': {
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            },
          },
          backgroundColor: palette.background?.paper,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          [`& .${tableCellClasses.root}`]: {
            backgroundColor: (palette?.primary as PaletteColor).main,
            color: palette.neutral![100],

          },
        },
      },
    },
    // @ts-ignore
    MuiTimelineConnector: {
      styleOverrides: {
        root: {
          backgroundColor: palette.divider,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backdropFilter: 'blur(6px)',
          background: alpha(palette.neutral![900], 0.8),
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '17.07px',
          paddingTop: '12px',
          paddingBottom: '12px',
          '&.Mui-expanded': {
            backgroundColor: palette.neutral?.[300], borderRadius: '0 0 5px 5px'
          },
          color: palette.neutral![900],
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '27px',
          paddingTop: '8px',
          paddingBottom: '8px'
        },
      },
    },
  };
};
