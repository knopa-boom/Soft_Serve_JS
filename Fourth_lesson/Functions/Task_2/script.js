function minMax(x, y) {

    if (x < y) {
        return x;
    } else {
        return y;
    }
}

var minNum = minMax(120, 100);
console.log(minNum);