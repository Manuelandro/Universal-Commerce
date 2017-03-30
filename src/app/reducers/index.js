import appReducer from './reducer'
import LoginReducer from '../../scenes/Login/reducer'
import RegisterReducer from '../../scenes/Register/reducer'
import AboutReducer from '../../scenes/About/reducer'

const reducers = {
    app: appReducer,
    login: LoginReducer,
    about: AboutReducer,
    register: RegisterReducer
}

export default reducers