import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/native'
import RouterComponent from './routers/native'
import { firebaseInit } from '../logic/Firebase/init'
import { Button, Spinner } from '../components/native'

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
        return
      default:
        return (
          <Spinner />
        )
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </Provider>
    )
  }

}

export default UniversalApp