export const makeString = (string, letter, max, line, currentLine) => {
	console.log(currentLine, line);
	if (currentLine === line) {
		if (letter < max) {
			return string.split("").slice(0, letter).join("");
		}
		return string;
	}
	return string;
};
