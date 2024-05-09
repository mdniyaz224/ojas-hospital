import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpGet } from "src/services/common";
import Types from "src/store/constants/college";
import { getAll } from "src/store/slicers/college";
import { closeLoader, openLoader } from "src/store/slicers/common";

interface IHttpPayloadProperties {
  resource: string;
}

export function* getClassesList(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${resource}`);
    yield put(getAll(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* getClassesListRequest(): any {
  yield takeLatest(Types.GET_CLASSES_LIST_REQUEST, getClassesList);
}


export default function* commitmentsSaga() {
  yield all([
    getClassesListRequest(),
  ]);
}
