document.addEventListener("DOMContentLoaded", function () {
    const videoCards = document.querySelectorAll(".video-card");
  
    videoCards.forEach(card => {
        card.addEventListener("click", function () {
            const videoSrc = card.getAttribute("data-video-src");
            const videoTitle = card.getAttribute("data-video-title");
  
            // Redirect to video.html with query parameters
            window.location.href = `video.html?videoSrc=${encodeURIComponent(videoSrc)}&videoTitle=${encodeURIComponent(videoTitle)}`;
        });
    });
  
    // Toggle vertical navigation bar
    const menuToggle = document.getElementById("menu-toggle");
    const closeNav = document.getElementById("close-nav");
    const verticalNav = document.getElementById("vertical-nav");
  
    menuToggle.addEventListener("click", function () {
        verticalNav.classList.toggle("active");
    });
  
    closeNav.addEventListener("click", function () {
        verticalNav.classList.remove("active");
    });
  
    // Close vertical nav when clicking outside
    document.addEventListener("click", function (event) {
        if (!verticalNav.contains(event.target) && !menuToggle.contains(event.target)) {
            verticalNav.classList.remove("active");
        }
    });
  });