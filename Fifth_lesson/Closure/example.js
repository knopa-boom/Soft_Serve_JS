function createIncr() {
    var value = 1;

    function incr() {
        return value++;
    }
    return incr;
}

var c = createIncr();

console.log(c());
console.log(c());
console.log(c());



function createSafeSQRT() {
    var num = 0;
    var arr = [];
    arr[0] = function(newNum) {
        if (newNum >= 0) {
            num = newNum;
        }
    };
    arr[1] = function() {
        return Math.sqrt(num);
    };
    return arr;
}

var r = createSafeSQRT();
r[0](9);
console.log(r[1]());