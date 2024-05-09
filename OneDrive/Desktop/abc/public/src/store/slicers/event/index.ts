import { createSlice } from '@reduxjs/toolkit';

export interface IEventProperties {
  id: number;
  uuid: string;
  name: string;
  eventLocation: string;
  eventDateTime: string;
  membersCount: number;
  status: number;
  isDeleted: number;
  createdAt: string;
  updatedAt: string;
  eventImageUrl: string;
}


interface IInitialStateProps {
  eventList?: IEventProperties[];
}
const initialState: IInitialStateProps = {
  eventList: [],
};

const eventSlice = createSlice({
  name: 'event',
  initialState,

  reducers: {
    getAll: (state, data) => {
      state.eventList = data?.payload?.records;
    },

  },
});

export const {
  getAll,
} = eventSlice.actions;
export default eventSlice.reducer;
