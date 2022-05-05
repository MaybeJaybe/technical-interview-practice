// Given an array a of n numbers and a count k
// find the k largest values in the array a.
// Example: a=[5, 1, 3, 6, 8, 2, 4, 7], k=3  ⇒  [6, 8, 7]

function largestValues(a, k) {
  const sorted = a.sort((x, y) => x - y);
  return sorted.reduce((initial, current) => {
    const index = [];
    for (let i = 0; i < k; i++) {
      if (current === sorted[sorted.length - i - 1]) {
        index.push(current);
      }
    }
    return initial.concat(index);
  }, []);
}
const a = [5, 1, 3, 6, 8, 2, 4, 7];
const k = 3;
console.log(largestValues(a, k));