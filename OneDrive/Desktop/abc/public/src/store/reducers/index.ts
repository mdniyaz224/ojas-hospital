import { combineReducers } from 'redux';
// Common reducer
import userSlice from 'src/store/slicers/user';
import commonSlice from 'src/store/slicers/common';
import eventSlice from 'src/store/slicers/event';
import rankingSlice from 'src/store/slicers/ranking';
import faqSlice from 'src/store/slicers/faq';
import newsSlice from 'src/store/slicers/news';
import commitmentSlice from 'src/store/slicers/commitments';
import collegeSlice from 'src/store/slicers/college';
import privacyPolicySlicer from 'src/store/slicers/privacy-policy';
import termsConditionsSlicer from '../slicers/terms-conditions';

const rootReducer = combineReducers({
  user: userSlice,
  common: commonSlice,
  event: eventSlice,
  faqs: faqSlice,
  news: newsSlice,
  ranking: rankingSlice,
  commitment: commitmentSlice,
  college: collegeSlice,
  privacyPolicy: privacyPolicySlicer,
  termsConditions: termsConditionsSlicer,
});

export type rootReducersState = ReturnType<typeof rootReducer>;
export default rootReducer;
