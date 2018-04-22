import 'babel-polyfill';
import React from 'react';
import { hydrate } from 'react-dom';

import App from './components/App.jsx';

let app = document.getElementById('app');

hydrate(<App path={window.location.href} />, app);