'use strict';

const { matchKey, searchKeyGetValue } = require('./src/object');
const { isUrl, isSpace } = require('./src/validation');
const chunkArray = require('./src/array/chunkArray');
const lPad = require('./src/string/lPad');
const getParameter = require('./src/url/getParameter');

module.exports = {
  matchKey,
  searchKeyGetValue,
  isUrl,
  isSpace,
  chunkArray,
  lPad,
  getParameter,
};
