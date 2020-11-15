var tv = {
    currentChannel: 1,
    nextChannel: function() {
        tv.currentChannel += 1;
        console.log(tv.currentChannel);
    },
    setChannel: function(number) {
        tv.currentChannel = number;
        console.log(tv.currentChannel);

    }

};

tv.nextChannel();
tv.setChannel(3);