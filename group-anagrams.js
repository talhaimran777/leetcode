/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const groups = new Map();

  strs.forEach((str, index) => {
    const key = str.split('').sort().join('');
    groups.set(key, Array.isArray(groups.get(key)) ? [...groups.get(key), str] : [str]);
  })


  return Array.from(groups.values());
};

const result = groupAnagrams([""]);

console.log(result);
