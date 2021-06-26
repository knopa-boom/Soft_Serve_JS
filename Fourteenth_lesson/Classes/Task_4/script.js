'use strict';

class Circle {
    constructor(x, y, r) {
        this._x = x;
        this._y = y;
        this._r = r;

        this._l = 2 * this._pi * this._r;
    }

    calclL() {
        return 2 * Math.PI * this._r;
    }

    static calcL(r) {
        return 2 * Math.PI * r;
    }

    copy() {
        return Object.assign({}, Circle);
    }

    static newObj(x, y, r) {
        return new Circle(x, y, r);
    }



}