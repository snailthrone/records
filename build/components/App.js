'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Albums = require('./Albums');

var _Albums2 = _interopRequireDefault(_Albums);

var _Buttons = require('./Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Container = _styledComponents2.default.div(['color:#222;display:block;font-family:\'Questrial\',Verdana,sans-serif;']);

const Header = _styledComponents2.default.h1(['background:#222;color:#fff;font-size:30px;margin:auto auto 20px auto;padding:20px 0;text-align:center;width:100%;']);

class App extends _react2.default.Component {

  constructor(props) {
    super(props);
    this.state = {
      buttons: null,
      path: this.props.path,
      collection: [],
      upcoming: [],
      whislist: [],
      data: [],
      value: ''
    };
    this.changeList = this.changeList.bind(this);
    this.searchContent = this.searchContent.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    _axios2.default.get(this.state.path + "/data/data_collection.json").then(result => this.setState(state => Object.assign(state, { 'collection': result.data }, { data: result.data }))).catch(error => console.error(error));
    _axios2.default.get(this.state.path + "/data/data_upcoming.json").then(result => this.setState(state => Object.assign(state, { 'upcoming': result.data }))).catch(error => console.error(error));
    _axios2.default.get(this.state.path + "/data/data_wantlist.json").then(result => this.setState(state => Object.assign(state, { 'whislist': result.data }))).catch(error => console.error(error));
  }

  changeList(value) {
    ;
    if (value === 'collection') {
      this.setState(state => Object.assign(state, { 'data': this.state.collection }));
    } else if (value === 'upcoming') {
      this.setState(state => Object.assign(state, { 'data': this.state.upcoming }));
    } else {
      this.setState(state => Object.assign(state, { 'data': this.state.whislist }));
    }
  }

  searchContent(event) {
    let value = event.target.value.toLowerCase();
    this.setState(state => Object.assign(state, { 'value': value }));
  }

  render() {
    return _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        Header,
        null,
        'Records'
      ),
      this.state.data.length > 0 ? _react2.default.createElement(_Albums2.default, { data: this.state.data, value: this.state.value }) : _react2.default.createElement(
        'p',
        null,
        'Ladataan...'
      ),
      _react2.default.createElement(_Buttons2.default, { changeList: this.changeList, searchContent: this.searchContent, value: this.state.value })
    );
  }
}
exports.default = App;