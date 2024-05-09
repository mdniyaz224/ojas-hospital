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
import { YEAR_COUNT } from 'src/config/constants';
import { IFilterProperties, useFilter } from 'src/hooks/use-filter';
import { tokens } from 'src/locales/tokens';
import { rootReducersState } from 'src/store/reducers';
import { IHighSchoolRankingListProperties } from 'src/store/slicers/ranking';
import { getYearList } from 'src/utils/date-locale';
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
      id: 'team',
      label: 'Team',
      isSortable: false,
    },
    {
      id: 'gender',
      label: 'Gender',
      isSortable: false,
    },
    {
      id: 'state',
      label: 'State',
      isSortable: false,
    },
  ];
};

const HighSchoolRanking: NextPage = () => {
  const filterProperties = useFilter();
  const { handlePageChange, filterData } = filterProperties ?? {};
  const { page, rowsPerPage } = filterData ?? {};
  const { highSchoolRankingList, totalCount } = useSelector(
    (state: rootReducersState) => state.ranking
  );

  const prepareRows = (data: Array<IHighSchoolRankingListProperties>) => {
    //FIXME : will fix any in future
    return data?.map((item: any, index: number) => {
      const { team, state, gender } = item;
      const contextMenuLinks: any[] = [];
      return {
        rank: index + 1,
        team,
        state,
        gender,
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
        rows={prepareRows(highSchoolRankingList ?? [])}
        totalCount={totalCount}
        headers={prepareHeaders()}
        filters={() => FilterFields(filterProperties)}
      />
    </Box>
  );
};

export default HighSchoolRanking;

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
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.year)}
          </Typography>
          <Box width={150}>
            <Select
              options={[...getYearList(YEAR_COUNT)]}
              value={filterData.year}
              name="year"
              onChangeHandler={handleSelectChange}
              id="year"
              emptyOption={{
                emptyOptionLabel: '--Select--',
                showEmptyOption: true,
              }}
            />
          </Box>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.state)}
          </Typography>
          <Box width={150}>
            <Select
              options={Conference}
              value={filterData.state}
              name="state"
              onChangeHandler={handleSelectChange}
              id="state"
              emptyOption={{
                emptyOptionLabel: '--Select--',
                showEmptyOption: true,
              }}
            />
          </Box>
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
