// Remove if simplebar is not used
import 'simplebar-react/dist/simplebar.min.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import 'src/global.css';
// Remove if locales are not used
import 'src/locales/i18n';

import { RTL } from 'src/components/rtl';
import { SettingsButton } from 'src/components/settings/settings-button';
import { SettingsDrawer } from 'src/components/settings/settings-drawer';
import { Toaster } from 'src/components/toaster';
import { SettingsConsumer, SettingsProvider } from 'src/contexts/settings';
import { useNprogress } from 'src/hooks/use-nprogress';
import { createTheme } from 'src/theme';
import { createEmotionCache } from 'src/utils/create-emotion-cache';
import { Provider } from 'react-redux';
import { Store } from 'src/store';
import Spinner from 'src/components/atoms/spinner';

const clientSideEmotionCache = createEmotionCache();

export interface CustomAppProps extends AppProps {
  Component: NextPage;
  emotionCache?: EmotionCache;
}

const CustomApp = (props: CustomAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useNprogress();

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>{process.env.NEXT_PUBLIC_LACROSSE}</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={Store}>
        <Spinner />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <SettingsProvider>
            <SettingsConsumer>
              {(settings) => {
                // Prevent theme flicker when restoring custom settings from browser storage
                if (!settings.isInitialized) {
                  // return null;
                }

                const theme = createTheme({
                  colorPreset: settings.colorPreset,
                  contrast: settings.contrast,
                  direction: settings.direction,
                  paletteMode: settings.paletteMode,
                  responsiveFontSizes: settings.responsiveFontSizes,
                });

                return (
                  <ThemeProvider theme={theme}>
                    <Head>
                      <meta
                        name="color-scheme"
                        content={settings.paletteMode}
                      />
                      <meta
                        name="theme-color"
                        content={theme.palette.neutral[900]}
                      />
                    </Head>
                    <RTL direction={settings.direction}>
                      <CssBaseline />
                      {getLayout(<Component {...pageProps} />)}
                      {/* <SettingsButton onClick={settings.handleDrawerOpen} /> */}
                      <SettingsDrawer
                        canReset={settings.isCustom}
                        onClose={settings.handleDrawerClose}
                        onReset={settings.handleReset}
                        onUpdate={settings.handleUpdate}
                        open={settings.openDrawer}
                        values={{
                          colorPreset: settings.colorPreset,
                          contrast: settings.contrast,
                          direction: settings.direction,
                          paletteMode: settings.paletteMode,
                          responsiveFontSizes: settings.responsiveFontSizes,
                          stretch: settings.stretch,
                          layout: settings.layout,
                          navColor: settings.navColor,
                        }}
                      />
                      <Toaster />
                    </RTL>
                  </ThemeProvider>
                );
              }}
            </SettingsConsumer>
          </SettingsProvider>
        </LocalizationProvider>
      </Provider>
    </CacheProvider>
  );
};

export default CustomApp;
