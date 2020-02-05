import { fork, all } from 'redux-saga/effects';

import login from './login';
import logout from './logout';

export default function* rootSaga() {
    yield all([fork(login), fork(logout)])
}