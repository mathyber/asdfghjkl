import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import { USER_INFO_REQUEST } from "../actions/userInfo"
import JwtHelper from '../utils/jwtHelper';
import { postman } from "../utils/postman";

function* workerUserInfo() {
    try {
        const userData = yield call(() => postman.get("identity/userInfo"));
       // yield console.log(userName);
        yield put(actions.userInfoSuccess(userData));
    } catch (e) {
        console.log(e);
        yield put(actions.userInfoFailure(e));
    }
}

export default function* watchUserInfo() {
    yield takeLatest(USER_INFO_REQUEST, workerUserInfo)
}
