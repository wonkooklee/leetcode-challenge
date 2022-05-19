const isPalindrome = require("./index");

test("'A man, a plan, a canal: Panama' returns true", () => {
  expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
});
