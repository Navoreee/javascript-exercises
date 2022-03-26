const removeFromArray = function(array) {
    for (let i=1; i<arguments.length; i++) {
        const idx = array.findIndex( (element) => element === arguments[i] );
        if (idx > -1) {
            array.splice(idx,1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
