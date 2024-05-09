import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { Grid, styled } from '@mui/material';
import { Container } from '@mui/material';
import { blue } from 'src/theme/colors';

const MUIContainer = styled(Box)({
  backgroundImage: 'url("/assets/collectData/LR-player-bg.webp")',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  padding: '4rem 0',
});

const SubHeading = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '1.5rem',
  fontWeight: 400,
  lineHeight: '1.7',
});

const ListWrapper = styled('ul')({
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: 400,
  lineHeight: '2.188',

  '>li': {
    lineHeight: '30px',
  },
  'li::marker': {
    color: blue.main,
    fontSize: '20px',
  },
});

const RecruitCard = () => {
  const { t } = useTranslation();

  return (
    <MUIContainer>
      <Container maxWidth="xl">
        <Box pb={4}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              color="text.secondary"
            >
              {t(tokens.heading.collectData)}
            </Typography>
          </Box>
          <Box
            textAlign="center"
            pt={3}
            px={{ md: 0, lg: 15 }}
          >
            <SubHeading color="text.secondary">{t(tokens.subHeading.collectData)}</SubHeading>
          </Box>
        </Box>
        <Grid
          container
          spacing={2}
        >
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
          >
            <Card sx={{ display: 'flex', ml: 2, mt: 2 }}>
              <CardMedia
                component="img"
                src="/assets/collectData/Shot-Speed.webp"
                alt="Live from space album cover"
                sx={{ width: 'auto', p: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent
                  style={{
                    padding: '1rem',
                    paddingBottom: '1rem',
                    lineHeight: 2,
                    paddingTop: '2rem',
                  }}
                >
                  <Typography variant="h6">{t(tokens.heading.speedHead)}</Typography>
                  <Box mt={1}>
                    <Typography variant="caption">{t(tokens.subHeading.speedSubHead)}</Typography>
                  </Box>
                  <ListWrapper style={{ paddingInlineStart: '1rem', marginBlockStart: '0' }}>
                    <li>{t(tokens.subHeading.shotSpeed)}</li>
                    <li>{t(tokens.subHeading.accuracy)}</li>
                  </ListWrapper>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
          >
            <Card sx={{ display: 'flex', ml: 2, mt: 2 }}>
              <CardMedia
                component="img"
                image="/assets/collectData/Vertical-Jump.webp"
                alt="Live from space album cover"
                sx={{ width: 'auto', p: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', height: '10rem' }}>
                <CardContent
                  style={{
                    paddingBottom: '1rem',
                    padding: '1rem',
                    lineHeight: 2,
                    paddingTop: '2rem',
                  }}
                >
                  <Typography variant="h6">{t(tokens.heading.verticalJump)}</Typography>
                  <Box mt={1}>
                    <Typography variant="caption">{t(tokens.subHeading.verticalJump)}</Typography>
                  </Box>
                  <ListWrapper style={{ paddingInlineStart: '1rem', marginBlockStart: '0' }}>
                    <li>{t(tokens.collectDataList.jumpHeight)}</li>
                    <li>{t(tokens.collectDataList.contactTime)}</li>
                    <li>{t(tokens.collectDataList.flightTime)}</li>
                  </ListWrapper>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
          >
            <Card sx={{ display: 'flex', ml: 2, mt: 2 }}>
              <CardMedia
                component="img"
                image="/assets/collectData/Yard-Dash.webp "
                alt="Live from space album cover"
                sx={{ width: 'auto', p: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent
                  style={{
                    padding: '1rem',
                    paddingBottom: '1rem',
                    lineHeight: 2,
                    paddingTop: '2rem',
                  }}
                >
                  <Typography variant="h6">{t(tokens.heading.yardDash)}</Typography>
                  <Box mt={1}>
                    <Typography variant="caption">{t(tokens.subHeading.yardDash)}</Typography>
                  </Box>
                  <ListWrapper style={{ paddingInlineStart: '1rem', marginBlockStart: '0' }}>
                    <li>{t(tokens.collectDataList.yard1)}</li>
                    <li>{t(tokens.collectDataList.yard2)}</li>
                    <li>{t(tokens.collectDataList.yard3)}</li>
                  </ListWrapper>
                </CardContent>
              </Box>
            </Card>
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            lg={6}
          >
            <Card sx={{ display: 'flex', ml: 2, mt: 2 }}>
              <CardMedia
                component="img"
                image="/assets/collectData/Pro-Agility.webp"
                alt="Live from space album cover"
                sx={{ width: 'auto', p: 2 }}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent
                  style={{
                    padding: '1rem',
                    paddingBottom: '1rem',
                    lineHeight: 2,
                    paddingTop: '2rem',
                  }}
                >
                  <Typography variant="h6">{t(tokens.heading.proAgility)}</Typography>
                  <Box mt={1}>
                    <Typography variant="caption">{t(tokens.subHeading.speedSubHead)}</Typography>
                  </Box>
                  <ListWrapper style={{ paddingInlineStart: '1rem', marginBlockStart: '0' }}>
                    <li>{t(tokens.collectDataList.reactionTime)}</li>
                    <li>{t(tokens.collectDataList.acceleration)}</li>
                    <li>{t(tokens.collectDataList.deceleration)}</li>
                  </ListWrapper>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MUIContainer>
  );
};
export default RecruitCard;
