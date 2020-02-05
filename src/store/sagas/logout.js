import {put, takeLatest} from 'redux-saga/effects';
import actionTypes from '../actionTypes/';
import actions from '../actions/';
import JwtHelper from '../../utils/jwtHelper';

function* workerLogout({ history }) {
    try {
        //console.log(history);
        yield JwtHelper.removeToken();
        yield history.push('/login');
    } catch (e) {
        console.log(e);
        yield put(actions.userLogoutFailure(e));
    }
}

export default function* watchLogout() {
    yield takeLatest(actionTypes.USER_LOGOUT_SUCCESS, workerLogout)
}
