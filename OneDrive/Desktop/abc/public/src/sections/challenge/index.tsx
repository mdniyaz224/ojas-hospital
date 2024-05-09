import { Box, Typography, styled, Stack, Grid, Divider, Container } from '@mui/material';
import React from 'react';
import dynamic from 'next/dynamic';

import { useTranslation } from 'react-i18next';
import { tokens } from 'src/locales/tokens';
import TestimonialCard from '../testimonial/testimonialCard';

const Challenges = () => {
  const { t } = useTranslation();
  return (
    <Box
      py={5}
      mt={8}
    >
      <Container>
        <Box textAlign="center">
          <Typography variant="h2">BEST HOSPITAL IN TOWN</Typography>
          <Box
            mb={8}
            mt={2}
          >
            <Typography variant="caption">When It Comes to Health Care</Typography>
          </Box>
        </Box>
        <Divider orientation="vertical" />
        <Box>
          <TestimonialCard />
        </Box>
      </Container>
    </Box>
  );
};

export default Challenges;
