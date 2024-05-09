import { Box, IconButton, SelectChangeEvent, Stack, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import GreaterThanSquare from 'public/assets/left.svg';
import LessThanSquare from 'public/assets/right.svg';
import { memo } from 'react';

interface IUserData {
  totalCount?: number;
  onPageChange: (page: number) => void;
  entriesTotalCount?: number;
  page: number;
  onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChangeHandler?: (event: SelectChangeEvent) => void;
  size?: string;
  totalRows: number;
}

const AtomPagination = (props: IUserData) => {
  const { onPageChange, page, totalCount, totalRows } = props;
  const totalPages = Math.ceil(totalCount! / totalRows);
  const handleNext = () => {
    if (page < totalPages) {
      onPageChange(page + 1);
    }
  };
  const handlePrev = () => {
    if (page !== 1) {
      onPageChange(page - 1);
    }
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box py={2}>
        <Typography
          variant="body2"
          id="rows-label"
        >
          Showing {(page - 1) * totalRows + 1} to{' '}
          {page === totalPages ? totalCount : page * totalRows} of {totalCount} entries
        </Typography>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
      >
        <IconButton
          disableRipple
          onClick={handlePrev}
        >
          <GreaterThanSquare />
        </IconButton>
        <Typography
          variant="boldBody1"
          id="rows-label"
        >
          Page {page} of {totalPages}
        </Typography>
        <IconButton
          disableRipple
          onClick={handleNext}
        >
          <LessThanSquare />
        </IconButton>
      </Stack>
    </Box>
  );
};

export default memo(AtomPagination);
