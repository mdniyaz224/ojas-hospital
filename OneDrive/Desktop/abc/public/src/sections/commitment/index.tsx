import { Box, SelectChangeEvent, Stack } from '@mui/material';
import { t } from 'i18next';
import { NextPage } from 'next';
import { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'src/components/atoms/button';
import Checkbox from 'src/components/atoms/checkbox';
import Select from 'src/components/atoms/select';
import Typography from 'src/components/atoms/typography';
import Listing from 'src/components/organisms/table';
import { YEAR_COUNT } from 'src/config/constants';
import { IFilterProperties, useFilter } from 'src/hooks/use-filter';
import { tokens } from 'src/locales/tokens';
import URL from 'src/services/urls';
import Types from 'src/store/constants/commitments';
import CollegeTypes from 'src/store/constants/college';
import { rootReducersState } from 'src/store/reducers';
import { ICommitmentListProperties } from 'src/store/slicers/commitments';
import { generateQueryString, removeEmptyKeys } from 'src/utils/common';
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
    // {
    //   id: 'date',
    //   label: 'Date',
    //   isSortable: false,
    // },
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
      id: 'division',
      label: 'Division',
      isSortable: false,
    },
    {
      id: 'commitment',
      label: 'Commitments',
      isSortable: false,
    },
  ];
};

const Commitment: NextPage = () => {
  const filterProperties = useFilter();
  const { handlePageChange, filterData } = filterProperties ?? {};
  const { page, rowsPerPage, gender, division, classYear } = filterData ?? {};
  const dispatch = useDispatch();
  const { commitmentList, commitmentTotalCount } = useSelector(
    (state: rootReducersState) => state.commitment
  );

  useEffect(() => {
    const commitmentList = async () => {
      let data = {
        page: page,
        pageSize: rowsPerPage,
        exactMatch: {
          gender: gender?.checkValue,
          division: division.checkValue,
          commitmentYear: classYear,
        },
      };
      const filterKeys = await removeEmptyKeys(data);
      dispatch({
        type: Types.GET_COMMITMENTS_REQUEST,
        payload: {
          resource: `${URL.COMMITMENTS_LIST}?${generateQueryString({ ...filterKeys })}`,
        },
      });
    };
    commitmentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, gender?.checkValue, division.checkValue, classYear]);

  const prepareRows = (data: Array<ICommitmentListProperties>) => {
    //FIXME : will fix any in future
    return data?.map((item: any, index: number) => {
      const { clubName, state, classYear, gender, date, division, commitment } = item;
      const contextMenuLinks: any[] = [];
      return {
        // date,
        clubName,
        state,
        gender,
        classYear,
        division,
        commitment,
        contextMenuLinks,
      };
    });
  };

  return (
    <Box>
      <Listing
        name="commitments"
        onPageChange={handlePageChange}
        pageNumber={page}
        pageCount={rowsPerPage}
        rows={prepareRows(commitmentList ?? [])}
        totalCount={commitmentTotalCount}
        headers={prepareHeaders()}
        filters={() => FilterFields(filterProperties)}
      />
    </Box>
  );
};

export default Commitment;

const FilterFields = (props: IFilterFields) => {
  const { handleSelectChange, handleCheckboxChange, filterData, handleReset } = props;
  const dispatch = useDispatch();
  const { classYears } = useSelector((state: rootReducersState) => state.college);
  useEffect(() => {
    dispatch({
      type: CollegeTypes.GET_CLASSES_LIST_REQUEST,
      payload: { resource: URL.COMMITMENTS_CLASS_LIST },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      alignItems={{ sm: 'baseline', lg: 'center' }}
      gap={{ sm: 2, lg: 4 }}
      justifyContent="space-between"
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
          <Box width={{ sm: '100%', md: 65 }}>
            <Select
              options={paginationOptions}
              value={filterData.rowsPerPage as unknown as string}
              name="rowsPerPage"
              onChangeHandler={handleSelectChange}
              id="rowsPerPage"
            />
          </Box>
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
        columnGap={{ sm: 2, lg: 4 }}
        rowGap={{ sm: 2, md: 2 }}
        // justifyContent={{ lg: 'end' }}
        flexWrap="wrap"
      >
        {/* <Stack
          direction="row"
          alignItems="center"
          gap={2}
        >
          <Typography
            variant="subtitle1"
            id="rows-label"
          >
            {t(tokens.table.commitment)}
          </Typography>
          <Box width={{ sm: '100%', md: 150 }}>
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
        </Stack> */}
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
          <Box width={{ sm: '100%', md: 170 }}>
            <Select
              options={classYears ?? []}
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
          <Box display="flex">
            <Checkbox
              name="male"
              onChangeHandler={handleCheckboxChange}
              checked={filterData.gender.male ?? false}
              value="boy"
              id="gender"
              label="Boys"
            />

            <Checkbox
              name="female"
              onChangeHandler={handleCheckboxChange}
              checked={filterData.gender.female ?? false}
              value="girl"
              id="gender"
              label="Girls"
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
            {t(tokens.table.division)}
          </Typography>
          <Box display="flex">
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
