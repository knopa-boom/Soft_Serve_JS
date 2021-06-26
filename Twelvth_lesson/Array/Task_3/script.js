function deleteEvenNumbers(array) {
    function cond(elem) {
        return elem % 2 == 1;
    }

    return array.filter(cond)
}
var arr = [1, 2, 3, 4, 5];
var arr = deleteEvenNumbers(arr);
console.log(arr); // [1, 3, 5]