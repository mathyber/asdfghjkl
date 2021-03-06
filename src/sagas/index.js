import { fork, all } from 'redux-saga/effects';

import login from './login.js';
import logout from './logout.js';
import userInfo from './userInfo.js';
import grid from './grid'
import representation from "./representation";

export default function* rootSaga() {
    yield all([fork(login), fork(logout), fork(userInfo), fork(grid), fork(representation)])
};