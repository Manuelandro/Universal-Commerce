import { combineReducers } from 'redux'
import LoginReducer from '../scenes/Login/LoginReducer'
import RegisterReducer from '../scenes/Register/RegisterReducer'
import AboutReducer from '../scenes/About/AboutReducer'

const reducers = combineReducers({
    login: LoginReducer,
    about: AboutReducer,
    register: RegisterReducer
})

export default reducers