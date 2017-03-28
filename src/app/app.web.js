import React, { Component } from 'react'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo'
import store from './store'
import ProductList from '../scenes/ProductList/ProductList.web'


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
          <ProductList />
        </div>
      </ApolloProvider>
    )
  }

}

export default UniversalApp