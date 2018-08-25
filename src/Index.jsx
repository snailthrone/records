/* eslint no-console: 0 */ // --> OFF
import 'babel-polyfill'
import React from 'react'
import { hydrate } from 'react-dom'

import App from './components/App/App'

const app = document.getElementById('app')

hydrate(<App path={window.location.href} />, app)

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: './' })
    .then(() => console.log('Service worker is registered'))
    .catch(error => console.log('Error: ', error))
} else {
  console.log('Service worker is not supported')
}
