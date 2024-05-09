import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpPost } from "src/services/common";
import URL from "src/services/urls";
import { closeLoader, openLoader } from "src/store/slicers/common";
import { toast } from "react-hot-toast";
import Types from "src/store/constants/user";

interface IHttpPayloadProperties {
  resource: string;
  data: string;
}

export function* contactUs(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource, data } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpPost, `${resource}`, data);
    toast.success(result.message);
    yield put(closeLoader());
    return;

  } catch (error) {
    toast.error(error?.data?.message);
    yield put(closeLoader());
    return error;
  }
}

export function* addGuestUserRequest(): any {
  yield takeLatest(Types.CONTACT_US_REQUEST, contactUs);
}

export default function* contactUsSaga() {
  yield all([
    addGuestUserRequest()
  ]);
}
