"use strict;"

// С помощью цикла

var arr = [1, 2, 3, 4, 5];

function recurArrarSum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

// var res = recurArrarSum(arr);
// console.log(res); // 15

// ---------------------------------------------------------------------------------------
// С помощью рекурсии


var arr2 = [1, 2, 3, 4, 5];

function recurArrarSum2(array, sum = 0, i = 0) {
    if (array[i]) {
        return recurArrarSum2(array, sum += array[i], ++i);
    } else {
        return sum;
    }
}

var res2 = recurArrarSum2(arr2);
console.log(res2); // 15
