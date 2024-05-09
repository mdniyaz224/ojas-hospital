import { Box, Container, Stack } from '@mui/material';
import { t } from 'i18next';
import { NextPage } from 'next';
import Tabs from 'src/components/atoms/tabs';
import Typography from 'src/components/atoms/typography';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import { tokens } from 'src/locales/tokens';
import dynamic from 'next/dynamic';
import { convertToCapitalizeCase } from 'src/utils/common';

const ClubRanking = dynamic(() => import('src/sections/ranking/club'));
const CollegeRanking = dynamic(() => import('src/sections/ranking/college'));
const HighSchoolRanking = dynamic(() => import('src/sections/ranking/high-school'));

const tabOptions = [
  { label: t(tokens.ranking.college), value: '1', children: <CollegeRanking /> },
  {
    label: t(tokens.ranking.club),
    value: '2',
    children: <ClubRanking />,
  },
  {
    label: t(tokens.ranking.highSchool),
    value: '3',
    children: <HighSchoolRanking />,
  },
];

const Ranking: NextPage = () => {
  return (
    <>
      <Seo title="Ranking" />
      <Container maxWidth="xl">
        <Stack
          py={8}
          spacing={4}
        >
          <Box>
            <Typography
              variant="h1"
              id="ranking-heading"
            >
              {convertToCapitalizeCase(t(tokens.ranking.heading))}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="caption"
              id="ranking-sub-heading"
            >
              {t(tokens.ranking.subHeading)}
            </Typography>
          </Box>
          <Box>
            <Tabs options={tabOptions} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Ranking;
Ranking.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
