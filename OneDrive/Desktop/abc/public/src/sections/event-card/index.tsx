import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { t } from 'i18next';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'src/config/constants';
import { tokens } from 'src/locales/tokens';
import { rootReducersState } from 'src/store/reducers';
import EventCardSkelton from './event-card-skelton';
import dynamic from 'next/dynamic'; // Import the dummy data for doctors

const doctors = [
  {
    name: 'Dr. Veranda Tanumihardja',
    specialization: 'Pulmonary',
    bio: 'Veranda was born and raised in Jakarta, Indonesia. He graduated from the University of...',
  },
  {
    name: 'Dr. Jane Smith',
    specialization: 'Dermatology',
    bio: 'Jane Smith completed her medical degree at Harvard University...',
  },
  {
    name: 'Dr. Michael Johnson',
    specialization: 'Pediatrics',
    bio: 'Michael Johnson has been practicing pediatrics for over 15 years. He graduated...',
  },
  {
    name: 'Dr. Emily Chen',
    specialization: 'Neurology',
    bio: 'Emily Chen specializes in neurology and has published several research papers in the field...',
  },
];

const renderSkeleton = (count: number) => {
  let skeletons = [];
  for (let i = 0; i < count; i++) {
    skeletons.push(
      <Fragment key={i}>
        <EventCardSkelton />
      </Fragment>
    );
  }
  return skeletons;
};

const SubHeading = styled('p')({
  fontFamily: 'Montserrat',
  fontSize: '1.5rem',
  fontWeight: 400,
  lineHeight: '2.188rem',
});

const CardContainer = styled(Box)({
  display: 'flex',
  height: '100%',
});

const EventTestimonials = (props: any) => {
  // Use useSelector to access the doctors data from the Redux store
  const doctorsData = doctors;

  return (
    <Box
      py={6}
      mb={6}
      mt={5}
    >
      <Container maxWidth="xl">
        <Stack textAlign="center">
          <Typography
            variant="h2"
            id="heading"
          >
            OUR DOCTORS
          </Typography>
          <SubHeading id="subheading">
            Our doctors are specialized in their field and have more than 10 years of experiences.
          </SubHeading>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Divider sx={{ width: '20%', backgroundColor: 'orange', height: '2px' }} />
        </Box>

        <Box mt={12}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
          >
            {doctorsData.length
              ? doctorsData.map((doctor, index) => (
                  <Grid
                    item
                    key={`${doctor.name}_${index}`}
                    xs={12}
                    md={3}
                  >
                    <CardContainer>
                      <Card>
                        <CardContent>
                          <img
                            src=""
                            alt=""
                          />
                        </CardContent>
                        <Box
                          textAlign="center"
                          mt={1}
                        >
                          <Box>
                            <Typography variant="h6">{doctor.name}</Typography>
                          </Box>
                          <Box>
                            <Typography variant="body2">{doctor.specialization}</Typography>
                          </Box>
                          <Box
                            my={2}
                            px={3}
                          >
                            <Typography variant="body1">{doctor.bio}</Typography>
                          </Box>
                        </Box>
                      </Card>
                    </CardContainer>
                  </Grid>
                ))
              : renderSkeleton(3)}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default EventTestimonials;
