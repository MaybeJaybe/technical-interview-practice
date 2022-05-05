/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //     go through string
  //     if its not 0(either 1 or -1), its false, if it is 0 then its true
      if (s.length == 0 || s.length == undefined || s.length == null) {
          return "bad";
      }
      const parentheses = {
          "(":")",
          "[":"]",
          "{":"}",
      }
      let index = [];
      for (let i = 0; i < s.length; i ++) {
          if (parentheses[s[i]]) {
              index.push(parentheses[s[i]]);
          } else if (s[i] != index.pop()) {
              return false;
          }
      }
      return !index.length;
  };