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
  var song = songList[Math.floor(Math.random() * songList.length)];
  if (genre === song.genre && mood === song.mood) {
   console.log(song);
   var audio = new Audio(song.path);
   audio.play();
   displaySongInfo();
  }
  else {
    play(songList);
  }
};

function displaySongInfo() {
  document.querySelector('#songName').innerHTML = song.information.name;
}

window.addEventListener('load', _ => checkParams());

document.querySelector('#playbutton').addEventListener('click', function() { play(songList); })
