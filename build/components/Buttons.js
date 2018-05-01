'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Buttons = _styledComponents2.default.div(['background:inherit;bottom:0;left:0;margin:auto;position:fixed;width:100%;z-index:100;']);

const Button = _styledComponents2.default.div(['background:#222;color:#fff;display:inline-block;font-weight:bold;margin:auto;padding:20px 0;text-align:center;top:20px;width:', '%;&:hover{background:#7F7E7E;cursor:pointer;}'], 100 / 3);

const Label = _styledComponents2.default.label(['']);

exports.default = props => _react2.default.createElement(
  Buttons,
  null,
  _react2.default.createElement(_Input2.default, { onChange: props.searchContent, value: props.value }),
  _react2.default.createElement(
    Button,
    { onClick: event => props.changeList('collection') },
    'Collection'
  ),
  _react2.default.createElement(
    Button,
    { onClick: event => props.changeList('upcoming') },
    'Upcoming'
  ),
  _react2.default.createElement(
    Button,
    { onClick: event => props.changeList('wantlist') },
    'Wishlist'
  )
);