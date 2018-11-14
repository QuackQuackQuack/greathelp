'use strict';

/**
 * 필요한 길이만큼 공백 문자열 삽입
 * @example
 *   {{lPad 1 3 0}}    // '001'
 * @param {string} digit 대상 문자열
 * @param {string} size 필요한 문자열 사이즈
 * @param {string} attatch 공백 채울 문자
 * @return {string} 사이즈만큼 공백 채워진 문자열
 * @api public
 */
module.exports = function lPad(digit, size, attatch) {
  const val = digit.toString();
  const str = attatch.toString();
  return str.repeat(Math.max(0, size - val.length)) + val;
};
