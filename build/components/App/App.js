'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _data_collection = require('../../data/data_collection');

var _data_collection2 = _interopRequireDefault(_data_collection);

var _Albums = require('../Albums/Albums');

var _Albums2 = _interopRequireDefault(_Albums);

var _Buttons = require('../Buttons/Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _updateData = require('../update-data');

var _updateData2 = _interopRequireDefault(_updateData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0 */ // --> OFF
const Container = _styledComponents2.default.div.withConfig({
  componentId: 'sc5afz-0'
})(['color:#222;display:block;margin:auto;width:100%;']);

const Header = _styledComponents2.default.h1.withConfig({
  componentId: 'sc5afz-1'
})(['background-color:#222;color:#fff;font-family:\'Questrial\',Verdana,sans-serif;font-size:30px;margin:auto;padding:20px 0;text-align:center;width:100%;']);
class App extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      data: _data_collection2.default,
      value: ''
    }, this.changeList = this.changeList.bind(this), this.searchContent = this.searchContent.bind(this), _temp;
  }

  changeList(value) {
    this.setState((0, _updateData2.default)(value));
  }

  searchContent(event) {
    const { value } = event.target;
    this.setState(state => Object.assign(state, { value }));
  }

  render() {
    const { data, value } = this.state;
    return _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Header,
        null,
        'Records'
      ),
      _react2.default.createElement(_Albums2.default, {
        data: data,
        value: value
      }),
      _react2.default.createElement(_Buttons2.default, {
        changeList: this.changeList,
        searchContent: this.searchContent,
        value: value
      })
    );
  }
}

exports.default = App;