import { createSlice } from '@reduxjs/toolkit';
import { INewsRecord } from 'src/types/news';


interface IInitialState {
  newsNav: INewsRecord[];
  BlogDetails: INewsRecord;
  newsRecords: INewsRecord[];
  newRecordsTimeStamp: number;
  newsTotalCount: number;
}

const initialState: IInitialState = {
  newsNav: [],
  BlogDetails: {
    id: 0,
    uuid: '',
    newsCategoryId: 0,
    title: '',
    description: '',
    content: '',
    imageUrl: '',
    imageDisplayName: '',
    createdAt: '',
    updatedAt: ''
  },
  newsRecords: [],
  newRecordsTimeStamp: 0,
  newsTotalCount: 0,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,

  reducers: {
    newsNavList: (state, action) => {
      state.newsNav = [
        { label: 'All News', id: 0 },
        ...action.payload.map((item: { name: string, id: number; }) => ({
          label: item.name,
          id: item.id
        }))
      ];
    },
    newsBlogDetails: (state, action) => {
      state.BlogDetails = action.payload;
    },
    getAllNewsList: (state, data) => {
      state.newsRecords = data?.payload?.records;
      state.newsTotalCount = data?.payload?.totalCount;
      state.newRecordsTimeStamp = Date.now();
    },
  },

});

export const {
  newsNavList,
  newsBlogDetails,
  getAllNewsList
} = newsSlice.actions;
export default newsSlice.reducer;

