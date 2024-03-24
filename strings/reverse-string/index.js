const reverseStr = (input, ouput) => {
	if (input === "") return;
	reverseStr(input.substr(1), ouput);

	arr.push(input[0]);
	return input;
}

const result = reverseStr("abcdefg", "");
console.log(arr.join(""));
