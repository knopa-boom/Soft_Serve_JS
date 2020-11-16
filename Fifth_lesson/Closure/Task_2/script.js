var p;
var s;

function calc() {
    var a = 0;
    var b = 0;

    var arr = [];

    arr[0] = function(numFirst) {
        if (numFirst > 0 && isNaN(numFirst) == false) {
            a = numFirst;
        }
    }

    arr[1] = function(numSecond) {
        if (numSecond > 0 && isNaN(numSecond) == false) {
            b = numSecond;
        }
    }

    arr[3] = function() {
        return p = 2 * (a + b);
    }

    arr[4] = function() {
        return s = a * b;
    }

    return arr;

}

var res = calc();
res[0](3);
res[1](4);
console.log(res[3]());
console.log(res[4]());
