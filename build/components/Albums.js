'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-size: 14px;\n  line-height: 1.75;\n  margin: auto;\n  max-width: 600px;\n  padding-bottom: 100px;\n  width: 95%;\n  @media screen and (min-width: 600px) {\n    font-size: 18px;\n    width: 100%;\n  }\n'], ['\n  font-size: 14px;\n  line-height: 1.75;\n  margin: auto;\n  max-width: 600px;\n  padding-bottom: 100px;\n  width: 95%;\n  @media screen and (min-width: 600px) {\n    font-size: 18px;\n    width: 100%;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-weight: 700;\n  margin: auto auto 10px auto;\n'], ['\n  font-weight: 700;\n  margin: auto auto 10px auto;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tmargin: auto auto 15px auto;\n\ttext-decoration: ', ';\n'], ['\n\tmargin: auto auto 15px auto;\n\ttext-decoration: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral([''], ['']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Albums = _styledComponents2.default.div(_templateObject);

var Heading = _styledComponents2.default.h3(_templateObject2);

var Album = _styledComponents2.default.p(_templateObject3, function (props) {
	return props.bought ? 'line-through' : 'none';
});

var AlbumArtist = _styledComponents2.default.span(_templateObject4);
var AlbumTitle = _styledComponents2.default.span(_templateObject4);
var AlbumDate = _styledComponents2.default.span(_templateObject4);

exports.default = function (props) {
	return _react2.default.createElement(
		Albums,
		null,
		_react2.default.createElement(
			Heading,
			null,
			'Artist \u2013 Album (date)'
		),
		props.data.map(function (data, i) {
			if (data.artist.toLowerCase().match(props.value) || data.album.toLowerCase().match(props.value) || data.date.match(props.value)) {
				return _react2.default.createElement(
					Album,
					{ bought: data.bought, key: i },
					i + 1,
					'.',
					_react2.default.createElement(
						AlbumArtist,
						{ className: 'artist' },
						' ',
						data.artist
					),
					' \u2013',
					_react2.default.createElement(
						AlbumTitle,
						{ className: 'album' },
						' ',
						data.album,
						' '
					),
					data.date && data.date != 'null' && _react2.default.createElement(
						AlbumDate,
						{ className: 'date' },
						'(',
						data.date,
						')'
					)
				);
			}
		})
	);
};