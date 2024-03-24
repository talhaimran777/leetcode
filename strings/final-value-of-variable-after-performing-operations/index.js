/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
	const actions = {
		"++X": "increment",
		"--X": "decrement",
		"X++": "increment",
		"X--": "decrement",
	}

	let initialValue = 0;

	operations.forEach(operation => {
		if (actions[operation] === "increment") {
			initialValue += 1;
		} else {
			initialValue -= 1;
		}
	})

	return initialValue;
};

const operations = ["X++","++X","--X","X--"];
const result = finalValueAfterOperations(operations);

console.log(result);
