'use strict';

/**
 * 
 * class SmartDevices
 * 
 */

class SmartDevices {
    constructor(name, state) {
        this._name = name;
        this._state = state;
        this._temperature = 80;
    }

    get name() {
        return this._name;
    }

    get state() {
        return this._state;
    }

    get temperature() {
        return this._temperature;
    }

    set temperature(value) {
        if (typeof value === 'number' && !isNaN(value)) {
            this._temperature = value;
        }
    }

    on() {
        this._state = true;
    }

    off() {
        this._state = false;
    }

    increaseTempreature() {
        this._temperature++;
    }

    decreaseTempreature() {
        this._temperature--;
    }

}

/**
 * 
 * class Kettle
 * 
 */

class Kettle extends SmartDevices {
    constructor(name, state) {
        super(name, state);

        this._temperature = 80;
        this._drink = 'green tea';
        this._stateOfWater = true;
    }

    get drink() {
        return this._drink;
    }

    set drink(value) {
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

    get stateOfWater() {
        return this._stateOfWater;
    }
}

/**
 * 
 * class SmartFloor
 * 
 */

class SmartFloor extends SmartDevices {
    constructor(name, state) {
        super(name, state);

        this._temperature = 15;
        this._light = 'green';
    }

    get light() {
        return this._light;
    }

    set light(value) {
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
}

/**
 * 
 * class SmartHouse
 * 
 */

class SmartHouse {
    constructor(name) {
        this._name = name;
        this._devices = [];
    }

    get name() {
        return this._name;
    }

    addDevice(device) {
        this._devices.push(device);
    }

    get devices() {
        return this._devices;
    }

    getDeviceByName(name) {
        let temp;
        this._devices.forEach((e) => {
            if (name === e.name) {
                temp = e;
            }
        });

        return temp;
    }

    deleteDeviceByName(name) {
        this._devices.forEach((e, i) => {
            if (name === e.name) {
                array.splice(i, 1)
            }
        });
    }

    offAllDevice() {
        this._devices.forEach(e => e.off());
    }

    delayedOff(name, delay, callback) {

        let data;
        let err;

        setTimeout(() => {
            this._devices.find((item) => {
                if (item.name === name) {
                    item.off();
                    return data = 'ус-во выключено';
                } else {
                    return err = new Error('Invalid parameters');
                }
            })

            callback(err, data);
        }, delay);
    };
};

const sh = new SmartHouse("Home");
sh.addDevice(new Kettle("Чайник"))
sh.addDevice(new SmartFloor("Теплый пол"))

console.log(sh.devices);
console.log(sh.getDeviceByName("Чайник"));
console.log(sh.getDeviceByName("Теплый пол"));

// console.log(sh.deleteDeviceByName("Теплый пол"));

// sh.getDeviceByName("Теплый пол").on();
// sh.offAllDevice();

sh.delayedOff('Теплый пол', 2000, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
