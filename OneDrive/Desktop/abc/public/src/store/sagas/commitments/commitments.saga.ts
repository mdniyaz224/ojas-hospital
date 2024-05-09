import { PayloadAction } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { httpGet } from "src/services/common";
import Types from "src/store/constants/commitments";
import { getCampList, getClinicDescriptions, getCommitmentList } from "src/store/slicers/commitments";
import { closeLoader, openLoader } from "src/store/slicers/common";
import { generateQueryString } from "src/utils/common";

interface IHttpPayloadProperties {
  resource: string;
}

export function* getClinicDescription(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${resource}`);
    yield put(getClinicDescriptions(result.data.answer));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* getClinicDescriptionRequest(): any {
  yield takeLatest(Types.GET_CLINIC_DESCRIPTION_REQUEST, getClinicDescription);
}

export function* getCommitmentsList(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${resource}`);
    yield put(getCommitmentList(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* getCommitmentsListRequest(): any {
  yield takeLatest(Types.GET_COMMITMENTS_REQUEST, getCommitmentsList);
}


//

export function* getCampClinicList(action: PayloadAction<IHttpPayloadProperties>): any {
  const { resource } = action.payload;
  try {
    yield put(openLoader());
    const result = yield call(httpGet, `${resource}`);
    yield put(getCampList(result.data));
    yield put(closeLoader());
    return;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}

// Function generator (watcher )
export function* getCampClinicListRequest(): any {
  yield takeLatest(Types.GET_CAMP_REQUEST, getCampClinicList);
}

//

export default function* commitmentsSaga() {
  yield all([
    getClinicDescriptionRequest(),
    getCommitmentsListRequest(),
    getCampClinicListRequest(),
  ]);
}
