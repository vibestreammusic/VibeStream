const url = 'https://assets-vibestream.netlify.app/assets/data/songList.json';
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

    document.querySelector('#songName').innerHTML = song.name;
};

document.querySelector('#playbutton').addEventListener('click', play(songList));




/*
document.getElementById('playbutton').addEventListener('click', _ => {
    fetch('https://assets-vibestream.netlify.app/assets/data/songList.json').then((r) => {
        return r.json()
    }).then(play)
})
    */





/*
window.myappname = {}



//
window.myappname.songLIst = input
*/
