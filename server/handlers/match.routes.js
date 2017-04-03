import fetch from 'node-fetch'
import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { createNetworkInterface, ApolloProvider, renderToStringWithData } from 'react-apollo'
import createApolloClient from '../helpers/create.apollo.client'
import Html from '../helpers/create.html'
import reducers from '../../src/app/reducers'
import routes from '../../src/app/routes/web'
import { port } from '../config'
import UniversalApp from '../../src/app/container/web'

// https://github.com/apollographql/apollo-client/issues/177#issuecomment-217136452
global.fetch = fetch


const matchRoutesHandler = (req, res) => {
    // http://redux.js.org/docs/recipes/ServerRendering.html
    // http://dev.apollodata.com/react/server-side-rendering.html

    const client = createApolloClient({
        ssrMode: true,
        networkInterface: createNetworkInterface({
            uri: `http://localhost:${port}/graphql`,
            opts: {
                credentials: 'same-origin',
                // transfer request headers to networkInterface so that they're accessible to proxy server
                // Addresses this issue: https://github.com/matthew-andrews/isomorphic-fetch/issues/83
                headers: req.headers,
            },
        }),
    })

    const store = createStore(combineReducers({ ...reducers }), {})

    const UniversalCommerce = (
        <ApolloProvider client={client} store={store}>
            <StaticRouter>
                <UniversalApp />
            </StaticRouter>
        </ApolloProvider>
    )

    renderToStringWithData(UniversalCommerce)
        .then((content) => {
            const data = client.store.getState().apollo.data
            res.status(200)
            const html = (
                <Html content={content.markup} state={{ ...store.getState(), apollo: { data } }} />
            )

            res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`)
        })
        .catch((e) => {
            console.error('RENDERING ERROR:', e)
            res.status(500)
            res.end(`An error occurred:\n\n${e.stack}`)
        })
}

export default matchRoutesHandler