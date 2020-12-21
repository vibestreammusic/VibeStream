var songList

function play() {
    var song = songList[Math.floor(Math.random() * songList.length)];
    console.log(song);
    var audio = new Audio(song.path);
    audio.play();
};

fetch('https://assets-vibestream.netlify.app/assets/data/songList.json').then((r) => {
    return r.json()
  }).then((songList) => {
    console.log(songList)
    play()
  })