function Teapot(name, state) {
    this._name = name;
    this._state = state;
    this._temperature = 80;
    this._drink = 'green tea';
    this._stateOfWater = true;
}

Teapot.prototype.getName = function() {
    return this._name;
}

Teapot.prototype.getState = function() {
    return this._state;
}

Teapot.prototype.getTempreature = function() {
    return this._temperature;
}

Teapot.prototype.setTempreature = function(value) {
    if (this._tempValidator) {
        switch (value) {
            case 80:
                this._drink = 'green tea';
                break;
            case 95:
                this._drink = 'red tea';
                break;
            case 90:
                this._drink = 'coffee';
                break;
            case 75:
                this._drink = 'milk';
                break;
            default:
                this._drink = 'green tea';
                break;
        }
    }
}

Teapot.prototype.getDrink = function() {
    return this._drink;
}

Teapot.prototype.setDrink = function(value) {
    switch (value) {
        case 'green tea':
            this._drink = 'green tea';
            break;
        case 'red tea':
            this._drink = 'red tea';
            break;
        case 'coffee':
            this._drink = 'coffee';
            break;
        case 'milk':
            this._drink = 'milk';
            break;
        default:
            this._drink = 'green tea';
            break;
    }
}

Teapot.prototype.getStateOfWater = function() {
    return this._stateOfWater;
}

Teapot.prototype.on = function() {
    this._state = true;
}

Teapot.prototype.off = function() {
    this._state = false;
}

Teapot.prototype.increaseTempreature = function() {
    this._temperature++;
}

Teapot.prototype.decreaseTempreature = function() {
    this._temperature--;
}

Teapot.prototype._tempValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

var teapot = new Teapot('MiJia ', false);
teapot.setDrink('red tea');
teapot.getDrink();

teapot.setTempreature(75);
teapot.getTempreature();