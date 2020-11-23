"use strict";

var user = {
    name: "Tom"
};

function format(beginMsg, endMsg) {
    console.log(beginMsg + this.name + endMsg);
}


// 1

var tomFormat = function() {
    format.call(user, '<<<', '>>>');
}
tomFormat(); // "<<<Tom>>>"


// 2
var tomFormat = format.bind(user);
tomFormat("<<<", ">>>"); // "<<<Tom>>>"