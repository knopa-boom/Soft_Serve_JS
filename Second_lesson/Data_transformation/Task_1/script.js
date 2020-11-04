// var x = 1;
// var y = 2;

// var res1 = String(x) + String(y);
// console.log(res1); // "12"
// console.log(typeof res1); //string

// var res2 = true + String(y);
// console.log(res2); // "true2"
// console.log(typeof res2); // "string"

// var res3 = Boolean(x) || Boolean(y);
// console.log(res3); // true
// console.log(typeof res3); // "boolean"

// var res4 = undefined + 1;
// console.log(res4); // NaN
// console.log(typeof res4); // "number"






//исправленное

var x = 1;
var y = 2;

var res1 = String(x) + String(y);
console.log(res1); // "12"
console.log(typeof res1); //string

var res2 = Boolean(x) + String(y);
console.log(res2); // "true2"
console.log(typeof res2); // "string"

var res3 = Boolean(x) || Boolean(y);
console.log(res3); // true
console.log(typeof res3); // "boolean"

var res4 = undefined + x + y;
console.log(res4); // NaN
console.log(typeof res4); // "number"