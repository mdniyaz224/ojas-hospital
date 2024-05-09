import { Box, Container, Typography, styled } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { tokens } from 'src/locales/tokens';

const EventBannerWrapper = styled(Box)(({ theme }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundImage: 'url("/banner/contact-us.webp")',
  display: 'flex',
  aspectRatio: '72 / 25',
  width: '100%',
  paddingTop: '8rem',
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
  maxWidth: '50rem',
  rowGap: 30,
}));
const ContactBanner = () => {
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
              {t(tokens.contactUs.contactBanner)}
            </Typography>
          </Box>
          <Box pr={35}>
            <Typography
              variant="caption"
              color="text.secondary"
            >
              {t(tokens.contactUs.contactBannerHero)}
            </Typography>
          </Box>
        </BannerContent>
      </Container>
    </EventBannerWrapper>
  );
};

export default ContactBanner;
