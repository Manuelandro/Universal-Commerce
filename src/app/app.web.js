import firebase from 'firebase'
import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/web'
import RouterComponent from './routers/web'
import { firebaseInit } from '../logic/Firebase/init'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
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

  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history}>
          <div style={{ flex: 1 }}>
            <RouterComponent />
          </div>
        </ConnectedRouter>
      </ApolloProvider>
    )
  }

}

export default UniversalApp