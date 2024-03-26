/**
 * @param {string} char
 * @returns {boolean}
 */
const isValidCharRange = (char) => {
  if (!char) {
    return false;
  }

  if (
    (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
    (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
  ) {
    return true;
  }

  return false;
};

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindromeUsingArrayReverse = (s) => {
  let myStr = s.toLowerCase();

  if (myStr.length === 1) {
    return true;
  }

  // Build an array that will only contains letters and numbers.
  let lettersAndNumbersArray = [];

  for (let i = 0; i < myStr.length; i++) {
    if (isValidCharRange(myStr[i])) {
      lettersAndNumbersArray.push(myStr[i]);
    }
  }

  // Reverse this array and store it.
  let reversed = [...lettersAndNumbersArray].reverse();

  // Compare the elements of each array at each specific index.
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] !== lettersAndNumbersArray[i]) {
      // If not equal return false
      return false;
    }
  }

  // otherwise return true
  return true;
};

/**
 * @param {string} s
 * @returns {boolean}
 */
const isPalindromeUsingTwoPointers = (s) => {
  let myStr = s.toLowerCase();

  // Build an array that will only contains letters and numbers.
  let lettersAndNumbersArray = [];

  for (let i = 0; i < myStr.length; i++) {
    if (isValidCharRange(myStr[i])) {
      lettersAndNumbersArray.push(myStr[i]);
    }
  }

  // We gonna loop through an array using two pointers i & j
  // i should start from 0 & move forwards
  // j should start from s.length - 1

  let i = 0;
  let j = lettersAndNumbersArray.length - 1;

  while (j > i) {
    if (lettersAndNumbersArray[i] !== lettersAndNumbersArray[j]) {
      return false;
    }

    i++;
    j--;
  }

  return true;
};

const result = isPalindromeUsingTwoPointers("a");
console.log(result);
