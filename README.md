# greathelp

> javascirpt util

## Build Setup

``` bash
# install
$ npm install greathelp
```
### **Contents**
* `String`
  * [`lPad`](#lPad)
* `url`
  * [`getParameter`](#getParameter)

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

## Author

**QuackQuackQuack**

+ [github/QuackQuackQuack](https://github.com/QuackQuackQuack)

## License
Copyright (c) 2018 QuackQuackQuack
Released under the MIT license

***

