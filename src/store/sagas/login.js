import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/';
import actions from '../actions/';
import JwtHelper from '../../utils/jwtHelper';
import userLogin from "../../services/userService";

function* workerLogin({ payload, history }) {
    try {
        const { accessToken } = yield call(() => userLogin(payload));
        // console.log(accessToken);
        // yield setAccessToken(accessToken);
        yield JwtHelper.saveToken(accessToken);
       // yield put({type: actionTypes.USER_LOGIN_SUCCESS});
        yield put(actions.userLoginSuccess());
        yield history.push('/');
    } catch (e) {
        console.log(e);
        yield put(actions.userLoginFailure(e));
    }
}

function* workerLogout({ history }) {
    try {
        const token = yield JwtHelper.getToken();
        yield JwtHelper.removeToken(token);
        yield history.push('/login');
    } catch (e) {
        
    }
}

export default function* watchLogin() {
    yield takeLatest(actionTypes.USER_LOGIN_REQUEST, workerLogin)
}
