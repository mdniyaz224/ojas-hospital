import { Stack } from '@mui/material';
import type { NextPage } from 'next';

import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import Home from 'src/sections/doctor';

const Page: NextPage = () => {
  return (
    <>
      <Seo title="Home" />
      <Home />
    </>
  );
};

Page.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

export default Page;
