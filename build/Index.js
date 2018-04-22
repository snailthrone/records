'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _styledComponents = require('styled-components');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _express2.default();
var sheet = new _styledComponents.ServerStyleSheet();
var markdown = (0, _server.renderToString)(sheet.collectStyles(_react2.default.createElement(_App2.default, { path: '' })));
var styles = sheet.getStyleTags();

app.use('/', _express2.default.static(_path2.default.join(__dirname, '/../public')));
app.set('port', process.env.PORT || 8080);

app.get('/', function (req, res) {
  res.send('\n    <!DOCTYPE html>\n      <html>\n        <head>\n          <link rel="manifest" href="/manifest.json">\n          <title>foo</title>\n          <style type="text/css">\n            body {\n              margin: 0;\n              padding: 0;\n            }\n          </style>\n          ' + styles + '\n        </head>\n        <body>\n          <div id="app">' + markdown + '</div>\n          <script type="text/javascript" src="js/bundle.js" async></script>\n        </body>\n      </html> \n  ');
});

app.listen(app.get('port'), function () {
  return console.log('Application running, port: ', app.get('port'));
});