/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 *
 * Given a string s, return the longest palindromic substring in s.
 *
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 *
 * 1 <= s.length <= 1000
 * s consist of only digits and English letters.
 */

const longestPalindrome = function (s) {
  let startPoint = 0;
  let longestLength = 1;

  function expandPointer (left, right) {
    while (right < s.length && left >= 0 && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > longestLength) {
        startPoint = left;
        longestLength = currentLength
      }
      left--
      right++
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandPointer(i, i + 1)
    expandPointer(i - 1, i + 1)
  }

  return s.slice(startPoint, startPoint + longestLength)
}

module.exports = longestPalindrome;
