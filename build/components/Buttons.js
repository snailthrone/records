'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: inherit;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n'], ['\n  background: inherit;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: fixed;\n  width: 100%;\n  z-index: 100;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #222;\n  color: #fff;\n  display: inline-block;\n  font-weight: bold;\n  margin: auto;\n  padding: 20px 0;\n  text-align: center;\n  top: 20px;\n  width: ', '%;\n  &:hover {\n    background: #7F7E7E;\n    cursor: pointer;\n  }\n'], ['\n  background: #222;\n  color: #fff;\n  display: inline-block;\n  font-weight: bold;\n  margin: auto;\n  padding: 20px 0;\n  text-align: center;\n  top: 20px;\n  width: ', '%;\n  &:hover {\n    background: #7F7E7E;\n    cursor: pointer;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Buttons = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.div(_templateObject2, 100 / 3);

var Label = _styledComponents2.default.label(_templateObject3);

exports.default = function (props) {
  return _react2.default.createElement(
    Buttons,
    null,
    _react2.default.createElement(_Input2.default, { onChange: props.searchContent, value: props.value }),
    _react2.default.createElement(
      Button,
      { onClick: function onClick(event) {
          return props.changeList('collection');
        } },
      'Collection'
    ),
    _react2.default.createElement(
      Button,
      { onClick: function onClick(event) {
          return props.changeList('upcoming');
        } },
      'Upcoming'
    ),
    _react2.default.createElement(
      Button,
      { onClick: function onClick(event) {
          return props.changeList('wantlist');
        } },
      'Wishlist'
    )
  );
};