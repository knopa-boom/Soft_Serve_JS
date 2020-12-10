'use strict';

function mul(...rest) {
    rest.forEach(function(e) {
        if (typeof e === 'number') {
            console.log(e *= e)
        }
    })
}

console.log(mul(1, "str", 2, 3, true)); // 6
console.log(mul(null, "str", false, true)); // 0