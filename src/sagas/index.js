import { fork, all } from 'redux-saga/effects';

import login from './login.js';
import logout from './logout.js';

export default function* rootSaga() {
    yield all([fork(login), fork(logout)])
};