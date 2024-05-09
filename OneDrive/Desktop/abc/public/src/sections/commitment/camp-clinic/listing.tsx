import { Box } from '@mui/material';
import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';

import { useFilter } from 'src/hooks/use-filter';
import { rootReducersState } from 'src/store/reducers';
import { IClinicListProperties } from 'src/store/slicers/commitments';
import { IClubRankingListProperties } from 'src/store/slicers/ranking';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { generateQueryString, removeEmptyKeys } from 'src/utils/common';
import Types from 'src/store/constants/commitments';
import URL from 'src/services/urls';
import { getFormatedDate, DateFormats } from 'src/utils/date-locale';
import { format, parse } from 'date-fns';
import { current } from '@reduxjs/toolkit';

const Listing = dynamic(() => import('src/components/organisms/table'));

const prepareHeaders = () => {
  return [
    {
      id: 'eventDate',
      label: 'Date',
      isSortable: false,
    },
    {
      id: 'division',
      label: 'Division',
      isSortable: false,
    },
    {
      id: 'state',
      label: 'Location',
      isSortable: false,
    },
    {
      id: 'event',
      label: 'Event',
      isSortable: false,
    },
  ];
};

const CampListing: NextPage = () => {
  const dispatch = useDispatch();
  const filterProperties = useFilter();
  const { handlePageChange, filterData } = filterProperties ?? {};
  const { page, rowsPerPage } = filterData ?? {};
  const { campClinicList, campTotalCount } = useSelector(
    (state: rootReducersState) => state.commitment
  );
  useEffect(() => {
    const campList = async () => {
      let data = {
        page: page,
        pageSize: rowsPerPage,
      };
      const filterKeys = await removeEmptyKeys(data);
      dispatch({
        type: Types.GET_CAMP_REQUEST,
        payload: {
          resource: `${URL.CAMP_CLINICS_LIST}?${generateQueryString({ ...filterKeys })}`,
        },
      });
    };
    campList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage]);

  const prepareRows = (data: Array<IClinicListProperties>) => {
    return data?.map((item: IClinicListProperties, index: number) => {
      const { eventDate, state, event, division } = item;
      const contextMenuLinks: any[] = [];
      return {
        eventDate: getFormatedDate(eventDate, DateFormats.usa),
        division,
        state,
        event,
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
        rows={prepareRows(campClinicList ?? [])}
        totalCount={campTotalCount}
        headers={prepareHeaders()}
      />
    </Box>
  );
};

export default CampListing;
