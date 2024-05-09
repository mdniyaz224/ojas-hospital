import { createSlice } from '@reduxjs/toolkit';
import { IPrivacyProps } from 'src/pages/privacy-policy';

interface initialStateProps {
  data: IPrivacyProps;
}
const initialState: initialStateProps = {
  data: {
    answer: '',
  },
};

const termsConditionsSlicer = createSlice({
  name: 'termsConditions',
  initialState,
  reducers: {
    saveInfo: (state, data) => {
      state.data = data.payload;
    },
  },
});

export const { saveInfo } =
  termsConditionsSlicer.actions;
export default termsConditionsSlicer.reducer;
