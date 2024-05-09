import { Box, Grid, Typography, styled, Container, Stack, Divider } from '@mui/material';
import React from 'react';
import freeImg from 'public/assets/plan/free-plan.webp';
import recruitImg from 'public/assets/plan/recruit-plan.webp';
import commitImg from 'public/assets/plan/committed-plan.webp';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import { pink, grey, green, yellow } from 'src/theme/colors';
import PlanCard from 'src/components/organisms/plan-card';
import { convertToCapitalizeCase } from 'src/utils/common';

const Package = () => {
  //FIXME: item is static of the card ,when api will be integrate will be dynamic
  const { t } = useTranslation();
  return (
    <Container
      maxWidth="xl"
      sx={{ marginY: 5, marginBottom: 10 }}
    >
      <Box
        textAlign="center"
        color={grey.light}
      >
        <Typography variant="h2">{convertToCapitalizeCase(t(tokens.heading.package))}</Typography>
      </Box>
      <Grid
        container
        spacing={5}
        mt={2}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <PlanCard
            items={[
              'UNLIMITED Access to ALL lacrosse commitments',
              'UNLIMITED Access to lacrosse commitment FUN FACTS',
              'LIMITED RECRUITING PREDICTION for ONE school',
              'LIMITED “FIT IN” Range: Tiers 1-4; 5-8',
            ]}
            label={t(tokens.label.startedForFree)}
            price="$0"
            title={convertToCapitalizeCase(t(tokens.subHeading.free))}
            priceBgColor={green.main}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
        >
          <Box
            height="100%"
            sx={{ float: { sm: 'inherit', lg: 'inline-end' } }}
          >
            <Image
              src={freeImg}
              alt="data-img"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 10 }} />
      <Grid
        container
        spacing={5}
        mt={2}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <PlanCard
            items={[
              'UNLIMITED Access to ALL lacrosse commitments',
              'UNLIMITED Access to lacrosse commitment FUN FACTS',
              'LIMITED RECRUITING PREDICTION for FIVE schools (free school, plus 4 more)',
              'LIMITED “FIT IN” Range: Tiers 1-2; 3-4; 5-6; 7-8',
            ]}
            label={t(tokens.label.getStarted)}
            price="$49"
            title={convertToCapitalizeCase(t(tokens.subHeading.recruit))}
            priceBgColor={yellow.main}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
        >
          <Box
            height="100%"
            sx={{ float: { sm: 'inherit', lg: 'inline-end' } }}
          >
            <Image
              src={recruitImg}
              alt="data-img"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 10 }} />
      <Grid
        container
        spacing={5}
        mt={2}
      >
        <Grid
          item
          xs={12}
          md={4}
        >
          <PlanCard
            items={[
              'UNLIMITED Access to ALL lacrosse commitments',
              'UNLIMITED Access to lacrosse commitment FUN FACTS',
              'LIMITED RECRUITING PREDICTION for TEN schools (free school, plus nine more)',
              'LIMITED “FIT IN” Range: Tiers 1,2,3,4,5,6,7,8',
            ]}
            label={t(tokens.label.getStarted)}
            price="$99"
            title={convertToCapitalizeCase(t(tokens.subHeading.committed))}
            priceBgColor={pink.main}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
        >
          <Box
            height="100%"
            sx={{ float: { sm: 'inherit', lg: 'inline-end' } }}
          >
            <Image
              src={commitImg}
              alt="data-img"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Package;
