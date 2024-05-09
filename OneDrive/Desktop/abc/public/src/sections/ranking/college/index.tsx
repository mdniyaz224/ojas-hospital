import { Box, SelectChangeEvent, Stack } from '@mui/material';
import { t } from 'i18next';
import { NextPage } from 'next';
import { ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import Button from 'src/components/atoms/button';
import Checkbox from 'src/components/atoms/checkbox';
import Select from 'src/components/atoms/select';
import Typography from 'src/components/atoms/typography';
import Listing from 'src/components/organisms/table';
import { IFilterProperties, useFilter } from 'src/hooks/use-filter';
import { tokens } from 'src/locales/tokens';
import { rootReducersState } from 'src/store/reducers';
import { ICollegeRankingListProperties } from 'src/store/slicers/ranking';
import { Conference, paginationOptions } from 'src/utils/table';

interface IFilterFields {
  filterData: IFilterProperties;
  handleSelectChange: (event: SelectChangeEvent) => void;
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleReset: () => void;
}

const prepareHeaders = () => {
  return [
    {
      id: 'rank',
      label: 'Rank',
      isSortable: false,
    },
    {
      id: 'name',
      label: 'Name',
      isSortable: false,
    },
    {
      id: 'state',
      label: 'State',
      isSortable: false,
    },
    {
      id: 'conference',
      label: 'Conference',
      isSortable: false,
    },
  ];
};

const CollegeRanking: NextPage = () => {
  const filterProperties = useFilter();
  const { handlePageChange, filterData } = filterProperties ?? {};
  const { page, rowsPerPage } = filterData ?? {};
  const { collegeRankingList, totalCount } = useSelector(
    (state: rootReducersState) => state.ranking
  );

  const prepareRows = (data: Array<ICollegeRankingListProperties>) => {
    //FIXME : will fix any in future
    return data?.map((item: any, index: number) => {
      const { name, state, conference } = item;
      const contextMenuLinks: any[] = [];
      return {
        rank: index + 1,
        name,
        state,
        conference,
        contextMenuLinks,
      };
    });
  };

  return (
    <Box>
      <Listing
        name="ranking"
        onPageChange={handlePageChange}
        pageNumber={page}
        pageCount={rowsPerPage}
        rows={prepareRows(collegeRankingList ?? [])}
        totalCount={totalCount}
        headers={prepareHeaders()}
        filters={() => FilterFields(filterProperties)}
      />
    </Box>
  );
};

export default CollegeRanking;

const FilterFields = (props: IFilterFields) => {
  const { handleSelectChange, handleCheckboxChange, filterData, handleReset } = props;
  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      alignItems={{ sm: 'baseline', lg: 'center' }}
      justifyContent="space-between"
      gap={{ sm: 2, lg: 7 }}
    >
      <Box width={{ sm: '100%', lg: 'inherit' }}>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="caption"
            id="rows-label"
          >
            {t(tokens.table.show)}
          </Typography>
          <Select
            options={paginationOptions}
            value={filterData.rowsPerPage as unknown as string}
            name="rowsPerPage"
            onChangeHandler={handleSelectChange}
            id="rowsPerPage"
          />
          <Typography
            variant="caption"
            id="rows-label"
          >
            {t(tokens.table.entries)}
          </Typography>
        </Stack>
      </Box>

      <Stack
        direction="row"
        alignItems="center"
        columnGap={{ sm: 2, lg: 2 }}
        rowGap={{ sm: 0, md: 2 }}
        justifyContent={{ lg: 'end' }}
        flexWrap="wrap"
      >
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.conference)}
          </Typography>
          <Box width={150}>
            <Select
              options={Conference}
              value={filterData.conference}
              name="conference"
              onChangeHandler={handleSelectChange}
              id="conference"
              emptyOption={{
                emptyOptionLabel: '--Select--',
                showEmptyOption: true,
              }}
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems="baseline"
          justifyContent="end"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.gender)}
          </Typography>
          <Checkbox
            name="male"
            onChangeHandler={handleCheckboxChange}
            checked={filterData.gender.male ?? false}
            value="male"
            id="gender"
            label="Boys"
          />
          <Checkbox
            name="female"
            onChangeHandler={handleCheckboxChange}
            checked={filterData.gender.female ?? false}
            value="female"
            id="gender"
            label="Girls"
          />
        </Stack>
        <Stack
          direction="row"
          alignItems="baseline"
          justifyContent="end"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.division)}
          </Typography>
          <Checkbox
            name="d1"
            onChangeHandler={handleCheckboxChange}
            checked={filterData.division.d1 ?? false}
            value="d1"
            id="division"
            label="D1"
          />
          <Checkbox
            name="d2"
            onChangeHandler={handleCheckboxChange}
            checked={filterData.division.d2 ?? false}
            value="d2"
            id="division"
            label="D2"
          />
          <Checkbox
            name="d3"
            onChangeHandler={handleCheckboxChange}
            checked={filterData.division.d3 ?? false}
            value="d3"
            id="division"
            label="D3"
          />
        </Stack>
        <Box>
          <Button
            type="button"
            variant="outlined"
            id="reset"
            label={t(tokens.table.resetFilter)}
            onClickHandler={handleReset}
          />
        </Box>
      </Stack>
    </Stack>
  );
};
