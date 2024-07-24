var startTime = 123;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "",
    width: "",
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
window.addEventListener("load", function() {
    console.log("Page fully loaded");
    // onPlayerReady();
    // player.unMute();
    player.playVideo();
});