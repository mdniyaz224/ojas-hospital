import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpGet } from "src/services/common";
import URL from "src/services/urls";
import Types from "src/store/constants/faq";
import { closeLoader, openLoader } from "src/store/slicers/common";
import { getAllFaqs } from "src/store/slicers/faq";
import { generateQueryString } from "src/utils/common";

export interface IPayloadData {
  page?: number;
  pageSize?: number;
}

interface IHttpPayloadProperties {
  data: IPayloadData;

}

export function* getAllFaq(action: PayloadAction<IHttpPayloadProperties>): any {
  const { data } = action.payload;
  try {
    yield put(openLoader());

    const result = yield call(httpGet, `${URL.FAQ_LIST}?${generateQueryString(data)}`);
    yield put(getAllFaqs(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* faqListingRequest(): any {
  yield takeLatest(Types.GET_FAQ_LIST_REQUEST, getAllFaq);
}

export default function* faqSaga() {
  yield all([
    faqListingRequest(),
  ]);
}
