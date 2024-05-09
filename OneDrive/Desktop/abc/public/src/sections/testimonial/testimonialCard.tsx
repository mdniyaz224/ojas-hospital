import { Avatar, Card, CardContent, Grid, styled, Typography } from '@mui/material';
import QuoteImg from 'public/assets/quote.svg';
import { grey } from 'src/theme/colors';

interface ITestimonialProperties {
  name: string;
  content: string;
  profilePicture: string;
  quorts: string;
}

const Avatars = styled(Avatar)(() => ({
  width: '6rem',
  height: '6rem',
}));

const UserName = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
}));

const QuoteImageContainer = styled(Grid)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
}));

const TestimonialCard = () => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
    >
      {tips.map((item: ITestimonialProperties, index: number) => (
        <Grid
          item
          key={`${item.name}_${index}`}
          md={4} // Adjusted grid breakpoint
        >
          <Card
            sx={{
              // maxWidth: 200,
              minHeight: { lg: 426, sm: 490, md: 510 },
              maxHeight: 550,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Grid
              container
              direction="column"
              alignItems="center"
            >
              <Grid
                item
                pt={3}
              >
                <Avatars
                  alt={item.name}
                  src={item.profilePicture}
                />
              </Grid>
              <Grid item>
                <CardContent>
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{ color: grey.light, mt: 2 }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mt: 2,
                      px: 2,
                      pb: 5,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {item.content}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TestimonialCard;

const tips = [
  {
    name: 'Boyd J. Eubanks',
    content: `“Lacrosse recruiting has so many questions and lots of unclear answers – am I going to be recruited by D1, D2, or D3 school and where within those do I really “Fit-In”?  LRData helped guide me and alleviated a lot of my stress.”     
    `,
    profilePicture: 'testimonial/Boyd J. Eubanks.webp',
    quorts: '[STUDENT-ATHLETE QUOTE]',
  },
  {
    name: 'Edward J. Pierce',
    content: `“Lax Recruit Data helped me focus on a range of colleges where I could potentially play and on which colleges were likely to actually recruit me to play lacrosse.”`,
    profilePicture: 'testimonial/Edward J. Pierce.webp',
    quorts: ' [STUDENT-ATHLETE QUOTE]',
  },
  {
    name: 'Derek L. Keown',
    content: `“We thought our child had a great chance of being recruited by a high level D1 school until LRData showed us otherwise.  We didn’t crush hopes and dreams but we did reevaluate the schools on “the list” and changed how we spent our.”`,
    profilePicture: 'testimonial/Derek L. Keown.webp',
    quorts: '[PARENT QUOTE]',
  },
  {
    name: 'Derek L.Neaon',
    content: `“We debated whether to try LRData but we were so glad we did – it really helped us to focus in on the schools in our range.”`,
    profilePicture: 'testimonial/Derek L. Keown.webp',
    quorts: ' [PARENT QUOTE]',
  },
  {
    name: 'Edward J. Pierce',
    content: `“Lax Recruit Data has been great for our club and club coaches who are asked to provide advice and guidance to parents and players on where kids “Fit-In” during the lacrosse recruiting process.”`,
    profilePicture: 'testimonial/Edward J. Pierce.webp',
    quorts: '[CLUB COACH QUOTE]',
  },
  {
    name: 'Boyd J. Eubanks',
    content: `“Lax Recruit Data is an invaluable tool for parent, and student-athletes who have aspiration of playing college lacrosse at any level.” `,
    profilePicture: 'testimonial/Boyd J. Eubanks.webp',
    quorts: ' [DATA ANALYST QUOTE]',
  },
];
