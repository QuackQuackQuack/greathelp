'use strict';

/**
 * lPad
 * @example
 *   {{lPad 1 3 0}}    // '001'
 * @param {string} digit target character
 * @param {string} size Required string size
 * @param {string} attatch Space fill character
 * @return {string} reslt character
 * @api public
 */
module.exports = function lPad(digit, size, attatch) {
  const val = digit.toString();
  const str = attatch.toString();
  return str.repeat(Math.max(0, size - val.length)) + val;
};
