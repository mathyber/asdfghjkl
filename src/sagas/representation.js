import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import {  } from "../actions/representation"
import JwtHelper from '../utils/jwtHelper';
import { postman, setAccessToken } from "../utils/postman";
import { GET_REPRESENTATION, SAVE_REPRESENTATION, DELETE_REPRESENTATION } from "../actions/representation";

function* getRepresentation({name}) {
    try {
        console.log(name);
        yield setAccessToken(JwtHelper.token);
        const reprData = yield call(() => postman.get(`userSettings/${name}`));
        yield put(actions.representationSuccess({representation: reprData}));
    } catch (e) {
        console.log(e);
        yield put(actions.representationFailure(e));
    }
}

function* saveRepresentation({name, reprName, reprColumns, representations}) {
    try {
        yield setAccessToken(JwtHelper.token);
        yield call(() => postman.post(`userSettings/${name}`,{value: JSON.stringify({
                [reprName]: reprColumns,
                ...representations
            }) }));
        yield put(actions.getRepresentation(name));
    } catch (e) {
        console.log(e);
        yield put(actions.representationFailure(e));
    }
}

function* deleteRepresentation({name, representations}) {
    try {
        yield setAccessToken(JwtHelper.token);
        yield call(() => postman.post(`userSettings/${name}`,{value: JSON.stringify({
                ...representations
            }) }));
        yield put(actions.getRepresentation(name));
    } catch (e) {
        console.log(e);
        yield put(actions.representationFailure(e));
    }
}

export default function* watchRepresentation() {
    yield takeLatest(GET_REPRESENTATION, getRepresentation);
    yield takeLatest(SAVE_REPRESENTATION, saveRepresentation);
    yield takeLatest(DELETE_REPRESENTATION, deleteRepresentation);
}
