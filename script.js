var startTime = 123;
var player;

// Ensure the YouTube IFrame API is ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "200",
    width: "200",
    videoId: "tyYP8G2wc_s",
    events: {
      onReady: onPlayerReady,
    },
  });
}

// Called when the player is ready
function onPlayerReady(event) {
  player.mute();
  player.seekTo(startTime);
  player.playVideo();
  // Simulate button click after player is ready
  const button = document.getElementById("startButton");
  button.click();
  if (button) {
    button.click();
  }
}

document.getElementById("startButton").addEventListener("click", function () {
  console.log("startButton clicked:");
  if (player && typeof player.seekTo === "function") {
    console.log("Player is ready and seekTo is a function");
    player.seekTo(startTime, true);
    player.playVideo();
    setTimeout(function () {
      player.unMute();
    }, 0);
    player.playVideo();
    const button = document.getElementById("startButton");
    button.click();
  } else {
    console.error("Player is not ready or seekTo is not a function");
  }
});

document.getElementById("replayButton").addEventListener("click", function () {
  player.seekTo(0);
  player.playVideo();
});
document.getElementById("pauseButton").addEventListener("click", function () {
  player.pauseVideo();
});
document.getElementById("volumeControl").addEventListener("input", function () {
  player.setVolume(volumeControl.value);
  player.playVideo();
});

// Volume buttons
document.getElementById("zeroButton").addEventListener("click", function () {
  player.setVolume(0);
  player.playVideo();
});
document.getElementById("tweneButton").addEventListener("click", function () {
  player.setVolume(25);
  player.playVideo();
});
document.getElementById("fiftyButton").addEventListener("click", function () {
  player.setVolume(50);
  player.playVideo();
});
document.getElementById("sevenButton").addEventListener("click", function () {
  player.setVolume(75);
  player.playVideo();
});
document.getElementById("fullButton").addEventListener("click", function () {
  player.setVolume(100);
  player.playVideo();
});

// Ensure DOM is fully loaded before trying to access elements
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  checkURL();
});
function checkURL() {
  //  add 5sec delay
  setTimeout(() => {
    console.log("delay ran out");
  }, 5000);
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has("key") || urlParams.get("key") !== "123") {
    window.location.href = "https://www.youtube.com";
  } else {
    console.log("key is correct");
    var div = document.getElementById("content");
    div.classList.replace("contentNotVisible", "contentVisible");
  }
}
