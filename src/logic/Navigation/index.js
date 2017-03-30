import { isReactNative } from '../Platform'

export const navigateTo = (api, scene, callback) => {
    if (isReactNative) {
        // https://reactnavigation.org/docs/intro/
        api.navigate(scene)
    }

    if (!isReactNative) {
        // https://github.com/ReactTraining/react-router/tree/master/packages/react-router
        api.push(scene)
    }

    if (callback) {
        callback()
    }
}