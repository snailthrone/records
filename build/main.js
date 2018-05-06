'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _App = require('./components/App.jsx');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = document.getElementById('app');

(0, _reactDom.hydrate)(_react2.default.createElement(_App2.default, { path: window.location.href }), app);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/sw.js').then(registration => {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, err => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}