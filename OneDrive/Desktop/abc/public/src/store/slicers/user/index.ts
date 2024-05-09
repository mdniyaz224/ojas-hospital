import { createSlice } from '@reduxjs/toolkit';

interface IInitialStateProps {
  userList?: unknown[];
}
const initialState: IInitialStateProps = {
  userList: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    getAll: (state, data) => {
      state.userList = data?.payload?.records;
    },

  },
});

export const {
  getAll,
} = userSlice.actions;
export default userSlice.reducer;
