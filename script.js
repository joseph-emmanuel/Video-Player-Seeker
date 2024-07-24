var startTime = 123;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "330",
    width: "330",
    videoId: "7JQS6H2AXdM",
    events: {
      onReady: onPlayerReady,
    },
  });
}
function onPlayerReady(event) {
  player.mute();
  player.seekTo(startTime);
  player.playVideo();
  // setTimeout(function () {
  //   player.unMute();
  //   player.playVideo();
  // }, 1000);
  player.unMute();
  player.playVideo();
}

document.getElementById("startButton").addEventListener("click", function () {
  
   
  console.log("startButton clicked:");
  player.seekTo(startTime);

player.playVideo();
});

document.getElementById("replayButton").addEventListener("click", function () {
  player.seekTo(0);
  player.playVideo();
});
document.addEventListener('DOMContentLoaded', function() {
  // Your function here
  console.log('DOM fully loaded and parsed');
  const button = document.getElementById('startButton');
  button.click();
});
// window.addEventListener("load", function() {
//     console.log("Page fully loaded");  
//     const button = document.getElementById('startButton');
//     button.click();
// });
