const { sumAll } = require('../src/math'); 

describe("Math|sumAll", () => {
  // augment로 받은 것들을 모두 더한다.
  test('Add all the things received as an element.', () => {
    expect(sumAll(1, 2, 3, 4, 5)).toEqual(15);
    expect(sumAll(0, 12, 50, 28, 10)).toEqual(100);
    // string character  => 0
    expect(sumAll(5, 'a')).toEqual(5); 
    // string number => convert number
    expect(sumAll(5, '5.1')).toEqual(10.1);
    expect(sumAll(15.5, '5.1')).toEqual(20.6);
    // null, undefined => 0
    expect(sumAll(null, '5.1')).toEqual(5.1);
    expect(sumAll(undefined, 10, '51')).toEqual(61);
    
  });
});