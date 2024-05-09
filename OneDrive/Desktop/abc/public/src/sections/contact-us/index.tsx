import { Box, Card, CardContent, Container, Divider, Grid, Stack, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('src/sections/contact-us/contact-form'));
const ContactDetails = dynamic(() => import('src/sections/contact-us/contactdetails'));

const GridDivider = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(theme.breakpoints.values.md)]: {
    display: 'none',
  },
}));

const ContactPage = () => {
  return (
    <Box pb={5}>
      <Container maxWidth="lg">
        <Card sx={{ mt: 6, mb: 4, pt: 3, pb: 2 }}>
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
              >
                <ContactForm />
              </Grid>
              <GridDivider
                item
                lg={1}
              >
                <Stack
                  height="100%"
                  alignItems="center"
                  py={8}
                >
                  <Divider orientation="vertical" />
                </Stack>
              </GridDivider>
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                lg={5}
              >
                <ContactDetails />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default ContactPage;
