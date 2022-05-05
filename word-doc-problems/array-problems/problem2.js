// Two Sum II - Input Array Is Sorted.

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  const length = numbers.length;
  const index = {};
  for (let i = 0; i < length; i++) {
      const num = numbers[i];
      const calc = target - num;
      if (index[calc]) {
          return [index[calc] -1, i + 1];
      } else {
          index[num] = i + 2;
      }
  }
};
