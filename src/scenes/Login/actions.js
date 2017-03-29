import * as consts from './constants'
import { getLogin } from '../../logic/Firebase/user.getters'

export const saveField = payload => dispatch => dispatch({ type: consts.SAVE_FIELD, payload })

export const loginStart = payload => dispatch => {
    dispatch(loaderStart())
    dispatch(loginProcess(payload))
}

export const loginProcess = ({ email, password }) => dispatch => {
    getLogin(email, password)
        .then(user => dispatch(loginSuccess(user)))
        .catch(error => dispatch(loginFailed(error)))
}

export const loginSuccess = payload => dispatch => {
    dispatch({ type: consts.LOGIN_SUCCESS, payload })
}

export const loginFailed = payload => ({ type: consts.LOGIN_FAILED, payload })

export const loaderStart = () => ({ type: consts.LOADER_START })

export const resetScene = () => dispatch => dispatch({ type: consts.RESET_SCENE })