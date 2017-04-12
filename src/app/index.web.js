import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { apolloClient, history } from './store/web'
import UniversalApp from './container/web'

const UniversalCommerce = () =>
    <ApolloProvider store={store} client={apolloClient}>
        <ConnectedRouter history={history}>
            <UniversalApp />
        </ConnectedRouter>
    </ApolloProvider>

export default UniversalCommerce