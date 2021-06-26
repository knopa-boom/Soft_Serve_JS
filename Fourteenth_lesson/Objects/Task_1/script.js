'use strict';

let currentChannel = 1;

let tv = {
    currentChannel,

    nextChannel() {
        this.currentChannel += 1;
    },

    previousChannel() {
        this.currentChannel -= 1;
    },

    set channel(number) {
        this.currentChannel = number;
    }
}

console.log(tv.currentChannel);
console.log(tv.channel = 5);
tv.previousChannel();
console.log(tv.currentChannel);
tv.nextChannel();
console.log(tv.currentChannel);