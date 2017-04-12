/* global window:false */
import createMemoryHistory from 'history/createMemoryHistory'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage, Platform } from 'react-native'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import thunk from 'redux-thunk'
import devTools from 'remote-redux-devtools'
import reducers from '../reducers/'
import Routes from '../routes/native'
import { host } from '../../../server/config'

const initialState = {}
const history = createMemoryHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const routerReducer = (state, action) => {
    const newState = Routes.router.getStateForAction(action, state)
    return newState || state
}

const apolloClient = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: `http://${host}/graphql`,
    })
})

const theReducer = combineReducers({
    ...reducers,
    routing: routerReducer,
    apollo: apolloClient.reducer()
})

// http://stackoverflow.com/questions/35622588/how-to-reset-the-state-of-a-redux-store
const rootReducer = (state, action) => {
    let newState = state

    if (action.type === 'RESET_WHOLE_STATE') {
        newState = undefined
    }

    return theReducer(newState, action)
}

const enhancer = composeEnhancers(
    autoRehydrate(),
    applyMiddleware(
        thunk,
        createActionBuffer(REHYDRATE),
        apolloClient.middleware()
    ),
    devTools({
        name: Platform.OS,
        hostname: 'localhost',
        port: 5678
    }),
)


const store = createStore(
    rootReducer,
    initialState,
    enhancer
)

persistStore(
    store,
    {
        blacklist: ['routing'], // https://medium.com/the-react-native-log/react-navigation-with-redux-and-immutable-js-1385c0457cb8#7e75
        storage: AsyncStorage,
        debounce: 500
    }
)


export default store
export { apolloClient, history }