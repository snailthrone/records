'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Albums = require('./Albums');

var _Albums2 = _interopRequireDefault(_Albums);

var _Buttons = require('./Buttons');

var _Buttons2 = _interopRequireDefault(_Buttons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0 */ // --> OFF
const Container = _styledComponents2.default.div(['color:#222222;display:block;font-family:\'Questrial\',Verdana,sans-serif;']);

const Header = _styledComponents2.default.h1(['background-color:#222222;color:#FFFFFF;font-size:30px;margin:auto auto 20px auto;padding:20px 0;text-align:center;width:100%;']);
class App extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { path } = this.props;
    _axios2.default.get(`${path}/data/data_collection.json`).then(({ data }) => {
      this.setState(state => Object.assign(state, { collection: data, data }));
    }).catch(error => console.error(error));
    _axios2.default.get(`${path}/data/data_upcoming.json`).then(({ data }) => {
      this.setState(state => Object.assign(state, { upcoming: data }));
    }).catch(error => console.error(error));
    _axios2.default.get(`${path}/data/data_wantlist.json`).then(({ data }) => {
      this.setState(state => Object.assign(state, { whislist: data }));
    }).catch(error => console.error(error));
  }

  changeList(value) {
    const { collection, upcoming, whislist } = this.state;
    if (value === 'collection') {
      this.setState(state => Object.assign(state, { data: collection }));
    } else if (value === 'upcoming') {
      this.setState(state => Object.assign(state, { data: upcoming }));
    } else {
      this.setState(state => Object.assign(state, { data: whislist }));
    }
  }

  searchContent(event) {
    const value = event.target.value.toLowerCase();
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
      data.length > 0 ? _react2.default.createElement(_Albums2.default, {
        data: data,
        value: value
      }) : _react2.default.createElement(
        'p',
        null,
        'Ladataan...'
      ),
      _react2.default.createElement(_Buttons2.default, {
        changeList: this.changeList,
        searchContent: this.searchContent,
        value: value
      })
    );
  }
}

App.propTypes = {
  path: _propTypes2.default.string
};

App.defaultProps = {
  path: ''
};

exports.default = App;