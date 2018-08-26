'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _styledComponents = require('styled-components');

var _App = require('./components/App/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0 */ // --> OFF
const app = new _express2.default();

const sheet = new _styledComponents.ServerStyleSheet();
const markdown = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, { path: '' })));
const styles = sheet.getStyleTags();

const shouldCompress = (request, result) => {
  if (request.headers['x-no-compression']) {
    return false;
  }
  return _compression2.default.filter(request, result);
};

app.use((0, _compression2.default)({ filter: shouldCompress }));
app.use((0, _helmet2.default)());
app.use('/', _express2.default.static(_path2.default.join(__dirname, '/../public')));
app.set('port', process.env.PORT || 8080);

const letsEncryptReponse = process.env.CERTBOT_RESPONSE;

app.get('/.well-known/acme-challenge/:content', (request, result) => result.send(letsEncryptReponse));

app.get('/', (request, result) => {
  result.send(`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <title>Records</title>
          <link rel="shortcut icon" type="image/x-icon" href="/img/favicon.ico">
          <meta name="author" content="Eemeli Martti">
          <meta name="description" content="Records">
          <meta name="theme-color" content="#222222">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="manifest" href="/manifest.json">
          <style type="text/css">
            body {
              margin: 0;
              padding: 0;
            }
          </style>
          ${styles}
        </head>
        <body>
          <div id="app">${markdown}</div>
          <script type="text/javascript" src="app.js" async></script>
        </body>
      </html>
  `);
});

app.listen(app.get('port'), () => console.log('Application running, port: ', app.get('port')));