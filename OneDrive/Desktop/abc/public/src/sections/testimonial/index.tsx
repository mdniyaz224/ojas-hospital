import { Box, Container, Divider } from '@mui/material';
import Typography from 'src/components/atoms/typography';
import { tokens } from 'src/locales/tokens';
import { t } from 'i18next';
import dynamic from 'next/dynamic';
import DrTestimonialCard from './drtestimonial';

const TestimonialCard = dynamic(() => import('src/sections/testimonial/testimonialCard'));

const Testimonials = () => {
  return (
    <Box
      py={4}
      sx={{
        background: '#F2F2F2',
      }}
    >
      <Container
        maxWidth="xl"
        sx={{ marginTop: '2rem' }}
      >
        <Box textAlign="center">
          <Typography
            variant="h2"
            id="heading"
          >
            {t(tokens.label.testimonials)}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Divider sx={{ width: '20%', backgroundColor: 'orange', height: '2px' }} />
        </Box>

        <Box pt={4}>
          <DrTestimonialCard />
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonials;
