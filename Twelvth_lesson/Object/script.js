'use strict';

function Rectangle(x1, y1, x2, y2) {
    this.x1 = x1;
    this.x2 = x2;
    this.y1 = y1;
    this.y2 = y2;
}

Rectangle.prototype.toString = function() {
    return String(this.x1) + "," + String(this.x2) + "," + String(this.y1) + "," + String(this.y2);
}

Rectangle.prototype.valueOf = function() {
    return this.x1 + this.x2 + this.y1 + this.y2;
}

var rectangle = new Rectangle(1, 2, 3, 4);
