import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpGet, httpPost } from "src/services/common";
import URL from "src/services/urls";
import Types from "src/store/constants/event";
import { closeLoader, openLoader } from "src/store/slicers/common";
import { generateQueryString } from "src/utils/common";
import { getAll as getAllEvents } from 'src/store/slicers/event';
import { toast } from "react-hot-toast";

interface IHttpPayloadProperties {
  resource: string;
  methods: any;
  data: any;
}


export function* getAll(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource, methods, data } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${resource}?${generateQueryString(data)}`);
    yield put(methods.getAll(result.data));
    yield put(closeLoader());
    return;

  } catch (error) {
    yield put(closeLoader());
    return error;

  }
}

// Function generator (watcher )
export function* eventListingRequest(): any {
  yield takeLatest(Types.GET_EVENTS_REQUEST, getAll);
}
export function* addGuestUser(action: PayloadAction<IHttpPayloadProperties & { eventListData: any; }>): any {
  const { resource, methods, data, eventListData } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpPost, `${resource}`, data);
    toast.success(result.message);
    yield put({
      type: Types.GET_EVENTS_REQUEST, payload: {
        resource: URL.EVENT_LIST,
        methods: { getAll: getAllEvents },
        data: { ...eventListData },
      }
    });
    // yield put(methods.getAll(result.data));
    yield put(closeLoader());
    return;

  } catch (error) {
    toast.error(error?.data?.message);
    yield put(closeLoader());
    return error;

  }
}

// Function generator (watcher )
export function* addGuestUserRequest(): any {
  yield takeLatest(Types.ADD_GUEST_USER_REQUEST, addGuestUser);
}

export default function* eventSaga() {
  yield all([
    eventListingRequest(),
    addGuestUserRequest()
  ]);
}
