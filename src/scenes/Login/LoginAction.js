import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import * as consts from './constants'

export const saveField = payload => dispatch => dispatch({ type: consts.SAVE_FIELD, payload })

export const loginStart = payload => dispatch => {
    dispatch(loaderStart())
    dispatch(loginProcess(payload))
}

export const loginProcess = ({ email, password }) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => dispatch(loginSuccess(user)))
        .catch(error => dispatch(loginFailed(error)))
}

export const loginSuccess = payload => dispatch => {
    dispatch({ type: consts.LOGIN_SUCCESS, payload })
    Actions.main()
}

export const loginFailed = payload => ({ type: consts.LOGIN_FAILED, payload })

export const loaderStart = () => ({ type: consts.LOADER_START })