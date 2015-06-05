var userInput = prompt("Please supply a string to split up");
function splitStringToLowerCase(string) {
	var lowCaseString = string.toLowerCase();
	var lowCaseSplitString = lowCaseString.split(" ");
	return lowCaseSplitString;
}
splitStringToLowerCase(userInput);
