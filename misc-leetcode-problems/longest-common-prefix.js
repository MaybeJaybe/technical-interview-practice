/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //     check if string is empty
  //     if not empty return ""
      if (strs.length === 0 || strs === null) {
          return "";
      }
  //     loop through each string word at a time
  //     store first letter of each string
  //     check if letter is the same
  //     if not the same, slice string at that index
      for (let i = 0; i < strs.length; i ++) {
          for (let s of strs) {
              if (s[i] !== strs[0][i]) {
                  return s.slice(0, i);
              }
          }
      }
      return strs[0];
  }