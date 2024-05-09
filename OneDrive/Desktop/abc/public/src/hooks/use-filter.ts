import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { DEFAULT_PAGE, DEFAULT_ROWS_PER_PAGE } from 'src/config/constants';

export interface IDivision {
  d1?: boolean;
  d2?: boolean;
  d3?: boolean;
  checkValue: string;
}

export interface IGender {
  male?: boolean;
  female?: boolean;
  checkValue: string;
}


export interface IFilterProperties {
  page: number;
  rowsPerPage: number;
  conference: string;
  gender: IGender;
  division: IDivision;
  classYear: string;
  year: string;
  state: string;
}

export const useFilter = () => {
  const [filterData, setFilterData] = useState<IFilterProperties>({
    page: DEFAULT_PAGE,
    rowsPerPage: DEFAULT_ROWS_PER_PAGE,
    conference: '',
    gender: {
      male: false,
      female: false,
      checkValue: ''
    },
    division: {
      d1: false,
      d2: false,
      d3: false,
      checkValue: ''
    },
    classYear: '',
    year: '',
    state: ''
  });
  const handleReset = () => {
    setFilterData(() => ({
      page: DEFAULT_PAGE,
      rowsPerPage: DEFAULT_ROWS_PER_PAGE,
      conference: '',
      gender: {
        male: false,
        female: false,
        checkValue: ''
      },
      division: {
        d1: false,
        d2: false,
        d3: false,
        checkValue: ''
      },
      classYear: '',
      year: '',
      state: ''
    }));
  };
  const handlePageChange = (page: number) => {
    setFilterData({
      ...filterData,
      page
    });
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    if (event.target.name === 'rowsPerPage') {
      setFilterData({
        ...filterData,
        [event.target.name]: event.target.value as unknown as number,
        page: DEFAULT_PAGE,
      });
      return;
    }
    setFilterData({
      ...filterData,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterData({
      ...filterData,
      [event.target.id]: { [event.target.name]: event.target.checked, checkValue: event.target.value },
    });
  };

  return {
    handleReset,
    filterData,
    handleSelectChange,
    handleCheckboxChange,
    handlePageChange
  };
};
