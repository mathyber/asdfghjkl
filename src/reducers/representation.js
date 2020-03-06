import {
    DELETE_REPRESENTATION,
    GET_REPRESENTATION,
    REPRESENTATION_FAILURE,
    REPRESENTATION_SUCCESS,
    SAVE_REPRESENTATION
} from "../actions/representation";

const initialState = {
    representation:{}
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GET_REPRESENTATION:
            return { ...state, ...payload };
        case SAVE_REPRESENTATION:
            return { ...state, ...payload };
        case DELETE_REPRESENTATION:
            return { ...state, ...payload };
        case REPRESENTATION_SUCCESS:
            return { ...state, ...payload };
        case REPRESENTATION_FAILURE:
            return { ...state };
        default:
            return state;
    }
}