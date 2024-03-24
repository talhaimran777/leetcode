/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const map = new Map();
  const result = [];

  let i = 1;

  nums.forEach((num) => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1);
  });

  const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

  sortedMap.forEach((_value, key) => {
    if (i <= k) {
      result.push(key);
    }

    i++;
  });

  return result;
};

const result = topKFrequent([1], 1);
console.log(result);

// let's say we have a javascript map like this.
// { 2 => 3, 1 => 4, 3 => 1 }
// 
// we need to sort it based on the values
//
// so that it would look something like this
//
// { 1 => 4, 2 => 3, 3 => 1 }
//
// we can do this by using the following code

// const map = new Map();
// const k = 2;
//
// map.set(2, 3);
// map.set(1, 4);
// map.set(3, 1);
//
// const sortedMap = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
//
// let i = 1;
// let result = [];
//
// sortedMap.forEach((value, key) => {
//   if (i <= k) {
//     result.push(key);
//   }
//
//   i++;
// });
