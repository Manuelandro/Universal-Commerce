/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* global document:false */

import React from 'react'
import { render } from 'react-dom'
import UniversalApp from './src/app/app.web'

render(
  React.createElement(UniversalApp),
  document.getElementById('react-root')
)