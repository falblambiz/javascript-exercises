const repeatString = function(string, num) {

    if (num < 0) { return 'ERROR'; }
    
    let repeatedString = "";
    for (let x = 0; x < num; x++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
