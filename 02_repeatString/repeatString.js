const repeatString = function(string, num) {
    if (num >= 0) {
        let result = '';
        for(let i=0; i<num; i++) {
            result = result.concat(string);
        }
        return result;
    }
    return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
