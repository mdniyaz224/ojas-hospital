import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpGet } from "src/services/common";
import URL from "src/services/urls";
import Types from "src/store/constants/news";
import { closeLoader, openLoader } from "src/store/slicers/common";
import { newsBlogDetails, newsNavList } from "src/store/slicers/news";
import { getAllNewsList } from "src/store/slicers/news";
import { INewsRecord } from "src/types/news";
import { generateQueryString } from "src/utils/common";

export interface IPayloadData {
  page?: number;
  pageSize?: number;
}

interface IHttpPayloadProperties {
  data: IPayloadData;

}

export function* getNavList(action: PayloadAction<INewsRecord>): any {
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${URL.NEWS_CATEGORY}`);
    yield put(newsNavList(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* newsNavListRequest(): any {
  yield takeLatest(Types.GET_NEWS_NAV_LIST_REQUEST, getNavList);
}
export function* getAllNews(action: PayloadAction<IHttpPayloadProperties>): any {
  const { data } = action.payload;
  try {
    yield put(openLoader());

    const result = yield call(httpGet, `${URL.ALL_NEWS_LIST}?${generateQueryString(data)}`);
    yield put(getAllNewsList(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

export function* newsListingRequest(): any {
  yield takeLatest(Types.GET_NEWS_LIST_REQUEST, getAllNews);
}

// Function generator (watcher )
export function* getNewsBlog(action: PayloadAction<any>): any {
  const { data } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${URL.NEWS_BLOG}/${data}`);
    yield put(newsBlogDetails(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}
export function* newsBlogRequest(): any {
  yield takeLatest(Types.GET_NEWS_BLOG_REQUEST, getNewsBlog);
}

//
export default function* newsSaga() {
  yield all([
    newsNavListRequest(),
    newsListingRequest(),
    newsBlogRequest(),
  ]);
}
