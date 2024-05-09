import {
  TableCell,
  TableHead as MUITableHead,
  TableRow,
  TableSortLabel,
  useTheme,
  TableContainer,
} from '@mui/material';
import { ReactNode, memo, useState } from 'react';
// import { ITableHeader } from 'src/types/table';

interface IHeadCells {
  headCells: any[];
  // setSortData: (sort: SortOptions) => void;
}

const TableHead = (props: IHeadCells) => {
  const { headCells } = props;
  const theme = useTheme();
  const [sortDirection, setSortDirection] = useState<string>('asc');

  // const handleSortDirection = (data: string) => {
  //   let sortType = sortDirection === SortDirection.Desc ? SortDirection.Asc : SortDirection.Desc;
  //   setSortDirection(sortType);
  //   setSortData({ sortOrder: sortDirection, sortBy: data });
  // };

  return (
    <MUITableHead
    // sx={{ background: theme.palette.primary.main }}
    >
      <TableRow>
        {headCells?.map((headCell: any): ReactNode => {
          return !headCell.isSortable === false ? (
            <TableCell key={headCell.id}>
              <TableSortLabel
              // direction={
              //   sortDirection === SortDirection.Desc ? SortDirection.Desc : SortDirection.Asc
              // }
              // onClick={() => handleSortDirection(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            </TableCell>
          ) : (
            <TableCell key={headCell.id}>{headCell.label}</TableCell>
          );
        })}
      </TableRow>
    </MUITableHead>
  );
};

export default memo(TableHead);
