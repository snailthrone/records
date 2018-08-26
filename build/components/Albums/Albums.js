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

const Container = _styledComponents2.default.ul(['list-style:none;margin:10px auto auto auto;max-width:600px;padding:0 0 100px 0;width:90%;@media screen and (min-width:600px){width:100%;}']);

const Heading = _styledComponents2.default.h3(['font-family:\'Questrial\',Verdana,sans-serif;font-size:16px;font-weight:700;margin:auto auto 10px auto;']);

const Album = _styledComponents2.default.li(['font-family:\'Questrial\',Verdana,sans-serif;font-size:12px;line-height:1.35em;margin:auto auto .4em auto;text-decoration:', ';@media screen and (min-width:600px){font-size:14px;}'], ({ bought }) => bought ? 'line-through' : 'none');

const Albums = ({ data, value }) => _react2.default.createElement(
  Container,
  null,
  _react2.default.createElement(
    Heading,
    null,
    'Artist \u2013 Album (date)'
  ),
  data.map(({
    artist, album, bought, date
  }, i) => {
    if (artist.toLowerCase().match(value.toLowerCase()) || album.toLowerCase().match(value.toLowerCase()) || date.match(value.toLowerCase())) {
      return _react2.default.createElement(
        Album,
        { bought: bought, key: `album-'${i + 1}` },
        date ? `${artist} – ${album} (${date})` : `${artist} – ${album}`
      );
    }
    return false;
  })
);

Albums.propTypes = {
  data: _propTypes2.default.arrayOf(() => {}).isRequired,
  value: _propTypes2.default.string
};

Albums.defaultProps = {
  value: ''
};

exports.default = Albums;