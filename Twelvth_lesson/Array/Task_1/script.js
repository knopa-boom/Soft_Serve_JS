'use strict';

var arr = ['Джaз', 'Блюз'];
console.log(arr)
arr.push('Рок-н-Ролл');
console.log(arr);
arr.splice(1, arr.length - 2, 'Классика');
console.log(arr);

var arr2 = arr.shift();
console.log(arr);

arr.unshift('Рэп', 'Регги');
console.log(arr);