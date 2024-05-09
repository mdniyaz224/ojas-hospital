import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Box, Container, Grid, Link, styled, Typography, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { blue, green, grey, pink, yellow } from 'src/theme/colors';
import dynamic from 'next/dynamic';
import Modal from 'src/components/atoms/modal';
import Listing from 'src/sections/example-chart';
import { sr } from 'date-fns/locale';
import { headers, compareRows, soloPackage, personalPackage } from 'src/config/example-chart';

const Tick = dynamic(() => import('public/assets/combinepackages/check.svg'));
const Cross = dynamic(() => import('public/assets/combinepackages/cross-small.svg'));

const TdStyle = styled('td')(({ theme }) => ({
  border: `1px solid ${grey.main}`,
  textAlign: 'center',
}));

const TdSoloStyle = styled('td')(({ theme }) => ({
  border: `1px solid ${grey.main}`,
  textAlign: 'center',
}));
const TdPersonalStyle = styled('td')(({ theme }) => ({
  border: `1px solid ${grey.main}`,
  textAlign: 'center',
}));
const solo: React.CSSProperties = {
  border: `1px solid ${grey.main}`,
  padding: '12px 25px 12px 15px',
  background: pink.light,
};

const SoloPackageBox = styled(Box)({
  backgroundColor: green.main,
  width: '100%',
  maxWidth: '5rem',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  borderRadius: '2rem',
});

const MainBox = styled(Box)({
  float: 'left',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});

const ComparePackageBox = styled(Box)({
  backgroundColor: pink.main,
  width: '100%',
  maxWidth: '5rem',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  borderRadius: '2rem',
});

const PerPackageBox = styled(Box)({
  backgroundColor: yellow.main,
  width: '100%',
  maxWidth: '5rem',
  textAlign: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  borderRadius: '2rem',
});

const MUITypography = styled(Typography)({
  color: green.main,
});

const TypographyPackage = styled(Typography)({
  color: yellow.main,
});

const ComparePackage = styled(Typography)({
  color: pink.main,
});

const Span = styled('span')({
  fontFamily: 'Montserrat',
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '2.188',
});

const SubHeading = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '1.125rem',
  fontWeight: 400,
  lineHeight: '2.188',
});
const EventPackageFeature = styled(Typography)({
  fontFamily: 'Montserrat',
  fontSize: '0.875rem',
  fontWeight: 700,
  lineHeight: '2.188',
});
const ListBox = styled(Box)({
  overflowX: 'scroll',
});

const Packages = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalSolo, setOpenModalSolo] = useState<boolean>(false);
  const [openModalPersonal, setOpenModalPersonal] = useState<boolean>(false);
  return (
    <Box
      py={9}
      sx={{ background: theme.palette.neutral[300] }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="column"
          textAlign="center"
          spacing={2}
        >
          <Typography variant="h2">{t(tokens.packages.eventCombine)}</Typography>
          <SubHeading>{t(tokens.packagesText.note)}</SubHeading>
        </Stack>
        <Stack alignItems="center">
          <Grid
            container
            maxWidth={{ md: 900, lg: 1100, xl: 'lg' }}
          >
            <Grid
              item
              sx={{ overflowX: 'auto' }}
            >
              <table
                style={{
                  borderCollapse: 'collapse',
                  marginTop: '2.5rem',
                }}
              >
                <tbody style={{ background: theme.palette.common.white }}>
                  <tr>
                    <td style={solo}> {'\u00A0'.repeat(30)}</td>
                    <TdSoloStyle>
                      <Box
                        textAlign="left"
                        pl={2}
                        sx={{ pt: { lg: 3, md: 1, sm: 2 } }}
                      >
                        <MUITypography
                          id="solo-package"
                          variant="h6"
                        >
                          {t(tokens.packages.soloPackage)}
                        </MUITypography>
                        <Box pt={1}>
                          <Typography
                            id="soloPackageText"
                            variant="body2"
                          >
                            <Span>{t(tokens.span.one)}</Span>
                            {t(tokens.packagesText.soloPackage)}
                            <Span>{t(tokens.span.your)}</Span>
                            {t(tokens.span.dataResult)}
                          </Typography>
                        </Box>
                      </Box>
                    </TdSoloStyle>
                    <TdPersonalStyle>
                      <Box
                        textAlign="left"
                        pl={2}
                        sx={{ pt: { lg: 3, md: 1, sm: 2 } }}
                      >
                        <TypographyPackage
                          id="personalPackageText"
                          variant="h6"
                        >
                          {t(tokens.packages.personalPackage)}
                        </TypographyPackage>
                        <Box pt={1}>
                          <Typography
                            id="personalPackageText"
                            variant="body2"
                          >
                            <Span>{t(tokens.span.all)}</Span>
                            {t(tokens.packagesText.personalPackage)}
                            <Span>{t(tokens.span.your)}</Span> {t(tokens.span.dataResult)}
                          </Typography>
                        </Box>
                      </Box>
                    </TdPersonalStyle>
                    <TdStyle>
                      <Box
                        textAlign="left"
                        pl={2}
                        sx={{ pt: { lg: 3, md: 1, sm: 2 } }}
                      >
                        <ComparePackage
                          id="personalPackageText"
                          variant="h6"
                        >
                          {t(tokens.packages.comparePackage)}
                        </ComparePackage>
                        <Box pt={1}>
                          <Typography
                            id="personalPackageText"
                            variant="body2"
                          >
                            <Span>{t(tokens.span.all)}</Span>
                            {t(tokens.packagesText.personalPackage)}
                            <Span>{t(tokens.span.all)}</Span> {t(tokens.span.dataResult)}
                            {t(tokens.packagesText.howYou)}
                          </Typography>
                        </Box>
                      </Box>
                    </TdStyle>
                  </tr>
                  <tr>
                    <td style={solo}>
                      <EventPackageFeature>{t(tokens.packages.shotSpeed)}</EventPackageFeature>
                    </td>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    {/* <td style={tdStyle}>
                <Tick />
              </td> */}
                  </tr>
                  <tr>
                    <td style={solo}>
                      <EventPackageFeature>{t(tokens.heading.verticalJump)}</EventPackageFeature>
                    </td>
                    <TdStyle>
                      <Cross />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    {/* <td style={tdStyle}>
                <Tick />
              </td> */}
                  </tr>
                  <tr>
                    <td style={solo}>
                      <EventPackageFeature>{t(tokens.heading.yardDash)}</EventPackageFeature>
                    </td>
                    <TdStyle>
                      <Cross />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                  </tr>
                  <tr>
                    <td style={solo}>
                      <EventPackageFeature>{t(tokens.packages.fiveTen)}</EventPackageFeature>
                    </td>
                    <TdStyle>
                      <Cross />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                    <TdStyle>
                      <Tick />
                    </TdStyle>
                  </tr>
                  <tr>
                    <td style={solo}></td>
                    <TdStyle>
                      <MainBox
                        mt={2}
                        mb={2}
                      >
                        <SoloPackageBox
                          pt={1}
                          pb={1}
                        >
                          <Typography
                            id="price"
                            variant="h6"
                            color="white"
                          >
                            $19
                          </Typography>
                        </SoloPackageBox>
                        <Stack
                          pt={2}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          direction="row"
                          color={blue.dark}
                        >
                          <EventPackageFeature>
                            {' '}
                            <Link
                              color={blue.dark}
                              href={'#'}
                              onClick={() => setOpenModalSolo(true)}
                            >
                              {t(tokens.packagesText.example)}
                            </Link>
                          </EventPackageFeature>
                          <ChevronRightIcon />
                        </Stack>
                      </MainBox>
                    </TdStyle>
                    <TdStyle>
                      <MainBox
                        mt={2}
                        mb={2}
                      >
                        <PerPackageBox
                          pt={1}
                          pb={1}
                        >
                          <Typography
                            id="price"
                            variant="h6"
                            color="white"
                          >
                            $49
                          </Typography>
                        </PerPackageBox>
                        <Stack
                          pt={2}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          direction="row"
                          color={blue.dark}
                        >
                          <EventPackageFeature>
                            {' '}
                            <Link
                              color={blue.dark}
                              href={'#'}
                              onClick={() => setOpenModalPersonal(true)}
                            >
                              {t(tokens.packagesText.example)}
                            </Link>
                          </EventPackageFeature>
                          <ChevronRightIcon />
                        </Stack>
                      </MainBox>
                    </TdStyle>
                    <TdStyle>
                      <MainBox
                        mt={2}
                        mb={2}
                      >
                        <ComparePackageBox
                          pt={1}
                          pb={1}
                        >
                          <Typography
                            id="price"
                            variant="h6"
                            color="white"
                          >
                            $79
                          </Typography>
                        </ComparePackageBox>
                        <Stack
                          pt={2}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          direction="row"
                          color={blue.dark}
                        >
                          <EventPackageFeature>
                            {' '}
                            <Link
                              color={blue.dark}
                              href={'#'}
                              onClick={() => setOpenModal(true)}
                            >
                              {t(tokens.packagesText.example)}
                            </Link>
                          </EventPackageFeature>
                          <ChevronRightIcon />
                        </Stack>
                      </MainBox>
                    </TdStyle>
                  </tr>
                </tbody>
              </table>
            </Grid>
          </Grid>
        </Stack>
      </Container>
      <Modal
        open={openModal}
        className="COMPARE"
        dialogTitle="COMPARE PACKAGE"
        handleClose={() => setOpenModal(false)}
        maxWidth="xl"
      >
        <Box>
          <Listing
            name="compare"
            headers={headers}
            rows={compareRows}
          />
        </Box>
      </Modal>
      <Modal
        open={openModalSolo}
        className="Solo Package"
        dialogTitle="Solo Package"
        handleClose={() => setOpenModalSolo(false)}
        maxWidth="xl"
      >
        <Box>
          <Listing
            name="Solo"
            headers={headers}
            rows={soloPackage}
          />
        </Box>
      </Modal>
      <Modal
        open={openModalPersonal}
        className="Personal Package"
        dialogTitle="Personal Package"
        handleClose={() => setOpenModalPersonal(false)}
        maxWidth="xl"
      >
        <Box>
          <Listing
            name="Personal"
            headers={headers}
            rows={personalPackage}
          />
        </Box>
      </Modal>
    </Box>
  );
};

export default Packages;
