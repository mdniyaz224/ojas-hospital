import { Box, Button, Container, Typography, styled } from '@mui/material';
import { t } from 'i18next';
import { tokens } from 'src/locales/tokens';

const HomeBannerWrapper = styled(Box)(() => ({
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '100% 100%',
  backgroundImage: 'url("/imag1.jpg")',
  display: 'flex',
  alignItems: 'center',
  height: '80vh',
  width: '100%',
}));

const HomeBanner = () => {
  return (
    <HomeBannerWrapper>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h1"
            color="black"
            textAlign="center"
          >
            Welcome to Our Hospital
          </Typography>
          <Box
            // mt={5}
            px={20}
            py={5}
            textAlign="center"
          >
            <Typography
              variant="caption"
              color="black"
            >
              Providing compassionate care for your health needs.
            </Typography>
          </Box>
          <Box
            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            mx={5}
          >
            <Button
              variant="contained"
              color="primary"
            >
              Book Appointment
            </Button>
          </Box>
        </Box>
      </Container>
    </HomeBannerWrapper>
  );
};

export default HomeBanner;
