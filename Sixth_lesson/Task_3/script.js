var tv = {
    currentChannel: 1,
    nextChannel: function() {
        tv.currentChannel += 1;
    },
    previousChannel: function() {
        tv.currentChannel = tv.currentChannel - 1;
    },
    setChannel: function(number) {
        tv.currentChannel = number;
    }
};

tv.nextChannel();
console.log(tv.currentChannel);

tv.previousChannel();
console.log(tv.currentChannel)

tv.setChannel(3);
console.log(tv.currentChannel);