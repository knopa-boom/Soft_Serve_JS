function pow(x, n) {
    var res = x;

    for (i = 1; i < n; i++) {
        res *= x;
    }
    return res;
}

var res = pow(4, 2);
console.log(res);