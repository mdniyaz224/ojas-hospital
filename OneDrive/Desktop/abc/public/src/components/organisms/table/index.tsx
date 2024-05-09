import { Box, Stack, TableContainer, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import { ReactNode, memo } from 'react';
import Pagination from 'src/components/organisms/table/pagination';
import TableBody from 'src/components/organisms/table/table-body';
import TableHead from 'src/components/organisms/table/table-head';

interface ITableProps {
  name: string;
  onPageChange: (page: number) => void;
  pageNumber: number;
  pageCount: number;
  rows: Array<any>;
  totalCount: number;
  headers: any;
  filters?: () => ReactNode;
  isFilterEnabled?: boolean;
}

const Listing = (props: ITableProps) => {
  const theme = useTheme();
  const {
    pageCount,
    totalCount,
    onPageChange,
    headers,
    rows,
    pageNumber,
    filters,
    isFilterEnabled = true,
  } = props;

  return (
    <Stack
      direction={'column'}
      flexWrap="wrap"
      spacing={3}
    >
      {isFilterEnabled && filters && filters()}
      <TableContainer>
        <Box
          sx={{
            background: theme.palette.neutral[300],
            paddingX: 4,
            paddingBottom: 3,
            paddingTop: 2,
            borderRadius: 1,
          }}
        >
          <Table>
            <TableHead headCells={headers} />
            <TableBody
              rowsData={rows}
              headCells={headers}
            />
          </Table>
        </Box>
        <Pagination
          totalCount={totalCount}
          totalRows={pageCount}
          size="medium"
          page={pageNumber}
          onPageChange={onPageChange}
          entriesTotalCount={pageCount}
        />
      </TableContainer>
    </Stack>
  );
};

export default memo(Listing);
