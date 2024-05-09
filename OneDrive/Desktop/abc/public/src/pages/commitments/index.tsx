import { Box, Container, Stack } from '@mui/material';
import { t } from 'i18next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Typography from 'src/components/atoms/typography';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import { tokens } from 'src/locales/tokens';
import { convertToCapitalizeCase } from 'src/utils/common';

const Commitment = dynamic(() => import('src/sections/commitment'));
const CampClinic = dynamic(() => import('src/sections/commitment/camp-clinic'));

const CommitmentCamp: NextPage = () => {
  return (
    <>
      <Seo title="Commitments" />
      <Container maxWidth="xl">
        <Stack
          pt={5}
          pb={8}
          spacing={4}
        >
          <Box>
            <Typography
              variant="h1"
              id="commitmentCamp-heading"
            >
              {convertToCapitalizeCase(t(tokens.commitmentCamp.heading))}
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="caption"
              id="commitmentCamp-sub-heading"
            >
              {t(tokens.commitmentCamp.subHeading)}
            </Typography>
          </Box>
          <Box>
            <Commitment />
          </Box>
          <Box>
            <CampClinic />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default CommitmentCamp;
CommitmentCamp.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;
