import { call, put, takeLatest } from 'redux-saga/effects';
import actionTypes from '../actionTypes/index.jsx';
import actions from '../actions/index.jsx';
import JwtHelper from '../utils/jwtHelper';
import userLogin from "../services/userService";

function* workerLogin({ payload, history }) {
    try {
        //console.log(history);
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

export default function* watchLogin() {
    yield takeLatest(actionTypes.USER_LOGIN_REQUEST, workerLogin)
}
