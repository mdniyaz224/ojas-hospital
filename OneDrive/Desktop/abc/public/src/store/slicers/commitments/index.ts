import { createSlice } from '@reduxjs/toolkit';

export interface ICommitmentListResponseProperties {
  _count: number;
  club: string;
  division: string;
  gender: string;
  commitmentYear: number;
  state: string;
}



export interface ICommitmentListProperties {
  date: string;
  clubName: string;
  classYear: string;
  gender: string;
  division: string;
  commitment: number;
}

export interface IClinicListProperties {
  eventDate: string;
  division: string;
  state: string;
  event: string;
}

interface ICommitmentStateProps {
  commitmentList?: ICommitmentListProperties[];
  campClinicList?: IClinicListProperties[];
  clinicDescription: string;
  totalCount: number;
  commitmentTotalCount: number;
  campTotalCount: number;
}


const initialState: ICommitmentStateProps = {
  commitmentList: [],
  campClinicList: [],
  clinicDescription: '',
  totalCount: 10,
  commitmentTotalCount: 0,
  campTotalCount: 0
};

const commitmentsSlice = createSlice({
  name: 'commitments',
  initialState,

  reducers: {
    getCommitmentList: (state, data) => {
      const commitmentsData = data.payload.records.map((item: ICommitmentListResponseProperties) => ({
        date: "22/05/2015",
        clubName: item.club,
        classYear: item.commitmentYear,
        gender: item.gender,
        division: item.division,
        commitment: item._count,
      }));

      state.commitmentList = commitmentsData;
      state.commitmentTotalCount = data.payload.totalCount;
    },
    getClinicDescriptions: (state, data) => {
      state.clinicDescription = data.payload;
    },
    getCampList: (state, data) => {
      const campClinicData = data.payload.records.map((item: IClinicListProperties) => ({
        eventDate: item.eventDate,
        division: item.division,
        state: item.state,
        event: item.event,
      }));

      state.campClinicList = campClinicData;
      state.campTotalCount = data.payload.totalCount;
    },
  },
});

export const {
  getCommitmentList, getClinicDescriptions, getCampList
} = commitmentsSlice.actions;
export default commitmentsSlice.reducer;
