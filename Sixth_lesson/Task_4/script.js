var MP3 = {
    model: 'Hi-Fi_mini',
    material: 'aluminum',
    connectors: ['mini-usb', 'mini-jack'],
    weight: 38,
    format: ['mp3', 'wav', 'wma'],
    state: 'off',
    play: function() {
        MP3.state = 'on';
    },
    pause: function() {
        MP3.state = 'pause';
    }
}
console.log(MP3.model);
console.log(MP3.material);
console.log(MP3.format[1]);
console.log(MP3.connectors[0]);

MP3.play();
console.log(MP3.state);
MP3.pause();
console.log(MP3.state);
