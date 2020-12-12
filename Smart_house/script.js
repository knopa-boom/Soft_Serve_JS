/**
 * 
 * class SmartDevices
 * 
 */

function SmartDevices(name, state) {
    this._name = name;
    this._state = state;
    this._temperature = 80;
}

SmartDevices.prototype._tempValidator = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        return true;
    } else {
        return false;
    }
}

SmartDevices.prototype.getName = function() {
    return this._name;
}

SmartDevices.prototype.getState = function() {
    return this._state;
}

SmartDevices.prototype.getTempreature = function() {
    return this._temperature;
}

SmartDevices.prototype.setTempreature = function(value) {
    if (this._tempValidator(value)) {
        this._temperature = value;
    }
}

SmartDevices.prototype.on = function() {
    this._state = true;
}

SmartDevices.prototype.off = function() {
    this._state = false;
}

SmartDevices.prototype.increaseTempreature = function() {
    this._temperature++;
}

SmartDevices.prototype.decreaseTempreature = function() {
    this._temperature--;
}

/**
 * 
 * class Kettle
 * 
 */

function Kettle(name, state) {
    SmartDevices.call(this, name, state)

    this._temperature = 80;
    this._drink = 'green tea';
    this._stateOfWater = true;
}

Kettle.prototype = Object.create(SmartDevices.prototype);
Kettle.prototype.constructor = Kettle;


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

/**
 * 
 * class SmartFloor
 * 
 */

function SmartFloor(name, state) {

    SmartDevices.call(this, name, state);
    this._temperature = 15;
    this._light = 'green';
}

SmartFloor.prototype = Object.create(SmartDevices.prototype);
SmartFloor.prototype.constructor = SmartFloor;


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


/**
 * 
 * class SmartHouse
 * 
 */


function SmartHouse(name) {
    this._name = name;
    this._devices = [];
}

SmartHouse.prototype.getName = function() {
    return this._name;
}

SmartHouse.prototype.addDevice = function(device) {
    this._devices.push(device);
}

SmartHouse.prototype.getDevices = function() {
    return this._devices;
}

SmartHouse.prototype.getDeviceByName = function(name) { //MiJia
    this._devices.forEach((e) => {
        if (e._name == name) {
            return 1;
        }
    });
}

SmartHouse.prototype.deleteDeviceByName = function(name) {

}

SmartHouse.prototype.offAllDevice = function() {

}


var smartDevices = new SmartDevices('some device', false);
var kettle = new Kettle('MiJia ', false);
var smartFloor = new SmartFloor('mi', true);


var sh = new SmartHouse("Name1");
sh.addDevice(kettle);
sh.addDevice(smartFloor);
console.log(sh.getDevices());
console.log(sh.getDeviceByName('MiJia'));
// console.log(sh.deleteDeviceByName('SmartFloor'));

// sh.getDeviceByName("Kettle").on();
// sh.offAllDevice();
