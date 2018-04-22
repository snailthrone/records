import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './components/App.jsx';

let app = document.getElementById('app');

render(<App />, app);