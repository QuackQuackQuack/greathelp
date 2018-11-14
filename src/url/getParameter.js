'use strict';

/**
 * get url parameter by object
 * @example
 * const url = "www.wemakeprice.com?test=1&test2=23";
 * urlToJson(url);
 * result
 * {
 *  test: 1,
 *  test2: 23,
 * }
 * @param  {string} url url
 * @return {object} object
 */
module.exports = function getParameter(url) {
  let hash;
  const params = {};

  if (url.indexOf('?') > -1) {
    const hashes = url.slice(url.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
      hash = hashes[i].split('=');
      params[hash[0]] = hash[1];
    }
  }

  return params;
};