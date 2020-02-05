import { call, put, takeLatest } from 'redux-saga/effects';
import JwtHelper from '../../utils/jwtHelper';
import actionTypes from '../actionTypes/';
import actions from '../actions/';
import userLogin from "../../services/userService";

function* workerLogin({ payload, history }) {
    try {
        const {accessToken} = yield call(() => userLogin(payload));
        // yield setAccessToken(accessToken);
        // console.log(accessToken);
        yield JwtHelper.saveToken(accessToken);
        yield put(actions.userLoginSuccess());
        yield history.push('/');
    } catch (e) {
        yield put(actions.userLoginFailure(e))
    }
}

export default function* watchLogin() {
    yield takeLatest(actionTypes.USER_LOGIN_REQUEST, workerLogin)
}
