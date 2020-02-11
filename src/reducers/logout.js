import { USER_LOGOUT_SUCCESS, USER_LOGOUT_FAILURE } from "../actionTypes/logout.jsx";

export default function (state = {}, { type }) {
    switch (type) {

        case USER_LOGOUT_SUCCESS:
            return { ...state };
        case USER_LOGOUT_FAILURE:
            return { ...state };
        default:
            return state;
    }
}