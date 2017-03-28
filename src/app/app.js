import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import store from './store'
import { firebaseInit } from '../logic/Firebase/init'
import RouterComponent from './router'
import { Button, Spinner } from '../components/common'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/graphql',
  })
})

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
      <ApolloProvider store={store} client={client}>
        <View style={{ flex: 1 }}>
          <RouterComponent />
        </View>
      </ApolloProvider>
    )
  }

}

export default UniversalApp

/* {this.renderContent()}*/