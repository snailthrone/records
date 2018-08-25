'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateData = undefined;

var _data_collection = require('../data/data_collection');

var _data_collection2 = _interopRequireDefault(_data_collection);

var _data_upcoming = require('../data/data_upcoming');

var _data_upcoming2 = _interopRequireDefault(_data_upcoming);

var _data_vinyls = require('../data/data_vinyls');

var _data_vinyls2 = _interopRequireDefault(_data_vinyls);

var _data_wantlist = require('../data/data_wantlist');

var _data_wantlist2 = _interopRequireDefault(_data_wantlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const updateData = exports.updateData = value => {
  if (value === 'collection') {
    return { data: _data_collection2.default };
  }
  if (value === 'upcoming') {
    return { data: _data_upcoming2.default };
  }
  if (value === 'wantlist') {
    return { data: _data_wantlist2.default };
  }
  return { data: _data_vinyls2.default };
};