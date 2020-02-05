import actionTypes from "../actionTypes/"

export const userLogoutSuccess = history => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    history
})

export const userLogoutFailure = payload => ({
    type: actionTypes.USER_LOGIN_FAILURE,
    payload
})