import actionTypes from "../actionTypes/index.jsx"

export const userLoginRequest = (payload, history) => ({
    type: actionTypes.USER_LOGIN_REQUEST,
    payload,
    history
})

export const userLoginSuccess = () => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
})

export const userLoginFailure = payload => ({
    type: actionTypes.USER_LOGIN_FAILURE,
    payload
})