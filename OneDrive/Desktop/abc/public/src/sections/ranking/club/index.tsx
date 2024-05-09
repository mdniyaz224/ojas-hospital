import { Box, Container, SelectChangeEvent, Stack, styled } from '@mui/material';
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
import { IClubRankingListProperties } from 'src/store/slicers/ranking';
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
      id: 'clubName',
      label: 'Club Name',
      isSortable: false,
    },
    {
      id: 'classYear',
      label: 'Class',
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

const ClubRanking: NextPage = () => {
  const filterProperties = useFilter();
  const { handlePageChange, filterData } = filterProperties ?? {};
  const { page, rowsPerPage } = filterData ?? {};
  const { clubRankingList, totalCount } = useSelector((state: rootReducersState) => state.ranking);

  const prepareRows = (data: Array<IClubRankingListProperties>) => {
    //FIXME : will fix any in future
    return data?.map((item: any, index: number) => {
      const { clubName, state, classYear, gender } = item;
      const contextMenuLinks: any[] = [];
      return {
        rank: index + 1,
        clubName,
        state,
        gender,
        classYear,
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
        rows={prepareRows(clubRankingList ?? [])}
        totalCount={totalCount}
        headers={prepareHeaders()}
        filters={() => FilterFields(filterProperties)}
      />
    </Box>
  );
};

export default ClubRanking;

const FilterFields = (props: IFilterFields) => {
  const { handleSelectChange, handleCheckboxChange, filterData, handleReset } = props;
  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      gap={{ sm: 2, lg: 2 }}
      justifyContent={{ lg: 'space-between' }}
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
        columnGap={{ sm: 2, md: 4, lg: 2 }}
        rowGap={{ xs: 0, sm: 2, md: 2 }}
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
            {t(tokens.table.class)}
          </Typography>
          <Box width={150}>
            <Select
              options={Conference}
              value={filterData.classYear}
              name="classYear"
              onChangeHandler={handleSelectChange}
              id="classYear"
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
