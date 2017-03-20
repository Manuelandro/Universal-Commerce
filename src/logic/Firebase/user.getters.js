import firebase from 'firebase'

export const getLogin = (email, password) =>
    firebase.auth()
        .signInWithEmailAndPassword(email, password)

export const getUser = () => firebase.auth()