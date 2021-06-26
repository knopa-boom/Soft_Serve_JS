'use strict';

function mul(...rest) {
    let tmp = 1;
    let count = 0;

    let arrNums = rest.filter((e) => typeof(e) === 'number');

    arrNums.forEach((e) => {
        tmp *= e;
        count++;
    })

    if (count == 0) return 0;

    return tmp;


}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0