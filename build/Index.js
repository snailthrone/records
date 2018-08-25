'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0 */ // --> OFF
const app = document.getElementById('app');

(0, _reactDom.hydrate)(_react2.default.createElement(_App2.default, { path: window.location.href }), app);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', { scope: './' }).then(() => console.log('Service worker is registered')).catch(error => console.log('Error: ', error));
} else {
  console.log('Service worker is not supported');
}