const getParameter = require('../src/url/getParameter'); 

describe("Url|getParameter", () => {
  // url형식의 주소의 파라미터를 오브젝트로 전환한다
  test('Switch parameters to objects.', () => {
    expect(getParameter('www.wemakeprice.com?test=1&test2=23')).toEqual({ test:'1', test2: '23'}); 
  });
});