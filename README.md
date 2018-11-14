# greathelp

> javascirpt util

## Build Setup

``` bash
# install
$ npm install greathelp
```
### **Contents**
* `array`
  * [`chunkArray`](#chunkArray)
* `string`
  * [`lPad`](#lPad)
* `url`
  * [`getParameter`](#getParameter)
* `validation`
    * [`isUrl`](#isUrl)


## chunkArray
```js
const { chunkArray } = require('greathelp');
console.log(chunkArray([1, 2, 3], 2));
// [[1,2],[3]]
```

### lPad

```js
const { lPad } = require('greathelp');
console.log(lPad(10, 4, 0));
// 0010
```

### getParameter

```js
const { getParameter } = require('greathelp');
const url = 'https://www.test.test/?test=1&test2=2';
const url2 = 'https://www.test.test/';
console.log('url', getParameter(url));
console.log('url2', getParameter(url2));
// url {test: "1", test2: "2"}
// url2 {}
```

### isUrl
with hangul domain

```js
const { isUrl } = require('greathelp');
const url = 'https://ttt';
const url2 = 'abc';
const url3 = 'https://한글도메인.com/';
const url4 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
const url5 = 'https://192.0.1.1';
console.log('url', isUrl(url));
console.log('url2', isUrl(url2));
console.log('url3', isUrl(url3));
console.log('url4', isUrl(url4));
console.log('url5', isUrl(url5));
// url false
// url2 false
// url3 true
// url4 true
// url5 true
```

## Author

**QuackQuackQuack**

+ [github/QuackQuackQuack](https://github.com/QuackQuackQuack)

## License
Copyright (c) 2018 QuackQuackQuack
Released under the MIT license

***

