function isPalindrome(s) {
  const word = s.replace(/[\W0-9_]/g, '').toLowerCase()

  let ls = 0
  let rs = word.length - 1

  while (ls < rs) {
    if (word[ls] !== word[rs]) {
      return false
    }
    ls++
    rs--
  }
  return true
}

module.exports = isPalindrome;
