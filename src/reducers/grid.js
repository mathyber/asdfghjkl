import {GRID_FAILURE, GRID_REQUEST, GRID_SUCCESS} from "../actions/grid";

const initialState = {
    items: []
};

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case GRID_REQUEST:
            return { ...state, ...payload };
        case GRID_SUCCESS:
            return { ...state, ...payload };
        case GRID_FAILURE:
            return { ...state };
        default:
            return state;
    }
}