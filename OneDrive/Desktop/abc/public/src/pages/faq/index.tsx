import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';

const FaqList = dynamic(() => import('src/sections/faq'));

const Faq: NextPage = () => {
  return (
    <>
      <Seo title="FAQ" />
      <FaqList />
    </>
  );
};

export default Faq;

Faq.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
