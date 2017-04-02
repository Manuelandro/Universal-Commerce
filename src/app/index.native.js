import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { client, history } from './store/native'
import UniversalApp from './app.native'

const UniversalCommerce = () =>
    <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history}>
            <UniversalApp />
        </ConnectedRouter>
    </ApolloProvider>

export default UniversalCommerce