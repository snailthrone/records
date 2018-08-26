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

var _Input = require('../Input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Wrapper = _styledComponents2.default.div.withConfig({
  componentId: 't8at1t-0'
})(['background-color:inherit;bottom:0;left:0;margin:auto;position:fixed;width:100%;z-index:100;']);

const Button = _styledComponents2.default.div.withConfig({
  componentId: 't8at1t-1'
})(['background-color:#222;color:#fff;display:inline-block;font-family:\'Questrial\',Verdana,sans-serif;font-size:14px;font-weight:bold;margin:auto;padding:20px 0;text-align:center;width:', '%;&:hover{background:#7f7e7e;cursor:pointer;}'], 100 / 4);

const Buttons = ({ changeList, searchContent, value }) => _react2.default.createElement(
  Wrapper,
  null,
  _react2.default.createElement(_Input2.default, {
    className: 'app__search-field',
    onChange: searchContent,
    value: value
  }),
  _react2.default.createElement(
    Button,
    {
      className: 'app__button',
      onClick: () => changeList('collection')
    },
    'CD'
  ),
  _react2.default.createElement(
    Button,
    {
      className: 'app__button',
      onClick: () => changeList('upcoming')
    },
    'Coming'
  ),
  _react2.default.createElement(
    Button,
    {
      className: 'app__button',
      onClick: () => changeList('wishlist')
    },
    'Wishlist'
  ),
  _react2.default.createElement(
    Button,
    {
      className: 'app__button',
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