/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getPrefixProductArray = (nums) => {
  const prefixProductArray = [1];

  let product = 1;

  for (let i = 1; i < nums.length; i++) {
    prefixProductArray.push(nums[i - 1] * product);
    product = nums[i - 1] * product;
  }

  return prefixProductArray;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const getPostfixProductArray = (nums) => {
  const postfixProductArray = [1];

  let product = 1;

  for (let i = nums.length - 2; i >= 0; i--) {
    postfixProductArray.unshift(nums[i + 1] * product);
    product = nums[i + 1] * product;
  }

  return postfixProductArray;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const prefixProductArray = getPrefixProductArray(nums);
  const postfixProductArray = getPostfixProductArray(nums);

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    const product = prefixProductArray[i] * postfixProductArray[i];

    if (product === -0) {
      result.push(0);
    } else {
      result.push(product);
    }
  }

  return result;
};

const result = productExceptSelf([4, 3, 2, 1, 2]);
console.log(result);
