/* global window:false */
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createBrowserHistory } from 'history'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import localForage from 'localforage'
import thunk from 'redux-thunk'
import reducers from '../reducers'

const initialState = {}
const history = createBrowserHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const theReducer = combineReducers({
    ...reducers,
    routing: routerReducer
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-redux
const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        routerMiddleware(history)
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
    { storage: localForage }
)


if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default)
    })
}


export default store
export { history }