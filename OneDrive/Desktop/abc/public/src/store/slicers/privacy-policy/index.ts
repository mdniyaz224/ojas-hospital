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

const privacyPolicySlice = createSlice({
  name: 'privacyPolicy',
  initialState,

  reducers: {
    saveInfo: (state, data) => {
      state.data = data.payload;
    },

  },
});

export const { saveInfo } =
  privacyPolicySlice.actions;
export default privacyPolicySlice.reducer;
