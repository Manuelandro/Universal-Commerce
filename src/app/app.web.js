import firebase from 'firebase'
import React, { Component } from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { history, client } from './store/web'
import RouterComponent from './routers/web'
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