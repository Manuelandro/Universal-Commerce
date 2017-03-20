import { Actions } from 'react-native-router-flux'
import * as consts from './constants'
import { registerUser, createUser } from '../../logic/Firebase/user.setters'

export const saveField = payload => dispatch => dispatch({ type: consts.SAVE_FIELD, payload })

export const loaderStart = () => ({ type: consts.LOADER_START })

export const registerStart = payload => dispatch => {
    dispatch(loaderStart())
    dispatch(registerProcess(payload))
}

export const registerProcess = payload => dispatch => {
    registerUser(payload)
        .then(user => dispatch(registerUserInfo(user, payload)))
        .catch(error => dispatch(registerFailed(error)))
}

export const registerUserInfo = (user, payload) => dispatch => {
    const { firstname, lastname, email } = payload
    createUser(user.uid, { firstname, lastname, email })
        .then(() => dispatch(registerSuccess(payload)))
        .catch(error => dispatch(registerFailed(error)))
}

export const registerSuccess = payload => dispatch => {
    dispatch({ type: consts.REGISTER_SUCCESS, payload })
    Actions.main()
}

export const registerFailed = payload => dispatch =>
    dispatch({ type: consts.REGISTER_FAILED, payload })