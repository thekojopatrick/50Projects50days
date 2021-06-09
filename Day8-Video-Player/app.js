var video = document.querySelector('.video')
var progress = document.querySelector('.progress')
var loading = document.querySelector('.progress-loading')
var fas = document.querySelector('.fas')
var playBtn = document.getElementById('play-pause')
var volume = document.getElementById('volume')
var buttons = document.querySelector('.controls')

function togglePlayPause() {
  if (video.paused) {
    fas.className = 'fas fa-pause'
    video.play()
  } else {
    fas.className = 'fas fa-play'
    video.pause()
  }
}

buttons.addEventListener('click', function (event) {
  // console.log(event.target);
  if (event.target.parentElement.classList.contains('play-pause')) {
    togglePlayPause()
  }
})


video.addEventListener('timeupdate', function () {
  var progressPos = video.currentTime / video.duration;
  let width = progressPos * 100
  progress.style.width = `${width}%`
  if (video.ended) {
    fas.className = 'fas fa-play'
    console.log('ended');
  }
})

video.addEventListener('loadeddata', (event) => {
  var progressPos = video.loadeddata;
  let width = progressPos * 100
  loading.style.width = `${width}%`
  console.log('Yay! The readyState just increased to  ' +
    'HAVE_CURRENT_DATA or greater for the first time.');
});