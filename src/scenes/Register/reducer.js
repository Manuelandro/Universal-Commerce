import * as consts from './constants'
import initialState from './initialState.json'

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case consts.LOADER_START:
            return { ...state, loading: true }
        case consts.LOADER_END:
            return { ...state, loading: false }
        case consts.SAVE_FIELD:
            return { ...state, [payload.prop]: payload.value }
        case consts.REGISTER_START:
            return { ...state }
        case consts.REGISTER_PROCESS:
            return { ...state }
        case consts.REGISTER_SUCCESS:
            return { ...state, changeScene: true }
        case consts.REGISTER_FAILED:
            return { ...state, changeScene: false }
        case consts.RESET_SCENE:
            return { ...state, changeScene: false }
        default:
            return { ...state }
    }


}