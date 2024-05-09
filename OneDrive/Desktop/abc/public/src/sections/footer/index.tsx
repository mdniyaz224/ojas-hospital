import { Container, Grid, Stack, Typography, styled, Link as MUILink } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import LacrosseLogo from 'public/LACROSSE-logo.svg';
import Facebook from 'public/social-media-icons/facebook.svg';
import Twitter from 'public/social-media-icons/twitter.svg';
import Instagram from 'public/social-media-icons/instagram.svg';
import Linkedin from 'public/social-media-icons/linkedin.svg';
import { black } from 'src/theme/colors';
import { tokens } from 'src/locales/tokens';
import { t } from 'i18next';
import Link from 'next/link';
import { paths } from 'src/paths';

const FooterWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: black.main,
  paddingBottom: 20,
  paddingTop: 20,
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
        >
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
          >
            <LacrosseLogo />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
          >
            <Grid
              container
              justifyContent="space-between"
              spacing={{ sm: 2, lg: 0 }}
              pl={8}
            >
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
              >
                <Stack spacing={{ xs: 2, sm: 1 }}>
                  <MUILink
                    href={paths.news}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      News & Insights
                    </Typography>
                  </MUILink>
                  <MUILink
                    href={paths.faq}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t(tokens.footer.fqa)}
                    </Typography>
                  </MUILink>
                  <MUILink
                    href={paths.termsConditions}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t(tokens.footer.terms)}
                    </Typography>
                  </MUILink>
                </Stack>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
              >
                <Stack spacing={{ xs: 2, sm: 1 }}>
                  <MUILink
                    href={paths.plan}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t(tokens.footer.planPricing)}
                    </Typography>
                  </MUILink>
                  <MUILink
                    href={paths.contactUs}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t(tokens.footer.contactUs)}
                    </Typography>
                  </MUILink>
                  <MUILink
                    href={paths.privacyPolicy}
                    component={Link}
                    underline="none"
                  >
                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {t(tokens.footer.privacyPolicy)}
                    </Typography>
                  </MUILink>
                </Stack>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={3}
            md={3}
          >
            <Stack
              direction="row"
              spacing={{ sm: 3, lg: 2 }}
              justifyContent={{ xs: 'center', sm: 'flex-end' }}
              flexWrap="wrap"
            >
              <Box>
                <Facebook />
              </Box>
              <Box>
                <Instagram />
              </Box>
              <Box>
                <Twitter />
              </Box>
              <Box>
                <Linkedin />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
