var arr = [1, 2, 3, 4, 5];

function cond(elem) {
    return elem % 2 == 0;
}

console.log(arr.filter(cond));

// --------------------------------------

function deleteEvenNumbers(array) {
    // Ваш код
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]