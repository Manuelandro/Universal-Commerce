import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import Header from '../components/Header'
import ProductList from '../scenes/ProductList/ProductList'

class UniversalApp extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBCB4z-dDeXMNiT8tp0qDHfXa-tUfnKUs0',
      authDomain: 'test-28248.firebaseapp.com',
      databaseURL: 'https://test-28248.firebaseio.com',
      storageBucket: 'test-28248.appspot.com',
      messagingSenderId: '804539823082'
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Universal App'} />
        <ProductList />
      </View>
    )
  }

}

export default UniversalApp