function play() {
    var song = songList[Math.floor(Math.random() * songList.length)];
    console.log(song);
    var audio = new Audio(song.path);
    audio.play();
};

fetch('https://assets-vibestream.netlify.app/assets/data/songList.json').then((r) => {
    return r.json()
  }).then((j) => {
    console.log(j)
    x()
  })