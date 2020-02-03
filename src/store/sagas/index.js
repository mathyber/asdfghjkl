import { fork } from 'redux-saga/effects';

import auth from './login';

export default function* rootSaga() {
    yield fork(auth)
}