var songList = require('./assets/songs.json')
var song = songs[Math.floor(Math.random() * items.length)];
    console.log(song)

function play() {
    var audio = new Audio(song.path);
    audio.play();
};