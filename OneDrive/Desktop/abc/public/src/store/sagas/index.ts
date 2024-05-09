import { all, fork } from 'redux-saga/effects';
import EventSaga from 'src/store/sagas/event/event.saga';
import contactUsSaga from 'src/store/sagas/user/user.saga';
import faqSaga from 'src/store/sagas/faq/faq.saga';
import newsSaga from 'src/store/sagas/news/news.saga';
import commitmentsSaga from 'src/store/sagas/commitments/commitments.saga';
import collegeSaga from 'src/store/sagas/college/college.saga';
import privacyPolicySaga from 'src/store/sagas/privacy-policy/privacy.policy.saga';
import termsConditionsSaga from 'src/store/sagas/terms-conditions/terms.conditions.saga';

export default function* rootSaga(): any {
  yield all([
    fork(EventSaga),
    fork(contactUsSaga),
    fork(faqSaga),
    fork(newsSaga),
    fork(commitmentsSaga),
    fork(collegeSaga),
    fork(privacyPolicySaga),
    fork(termsConditionsSaga),
  ]);
}
