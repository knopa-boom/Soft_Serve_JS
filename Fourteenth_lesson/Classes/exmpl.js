"use strict";

class Home {
   constructor(owner) {
      this._owner = owner;
      this._doorState = false;
   }
   get owner() {
      return this._owner;
   }
   get doorState() {
      return this._doorState;
   }
   openDoor() {
      this._doorState = true;
   }
   closeDoor() {
      this._doorState = false;
   }
   printInfo() {
      console.log("Owner:", this._owner);
      console.log("Door:", this._doorState ? "open" : "close");
   }
}

class HomeWithHorse extends Home {
   constructor(owner) {
      super(owner);
      this._horsePlace = null;
   }
   pushHorse() {
      if (this._horsePlace === null) {
         this._horsePlace = horse;
      }
   }
   popHorse() {
      const horse = this._horsePlace;
      this._horsePlace = null;
      return horse;
   }
   printInfo() {
      super.printInfo();
      console.log("Horse:", this._horsePlace);
   }
}

class LamboHome extends Home {
   constructor(owner) {
      super(owner);
      this._doorState = 0; // 0 - close, 1 - open
   }
   get doorState() {
      return Boolean(this._doorState);
   }
   openDoor() {
      this._doorState = 1;
   }
   closeDoor() {
      this._doorState = 0;
   }
}

// Build
const tomHome = new Home("Tom");
const samHome = new HomeWithHorse("Sam");
const bobHome = new LamboHome("Bob");