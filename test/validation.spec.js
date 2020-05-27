const isUrl = require('../src/validation/isUrl'); 

describe("Validation|isUrl", () => {
  // url형식인지, 아닌지 여부를 반환한다.
  test('Returns whether or not in url format.', () => {
    const url = 'https://ttt';
    const url2 = 'abc';
    const url3 = 'https://한글도메인.com/';
    const url4 = 'https://www.test.com?prdNo=123&dispNo=312&NaPm=ct%3Djoh05t74%7Cci%3D71cf11951';
    const url5 = 'https://192.0.1.1';

    expect(isUrl(url)).toEqual(false); 
    expect(isUrl(url2)).toEqual(false); 
    expect(isUrl(url3)).toEqual(true); 
    expect(isUrl(url4)).toEqual(true); 
    expect(isUrl(url5)).toEqual(true); 
  });
});