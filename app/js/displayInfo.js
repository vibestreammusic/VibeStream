function displaySongInfo() {
    document.querySelector('#songName').innerHTML = song.information.name;
    document.querySelector('#albumName').innerHTML = song.information.album;
  
    let log = 'Song: ' + song.information.name;
    console.log(log)
  }