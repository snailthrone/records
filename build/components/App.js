'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  color: #222;\n  display: block;\n  font-family: \'Questrial\', Verdana, sans-serif;\n'], ['\n  color: #222;\n  display: block;\n  font-family: \'Questrial\', Verdana, sans-serif;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background: #222;\n  color: #fff;\n  font-size: 30px;\n  margin: auto auto 20px auto;\n  padding: 20px 0;\n  text-align: center;\n  width: 100%;\n'], ['\n  background: #222;\n  color: #fff;\n  font-size: 30px;\n  margin: auto auto 20px auto;\n  padding: 20px 0;\n  text-align: center;\n  width: 100%;\n']);

require('babel-polyfill');

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var Header = _styledComponents2.default.h1(_templateObject2);

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			path: _this.props.path,
			collection: [],
			upcoming: [],
			whislist: [],
			data: [],
			value: ''
		};
		_this.changeList = _this.changeList.bind(_this);
		_this.searchContent = _this.searchContent.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.getData();
		}
	}, {
		key: 'getData',
		value: function getData() {
			var _this2 = this;

			_axios2.default.get(this.state.path + "/data/data_collection.json").then(function (result) {
				return _this2.setState(function (state) {
					return Object.assign(state, { 'collection': result.data }, { data: result.data });
				});
			}).catch(function (error) {
				return console.error(error);
			});
			_axios2.default.get(this.state.path + "/data/data_upcoming.json").then(function (result) {
				return _this2.setState(function (state) {
					return Object.assign(state, { 'upcoming': result.data });
				});
			}).catch(function (error) {
				return console.error(error);
			});
			_axios2.default.get(this.state.path + "/data/data_wantlist.json").then(function (result) {
				return _this2.setState(function (state) {
					return Object.assign(state, { 'whislist': result.data });
				});
			}).catch(function (error) {
				return console.error(error);
			});
		}
	}, {
		key: 'changeList',
		value: function changeList(value) {
			var _this3 = this;

			;
			if (value === 'collection') {
				this.setState(function (state) {
					return Object.assign(state, { 'data': _this3.state.collection });
				});
			} else if (value === 'upcoming') {
				this.setState(function (state) {
					return Object.assign(state, { 'data': _this3.state.upcoming });
				});
			} else {
				this.setState(function (state) {
					return Object.assign(state, { 'data': _this3.state.whislist });
				});
			}
		}
	}, {
		key: 'searchContent',
		value: function searchContent(event) {
			var value = event.target.value.toLowerCase();
			this.setState(function (state) {
				return Object.assign(state, { 'value': value });
			});
		}
	}, {
		key: 'render',
		value: function render() {
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
	}]);

	return App;
}(_react2.default.Component);

exports.default = App;