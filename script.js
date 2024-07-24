var startTime = 123;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
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
  setTimeout(function () {
    player.unMute();
    player.playVideo();
  }, 100);
}

document.getElementById("startButton").addEventListener("click", function () {
  player.seekTo(startTime);
  player.playVideo();
});

document.getElementById("replayButton").addEventListener("click", function () {
  player.seekTo(0);
  player.playVideo();
});