import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actionTypes/login.jsx";

export default function (state = {}, { type, payload }) {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...payload };
        case USER_LOGIN_FAILURE:
            return { ...state, ...payload };
        default:
            return state;
    }
}