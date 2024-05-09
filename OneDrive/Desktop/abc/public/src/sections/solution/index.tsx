import { Box, Container, Grid, Stack, Typography, styled } from '@mui/material';
import Image from 'next/image';
import Tick from 'public/assets/solution-images/Clarity.svg';
import Cost from 'public/assets/solution-images/cost-saving.svg';
import Player from 'public/assets/solution-images/Player.webp';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { blue } from 'src/theme/colors';

const MainContainer = styled(Box)({
  backgroundColor: blue.main,
  position: 'relative',
});

const PlayerImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    display: 'none',
  },
}));

const PlayerImage = styled(Image)(({ theme }) => ({
  width: '100%',
}));

const Solution = () => {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <Container maxWidth="xl">
        <Grid
          container
          py={6}
        >
          <Grid
            item
            md={6}
            xl={6}
          >
            <Typography
              variant="h2"
              color="text.secondary"
            >
              {t(tokens.heading.solution)}
            </Typography>
            <Box mt={2}>
              <Typography
                variant="caption"
                color="text.secondary"
              >
                {t(tokens.subHeading.solution)}
              </Typography>
            </Box>
            <Stack
              spacing={2}
              pt={4}
            >
              <Box>
                <Tick />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {t(tokens.heading.clarity)}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {t(tokens.subHeading.clarityContent)}
                </Typography>
              </Box>
            </Stack>
            <Stack
              spacing={2}
              pt={5}
            >
              <Box>
                <Cost />
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {t(tokens.heading.costSaving)}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  color="text.secondary"
                >
                  {t(tokens.subHeading.costContent)}
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid
            item
            md={6}
            xl={6}
            position="relative"
            mt={2}
          >
            <PlayerImageContainer>
              <PlayerImage
                src={Player}
                alt="player"
              />
            </PlayerImageContainer>
          </Grid>
        </Grid>
      </Container>
    </MainContainer>
  );
};

export default Solution;
