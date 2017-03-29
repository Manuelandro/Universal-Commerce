/* global navigator:false */

const isReactNative =
    (typeof navigator === 'object') &&
    navigator.product === 'ReactNative'


const isClient = process.env.IS_BROWSER || isReactNative


export { isReactNative, isClient }