'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #FFF;\n  margin: auto;\n  max-width: 600px;\n  padding: 10px 0;\n  width: 95%;\n'], ['\n  background: #FFF;\n  margin: auto;\n  max-width: 600px;\n  padding: 10px 0;\n  width: 95%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  border: 1px solid #7F7E7E;\n  margin: auto;\n  padding: 10px 0;\n  text-indent: 5px;\n  width: 100%;\n'], ['\n  border: 1px solid #7F7E7E;\n  margin: auto;\n  padding: 10px 0;\n  text-indent: 5px;\n  width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Input = _styledComponents2.default.input(_templateObject2);

exports.default = function (props) {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(Input, { type: 'text', name: 'search-field', placeholder: props.placeholder ? props.placeholder : 'Search', value: props.value, onChange: props.onChange })
  );
};