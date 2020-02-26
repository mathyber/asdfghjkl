import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import { GRID_REQUEST } from "../actions/grid"
import JwtHelper from '../utils/jwtHelper';
import { postman, setAccessToken } from "../utils/postman";

function* workerGrid() {
    try {
        yield setAccessToken(JwtHelper.token)

    } catch (e) {
        console.log(e);
        yield put(actions.gridFailure(e));
    }
}

export default function* watchGrid() {
    yield takeLatest(GRID_REQUEST, workerGrid)
}