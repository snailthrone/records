'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Albums = _styledComponents2.default.div(['font-size:14px;line-height:1.75;margin:auto;max-width:600px;padding-bottom:100px;width:95%;@media screen and (min-width:600px){font-size:18px;width:100%;}']);

const Heading = _styledComponents2.default.h3(['font-weight:700;margin:auto auto 10px auto;']);

const Album = _styledComponents2.default.p(['margin:auto auto 15px auto;text-decoration:', ';'], ({ bought }) => bought ? 'line-through' : 'none');

const AlbumArtist = _styledComponents2.default.span(['']);
const AlbumTitle = _styledComponents2.default.span(['']);
const AlbumDate = _styledComponents2.default.span(['']);

exports.default = props => _react2.default.createElement(
	Albums,
	null,
	_react2.default.createElement(
		Heading,
		null,
		'Artist \u2013 Album (date)'
	),
	props.data.map((data, i) => {
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