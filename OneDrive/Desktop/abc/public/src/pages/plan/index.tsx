import { NextPage } from 'next';
import React from 'react';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import dynamic from 'next/dynamic';

const PlanBanner = dynamic(() => import('src/sections/banner/plan-banner'));
const Package = dynamic(() => import('src/sections/package'));
const Process = dynamic(() => import('src/sections/process'));

const Plan: NextPage = () => {
  return (
    <>
      <Seo title="plan" />
      <PlanBanner />
      <Process />
      <Package />
    </>
  );
};

export default Plan;

Plan.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
