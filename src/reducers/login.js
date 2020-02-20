import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from "../actions/login";
import JwtHelper from "../utils/jwtHelper";

const initialState = {
    isAuth: JwtHelper.isTokenExist
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return { ...state };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...payload, isAuth: true };
        case USER_LOGIN_FAILURE:
            return { ...state, ...payload };
        default:
            return state;
    }
}