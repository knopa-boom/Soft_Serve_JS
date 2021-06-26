'use strict';

var str = "Login1, LOgin2, login3, loGin4";

var arrStr = str.split(',');

console.log(arrStr.map(function(elem) {
    return elem.toLowerCase();
}));