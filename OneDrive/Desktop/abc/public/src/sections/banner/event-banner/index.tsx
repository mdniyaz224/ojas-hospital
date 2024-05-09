import { Box, Container, Typography, styled } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { tokens } from 'src/locales/tokens';

const EventBannerWrapper = styled(Box)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundImage: 'url("/banner/event-banner.webp")',
  display: 'flex',
  aspectRatio: '72 / 25',
  width: '100%',
  paddingTop: '6rem',
  [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
    paddingTop: '6rem',
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    paddingTop: '0',
  },
  [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
    paddingTop: '0',
  },
  [theme.breakpoints.down(theme.breakpoints.values.xs)]: {
    paddingTop: '0',
  },
}));
const BannerContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItem: 'center',
  maxWidth: '53rem',
  rowGap: 25,
}));

const EventBanner = () => {
  return (
    <EventBannerWrapper>
      <Container
        maxWidth="xl"
        sx={{ paddingY: { sm: 5, md: 0 } }}
      >
        <BannerContent>
          <Box>
            <Typography
              variant="h1"
              color="text.secondary"
            >
              {t(tokens.event.eventBanner)}
            </Typography>
          </Box>
          <Box sx={{ pr: { md: 35, sm: 0 } }}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              {t(tokens.event.eventBannerHero)}
            </Typography>
          </Box>
        </BannerContent>
      </Container>
    </EventBannerWrapper>
  );
};

export default EventBanner;
