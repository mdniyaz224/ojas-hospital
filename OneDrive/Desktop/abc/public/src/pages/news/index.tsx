import { Box, Container, Divider, Stack, styled, Typography } from '@mui/material';
import { t } from 'i18next';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { Seo } from 'src/components/seo';
import { useSearchParams } from 'src/hooks/use-search-params';
import PublicLayout from 'src/layouts/public';
import { tokens } from 'src/locales/tokens';
import { grey } from 'src/theme/colors';
import { convertToCapitalizeCase } from 'src/utils/common';

const NewsCard = dynamic(() => import('src/sections/news'));
const NewsNav = dynamic(() => import('src/sections/news/news-nav'));

const News: NextPage = () => {
  const query = useSearchParams();
  const id = query.get('newsCategory');
  const [newsCategoryId, setNewsCategoryId] = useState<number>(0);
  useEffect(() => {
    if (id) {
      setNewsCategoryId(parseInt(id!));
    } else {
      setNewsCategoryId(0);
    }
  }, [id]);

  return (
    <>
      <Seo title="News" />
      <NewsNav
        setNewsCategoryId={setNewsCategoryId}
        newsCategoryId={newsCategoryId}
      />
      <Container maxWidth="xl">
        <Stack
          spacing={4}
          pt={3}
        >
          <Box py={1.5}>
            <Typography
              variant="h2"
              color={grey.light}
            >
              {convertToCapitalizeCase(t(tokens.heading.recentArticle))}
            </Typography>
          </Box>
          <StyledDivider />
          <Box>
            <NewsCard newsCategoryId={newsCategoryId} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default News;

News.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

const StyledDivider = styled(Divider)({
  border: `1px solid ${grey.darkest}`, // Assuming grey.darkest refers to black color
});
