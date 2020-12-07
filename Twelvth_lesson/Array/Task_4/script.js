// var arr = ["Tom", "Sam", "Bob"];
// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = "<li>" + arr[i] + "</li>";
// }
// console.log(arrLength); // ["<li>Tom</li>", "<li>Sam</li>", "<li>Bob</li>"]


var arr = ["Tom", "Sam", "Bob"];

function li(elem) {
    return "<li>" + elem + "</li>";
}

console.log(arr.map(li));