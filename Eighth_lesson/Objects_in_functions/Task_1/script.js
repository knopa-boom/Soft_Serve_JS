function createMp3(model, state) {
    return {
        model: model,
        state: state,
        format: ['mp3', 'wav', 'wma'],
        volumeState: 5,
        currentTrack: 7,

        play: function() {
            this.state = 'on';
        },
        pause: function() {
            this.state = 'pause';
        },

        increaseVolume: function() {
            this.volumeState = this.volumeState + 2;
        },

        decreaseVolume: function() {
            this.volumeState = this.volumeState - 2;
        },

        nextTrack: function() {
            this.currentTrack++;
        },

        prevTrack: function() {
            this.currentTrack--;
        },

        stop: function(stopState) {
            console.log(this.model + " имеет состояние " + stopState.state);
        }
    }
}

function stopPlayer(state) {
    return {
        state: state,
    };
}


var res = createMp3('Hi-Fi_mini', 'off');
res.format[1];
res.state;
res.decreaseVolume();
res.volumeState;

var stopMusic = stopPlayer('stop');
res.stop(stopMusic);