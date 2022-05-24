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
  let sp = 0; // pallindrome의 위치 인덱스
  let max = 1; // 가장 긴 palindrome의 길이 (한 글자일 수도 있으니)

  /**
   * 양 끝의 포인터가 가르키는 인덱스 값이 일치하면 포인터의 범위를 늘린다.
   */
  function expandPointer (left, right) {
    // 인자로 주어진 문자열의 범위 내 끝과 끝이 일치할 경우 loop
    while (right < s.length && left >= 0 && s[left] === s[right]) {
      const currentLength = right - left + 1;
      if (currentLength > max) {
        sp = left; // 
        max = currentLength; // 최대값 갱신
      }
      left--; // 좌측 포인터를 왼쪽 방향으로 늘린다.
      right++; // 우측 포인터를 오른쪽 방향으로 늘린다.
    }
  }

  for (let i = 0; i < s.length; i++) {
    expandPointer(i, i + 1); // palindrome 문자열이 짝수일경우
    expandPointer(i - 1, i + 1); // palindrome 문자열이 홀수일경우
  }
  
  return s.slice(sp, sp + max)
};

module.exports = longestPalindrome;
