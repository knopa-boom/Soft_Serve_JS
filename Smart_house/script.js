function Kettle(name, state) {
    this._name = name;
    this._state = state;
    this._temperature = 80;
    this._drink = 'green tea';
    this._stateOfWater = true;
}

Kettle.prototype.getName = function() {
    return this._name;
}

Kettle.prototype.getState = function() {
    return this._state;
}

Kettle.prototype.getTempreature = function() {
    return this._temperature;
}

Kettle.prototype.setTempreature = function(value) {
    if (this._tempValidator(value)) {
        this._temperature = value;
    }
}

Kettle.prototype.getDrink = function() {
    return this._drink;
}

Kettle.prototype.setDrink = function(value) {
    switch (value) {
        case 'green tea':
            this._drink = 'green tea';
            this._temperature = 80;
            break;
        case 'red tea':
            this._drink = 'red tea';
            this._temperature = 95;
            break;
        case 'coffee':
            this._drink = 'coffee';
            this._temperature = 90;
            break;
        case 'milk':
            this._drink = 'milk';
            this._temperature = 75;
            break;
        default:
            this._drink = 'green tea';
            break;
    }
}

Kettle.prototype.getStateOfWater = function() {
    return this._stateOfWater;
}

Kettle.prototype.on = function() {
    this._state = true;
}

Kettle.prototype.off = function() {
    this._state = false;
}

Kettle.prototype.increaseTempreature = function() {
    this._temperature++;
}

Kettle.prototype.decreaseTempreature = function() {
    this._temperature--;
}

Kettle.prototype._tempValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

function SmartFloor(name, state) {
    this._name = name;
    this._state = state;
    this._temperature = 15;
    this._light = 'green';
}

SmartFloor.prototype.getName = function() {
    return this._name;
}

SmartFloor.prototype.getState = function() {
    return this._state;
}

SmartFloor.prototype.getTempreature = function() {
    return this._temperature;
}

SmartFloor.prototype.setTempreature = function(value) {
    if (this._tempValidator(value)) {
        this._temperature = value;
    }
}

SmartFloor.prototype.getLight = function() {
    return this._light;
}

SmartFloor.prototype.setLight = function(value) {
    switch (value) {
        case 'green':
            this._light = 'green';
            break;
        case 'blue':
            this._light = 'blue';
            break;
        case 'pink':
            this._light = 'pink';
            break;
        default:
            this._light = 'white';
            break;
    }
}

SmartFloor.prototype.on = function() {
    this._state = true;
}

SmartFloor.prototype.off = function() {
    this._state = false;
}

SmartFloor.prototype.increaseTempreature = function() {
    this._temperature++;
}

SmartFloor.prototype.decreaseTempreature = function() {
    this._temperature--;
}

SmartFloor.prototype._tempValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}


var kettle = new Kettle('MiJia ', false);

var smartFloor = new SmartFloor('mi', true);
smartFloor.setLight('pink');
console.log(smartFloor.getLight());
