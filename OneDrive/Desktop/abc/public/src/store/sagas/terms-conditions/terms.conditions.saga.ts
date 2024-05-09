
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { httpGet } from 'src/services/common';
import URL from 'src/services/urls';
import Types from 'src/store/constants/term-condition';
import { closeLoader, openLoader } from 'src/store/slicers/common';
import { saveInfo } from 'src/store/slicers/terms-conditions';

export function* getTermConditions(): any {
  try {
    yield put(openLoader());
    const result = yield call(httpGet, URL.GET_TERMS_CONDITIONS);
    const data = {
      answer: result.data.answer,
    };
    yield put(saveInfo(data));
    yield put(closeLoader());
    return result;
  } catch (error) {
    yield put(closeLoader());
    return error;
  }
}
// Watch for edit request action
export function* getTermConditionsRequest(): any {
  yield takeLatest(Types.GET_REQUEST, getTermConditions);
}
export default function* termsConditionsSaga() {
  yield all([
    getTermConditionsRequest(),
  ]);
}