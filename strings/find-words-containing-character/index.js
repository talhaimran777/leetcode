/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
	const indices = [];
	for (let i = 0; i < words.length; i++) {
		for (let j = 0; j < words[i].length; j++) {
			if (words[i][j] === x) {
				indices.push(i);
				break;
			};
		}
	}

	return indices;
};

const words = ["abc","bcd","aaaa","cbc"], x = "z";
const result = findWordsContaining(words, x);

console.log(result);
