import * as consts from './constants'
import initialState from './LoginState.json'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case consts.LOADER_START:
            return { ...state, loading: true }
        case consts.LOADER_END:
            return { ...state, loading: false }
        case consts.LOGIN_START:
            return { ...state }
        case consts.LOGIN_SUCCESS:
            return { ...state, email: '', password: '', loading: false, error: '', user: payload }
        case consts.LOGIN_FAILED:
            return { ...state, loading: false, error: payload.message, password: '' }
        case consts.SAVE_FIELD:
            return { ...state, [payload.prop]: payload.value }
        default:
            return state
    }
}