import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import { USER_LOGIN_REQUEST } from "../actions/login"
import JwtHelper from '../utils/jwtHelper';
import {postman} from "../utils/postman";

function* workerLogin({ payload, history }) {
    try {
        //console.log(history);
        const { accessToken } = yield call(() => postman.post('/identity/login', payload));
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
    yield takeLatest(USER_LOGIN_REQUEST, workerLogin)
}
