'use strict';

/**
 * isUrl
 * @param {string} url url
 * @return {boolean} boolean
 */
module.exports = function isUrl(url) {
  const pattern = /^(?:http(s)?:\/\/)?[\wㄱ-힣.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]ㄱ-힣@!\$&%'\(\)\*\+,;=.|{}"<>^]+$/;
  return pattern.test(url);
};