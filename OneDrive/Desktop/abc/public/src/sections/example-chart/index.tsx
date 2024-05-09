import { Box, Stack, TableContainer, useTheme } from '@mui/material';
import Table from '@mui/material/Table';
import { memo } from 'react';
import TableBody from 'src/components/organisms/table/table-body';
import TableHead from 'src/components/organisms/table/table-head';

interface ITableProps {
  name: string;
  rows: Array<any>;
  headers: any;
}

const Listing = (props: ITableProps) => {
  const theme = useTheme();
  const { headers, rows } = props;

  return (
    <Stack
      direction={'column'}
      flexWrap="wrap"
      spacing={3}
    >
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
      </TableContainer>
    </Stack>
  );
};

export default memo(Listing);
