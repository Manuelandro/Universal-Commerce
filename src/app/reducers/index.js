import appReducer from './reducer'
import CheckoutReducer from '../../scenes/Checkout/reducer'
import LoginReducer from '../../scenes/Login/reducer'
import RegisterReducer from '../../scenes/Register/reducer'

const reducers = {
    app: appReducer,
    checkout: CheckoutReducer,
    login: LoginReducer,
    register: RegisterReducer,
}

export default reducers