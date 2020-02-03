import { call, put, takeLatest } from 'redux-saga/effects';
import JwtHelper from '../../utils/jwtHelper';
import UserService from '../../utils/UserService';
import actionTypes from '../actionTypes/';
import actions from '../actions/';

function* loginSaga({payload}) {
    try {
        const { data: { accessToken } } = yield call(() => UserService.userLogin(payload))
        yield JwtHelper.saveTokenToLS(accessToken)
        yield put(actions.userLoginFailure())
        yield history.push('/')
    } catch (error) {
        yield put(actions.userLoginFailure(error))
    }
}

export default function* watchLogin() {
    yield takeLatest(actionTypes.USER_LOGIN_REQUEST, loginSaga)
}
