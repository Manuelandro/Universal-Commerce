/* global document:false */

import React from 'react'
import { render } from 'react-dom'
import UniversalCommerce from './src/app/index.web'

render(
    React.createElement(UniversalCommerce),
    document.getElementById('react-root')
)