var isPlaying = false
function togglePlay() {
     if (isPlaying == false) {
        document.getElementById('playButton').classList.toggle("pause");
        play(songList);
        isPlaying = true
     }

     else if (isPlaying == true) {
        clearTimeout(replayTimer)
        audio.pause()
        document.getElementById('playButton').classList.toggle("pause");
        isPlaying = false;
     }
}

document.getElementById('playButton').addEventListener('click', togglePlay)