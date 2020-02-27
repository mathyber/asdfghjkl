export const GRID_REQUEST = 'GRID_REQUEST';
export const GRID_SUCCESS = 'GRID_SUCCESS';
export const GRID_FAILURE = 'GRID_FAILURE';

export const gridRequest = (name) => (
    {
        type: GRID_REQUEST,
        name
    }
);

export const gridSuccess = (payload) => (
    {
        type: GRID_SUCCESS,
        payload
    }
);

export const gridFailure = () => (
    {
        type: GRID_FAILURE
    }
);