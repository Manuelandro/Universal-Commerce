import React from 'react'
import { ApolloProvider } from 'react-apollo'
import { ConnectedRouter } from 'react-router-redux'
import store, { client, history } from './store/web'
import UniversalApp from './app.web'

const UniversalCommerce = () =>
    <ApolloProvider store={store} client={client}>
        <ConnectedRouter history={history}>
            <UniversalApp />
        </ConnectedRouter>
    </ApolloProvider>

export default UniversalCommerce