import { Stack } from '@mui/material';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import EventTestimonials from 'src/sections/event-card';
import RecruitData from 'src/sections/laxRecruitData';

const HomeBanner = dynamic(() => import('src/sections/banner/home'));
const Challenges = dynamic(() => import('src/sections/challenge'));
const Testimonials = dynamic(() => import('src/sections/testimonial'));

const Home: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Stack>
        <HomeBanner />
        <Challenges />
        <EventTestimonials />
        <Testimonials />
        <EventTestimonials />
        <EventTestimonials />
        <RecruitData />
        {/* <Solution />
        <Testimonials /> */}
      </Stack>
    </>
  );
};

Home.getLayout = (Home) => <PublicLayout>{Home}</PublicLayout>;

export default Home;
