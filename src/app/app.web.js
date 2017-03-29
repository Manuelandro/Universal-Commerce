import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './store/web'
import RouterComponent from './routers/web'


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


  render() {
    return (
      <ApolloProvider store={store} client={client}>

          <div style={{ flex: 1 }}>
            <RouterComponent />
          </div>

      </ApolloProvider>
    )
  }

}

export default UniversalApp