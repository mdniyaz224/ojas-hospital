import { createSlice } from '@reduxjs/toolkit';
import { IFaqRecord } from 'src/types/faq';


interface IFaqDataState {
  FaqRecords: IFaqRecord[];
}

const initialState: IFaqDataState = {
  FaqRecords: [],
};

const faqSlice = createSlice({
  name: 'faqs',
  initialState,

  reducers: {
    getAllFaqs: (state, data) => {
      state.FaqRecords = data?.payload?.records;
    },

  },
});

export const {
  getAllFaqs,
} = faqSlice.actions;
export default faqSlice.reducer;
