import firebase from 'firebase'


export const registerUser = ({ email, password }) =>
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)


export const createUser = (uid, data) =>
    firebase.database()
        .ref(`users/${uid}/userInfo`)
        .push(data)