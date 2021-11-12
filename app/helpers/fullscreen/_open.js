/* Function to open fullscreen mode */
function openFullscreen() {
  var fullScreenBody = document.body;
  if (fullScreenBody.requestFullscreen) {
    fullScreenBody.requestFullscreen();
  } else if (fullScreenBody.webkitRequestFullscreen) { /* Safari */
    fullScreenBody.webkitRequestFullscreen();
  } else if (fullScreenBody.msRequestFullscreen) { /* IE11 */
    fullScreenBody.msRequestFullscreen();
  }
}

module.exports = openFullscreen;
