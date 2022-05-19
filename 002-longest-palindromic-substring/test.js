const longestPalindrome = require('./index');

test("'babad' returns 'bab'", () => {
  expect(longestPalindrome('babad')).toEqual('bab');
});

test("'cbbd' returns 'bb'", () => {
  expect(longestPalindrome('cbbd')).toEqual('bb');
});