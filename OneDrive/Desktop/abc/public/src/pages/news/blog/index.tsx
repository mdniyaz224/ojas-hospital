import { Box, Container, Stack, Typography, styled, useTheme } from '@mui/material';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { NextPageContext } from 'next/types';
import Calendar from 'public/assets/calendar.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Seo } from 'src/components/seo';
import PublicLayout from 'src/layouts/public';
import Types from 'src/store/constants/news';
import { rootReducersState } from 'src/store/reducers';
import { black, grey } from 'src/theme/colors';
import { convertToCapitalizeCase, handleEmptyValue } from 'src/utils/common';
import { DateFormats, splitDateTime } from 'src/utils/date-locale';

const NewsNav = dynamic(() => import('src/sections/news/news-nav'));

const Article: NextPage = () => {
  const query = useSearchParams();
  const dispatch = useDispatch();
  const id = query.get('newsCategory');
  const uuid = query.get('id');
  const newsBlog = useSelector((state: rootReducersState) => state?.news?.BlogDetails);
  const { title, description, content, createdAt, imageUrl } = newsBlog;
  const theme = useTheme();
  useEffect(() => {
    dispatch({
      type: Types.GET_NEWS_BLOG_REQUEST,
      payload: {
        data: uuid,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Seo title="Article" />
      <NewsNav newsCategoryId={parseInt(id!)} />
      <Container maxWidth="xl">
        <Box mt={4}>
          <Typography
            variant="lightH2"
            color={grey.light}
          >
            {convertToCapitalizeCase(title)}
          </Typography>
          <Box mt={2}>
            <Typography
              variant="caption"
              color={grey.light}
            >
              {handleEmptyValue(description)}
            </Typography>
          </Box>
          <Box>
            <Stack
              direction="row"
              mt={1.5}
              spacing={1}
              color={black.dark}
            >
              <Calendar />
              <Box pb={2}>
                <Typography
                  variant="body1"
                  color={black.dark}
                >
                  {splitDateTime(createdAt, DateFormats.moreReadable)?.date}
                </Typography>
              </Box>
            </Stack>
          </Box>
          <ImageBox
            sx={{
              border: `2px solid ${theme.palette.neutral[200]}
              `,
            }}
          >
            <Image
              src={imageUrl}
              alt="data-img"
              sizes="100vw"
              fill
              style={{
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
          </ImageBox>
          <Box
            mt={4}
            mb={8}
          >
            <Typography
              variant="caption"
              color={black.dark}
            >
              {handleEmptyValue(content)}
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Article;

Article.getLayout = (page) => <PublicLayout>{page}</PublicLayout>;

const ImageBox = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '27.5rem',
  borderRadius: '5px',
});

export const getServerSideProps = async (context: NextPageContext) => {
  {
    const { query } = context;
    return { props: { query } };
  }
};
