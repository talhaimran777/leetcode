const isAnagram = (s, t) => {
  const hash = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hash.has(s[i])) {
      hash.set(s[i], hash.get(s[i]) + 1);
    } else {
      hash.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (hash.has(t[i])) {
      hash.set(t[i], hash.get(t[i]) - 1);
    } else {
      return false;
    }
  }

  for (let [_key, value] of hash) {
    if (value !== 0) {
      return false;
    }
  }

  return true;
};

const result = isAnagram('aacc', 'ccac');

console.log(result);
