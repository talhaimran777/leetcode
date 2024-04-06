/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumUsingHashMap = (numbers, target) => {
  let map = new Map();
  let result = [];

  numbers.forEach((number, index) => {
    if (map.has(target - number)) {
      result.push(...[map.get(target - number) + 1, index + 1])
    }

    map.set(number, index)
  })

  return result;
};

const result = twoSumUsingHashMap([-1, 0], -1);

console.log(result);
