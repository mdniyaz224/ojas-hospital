import { Box } from '@mui/material';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import PublicLayout from 'src/layouts/public';

const ContactBanner = dynamic(() => import('src/sections/banner/contact-banner'));
const ContactPage = dynamic(() => import('src/sections/contact-us'));

const ContactUs: NextPage = () => {
  return (
    <Box>
      <ContactBanner />
      <ContactPage />
    </Box>
  );
};

export default ContactUs;

ContactUs.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
