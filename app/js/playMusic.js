const url = 'https://assets.vibestream.online/assets/data/songList.json';
var song;
var songList;
var songLenght;

fetch(url).then(
  function(u){ return u.json();}
).then(
  function(json){
    songList = json;
  }
)

let params = (new URL(document.location)).searchParams;
//let genre = params.get('genre');
//let mood = params.get('mood');

let genre = 'piano';
let mood = 'day';

function checkParams() {
  if (genre !== 'piano' && mood !== 'day') {
  if (genre !== 'piano') {
    console.log('unknown genre')
  };
  if (mood !== 'day') {
    console.log('unknown mood')
  };
  return true;
  }
}


function play(songList) {
  song = songList[Math.floor(Math.random() * songList.length)];
  if (genre === song.genre && mood === song.mood) {
   var audio = new Audio(song.path);
   audio.play();
   displaySongInfo();
   restart()
  }
  else {
    play(songList);
  }
};

function displaySongInfo() {
  document.querySelector('#songName').innerHTML = song.information.name;
  document.querySelector('#albumName').innerHTML = song.information.album;

  let log = 'Song: ' + song.information.name;
  console.log(log)
}

function restart() {
  setTimeout(play, song.information.length * 1000, songList)
}

window.addEventListener('load', _ => checkParams());

document.querySelector('#playbutton').addEventListener('click', function() { play(songList); })
