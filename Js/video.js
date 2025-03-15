document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const videoSrc = urlParams.get('videoSrc');
  const videoTitle = urlParams.get('videoTitle');

  if (videoSrc && videoTitle) {
      const mainVideoPlayer = document.getElementById("main-video-player");
      const videoTitleElement = document.getElementById("video-title");

      mainVideoPlayer.src = videoSrc;
      videoTitleElement.textContent = videoTitle;

      mainVideoPlayer.load();
      mainVideoPlayer.play();
  }

  // Toggle vertical navigation bar
  const menuToggle = document.getElementById("menu-toggle");
  const verticalNav = document.getElementById("vertical-nav");

  if (menuToggle && verticalNav) {
      menuToggle.addEventListener("click", function () {
          console.log("Menu toggle clicked!"); // Debugging
          verticalNav.classList.toggle("collapsed");
      });
  } else {
      console.error("Menu toggle or vertical nav not found!");
  }
});

function changeVideo(videoSrc, videoTitle) {
  const mainVideoPlayer = document.getElementById("main-video-player");
  const videoTitleElement = document.getElementById("video-title");

  mainVideoPlayer.src = videoSrc;
  videoTitleElement.textContent = videoTitle;

  mainVideoPlayer.load();
  mainVideoPlayer.play();
}