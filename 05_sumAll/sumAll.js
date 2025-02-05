const sumAll = function(a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }

    let sum = 0;
    let start = a;
    let stop = b;
    if (a > b) {
        start = b;
        stop = a;
    }
    for (let i = start; i <= stop; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
