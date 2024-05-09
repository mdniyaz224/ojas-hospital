import { createSlice } from '@reduxjs/toolkit';

interface ICommitmentStateProps {
  classYears?: { label: string, value: number; }[];
  totalCount: number;
}


const initialState: ICommitmentStateProps = {
  classYears: [],
  totalCount: 10,
};

const collegeSlice = createSlice({
  name: 'college',
  initialState,

  reducers: {
    getAll: (state, data) => {
      const years = data.payload.records.map((item: { commitment_year: string; }) => ({
        label: `${item.commitment_year}`, value: item.commitment_year
      }));
      state.classYears = years;
      state.totalCount = data.payload.totalCount;
    },
  },
});

export const {
  getAll,
} = collegeSlice.actions;
export default collegeSlice.reducer;
