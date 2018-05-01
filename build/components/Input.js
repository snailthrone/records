'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents2.default.div(['background:#FFF;margin:auto;max-width:600px;padding:10px 0;width:95%;']);

const Input = _styledComponents2.default.input(['border:1px solid #7F7E7E;margin:auto;padding:10px 0;text-indent:5px;width:100%;']);

exports.default = props => _react2.default.createElement(
  Container,
  null,
  _react2.default.createElement(Input, { type: 'text', name: 'search-field', placeholder: props.placeholder ? props.placeholder : 'Search', value: props.value, onChange: props.onChange })
);