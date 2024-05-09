import { Box, Container, Grid, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import dataImg from 'public/assets/recruit-images/table-data.webp';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';

const ImageContainer = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
    width: '100%',
    height: '100%',
  },
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    marginTop: '3rem',
  },
  width: '100%',
}));
const RecruitData = () => {
  const { t } = useTranslation();
  return (
    <Box py={{ sm: 4, lg: 11 }}>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={1}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Stack
              spacing={2}
              paddingTop={{ xs: 0, lg: 3 }}
            >
              <Typography variant="h2">{t(tokens.heading.recruitData)}</Typography>
              <Box
                width={{ xs: 'auto', lg: '30rem' }}
                pt={2}
              >
                <Typography variant="caption">{t(tokens.subheading.recruitData)}</Typography>
              </Box>
              <Box width={{ xs: 'auto', lg: '30rem' }}>
                <Typography variant="caption">{t(tokens.subheading.recruitContent)}</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            textAlign={{ lg: 'end' }}
            marginBottom={{ sm: 8, md: 0, lg: 0 }}
          >
            <ImageContainer
              src={dataImg}
              alt="data-img"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RecruitData;
