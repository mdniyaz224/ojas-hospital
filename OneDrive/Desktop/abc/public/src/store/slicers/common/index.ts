import { createSlice } from '@reduxjs/toolkit';

interface IInitialStateProps {
  isLoader: boolean;
}
const initialState: IInitialStateProps = {
  isLoader: false
};

const commonSlice = createSlice({
  name: 'common',
  initialState,

  reducers: {
    openLoader: (state,) => {
      state.isLoader = true;
    },
    closeLoader: (state,) => {
      state.isLoader = false;
    },

  },
});

export const {
  openLoader, closeLoader
} = commonSlice.actions;
export default commonSlice.reducer;
