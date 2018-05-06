import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';

import App from './components/App.jsx';

let app = document.getElementById('app');

hydrate(<App path={window.location.href} />, app);

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