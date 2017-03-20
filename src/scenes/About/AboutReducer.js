import { SELECT_SECTION } from './constants'
import data from './AboutList.json'


export default (state = data, { type, payload }) => {
    switch (type) {
        case SELECT_SECTION:
            return data.map((val) => {
                const newObj = val
                newObj.selected = (payload === val.id)
                return newObj
            })
        default:
            return state
    }
}