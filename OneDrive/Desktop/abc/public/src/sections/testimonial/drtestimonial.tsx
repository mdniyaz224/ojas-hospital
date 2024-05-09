import { Avatar, Box, Card, CardContent, Stack, styled } from '@mui/material';
import QuoteImg from 'public/assets/quote.svg';
import Typography from 'src/components/atoms/typography';
import { Carousel } from 'src/components/organisms/carousel';
import { grey } from 'src/theme/colors';

interface ITestimonialProperties {
  name: string;
  content: string;
  profilePicture: string;
}

const BoxStyle = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // position: 'absolute',
  // bottom: 10,
}));
const Avatars = styled(Avatar)(() => ({
  positions: 'absolute',
  top: 40,
  width: '6rem',
  height: '6rem',
  zIndex: 11,
}));
const UserName = styled(Typography)(() => ({
  fontFamily: 'Montserrat',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '1.5rem',
}));

const QuoteImageContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
}));
const tips = [
  {
    name: 'Boyd J. Eubanks',
    content: `“Lacrosse recruiting has so many questions and lots of unclear answers – am I going to be recruited by D1, D2, or D3 school and where within those do I really “Fit-In”?  LRData helped guide me and alleviated a lot of my stress.”     
     [STUDENT-ATHLETE QUOTE]`,
    profilePicture: 'testimonial/Boyd J. Eubanks.webp',
  },
  {
    name: 'Edward J. Pierce',
    content: `“Lax Recruit Data helped me focus on a range of colleges where I could potentially play and on which colleges were likely to actually recruit me to play lacrosse.” [STUDENT-ATHLETE QUOTE]`,
    profilePicture: 'testimonial/Edward J. Pierce.webp',
  },
  {
    name: 'Derek L. Keown',
    content: `“We thought our child had a great chance of being recruited by a high level D1 school until LRData showed us otherwise.  We didn’t crush hopes and dreams but we did reevaluate the schools on “the list” and changed how we spent our valuable time and money during the lacrosse recruiting process.”  [PARENT QUOTE]`,
    profilePicture: 'testimonial/Derek L. Keown.webp',
  },
  {
    name: 'Derek L.Neaon',
    content: `“We debated whether to try LRData but we were so glad we did – it really helped us to focus in on the schools in our range.”  [PARENT QUOTE]`,
    profilePicture: 'testimonial/Derek L. Keown.webp',
  },
  {
    name: 'Edward J. Pierce',
    content: `“Lax Recruit Data has been great for our club and club coaches who are asked to provide advice and guidance to parents and players on where kids “Fit-In” during the lacrosse recruiting process.”  [CLUB COACH QUOTE]`,
    profilePicture: 'testimonial/Edward J. Pierce.webp',
  },
  {
    name: 'Boyd J. Eubanks',
    content: `“Lax Recruit Data is an invaluable tool for parent, and student-athletes who have aspiration of playing college lacrosse at any level.”  [DATA ANALYST QUOTE]`,
    profilePicture: 'testimonial/Boyd J. Eubanks.webp',
  },
];
const DrTestimonialCard = () => {
  return (
    <Box mb={10}>
      <Carousel>
        {tips.map((item: ITestimonialProperties, index: number) => (
          <Box
            px={1}
            key={`${item.name}_${index}`}
            position="relative"
          >
            <BoxStyle>
              <Avatars
                alt={item.name}
                src={item.profilePicture}
              />
            </BoxStyle>
            <Card
              key={`${item.name}_${index}`}
              sx={{
                maxWidth: 500,
                minHeight: { lg: 426, sm: 490, md: 510 },
                maxHeight: 550,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              <CardContent>
                <Stack gap={1}>
                  <Box
                    mt={5}
                    textAlign="center"
                    sx={{ color: grey.light }}
                  >
                    <UserName
                      id="name"
                      variant="h6"
                    >
                      {item?.name}
                    </UserName>
                  </Box>
                  <Box
                    // px={2}
                    pt={2}
                    pb={5}
                    textAlign="center"
                    sx={{
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    <Typography
                      id="content"
                      variant="caption"
                    >
                      {item?.content}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default DrTestimonialCard;
