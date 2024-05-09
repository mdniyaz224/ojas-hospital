import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Box, IconButton, TableBody as MUITableBody, TableCell, TableRow } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { ITEM_HEIGHT } from 'src/config/constants';
import { IContextMenuLinksProps, ITableHeader } from 'src/types/table';

interface CustomTableBodyProps {
  rowsData: any[];
  headCells: ITableHeader[];
}

const TableBody: React.FC<CustomTableBodyProps> = ({ rowsData, headCells }) => {
  const [anchorElMap, setAnchorElMap] = useState<{ [key: number]: HTMLElement | null }>({});
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, rowIndex: number) => {
    setAnchorElMap({
      ...anchorElMap,
      [rowIndex]: event.currentTarget,
    });
  };

  const handleClose = (rowIndex: number) => {
    setAnchorElMap({
      ...anchorElMap,
      [rowIndex]: null,
    });
  };

  const [clickedInd, setClickedInd] = React.useState<number | null>(null);
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, ind: number) => {
    handleMenuClick(event, ind);
    setClickedInd(ind);
  };

  const showTableBody = () => {
    return rowsData?.map((rows: any, rowIndex: number) => (
      <TableRow key={`table-row-${rowIndex}`}>
        {headCells.length &&
          headCells?.map((headCell: any, index: number) => {
            const cellValue = rows[headCell.id];
            const contextMenuLinks = rows.contextMenuLinks;
            return (
              <TableCell
                key={`${headCell.id}-${index}`}
                style={{ width: headCell.width }}
              >
                {headCell.id == 'contextMenuLinks' && contextMenuLinks?.length > 1 ? (
                  <>
                    {rows?.contextMenuLinks.length <= 2 ? (
                      <Box sx={{ display: 'flex' }}>
                        {rows?.contextMenuLinks.map(
                          (option: IContextMenuLinksProps, index: number) => (
                            <IconButton
                              key={option.title + 'key'}
                              id={`id-${index}_three-dots`}
                              sx={{ gap: '1rem' }}
                              onClick={() => {
                                option.handleClick();
                              }}
                            >
                              {option.icon ?? ''}
                            </IconButton>
                          )
                        )}
                      </Box>
                    ) : (
                      <>
                        <IconButton
                          aria-label="more"
                          key={`menu_${headCell.id}_three_dots`}
                          id={`menu_${headCell.id}_three_dots`}
                          aria-expanded={Boolean(anchorElMap[rowIndex])}
                          aria-controls={`menu-${rowIndex}`}
                          aria-haspopup="true"
                          onClick={(event) => handleMenuOpen(event, rowIndex)}
                        >
                          <MoreHorizIcon />
                        </IconButton>
                        <Menu
                          id="long-menu"
                          MenuListProps={{
                            'aria-labelledby': 'long-button',
                          }}
                          anchorEl={anchorElMap[rowIndex]}
                          open={Boolean(anchorElMap[rowIndex])}
                          onClose={() => handleClose(rowIndex)}
                          PaperProps={{
                            style: {
                              maxHeight: ITEM_HEIGHT * 4.5,
                              width: '20ch',
                            },
                          }}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          {rows?.contextMenuLinks.map(
                            (option: IContextMenuLinksProps, index: number) =>
                              rowIndex === clickedInd && (
                                <MenuItem
                                  key={option.title + 'key'}
                                  id={`id-${index}_three-dots`}
                                  onClick={() => {
                                    option.handleClick();
                                    handleClose(rowIndex);
                                  }}
                                  sx={{ gap: '1rem' }}
                                >
                                  {option.icon ?? ''}
                                  {option.title ?? '-'}
                                </MenuItem>
                              )
                          )}
                        </Menu>
                      </>
                    )}
                  </>
                ) : headCell.id == 'contextMenuLinks' && contextMenuLinks?.length == 1 ? (
                  contextMenuLinks.map((menuItem: IContextMenuLinksProps, index: number) => {
                    return (
                      menuItem.icon && (
                        <IconButton
                          key={menuItem.title + 'key'}
                          id={`id-${index}_three-dots`}
                          onClick={() => {
                            menuItem.handleClick();
                          }}
                          sx={{ gap: '1rem' }}
                        >
                          {menuItem.icon}
                        </IconButton>
                      )
                    );
                  })
                ) : (
                  <span>{cellValue ?? '-'}</span>
                )}
              </TableCell>
            );
          })}
      </TableRow>
    ));
  };

  const noDataRow = () => {
    return (
      <TableRow>
        <TableCell colSpan={headCells?.length}>
          <Typography
            id="no-data-found"
            align="center"
            variant="body2"
            sx={{ fontWeight: 500 }}
          >
            No Data Found
          </Typography>
        </TableCell>
      </TableRow>
    );
  };
  return <MUITableBody> {rowsData.length ? showTableBody() : noDataRow()} </MUITableBody>;
};

export default TableBody;
