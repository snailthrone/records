'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = _styledComponents2.default.div(['background:inherit;bottom:0;left:0;margin:auto;position:fixed;width:100%;z-index:100;']);

const Button = _styledComponents2.default.div(['background-color:#222222;color:#ffffff;display:inline-block;font-weight:bold;margin:auto;padding:20px 0;text-align:center;top:20px;width:', '%;&:hover{background:#7F7E7E;cursor:pointer;}'], 100 / 4);

const Buttons = ({ changeList, searchContent, value }) => _react2.default.createElement(
  Wrapper,
  null,
  _react2.default.createElement(_Input2.default, {
    onChange: searchContent,
    value: value
  }),
  _react2.default.createElement(
    Button,
    {
      onClick: () => changeList('collection')
    },
    'CD'
  ),
  _react2.default.createElement(
    Button,
    {
      onClick: () => changeList('upcoming')
    },
    'Upcoming'
  ),
  _react2.default.createElement(
    Button,
    {
      onClick: () => changeList('wantlist')
    },
    'Wishlist'
  ),
  _react2.default.createElement(
    Button,
    {
      onClick: () => changeList('vinyls')
    },
    'Vinyls'
  )
);

Buttons.propTypes = {
  changeList: _propTypes2.default.func.isRequired,
  searchContent: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.string.isRequired
};

exports.default = Buttons;