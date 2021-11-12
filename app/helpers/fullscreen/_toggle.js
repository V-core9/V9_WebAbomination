function triggerFullscreen(){
  if (debug.fullScreenMode == true){
      debug.fullScreenMode = false;
      closeFullscreen();
  } else {
      debug.fullScreenMode = true;
      openFullscreen();
  }
}

module.exports = triggerFullscreen;
