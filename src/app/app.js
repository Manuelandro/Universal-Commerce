import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import Header from '../components/Header'
import { Button, Spinner } from '../components/common'
import Login from '../scenes/Login/Login'
import ProductList from '../scenes/ProductList/ProductList'
import { firebaseInit } from '../logic/Firebase/init'

class UniversalApp extends Component {
  constructor() {
    super()
    this.state = { logged: null }
  }

  componentWillMount() {
    firebaseInit()

    /* if the auth state changes */
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ logged: true })
      } else {
        this.setState({ logged: false })
      }
    })
  }

  renderContent() {
    switch (this.state.logged) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
        )
      case false:
        return (
          <Login />
        )
      default:
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Universal App'} />
        {this.renderContent()}
      </View>
    )
  }

}

export default UniversalApp