import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import { USER_INFO_REQUEST } from "../actions/userInfo"
import JwtHelper from '../utils/jwtHelper';
import { postman, setAccessToken } from "../utils/postman";

function* workerUserInfo() {
    try {
        yield setAccessToken(JwtHelper.token);
        const userData = yield call(() => postman.get("identity/userInfo"));
        const profile = yield call(() => postman.get("profile/info"));
        const appConfig = yield call(() => postman.get("appConfiguration"));
    //   yield console.log(appConfig);
        yield put(actions.userInfoSuccess({userInfo: userData, profile: profile, appConfig: appConfig}));
    } catch (e) {
        console.log(e);
        yield put(actions.userInfoFailure(e));
    }
}

export default function* watchUserInfo() {
    yield takeLatest(USER_INFO_REQUEST, workerUserInfo)
}
