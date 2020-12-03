function ifSumSliceArray(arr, first, second) {
    if (typeof first === 'number' && typeof second === 'number' && !isNaN(first) && !isNaN(second)) {
        return sumSliceArray(arr, first, second);
    } else {
        console.log('data is incorrect');
    }
}

function sumSliceArray(arr, first, second) {
    var arr = arr;
    var firstIndex = 0;
    var secondIndex = 0;
    var res = 0;

    if (typeof first === 'number' && !isNaN(first)) {
        firstIndex = first;
    } else {
        throw new Error('first is incorrect');
    }

    if (typeof second === 'number' && !isNaN(second)) {
        secondIndex = first;
    } else {
        throw new Error('second is incorrect');
    }

    return res = arr[first] + arr[second];

}

var arr = [1, 2, 3, 4, 5];
var resSum = ifSumSliceArray(arr, 0, 1);
console.log(resSum);
