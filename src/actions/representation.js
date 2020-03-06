export const GET_REPRESENTATION = 'GET_REPRESENTATION';
export const SAVE_REPRESENTATION = 'SAVE_REPRESENTATION';
export const DELETE_REPRESENTATION = 'DELETE_REPRESENTATION';
export const REPRESENTATION_SUCCESS = 'REPRESENTATION_SUCCESS';
export const REPRESENTATION_FAILURE = 'REPRESENTATION_FAILURE';

export const getRepresentation = (name) => (
    {
        type: GET_REPRESENTATION,
        name
    }
);

export const representationSuccess = (payload) => (
    {
        type: REPRESENTATION_SUCCESS,
        payload
    }
);

export const saveRepresentation = ({name, reprName, reprColumns, representations}) => (
    {
        type: SAVE_REPRESENTATION,
        name, reprName, reprColumns, representations
    }
);


export const deleteRepresentation = ({name, representations}) => (
    {
        type: DELETE_REPRESENTATION,
        name, representations
    }
);


export const representationFailure = () => (
    {
        type: REPRESENTATION_FAILURE
    }
);