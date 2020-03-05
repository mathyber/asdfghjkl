import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import {  } from "../actions/representation"
import JwtHelper from '../utils/jwtHelper';
import { postman, setAccessToken } from "../utils/postman";
import { GET_REPRESENTATION, SAVE_REPRESENTATION } from "../actions/representation";

function* getRepresentation({name}) {
    try {
        console.log(name);
        yield setAccessToken(JwtHelper.token);
        const reprData = yield call(() => postman.get(`userSettings/${name}`));
        //yield console.log(reprData);
        yield put(actions.representationSuccess({representation: reprData}));
    } catch (e) {
        console.log(e);
        yield put(actions.representationFailure(e));
    }
}

function* saveRepresentation({name, reprName, reprColumns, representations}) {
    try {
       /* console.log("dvgwewg:     " + name);
        console.log("dvgwewg:     " + reprName);
        console.log(representations);*/
        yield setAccessToken(JwtHelper.token);
        yield call(() => postman.post(`userSettings/${name}`,{value: JSON.stringify({
          //     key: name,
                [reprName]: reprColumns,
                ...representations
            }) }));

        // yield put(actions.userInfoSuccess({userInfo: userData, profile: profile, appConfig: appConfig}));
    } catch (e) {
        console.log(e);
        yield put(actions.representationFailure(e));
    }
}


export default function* watchRepresentation() {
    yield takeLatest(GET_REPRESENTATION, getRepresentation);
    yield takeLatest(SAVE_REPRESENTATION, saveRepresentation)
}
