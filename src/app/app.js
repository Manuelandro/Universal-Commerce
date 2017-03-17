import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { firebaseInit } from '../logic/Firebase/init'
import OurProvider from '../components/Provider'
import Header from '../components/Header'
import Login from '../scenes/Login/Login'
// import ProductList from '../scenes/ProductList/ProductList'
import { Button, Spinner } from '../components/common'


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
      <OurProvider>
        <View style={{ flex: 1 }}>
          <Header headerText={'Universal App'} />
          {this.renderContent()}
        </View>
      </OurProvider>
    )
  }

}

export default UniversalApp