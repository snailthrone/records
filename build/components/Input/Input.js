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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents2.default.div.withConfig({
  componentId: 's1cvj67l-0'
})(['background-color:#fff;margin:auto;max-width:600px;padding:10px 0;width:95%;']);

const Input = _styledComponents2.default.input.withConfig({
  componentId: 's1cvj67l-1'
})(['border:1px solid #7f7e7e;margin:auto;padding:10px 0;text-indent:5px;width:100%;']);

const SearchInput = ({ onChange, placeholder, value }) => _react2.default.createElement(
  Container,
  null,
  _react2.default.createElement(Input, {
    'aria-label': 'search',
    type: 'text',
    name: 'search-field',
    placeholder: placeholder,
    value: value,
    onChange: onChange
  })
);

SearchInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.string.isRequired
};

SearchInput.defaultProps = {
  placeholder: 'Search'
};

exports.default = SearchInput;