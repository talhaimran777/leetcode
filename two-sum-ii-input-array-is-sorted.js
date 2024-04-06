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

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSumUsingTwoPointers = (numbers, target) => {
  let i = 0;
  let j = numbers.length - 1;

  while(i < j) {
    let sum = numbers[i] + numbers[j]

    if (sum === target) {
      return [i + 1, j + 1]
    }

    if (sum >= target) {
      j--;
    } else {
      i++;
    }
  }

  return []
};

// const result = twoSumUsingHashMap([-1, 0], -1);
// const result = twoSumUsingTwoPointers([-1, 0], -1);

// console.log(result);
