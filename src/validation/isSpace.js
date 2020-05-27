'use strict';

/**
 * isSpace
 * @example isSpace('te st') => true,
 * @param {string} string string
 * @returns {boolean} boolean
 */
module.exports = function isSpace(string) {
  return string.search(/\s/) !== -1;
};
