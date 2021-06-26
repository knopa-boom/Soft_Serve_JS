"use strict";

var user = {
    name: "Tom"
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}


// 1

var tomFormat = function(a, b) {
    format.call(user, a, b);
}

tomFormat("<<<", ">>>"); // "<<<Tom>>>"


2
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"