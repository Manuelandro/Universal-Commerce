/* global window:false */
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
import reducers from '../reducers/'
import { firebaseInit } from '../../logic/Firebase/init'

const initialState = {}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// init firebase where the server can't read
firebaseInit()

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3001/graphql',
  })
})

const theReducer = combineReducers({
    ...reducers,
    apollo: client.reducer()
})

const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        client.middleware()
    ),
    autoRehydrate()
)


const store = createStore(
    theReducer,
    initialState,
    enhancer
)

persistStore(
    store,
    {
        storage: AsyncStorage,
        debounce: 500
    }
)


export default store