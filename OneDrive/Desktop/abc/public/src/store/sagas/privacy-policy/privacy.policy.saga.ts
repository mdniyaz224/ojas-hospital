
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { httpGet } from 'src/services/common';
import URL from 'src/services/urls';
import { saveInfo } from 'src/store/slicers/privacy-policy';
import Types from 'src/store/constants/privacy-policy';
import { closeLoader, openLoader } from 'src/store/slicers/common';


export function* getPrivacyPolicy(): any {
  try {
    yield put(openLoader());
    const result = yield call(httpGet, URL.GET_PRIVACY_POLICY);
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
export function* getPrivacyPolicyRequest(): any {
  yield takeLatest(Types.GET_REQUEST, getPrivacyPolicy);
}

export default function* privacyPolicySaga() {
  yield all([
    getPrivacyPolicyRequest(),
  ]);
}