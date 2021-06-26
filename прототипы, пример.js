"use strict";

/*
Home
   getOwner
   getDoorState
   openDoor
   closeDoor
   printInfo
*/
function Home(owner) {
    this._owner = owner;
    this._doorState = false;
}
Home.prototype.getOwner = function() {
    return this._owner;
};
Home.prototype.getDoorState = function() {
    return this._doorState;
};
Home.prototype.openDoor = function() {
    this._doorState = true;
};
Home.prototype.closeDoor = function() {
    this._doorState = false;
};
Home.prototype.printInfo = function() {
    console.log("Owner:", this._owner);
    console.log("Door:", this._doorState ? "open" : "close");
};
/*
HomeWithHorse
   getOwner
   getDoorState
   openDoor
   closeDoor
   printInfo (HomeWithHorse)
   getHorsePlace
   pushHorse
   popHorse
*/
function HomeWithHorse(owner) {
    Home.call(this, owner); // 1
    this._horsePlace = null;
}
HomeWithHorse.prototype = Object.create(Home.prototype); // 2
HomeWithHorse.prototype.constructor = HomeWithHorse; // 3
HomeWithHorse.prototype.getHorsePlace = function() {
    return this._horsePlace;
};
HomeWithHorse.prototype.pushHorse = function(horse) {
    if (this._horsePlace === null) {
        this._horsePlace = horse;
    }
};
HomeWithHorse.prototype.popHorse = function() {
    var horse = this._horsePlace;
    this._horsePlace = null;
    return horse;
};
HomeWithHorse.prototype.printInfo = function() {
    Home.prototype.printInfo.call(this);
    console.log("Horse:", this._horsePlace);
};

/*
LamboHome
   getOwner
   getDoorState
   openDoor
   closeDoor
   printInfo
*/
function LamboHome(owner) {
    Home.call(this, owner); // 1
    this._doorState = 0; // 0 - close, 1 - open
}
LamboHome.prototype = Object.create(Home.prototype); // 2
LamboHome.prototype.constructor = LamboHome; // 3
LamboHome.prototype.getDoorState = function() {
    return Boolean(this._doorState);
};
LamboHome.prototype.openDoor = function() {
    this._doorState = 1;
};
LamboHome.prototype.closeDoor = function() {
    this._doorState = 0;
};

// build
var tomHome = new Home("Tom");
var samHome = new HomeWithHorse("Sam");
var bobHome = new LamboHome("Bob");

console.log(typeof tomHome);
console.log(typeof samHome);
console.log(typeof bobHome);

console.log(tomHome.constructor.name);
console.log(samHome.constructor.name);
console.log(bobHome.constructor.name);

console.log(tomHome instanceof Home);
console.log(samHome instanceof HomeWithHorse);
console.log(bobHome instanceof LamboHome);

console.log(tomHome instanceof LamboHome);
console.log(samHome instanceof LamboHome);
console.log(bobHome instanceof LamboHome);

console.log(bobHome instanceof LamboHome);
console.log(bobHome instanceof Home);
console.log(bobHome instanceof Object);

console.log(tomHome instanceof Home);
console.log(tomHome instanceof Object);
console.log(tomHome instanceof HomeWithHorse);
console.log(tomHome instanceof LamboHome);

var arr = [];
console.log(arr instanceof Array);
console.log(arr instanceof Object);