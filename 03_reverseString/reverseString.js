const reverseString = function(string) {
    let reversedString = "";
    for (let x = string.length - 1; x >= 0; x--) {
        reversedString = reversedString + string[x];
    }
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
