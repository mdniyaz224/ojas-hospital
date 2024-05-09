import { Box, Container, Typography, styled } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import onlineProfile from 'public/assets/process/online-profile.webp';
import recruitData from 'public/assets/process/recruit-data.webp';
import analytics from 'public/assets/process/analytics.webp';
import choosePlan from 'public/assets/process/choose-plan.webp';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { grey, neutral } from 'src/theme/colors';
import { common } from '@mui/material/colors';
import { convertToCapitalizeCase } from 'src/utils/common';
import { createShadows } from 'src/theme/light/create-shadows';

const ImageContainer = styled(Box)(({ theme }) => ({
  background: common.white,
  padding: '25px',
  margin: '0 auto 22px',
  display: 'block',
  width: '180px',
  height: '155px',
  borderRadius: '5px',
  boxShadow: createShadows(),
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
const TextContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  float: 'left',
}));
const Analysis = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  position: 'relative',
  width: '100%',
}));
const ContentBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'center',

  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    height: '300px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    border: `1px dashed ${grey.dark}`,
    width: '115px',
    top: '28.8%', //this value this used in decimals because to align with the triangle icon.
    right: '-58px',
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      right: '-9px',
      width: '30px',
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      right: '0px',
      left: '0px',
      bottom: '0',
      top: 'unset',
      transform: 'rotate(-90deg)',
      textAlign: 'center',
      margin: '36px auto',
      width: '50px',
      position: 'absolute',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: 0,
    top: '27%',
    right: '-59px',
    borderTop: '6px solid transparent',
    borderBottom: '6px solid transparent',
    borderLeft: `10px dashed ${grey.dark}`,
    [theme.breakpoints.down(theme.breakpoints.values.lg)]: {
      right: '-37px',
      width: '25px',
      top: '23.4%', //this value this used in decimals because to align with the triangle icon.
    },
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      right: '0px',
      left: '0px',
      bottom: '0',
      top: 'unset',
      transform: 'rotate(90deg)',
      textAlign: 'center',
      margin: '0 auto',
    },
  },
}));

const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: neutral[300],
}));
const Process = () => {
  const { t } = useTranslation();
  return (
    <MainContainer pb={8}>
      <Container maxWidth="xl">
        <Box
          textAlign="center"
          py={8}
        >
          <Typography variant="h2">{convertToCapitalizeCase(t(tokens.process.heading))}</Typography>
        </Box>

        <ContentContainer>
          <ContentBox>
            <ImageContainer>
              <Image
                src={onlineProfile}
                alt="onlineData"
              />
            </ImageContainer>
            <TextContainer>
              <Typography variant="h6">{t(tokens.process.onlineProfile)}</Typography>
              <Typography variant="caption">{t(tokens.process.profileContent)}</Typography>
            </TextContainer>
          </ContentBox>

          <ContentBox>
            <ImageContainer>
              <Image
                src={recruitData}
                alt="onlineData"
              />
            </ImageContainer>
            <TextContainer>
              <Typography variant="h6">{t(tokens.process.provideData)}</Typography>
              <Typography variant="caption">{t(tokens.process.provideDataSubHeading)}</Typography>
            </TextContainer>
          </ContentBox>

          <ContentBox>
            <ImageContainer>
              <Image
                src={choosePlan}
                alt="onlineData"
              />
            </ImageContainer>
            <TextContainer>
              <Typography variant="h6">{t(tokens.process.choosePlan)}</Typography>
              <Typography variant="caption">{t(tokens.process.planSubheading)}</Typography>
            </TextContainer>
          </ContentBox>

          <Analysis>
            <ImageContainer>
              <Image
                src={analytics}
                alt="onlineData"
              />
            </ImageContainer>
            <TextContainer>
              <Typography variant="h6">{t(tokens.process.recruitAnalysis)}</Typography>
              <Typography variant="caption">{t(tokens.process.recruitAnalysisContent)}</Typography>
            </TextContainer>
          </Analysis>
        </ContentContainer>
      </Container>
    </MainContainer>
  );
};

export default Process;
