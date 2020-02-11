import {put, takeLatest} from 'redux-saga/effects';
import actions from '../actions';
import JwtHelper from '../utils/jwtHelper';
import { USER_LOGOUT_SUCCESS } from "../actions/logout";

function* workerLogout({ history }) {
    try {
        yield JwtHelper.removeToken();
        yield history.push('/login');
    } catch (e) {
        console.log(e);
        yield put(actions.userLogoutFailure(e));
    }
}

export default function* watchLogout() {
    yield takeLatest(USER_LOGOUT_SUCCESS, workerLogout)
}
