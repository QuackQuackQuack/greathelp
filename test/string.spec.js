const lPad = require('../src/string/lPad'); 

describe("String|lPad", () => {
  // 지정한 길이 만큼 왼쪽부터 지정한 문자로 채워준다. ex) lPad(1, 1, 0) => 01
  test('Fill it with the specified characters from the left to the specified length.', () => {
    expect(lPad(1,2,0)).toEqual('01'); 
    expect(lPad(1,3,'Z')).toEqual('ZZ1'); 
  });
});




