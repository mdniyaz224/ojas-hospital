import { Box, Grid } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFilter } from 'src/hooks/use-filter';
import useScroll from 'src/hooks/use-scroll';
import Types from 'src/store/constants/news';
import { rootReducersState } from 'src/store/reducers';
import { INewsRecord } from 'src/types/news';
import { removeEmptyKeys } from 'src/utils/common';

const BlogCard = dynamic(() => import('src/sections/news/blog-card'));

const NewsCard = (props: { newsCategoryId: number }) => {
  const { newsCategoryId } = props;
  const dispatch = useDispatch();
  const { newsRecords, newRecordsTimeStamp, newsTotalCount } = useSelector(
    (state: rootReducersState) => state?.news
  );
  const { filterData, handlePageChange } = useFilter();
  const { page, rowsPerPage } = filterData ?? {};
  const [data, setData] = useState<INewsRecord[]>(newsRecords ?? []);
  const delay = 100;
  const handleScrollDependencies = [page, newsTotalCount];
  useEffect(() => {
    newsRecords?.length && setData([...data, ...newsRecords]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newRecordsTimeStamp]);

  useEffect(() => {
    const news = async () => {
      let data = {
        page: page,
        pageSize: rowsPerPage,
        exactMatch: {
          newsCategoryId: newsCategoryId === 0 ? '' : newsCategoryId,
        },
      };
      const modifiedData = await removeEmptyKeys(data);
      dispatch({
        type: Types.GET_NEWS_LIST_REQUEST,
        payload: {
          data: { ...modifiedData },
        },
      });
    };
    news();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, newsCategoryId]);

  const paginationOptions = {
    thresholdPage: Math.ceil(newsTotalCount / rowsPerPage),
    page,
    handlePage: handlePageChange,
  };
  useScroll(handleScrollDependencies, 500, delay, paginationOptions);

  useEffect(() => {
    setData([]);
    handlePageChange(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsCategoryId]);

  return (
    <Box mb={5}>
      <Grid
        container
        spacing={4}
      >
        {data.map((blog: INewsRecord, index: number) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={12}
            md={6}
          >
            <BlogCard
              title={blog.title}
              date={blog.createdAt}
              image={blog.imageUrl}
              description={blog.description}
              uuid={blog.uuid}
              newsCategory={newsCategoryId}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsCard;
