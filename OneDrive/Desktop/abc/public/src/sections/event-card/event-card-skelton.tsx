import { Box, Skeleton, Stack } from '@mui/material';
import React from 'react';

const EventCardSkelton = () => {
  return (
    <Box sx={{ width: 300 }}>
      <Stack spacing={1}>
        <Skeleton
          variant="rectangular"
          width={210}
          height={60}
        />
        <Skeleton
          variant="text"
          width={150}
        />
        <Skeleton
          variant="rounded"
          width={210}
          height={60}
        />
      </Stack>
    </Box>
  );
};

export default EventCardSkelton;
