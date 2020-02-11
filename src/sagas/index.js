import { fork, all } from 'redux-saga/effects';

import login from './login.jsx';
import logout from './logout.jsx';

export default function* rootSaga() {
    yield all([fork(login), fork(logout)])
};