'use strict';

const { matchKey, searchKeyGetValue, searchKeyDelete, getFinalDataKey } = require('./src/object');
const { findType, isUrl, isSpace } = require('./src/validation');
const { sumAll } = require('./src/math');
const chunkArray = require('./src/array/chunkArray');
const lPad = require('./src/string/lPad');
const getParameter = require('./src/url/getParameter');

module.exports = {
  matchKey,
  searchKeyGetValue,
  searchKeyDelete,
  getFinalDataKey,
  sumAll,
  findType,
  isUrl,
  isSpace,
  chunkArray,
  lPad,
  getParameter,
};