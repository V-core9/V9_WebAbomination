/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
  }
}

module.exports = closeFullscreen;
