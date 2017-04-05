/* global window:false */
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import { host } from '../../../server/config'
import reducers from '../reducers'


// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADSTATE__
// Allow the passed state to be garbage-collected
delete window.__PRELOADSTATE__

const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://${host}/graphql`,
    })
})

const theReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
    apollo: client.reducer()
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        routerMiddleware(history),
        client.middleware()
    ),
    autoRehydrate()
)

const store = createStore(
    theReducer,
    preloadedState,
    enhancer
)

persistStore(
    store,
    {
        storage: localForage,
        debounce: 500
    }
)


export default store
export { history, client }