import firebase from 'firebase'
import * as consts from './constants'

export const saveField = payload => dispatch => dispatch({ type: consts.SAVE_FIELD, payload })

export const loaderStart = () => ({ type: consts.LOADER_START })

export const registerStart = payload => dispatch => {
    dispatch(loaderStart())
    dispatch(registerProcess(payload))
}

export const registerProcess = payload => dispatch => {
    console.log(payload)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => dispatch(registerUserInfo(user, payload)))
        .catch(error => dispatch(registerFailed(error)))
}

export const registerUserInfo = (user, payload) => dispatch => {
    const { firstname, lastname, email } = payload
    firebase.database().ref(`users/${user.uid}/userInfo`)
        .push({ firstname, lastname, email })
    dispatch(registerSuccess(payload))
}

export const registerSuccess = payload => dispatch => dispatch({ type: consts.REGISTER_SUCCESS, payload })

export const registerFailed = payload => dispatch => dispatch({ type: consts.REGISTER_FAILED, payload })