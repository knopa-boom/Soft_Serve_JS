var arr = [5, 3, 7];

var createArrayIterator = function(array) {
    var i = 0;

    return function() {
        return array[i++];
    }

}(arr);

console.log(createArrayIterator()); // 5
console.log(createArrayIterator()); // 3
console.log(createArrayIterator()); // 7
console.log(createArrayIterator()); // undefined