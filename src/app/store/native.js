/* global window:false */
import createMemoryHistory from 'history/createMemoryHistory'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import { ApolloClient, createNetworkInterface } from 'react-apollo'
import { persistStore, autoRehydrate } from 'redux-persist'
import thunk from 'redux-thunk'
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
        blacklist: ['routing'], // https://medium.com/the-react-native-log/react-navigation-with-redux-and-immutable-js-1385c0457cb8#7e75
        storage: AsyncStorage,
        debounce: 500
    }
)


export default store
export { client, history }