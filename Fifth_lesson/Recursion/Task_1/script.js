function digitSum(k) {

    if (k < 10) {
        return k;
    } else {

        return k % 10 + digitSum(k / 10);
    }
}

var resSum = digitSum(234);
console.log(resSum);