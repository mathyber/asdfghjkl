import {USER_INFO_FAILURE, USER_INFO_REQUEST, USER_INFO_SUCCESS} from "../actions/userInfo";

const initialState = {
    data: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case USER_INFO_REQUEST:
            return { ...state, ...payload };
        case USER_INFO_SUCCESS:
            return { ...state, data: {...payload} };
        case USER_INFO_FAILURE:
            return { ...state };
        default:
            return state;
    }
}