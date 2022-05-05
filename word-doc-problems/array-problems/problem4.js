// Given two arrays a and b of numbers and a target value t,
// find a number from each array whose sum is closest to t.
// Example: a=[9, 13, 1, 8, 12, 4, 0, 5],
// b=[3, 17, 4, 14, 6],
// t=20
// result is [13, 6] or [4, 17] or [5, 14]

function findSum(a, b, t) {
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] + b[j] === t || a[i] + b[j] === t - 1 || a[i] + b[j] === t + 1) {
        return ([a[i], b[j]]);
      }
    }
  }
}
const a = [9, 13, 1, 8, 12, 4, 0, 5];
const b = [3, 17, 4, 14, 6];
const t = 20;
console.log(findSum(a, b, t));