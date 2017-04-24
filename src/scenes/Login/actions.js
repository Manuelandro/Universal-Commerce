import * as consts from './constants'

export const saveField = payload => dispatch => dispatch({ type: consts.SAVE_FIELD, payload })

export const loginStart = payload => dispatch => {
    dispatch(loaderStart())
    dispatch(loginProcess(payload))
}

export const loginProcess = () => dispatch => {
    /* some func */
}

export const loginSuccess = payload => dispatch => {
    dispatch({ type: consts.LOGIN_SUCCESS, payload })
}

export const loginFailed = payload => ({ type: consts.LOGIN_FAILED, payload })

export const loaderStart = () => ({ type: consts.LOADER_START })

export const resetScene = () => dispatch => dispatch({ type: consts.RESET_SCENE })