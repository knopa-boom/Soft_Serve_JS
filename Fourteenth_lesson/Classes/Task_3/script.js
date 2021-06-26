'use strict';

class Square {
    constructor(a) {
        if (Square.numberValidator(a)) {
            this._a = a;
        } else {
            this._a = 0;
        }

        this._res = 0;
        this.calcPerimeter();
    }

    get a() {
        return this._a;
    }

    set a(value) {
        if (Square.numberValidator(value)) {
            this._a = value
        }
    }

    get res() {
        return this._res;
    }

    calcPerimeter() {
        this._res = 4 * this._a;
    }

    static numberValidator(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            return true;
        } else {
            return false;
        }
    }
}

class Cube extends Square {
    constructor(a) {
        super(a);
    }

    // 1 способ
    calcPerimeter() {
        this._res = 12 * this._a;
    }

    // 2 способ
    calcPerimeter() {
        super.calcPerimeter(); // 32
        this._res *= 3;

    }
}

const sq = new Square(6);
const cube = new Cube(10);