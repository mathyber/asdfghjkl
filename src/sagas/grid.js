import { call, put, takeLatest } from 'redux-saga/effects';
import actions from '../actions';
import {GRID_REQUEST, gridSuccess} from '../actions/grid'
import JwtHelper from '../utils/jwtHelper';
import { postman, setAccessToken } from '../utils/postman';

function* workerGrid({name}) {
    try {
         console.log(name);
        yield setAccessToken(JwtHelper.token);
        const data = {
            filter: {},
            skip: 20,
            take: 20,
            sort: {
                name: "",
                desc: true
            }
        };
        const {items} = yield call(() => postman.post(`/${name}/search`, data));
        console.log(items);
        yield put(actions.gridSuccess({items: items}));

    } catch (e) {
        console.log(e);
        yield put(actions.gridFailure(e));
    }
}

export default function* watchGrid() {
    yield takeLatest(GRID_REQUEST, workerGrid)
}