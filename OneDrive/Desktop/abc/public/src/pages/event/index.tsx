import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';

const EventBanner = dynamic(() => import('src/sections/banner/event-banner'));
const RecruitCard = dynamic(() => import('src/sections/collectData'));
const Packages = dynamic(() => import('src/sections/combinePackages'));
const EventTestimonials = dynamic(() => import('src/sections/event-card'));
const RecruitData = dynamic(() => import('src/sections/laxRecruitData'));

const Event: NextPage = () => {
  return (
    <>
      <Seo title="Event" />
      <EventBanner />
      <EventTestimonials />
      <RecruitCard />
      <Packages />
      <RecruitData />
    </>
  );
};

export default Event;

Event.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
