"use strict;"

// С помощью цикла

var arr = [1, 2, 3, 4, 5];

function recurArrarSum(array) {
    var sum = 0;

    for (var i = 0; i < array.length; i++) {
        sum += arr[i];
    }

    return sum;
}

// var res = recurArrarSum(arr);
// console.log(res); // 15

// ---------------------------------------------------------------------------------------
// С помощью рекурсии



var arr2 = [1, 2, 3, 4, 5, 6];

function recurArrarSum2(array, i) {
    if (i == array.length - 1) {
        return
    } else {
        return
    }
}

var res2 = recurArrarSum2(arr2, 6);
console.log(res2); // 15