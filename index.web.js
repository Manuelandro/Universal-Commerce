/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* global document:false */

import { AppRegistry } from 'react-native'
import UniversalApp from './src/app/app'

AppRegistry.registerComponent('UniversalApp', () => UniversalApp)
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('react-root')
})