import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'

import App from './components/App/App'

const app = document.getElementById('app')

hydrate(<App path={window.location.href} />, app)
