// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let search = false
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
          search = true
          return (i)
      } 
  }
  
  if (!search) {
      return (-1)
  }
};
