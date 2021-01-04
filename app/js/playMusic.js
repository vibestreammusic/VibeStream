const url = 'https://assets.vibestream.online/assets/data/songList.json';
var song;
var songList;

fetch(url).then(
    function(u){ return u.json();}
  ).then(
    function(json){
      songList = json;
    }
  )

function play(songList) {
    var song = songList[Math.floor(Math.random() * songList.length)];
    console.log(song);
    var audio = new Audio(song.path);
    audio.play();

    document.querySelector('#songName').innerHTML = song.information.name;
};

function restart() {
  setTimeout(
    play()
  ),
  3000
};


document.querySelector('#playbutton').addEventListener('click', function() { play(songList); })
