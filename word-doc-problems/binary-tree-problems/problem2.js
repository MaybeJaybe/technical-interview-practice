// https://leetcode.com/problems/first-bad-version/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let version1 = 1;
      let lastVersion = n;
      
      while (version1 < lastVersion) {
          const next = version1 + Math.floor((lastVersion - version1) / 2);
          const firstBad = isBadVersion(version1);
          const latestBad = isBadVersion(lastVersion);
          const nextBad = isBadVersion(next);
          
          if(!nextBad && latestBad) {
              version1 = next + 1;
          } else if (nextBad && !firstBad) {
              lastVersion = next;
          } else if (firstBad) {
              return version1;
          }
      }
      return version1;
  };
};