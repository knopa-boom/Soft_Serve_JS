function matrixToArray(matrix) {

    function reducer(acc, nextValue) {

        return acc.concat(nextValue);
    }

    return matrix.reduce(reducer);

}

var arr2 = [
    [1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9]
];

var arr = matrixToArray(arr2);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]