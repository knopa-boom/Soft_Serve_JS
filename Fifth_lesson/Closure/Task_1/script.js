var arr = [5, 3, 7];


function createArrayIterator(array) {
    var i = 0;

    function inner() {
        return array[i++];
    }

    return inner;
}


var itr = createArrayIterator(arr);
console.log(itr()); // 5
console.log(itr()); // 3
console.log(itr()); // 7
console.log(itr()); // undefined