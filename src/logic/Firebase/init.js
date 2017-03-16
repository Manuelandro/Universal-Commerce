import firebase from 'firebase'

const firebaseInit = () => {
    firebase.initializeApp({
        apiKey: 'AIzaSyBCB4z-dDeXMNiT8tp0qDHfXa-tUfnKUs0',
        authDomain: 'test-28248.firebaseapp.com',
        databaseURL: 'https://test-28248.firebaseio.com',
        storageBucket: 'test-28248.appspot.com',
        messagingSenderId: '804539823082'
    })
}

export { firebaseInit }