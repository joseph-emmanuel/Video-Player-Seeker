var startTime = 123;
var player;

// Ensure the YouTube IFrame API is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '330',
    width: '330',
    videoId: '7JQS6H2AXdM',
    events: {
      'onReady': onPlayerReady
    }
  });
}

// Called when the player is ready
function onPlayerReady(event) {
  player.mute();
  player.seekTo(startTime);
  player.playVideo();
  // player.unMute();
  // player.playVideo();


  // Simulate button click after player is ready
  const button = document.getElementById('startButton');
  button.click();
  if (button) {
    button.click();
  }
}
document.getElementById('startButton').addEventListener('click', function () {
  console.log('startButton clicked:');
  if (player && typeof player.seekTo === 'function') {
    console.log('Player is ready and seekTo is a function');

    player.seekTo(10, true);
    player.playVideo();
    setTimeout(function () {
      player.unMute();
    }, 4000);
    
    player.playVideo();
    const button = document.getElementById('startButton');
  button.click();
  } else {
    console.error('Player is not ready or seekTo is not a function');
  }
});

document.getElementById('replayButton').addEventListener('click', function () {
  player.seekTo(0);
  player.playVideo();

});
// Ensure DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded and parsed');
  const button = document.getElementById('startButton');
  button.click();
});
